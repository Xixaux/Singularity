'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import clsx from 'clsx';
import Chip from '@mui/material/Chip';
import SendIcon from '@mui/icons-material/Send';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import BasicFormLayoutsFeatureItem from './BasicFormLayoutsFeatureItem';
import BasicFormLayoutsItemType from './BasicFormLayoutsItemType';

type BasicFormLayoutsCardProps = {
  title: string;
  subtitle: string;
  isPopular?: boolean;
  features: { id: number; text: string }[];
  className?: string;
};

/**
 * The modern form card component.
 */
function BasicFormLayoutsCard(props: BasicFormLayoutsCardProps) {
  const {
    title = '',
    subtitle = '',
    isPopular = false,
    features = [],
    className = '',
  } = props;

  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BasicFormLayoutsItemType>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
      reason: '',
      contactMethod: '',
      agreeTerms: false,
      callbackDate: null,
    },
  });

  const onSubmit: SubmitHandler<BasicFormLayoutsItemType> = (data) => {
    console.log('Form submitted:', data);
    setSubmitStatus('Form submitted successfully!');
    reset();
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  const isAdvanced = title === 'Advanced Contact Form';

  return (
    <Paper
      className={clsx(
        'relative max-w-sm flex-col p-6 sm:px-10 sm:py-12 md:max-w-none',
        isPopular && '',
        className,
      )}
      sx={[
        isPopular &&
          ((theme) => ({
            border: `1px solid ${theme.vars.palette.secondary.main}`,
          })),
      ]}
    >
      {isPopular && (
        <div className="absolute inset-x-0 -top-4 flex items-center justify-center">
          <Chip
            label="POPULAR"
            color="secondary"
            className="flex h-8 items-center rounded-full px-8 text-center font-medium leading-none"
          />
        </div>
      )}
      <Typography className="text-4xl font-bold leading-[1.25] tracking-tight">{title}</Typography>
      <Typography className="mt-2 text-lg font-medium tracking-tight" color="text.secondary">
        {subtitle}
      </Typography>
      <Divider className="bg-accent my-10 h-1 w-8 rounded-sm" />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <TextField
            fullWidth
            label="Name"
            {...register('name', { required: 'Name is required' })}
            error={!!errors.name}
            helperText={errors.name?.message}
            variant="outlined"
            className="w-full"
          />
        </div>
        <div>
          <TextField
            fullWidth
            label="Email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Invalid email address',
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
            variant="outlined"
            className="w-full"
          />
        </div>
        {isAdvanced && (
          <div>
            <FormControl fullWidth>
              <InputLabel>Contact Reason</InputLabel>
              <Select
                {...register('reason', { required: 'Contact reason is required' })}
                error={!!errors.reason}
                label="Contact Reason"
                defaultValue=""
              >
                <MenuItem value="support">Support</MenuItem>
                <MenuItem value="sales">Sales</MenuItem>
                <MenuItem value="feedback">Feedback</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
              {errors.reason && (
                <Typography variant="caption" color="error" className="mt-1">
                  {errors.reason.message}
                </Typography>
              )}
            </FormControl>
          </div>
        )}
        <div>
          <TextField
            fullWidth
            label="Message"
            {...register('message', { required: 'Message is required' })}
            error={!!errors.message}
            helperText={errors.message?.message}
            variant="outlined"
            multiline
            rows={4}
            className="w-full"
          />
        </div>
        {isAdvanced && (
          <>
            <div>
              <FormControl component="fieldset">
                <Typography className="font-medium mb-2">Preferred Contact Method</Typography>
                <RadioGroup
                  {...register('contactMethod', { required: 'Contact method is required' })}
                  row
                >
                  <FormControlLabel value="email" control={<Radio />} label="Email" />
                  <FormControlLabel value="phone" control={<Radio />} label="Phone" />
                </RadioGroup>
                {errors.contactMethod && (
                  <Typography variant="caption" color="error" className="mt-1">
                    {errors.contactMethod.message}
                  </Typography>
                )}
              </FormControl>
            </div>
            <div>
              <DatePicker
                label="Callback Date"
                {...register('callbackDate', { required: 'Callback date is required' })}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    error: !!errors.callbackDate,
                    helperText: errors.callbackDate?.message,
                  },
                }}
              />
            </div>
            <div>
              <FormControlLabel
                control={
                  <Checkbox
                    {...register('agreeTerms', {
                      required: 'You must agree to the terms',
                    })}
                  />
                }
                label="I agree to the terms and conditions"
              />
              {errors.agreeTerms && (
                <Typography variant="caption" color="error" className="mt-1">
                  {errors.agreeTerms.message}
                </Typography>
              )}
            </div>
          </>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          endIcon={<SendIcon />}
          className="w-full"
        >
          Submit
        </Button>
        {submitStatus && (
          <Typography variant="body2" className="text-center text-green-600">
            {submitStatus}
          </Typography>
        )}
      </form>
      <div className="mt-6 flex flex-col">
        <Typography className="font-semibold mb-2">Form Features:</Typography>
        <div className="space-y-2">
          {features.map((feature) => (
            <BasicFormLayoutsFeatureItem key={feature.id} text={feature.text} />
          ))}
        </div>
      </div>
    </Paper>
  );
}

export default BasicFormLayoutsCard;