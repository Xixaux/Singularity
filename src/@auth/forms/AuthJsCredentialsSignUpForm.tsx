"use client";

import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
    email: yup.string().email('You must enter a valid email.').required('You must enter an email.'),
    password: yup
        .string()
        .required('Please enter your password.')
        .min(4, 'Password is too short - must be at least 4 chars.'),
});

function AuthJsCredentialsSignInForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/';
    const [errorMessage, setErrorMessage] = useState('');

    const {
        control,
        handleSubmit,
        formState: { isValid, isDirty, isSubmitting },
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
        defaultValues: {
            email: 'admin@singularitythemes.com',
            password: 'admin',
        },
    });

    /**
     * Handle form submission
     */
    const onSubmit = async ({ email, password }) => {
        setErrorMessage('');
        const result = await signIn('credentials', {
            email,
            password,
            formType: 'signin',
            callbackUrl: '/dashboards/control-panel',
            redirect: false, // Prevent automatic redirection to handle errors
        });

        if (result?.error) {
            setErrorMessage('Invalid username or password.');
        } else {
            router.push(callbackUrl); // Manually redirect on success
        }
    };

    return (
        <div className="flex flex-col items-center">
            <Typography variant="h4" className="mb-4">
                Sign In
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <Controller
                    name="email"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <TextField
                            {...field}
                            label="Email"
                            type="email"
                            fullWidth
                            className="mb-4"
                            error={!!error}
                            helperText={error?.message}
                        />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                        <TextField
                            {...field}
                            label="Password"
                            type="password"
                            fullWidth
                            className="mb-4"
                            error={!!error}
                            helperText={error?.message}
                        />
                    )}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    className="mb-4"
                >
                    Sign In
                </Button>
                {errorMessage && (
                    <Typography color="error" className="text-center">
                        {errorMessage}
                    </Typography>
                )}
            </form>
            <Link href="/auth/sign-up" className="mt-4">
                Don&apos;t have an account? Sign Up
            </Link>
        </div>
    );
}

export default AuthJsCredentialsSignInForm;