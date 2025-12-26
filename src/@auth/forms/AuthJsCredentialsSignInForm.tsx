import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { z } from 'zod';
import _ from 'lodash';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@singularity/core/Link';
import Button from '@mui/material/Button';
import { signIn } from 'next-auth/react';
import { Alert } from '@mui/material';
import signinErrors from './signinErrors';
import mockDb from '../../@mock-utils/mockDb.json';

const schema = z.object({
  email: z.string().email('Invalid email').nonempty('Email required'),
  password: z.string().min(4, 'Password must be at least 4 chars').nonempty('Password required'),
  remember: z.boolean().optional(),
});

type FormType = z.infer<typeof schema>;

const defaultValues = {
  email: '',
  password: '',
  remember: true,
};

function AuthJsCredentialsSignInForm() {
  const { control, formState, handleSubmit, setValue, setError } = useForm<FormType>({
    mode: 'onChange',
    defaultValues,
    resolver: zodResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  useEffect(() => {
    // Load credentials from mockDb.json
    const { email, password } = mockDb.users?.[0] || {};
    if (email && password) {
      setValue('email', email, { shouldDirty: true, shouldValidate: true });
      setValue('password', password, { shouldDirty: true, shouldValidate: true });
    } else {
      console.warn('No valid credentials in mockDb.json');
    }

    // Fallback to localStorage
    const storedEmail = localStorage.getItem('email');
    if (storedEmail && !email) {
      setValue('email', storedEmail, { shouldDirty: true, shouldValidate: true });
      setValue('remember', localStorage.getItem('remember') === 'true', { shouldDirty: true });
    }

    // Fallback to Credential Management API
    if (navigator.credentials && !email && !password) {
      navigator.credentials
        .get({ password: true })
        .then((credential) => {
          if (credential?.type === 'password') {
            setValue('email', credential.id, { shouldDirty: true, shouldValidate: true });
            setValue('password', credential.password, { shouldDirty: true, shouldValidate: true });
          }
        })
        .catch((err) => console.error('Credential API error:', err));
    }
  }, [setValue]);

  async function onSubmit(formData: FormType) {
    const { email, password, remember } = formData;
    const result = await signIn('credentials', {
      email,
      password,
      formType: 'signin',
      redirect: false,
    });

    if (result?.error) {
      setError('root', { type: 'manual', message: signinErrors[result.error] });
      return false;
    }

    if (remember) {
      localStorage.setItem('email', email);
      localStorage.setItem('remember', 'true');
      if (navigator.credentials) {
        navigator.credentials
          .store(new PasswordCredential({ id: email, password, name: 'User' }))
          .catch((err) => console.error('Error storing credentials:', err));
      }
    } else {
      localStorage.removeItem('email');
      localStorage.removeItem('remember');
    }

    return true;
  }

  return (
    <form
      name="loginForm"
      noValidate
      className="mt-8 flex w-full flex-col justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      {errors?.root?.message && (
        <Alert
          className="mb-8"
          severity="error"
          sx={(theme) => ({
            backgroundColor: theme.palette.error.light,
            color: theme.palette.error.dark,
          })}
        >
          {errors?.root?.message}
        </Alert>
      )}
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
            name="username"
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
            name="password"
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
              <FormControlLabel label="Remember me" control={<Checkbox size="small" {...field} />} />
            </FormControl>
          )}
        />
        <Link className="text-md font-medium" to="/#">
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
    </form>
  );
}

export default AuthJsCredentialsSignInForm;