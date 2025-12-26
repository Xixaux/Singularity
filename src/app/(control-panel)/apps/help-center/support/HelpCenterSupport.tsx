'use client';

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Controller, useForm } from 'react-hook-form';
import _ from 'lodash';
import TextField from '@mui/material/TextField';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import PageBreadcrumb from 'src/components/PageBreadcrumb';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

// Enhanced Form Validation Schema
const schema = z.object({
  name: z
    .string()
    .nonempty('You must enter a name')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters')
    .regex(/^[a-zA-Z\s]*$/, 'Name can only contain letters and spaces'),
  email: z
    .string()
    .email('You must enter a valid email')
    .nonempty('You must enter an email')
    .max(100, 'Email cannot exceed 100 characters'),
  subject: z
    .string()
    .nonempty('You must enter a subject')
    .min(5, 'Subject must be at least 5 characters')
    .max(100, 'Subject cannot exceed 100 characters'),
  message: z
    .string()
    .nonempty('You must enter a message')
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message cannot exceed 500 characters'),
});

type FormType = z.infer<typeof schema>;

const defaultValues = { name: '', email: '', subject: '', message: '' };

/**
 * The enhanced help center support form.
 */
function HelpCenterSupport() {
  const theme = useTheme();
  const { control, handleSubmit, reset, formState } = useForm<FormType>({
    mode: 'onChange',
    defaultValues,
    resolver: zodResolver(schema),
  });
  const { isValid, dirtyFields, errors } = formState;
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  async function onSubmit(data: FormType) {
    setLoading(true);
    setSubmitStatus('idle');
    try {
      // Placeholder POST request to a mock API
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Submission failed');
      console.log('Form submitted:', data);
      setSubmitStatus('success');
      reset(defaultValues);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center p-6 sm:p-10 container">
      <div className="flex flex-col w-full max-w-6xl">
        <div className="sm:mt-8">
          <PageBreadcrumb />
        </div>
        <div className="mt-2 text-[1.75rem] font-extrabold tracking-tight leading-[1.25]">
          Contact Support
        </div>

        <Paper
          className="mt-8 sm:mt-12 p-6 sm:p-10 rounded-2xl"
          sx={{
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            backgroundColor: theme.palette.background.paper,
            border: `1px solid ${theme.palette.divider}`,
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="px-0 sm:px-6">
            <div className="mb-8">
              <Typography
                variant="h5"
                sx={{ fontWeight: 'bold', color: theme.palette.text.primary }}
              >
                Submit Your Request
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.secondary, mt: 1 }}
              >
                Our support team will respond within 24 hours.
              </Typography>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Controller
                control={control}
                name="name"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Name"
                    placeholder="Enter your name"
                    variant="outlined"
                    fullWidth
                    error={!!errors.name}
                    helperText={errors?.name?.message}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                        backgroundColor: theme.palette.background.default,
                        '& fieldset': {
                          borderWidth: '2px',
                          borderColor: theme.palette.secondary.main,
                        },
                        '&:hover fieldset': {
                          borderWidth: '2px',
                          borderColor: theme.palette.secondary.main,
                        },
                        '&.Mui-focused fieldset': {
                          borderWidth: '2px',
                          borderColor: theme.palette.secondary.main,
                        },
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
                name="email"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    placeholder="Enter your email"
                    variant="outlined"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                        backgroundColor: theme.palette.background.default,
                        '& fieldset': {
                          borderWidth: '2px',
                          borderColor: theme.palette.secondary.main,
                        },
                        '&:hover fieldset': {
                          borderWidth: '2px',
                          borderColor: theme.palette.secondary.main,
                        },
                        '&.Mui-focused fieldset': {
                          borderWidth: '2px',
                          borderColor: theme.palette.secondary.main,
                        },
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
                name="subject"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Subject"
                    placeholder="Enter the subject"
                    variant="outlined"
                    fullWidth
                    error={!!errors.subject}
                    helperText={errors?.subject?.message}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                        backgroundColor: theme.palette.background.default,
                        '& fieldset': {
                          borderWidth: '2px',
                          borderColor: theme.palette.secondary.main,
                        },
                        '&:hover fieldset': {
                          borderWidth: '2px',
                          borderColor: theme.palette.secondary.main,
                        },
                        '&.Mui-focused fieldset': {
                          borderWidth: '2px',
                          borderColor: theme.palette.secondary.main,
                        },
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
                name="message"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Message"
                    placeholder="Enter your message"
                    variant="outlined"
                    fullWidth
                    multiline
                    minRows={4}
                    error={!!errors.message}
                    helperText={errors?.message?.message}
                    required
                    sx={{
                      gridColumn: '1 / -1',
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                        backgroundColor: theme.palette.background.default,
                        '& fieldset': {
                          borderWidth: '2px',
                          borderColor: theme.palette.secondary.main,
                        },
                        '&:hover fieldset': {
                          borderWidth: '2px',
                          borderColor: theme.palette.secondary.main,
                        },
                        '&.Mui-focused fieldset': {
                          borderWidth: '2px',
                          borderColor: theme.palette.secondary.main,
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: theme.palette.text.secondary,
                      },
                    }}
                  />
                )}
              />
            </div>
            {submitStatus === 'success' && (
              <Alert severity="success" sx={{ mt: 4 }}>
                Your request has been submitted successfully!
              </Alert>
            )}
            {submitStatus === 'error' && (
              <Alert severity="error" sx={{ mt: 4 }}>
                Failed to submit your request. Please try again.
              </Alert>
            )}
            <div className="flex items-center justify-end mt-8 gap-4">
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => reset(defaultValues)}
                disabled={loading}
                sx={{
                  borderWidth: '2px',
                  borderColor: theme.palette.secondary.main,
                  '&:hover': {
                    borderWidth: '2px',
                    borderColor: theme.palette.secondary.main,
                  },
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={_.isEmpty(dirtyFields) || !isValid || loading}
                startIcon={loading ? <CircularProgress size={20} /> : null}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </Button>
            </div>
          </form>
        </Paper>
      </div>
    </div>
  );
}

export default HelpCenterSupport;