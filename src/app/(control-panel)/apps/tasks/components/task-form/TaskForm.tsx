'use client';

import Button from '@mui/material/Button';
import SingularityNavLink from '@singularity/core/SingularityNavLink';
import { useAppDispatch } from 'src/store/hooks';
import { useEffect } from 'react';
import SingularityLoading from '@singularity/core/SingularityLoading';
import _ from 'lodash';
import { Controller, useForm } from 'react-hook-form';
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import IconButton from '@mui/material/IconButton';
import { useDeepCompareEffect } from '@singularity/hooks';
import { showMessage } from '@singularity/core/SingularityMessage/singularityMessageSlice';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';
import useNavigate from '@singularity/hooks/useNavigate';
import TaskPrioritySelector from './TaskPrioritySelector';
import FormActionsMenu from './FormActionsMenu';
import {
  Tag,
  Task,
  useCreateTasksItemMutation,
  useGetTasksItemQuery,
  useGetTasksTagsQuery,
  useUpdateTasksItemMutation,
} from '../../TasksApi';
import SectionModel from '../../models/SectionModel';
import TaskModel from '../../models/TaskModel';
import { subTaskModel } from '../../models/TaskModel';
import { Circle, CircleOutlined, Close, Notes } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

/**
 * Form Validation Schema
 */
const subTaskSchema = z.object({
  id: z.string().nonempty(),
  title: z.string().nonempty(),
  completed: z.boolean(),
});

const schema = z.object({
  id: z.string().optional(),
  type: z.string().nonempty(),
  title: z.string().nonempty('You must enter a title'),
  notes: z.string().nullable().optional(),
  completed: z.boolean(),
  dueDate: z.string().nullable().optional(),
  priority: z.number(),
  tags: z.array(z.string()),
  assignedTo: z.string().nullable().optional(),
  subTasks: z.array(subTaskSchema).optional(),
  order: z.number(),
});

type FormType = z.infer<typeof schema>;

/**
 * The task form.
 */
function TaskForm() {
  const routeParams = useParams<{ taskId: string; newTaskType: 'section' | 'task' }>();
  const taskId = routeParams?.taskId;
  const newTaskType = routeParams?.newTaskType;
  const isNew = taskId === 'new';
  const theme = useTheme();

  const { data: task, isError } = useGetTasksItemQuery(taskId, {
    skip: !taskId || isNew,
  });

  const { data: tags } = useGetTasksTagsQuery();

  const [updateTask] = useUpdateTasksItemMutation();
  const [createTask] = useCreateTasksItemMutation();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { control, watch, reset, handleSubmit, formState } = useForm<FormType>({
    mode: 'onChange',
    resolver: zodResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  const form = watch();

  useDeepCompareEffect(() => {
    if (!(!isValid || _.isEmpty(form) || !task || isNew) && !_.isEqual(task, form)) {
      onSubmit(form);
    }
  }, [form, isValid]);

  useEffect(() => {
    if (isNew) {
      if (newTaskType === 'section') {
        reset(SectionModel({}));
      }
      if (newTaskType === 'task') {
        reset(TaskModel({}));
      }
    } else {
      reset({ ...task });
    }
  }, [task, reset, taskId, newTaskType]);

  function onSubmit(data: FormType) {
    updateTask(
      TaskModel({
        ...data,
        title: data.title,
        subTasks: data.subTasks?.map((subTask) => subTaskModel(subTask)),
      }),
    );
  }

  function onSubmitNew(data: Task) {
    createTask(data)
      .unwrap()
      .then((newTask) => {
        navigate(`/apps/tasks/${newTask?.id}`);
      })
      .catch((rejected) => {
        dispatch(showMessage({ message: `Error creating task item ${rejected}`, variant: 'error' }));
      });
  }

  if (isError && taskId !== 'new') {
    setTimeout(() => {
      navigate('/apps/tasks');
      dispatch(showMessage({ message: 'NOT FOUND' }));
    }, 0);
    return null;
  }

  if (_.isEmpty(form)) {
    return <SingularityLoading />;
  }

  return (
    <>
      <div className="relative flex flex-col flex-auto items-center px-6 sm:px-12">
        <div className="flex items-center justify-between border-b-1 w-full py-6 mt-4 mb-8">
          <Controller
            control={control}
            name="completed"
            render={({ field: { value, onChange } }) => (
              <Button
                className="font-semibold"
                onClick={() => onChange(!value)}
              >
                <Box
                  sx={[
                    value
                      ? {
                          color: form.priority === 0 ? 'success.main' : form.priority === 1 ? 'info.main' : form.priority === 2 ? 'error.main' : 'secondary.main',
                        }
                      : {
                          color: form.priority === 0 ? 'success.main' : form.priority === 1 ? 'info.main' : form.priority === 2 ? 'error.main' : 'text.disabled',
                        },
                  ]}
                >
                  {value ? (
                    <Circle sx={{ fontSize: 20 }} />
                  ) : (
                    <CircleOutlined sx={{ fontSize: 20 }} />
                  )}
                </Box>
                <span className="mx-2">
                  {form.completed ? 'MARK AS INCOMPLETE' : 'MARK AS COMPLETE'}
                </span>
              </Button>
            )}
          />
          <div className="flex items-center">
            {!isNew && <FormActionsMenu taskId={task?.id} />}
            <IconButton
              component={SingularityNavLink}
              to="/apps/tasks"
              size="large"
            >
              <Close sx={{ color: theme.palette.text.secondary, fontSize: 20 }} />
            </IconButton>
          </div>
        </div>
        <Controller
          control={control}
          name="title"
          render={({ field }) => (
            <TextField
              className="mt-8 max-h-auto"
              {...field}
              label={`${_.upperFirst(form.type)} title`}
              placeholder="Job title"
              id="title"
              error={!!errors.title}
              helperText={errors?.title?.message}
              variant="outlined"
              fullWidth
              multiline
              minRows={3}
              maxRows={10}
              sx={{
                '& .MuiInputBase-root': {
                  backgroundColor: theme.palette.background.default,
                },
                '& .MuiInputLabel-root': {
                  color: theme.palette.text.secondary,
                },
              }}
            />
          )}
        />
        <Controller
          control={control}
          name="tags"
          render={({ field: { onChange, value } }) => (
            <Autocomplete
              multiple
              id="tags"
              className="mt-8"
              options={tags || []}
              disableCloseOnSelect
              getOptionLabel={(option: Tag) => option?.title}
              renderOption={(_props, option: Tag, { selected }) => (
                <li {..._props}>
                  <Checkbox
                    style={{ marginRight: 8 }}
                    checked={selected}
                    sx={{
                      '& .MuiSvgIcon-root': {
                        backgroundColor: selected ? theme.palette.secondary.main : 'transparent',
                        color: selected ? theme.palette.common.white : theme.palette.grey[500],
                        borderRadius: '4px',
                        p: selected ? '4px' : '0',
                      },
                    }}
                  />
                  {option?.title}
                </li>
              )}
              value={value ? value.map((id) => _.find(tags, { id })) : []}
              onChange={(event, newValue) => {
                onChange(newValue.map((item: Tag) => item.id));
              }}
              fullWidth
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Tags"
                  placeholder="Tags"
                  sx={{
                    '& .MuiInputBase-root': {
                      backgroundColor: theme.palette.background.default,
                    },
                    '& .MuiInputLabel-root': {
                      color: theme.palette.text.secondary,
                    },
                  }}
                />
              )}
            />
          )}
        />
        <div className="flex w-full space-x-4 mt-8 mb-4 items-center">
          <Controller
            control={control}
            name="priority"
            render={({ field }) => <TaskPrioritySelector {...field} />}
          />
          <Controller
            control={control}
            name="dueDate"
            render={({ field: { value, onChange } }) => (
              <DateTimePicker
                className="w-full"
                value={value ? new Date(value) : null}
                onChange={(val) => {
                  onChange(val ? val.toISOString() : null);
                }}
                slotProps={{
                  textField: {
                    id: 'due-date',
                    label: 'Due date',
                    InputLabelProps: {
                      shrink: true,
                    },
                    fullWidth: true,
                    variant: 'outlined',
                    sx: {
                      '& .MuiInputBase-root': {
                        backgroundColor: theme.palette.background.default,
                      },
                      '& .MuiInputLabel-root': {
                        color: theme.palette.text.secondary,
                      },
                    },
                  },
                  actionBar: {
                    actions: ['clear', 'today'],
                  },
                }}
              />
            )}
          />
        </div>
        <Controller
          control={control}
          name="notes"
          render={({ field }) => (
            <TextField
              className="mt-8"
              {...field}
              label="Notes"
              placeholder="Notes"
              id="notes"
              error={!!errors.notes}
              helperText={errors?.notes?.message}
              variant="outlined"
              fullWidth
              multiline
              minRows={5}
              maxRows={10}
              slotProps={{
                input: {
                  className: 'max-h-min h-min items-start',
                  startAdornment: (
                    <InputAdornment className="mt-4" position="start">
                      <Notes sx={{ color: theme.palette.text.primary, fontSize: 20 }} />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                '& .MuiInputBase-root': {
                  backgroundColor: theme.palette.background.default,
                },
                '& .MuiInputLabel-root': {
                  color: theme.palette.text.secondary,
                },
              }}
            />
          )}
        />
      </div>
      {isNew && (
        <Box
          className="flex items-center mt-10 py-3.5 pr-4 pl-1 sm:pr-12 sm:pl-9 border-t"
          sx={{ backgroundColor: theme.palette.background.default }}
        >
          <Button
            onClick={() => {
              navigate(-1);
            }}
            className="ml-auto"
          >
            Cancel
          </Button>
          <Button
            className="ml-2"
            variant="contained"
            color="secondary"
            disabled={_.isEmpty(dirtyFields) || !isValid}
            onClick={handleSubmit(onSubmitNew)}
          >
            Create
          </Button>
        </Box>
      )}
    </>
  );
}

export default TaskForm;