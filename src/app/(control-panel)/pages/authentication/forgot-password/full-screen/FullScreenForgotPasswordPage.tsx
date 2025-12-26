'use client';

import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Link from '@singularity/core/Link';
import _ from 'lodash';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
// Import useTheme to access the theme object
import { useTheme } from '@mui/material/styles'; 

/**
 * Form Validation Schema
 */
const schema = z.object({
    email: z.string().email('You must enter a valid email').nonempty('You must enter an email'),
});

const defaultValues = {
    email: '',
};

/**
 * The full screen forgot password page.
 */
function FullScreenForgotPasswordPage() {
    // Call useTheme hook to get the theme object
    const theme = useTheme(); 

    const { control, formState, handleSubmit, reset } = useForm({
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
            <Paper className="h-full w-full px-4 py-8 ltr:border-r-1 rtl:border-l-1 sm:h-auto sm:w-auto sm:rounded-xl sm:p-12 sm:shadow-sm md:flex md:h-full md:justify-end md:rounded-none md:p-16 md:pt-24 md:shadow-none">
                <div className="mx-auto w-full max-w-80 sm:mx-0 sm:w-80">
                    <img className="w-12" src="/assets/images/logo/logo.svg" alt="logo" />

                    <Typography className="mt-8 text-4xl font-extrabold leading-[1.25] tracking-tight">
                        Forgot password?
                    </Typography>
                    <div className="mt-0.5 flex items-baseline font-medium">
                        <Typography>Fill the form to reset your password</Typography>
                    </div>

                    <form
                        name="registerForm"
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
                                    type="email"
                                    error={!!errors.email}
                                    helperText={errors?.email?.message}
                                    variant="outlined"
                                    required
                                    fullWidth
                                />
                            )}
                        />

                        <Button
                            variant="contained"
                            color="secondary"
                            className="mt-1 w-full"
                            aria-label="Register"
                            disabled={_.isEmpty(dirtyFields) || !isValid}
                            type="submit"
                            size="large"
                        >
                            Send reset link
                        </Button>

                        <Typography className="mt-8 text-md font-medium" color="text.secondary">
                            <span>Return to</span>
                            <Link className="ml-1" to="/sign-in">
                                sign in
                            </Link>
                        </Typography>
                    </form>
                </div>
            </Paper>

            <Box
                className="relative hidden h-full flex-auto items-center justify-center overflow-hidden p-16 md:flex lg:px-28"
                sx={{ backgroundColor: 'secondary.dark', color: 'primary.contrastText' }}
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

                {}
                <Box
                    component="svg"
                    className="absolute -right-16 -top-16 opacity-20"
                    sx={{ color: theme.palette.common.white }} 
                    viewBox="0 0 220 192"
                    width="220px"
                    height="192px"
                    fill="none"
                >
                    <defs>
                        <pattern
                            id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                            x="0"
                            y="0"
                            width="20"
                            height="20"
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x="0" y="0" width="4" height="4" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect
                        width="220"
                        height="192"
                        fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                    />
                </Box>

                <div className="relative z-10 w-full max-w-4xl">
                    <div className="text-7xl font-bold leading-none text-gray-100">
                        <div>Enjoy the</div>
                        <div>singularity</div>
                    </div>
                    <div className="mt-6 text-lg leading-6 tracking-tight text-white">
                        Singularity enables developers to design professionally coded dashboards with intuitive, sleek modules. Start
                        creating your application seamlessly today.
                    </div>
                    <div className="mt-8 flex items-center">
                        <AvatarGroup
                            sx={{
                                '& .MuiAvatar-root': {
                                    borderColor: 'primary.main',
                                },
                            }}
                        >
                            <Avatar src="/assets/images/avatars/female-18.jpg" />
                            <Avatar src="/assets/images/avatars/female-11.jpg" />
                            <Avatar src="/assets/images/avatars/male-09.jpg" />
                            <Avatar src="/assets/images/avatars/male-16.jpg" />
                        </AvatarGroup>

                        <div className="ml-4 font-medium tracking-tight text-white">
                            Join the vast community of professionals using the fastest growing React theme on the market.
                        </div>
                    </div>
                </div>
            </Box>
        </div>
    );
}

export default FullScreenForgotPasswordPage;