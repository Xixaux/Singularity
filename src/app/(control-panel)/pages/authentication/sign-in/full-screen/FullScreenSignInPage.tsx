'use client';

import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Link from '@singularity/core/Link';
import _ from 'lodash';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

/**
 * Form Validation Schema
 */
const schema = z.object({
  email: z.string().email('You must enter a valid email').nonempty('You must enter an email'),
  password: z
    .string()
    .min(8, 'Password is too short - must be at least 8 chars.')
    .nonempty('Please enter your password.'),
  remember: z.boolean().optional(),
});

type FormType = z.infer<typeof schema>;

const defaultValues = {
  email: '',
  password: '',
  remember: true,
};

/**
 * The split screen sign in page.
 */
function SplitScreenSignInPage() {
  const { control, formState, handleSubmit, reset } = useForm<FormType>({
    mode: 'onChange',
    defaultValues,
    resolver: zodResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  function onSubmit() {
    reset(defaultValues);
  }

  return (
    <div className="flex min-w-0 flex-auto flex-col items-center sm:flex-row sm:justify-center md:items-start md:justify-start">
      <Paper className="h-full w-full px-4 py-2 ltr:border-r-1 rtl:border-l-1 sm:h-auto sm:w-auto sm:rounded-xl sm:p-12 sm:shadow-sm md:flex md:h-full md:w-1/2 md:items-center md:justify-end md:rounded-none md:p-16 md:shadow-none">
        <div className="mx-auto w-full max-w-80 sm:mx-0 sm:w-80">
          <img className="w-12" src="/assets/images/logo/logo.svg" alt="logo" />

          <Typography className="mt-8 text-4xl font-extrabold leading-[1.25] tracking-tight">
            Sign in
          </Typography>
          <div className="mt-0.5 flex items-baseline font-medium">
            <Typography>Don't have an account?</Typography>
            <Link className="ml-1" to="/sign-up">
              Sign up
            </Link>
          </div>

          <form
            name="loginForm"
            noValidate
            className="mt-8 flex w-full flex-col justify-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-6"
                  label="Email"
                  autoFocus
                  type="email"
                  error={!!errors.email}
                  helperText={errors?.email?.message}
                  variant="outlined"
                  required
                  fullWidth
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-6"
                  label="Password"
                  type="password"
                  error={!!errors.password}
                  helperText={errors?.password?.message}
                  variant="outlined"
                  required
                  fullWidth
                />
              )}
            />

            <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between">
              <Controller
                name="remember"
                control={control}
                render={({ field }) => (
                  <FormControl>
                    <FormControlLabel
                      label="Remember me"
                      control={<Checkbox size="small" {...field} />}
                    />
                  </FormControl>
                )}
              />

              <Link className="text-md font-medium" to="/pages/auth/forgot-password">
                Forgot password?
              </Link>
            </div>

            <Button
              variant="contained"
              color="secondary"
              className="mt-4 w-full"
              aria-label="Sign in"
              disabled={_.isEmpty(dirtyFields) || !isValid}
              type="submit"
              size="large"
            >
              Sign in
            </Button>

            <div className="mt-8 flex items-center">
              <div className="mt-px flex-auto border-t" />
              <Typography className="mx-2" color="text.secondary">
                Or continue with
              </Typography>
              <div className="mt-px flex-auto border-t" />
            </div>

            <div className="mt-8 flex items-center space-x-4">
              <Button variant="outlined" className="flex-auto">
                <SingularitySvgIcon size={20} color="action">
                  feather:facebook
                </SingularitySvgIcon>
              </Button>
              <Button variant="outlined" className="flex-auto">
                <SingularitySvgIcon size={20} color="action">
                  feather:twitter
                </SingularitySvgIcon>
              </Button>
              <Button variant="outlined" className="flex-auto">
                <SingularitySvgIcon size={20} color="action">
                  feather:github
                </SingularitySvgIcon>
              </Button>
            </div>
          </form>
        </div>
      </Paper>

      <Box
        className="relative hidden h-full flex-auto items-center justify-center overflow-hidden p-16 md:flex lg:px-28"
        sx={{ backgroundColor: 'background.paper' }}
      >
        {}
        <svg
          className="pointer-events-none absolute inset-0"
          viewBox="0 0 960 540"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMax slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="opacity-5" fill="none" stroke="currentColor" strokeWidth="20">
            <circle r="10" cx="100" cy="80" />
            <circle r="45" cx="150" cy="200" />
            <circle r="20" cx="220" cy="120" />
            <circle r="50" cx="280" cy="300" />
            <circle r="15" cx="350" cy="400" />
            <circle r="40" cx="400" cy="100" />
            <circle r="25" cx="450" cy="250" />
            <circle r="12" cx="500" cy="450" />
            <circle r="48" cx="550" cy="150" />
            <circle r="30" cx="600" cy="350" />
            <circle r="18" cx="650" cy="90" />
            <circle r="42" cx="700" cy="280" />
            <circle r="10" cx="750" cy="420" />
            <circle r="35" cx="800" cy="180" />
            <circle r="22" cx="850" cy="320" />
            <circle r="50" cx="900" cy="100" />
            <circle r="15" cx="120" cy="400" />
            <circle r="38" cx="180" cy="250" />
            <circle r="12" cx="250" cy="450" />
            <circle r="45" cx="320" cy="150" />
          </g>
        </svg>

        <div className="relative z-10 w-full max-w-4xl">
          <Typography variant="h3" color="text.primary" className="font-bold leading-tight">
            Welcome Back
          </Typography>
          <Typography variant="body1" color="text.secondary" className="mt-4">
            Sign in to access your dashboard and start building.
          </Typography>
        </div>
      </Box>
    </div>
  );
}

export default SplitScreenSignInPage;