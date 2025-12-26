import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';

/**
 * The single pricing card component.
 */
function SinglePricingCard() {
    return (
        <Paper className="flex max-w-sm flex-col overflow-hidden lg:max-w-5xl lg:flex-row">
            <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        id="fi_17523528"
                        className="mr-2"
                    >
                        <path
                            d="M9.38826 9.43445C8.61087 8.40962 7.38261 7.75 6 7.75C3.65279 7.75 1.75 9.65279 1.75 12C1.75 14.3472 3.65279 16.25 6 16.25C7.3827 16.25 8.61115 15.5905 9.38849 14.5657L10.1256 13.4599L11.3737 14.2919L10.6244 15.416C10.6166 15.4277 10.6085 15.4392 10.6 15.4504C9.55227 16.8454 7.88167 17.75 6 17.75C2.82436 17.75 0.25 15.1756 0.25 12C0.25 8.82436 2.82436 6.25 6 6.25C7.625 6.25 9.09233 6.9248 10.1372 8.00719L10.2081 7.95995L10.6125 8.56661L11.0501 9.1492L11.0173 9.17386L14.6115 14.5657C15.3889 15.5905 16.6173 16.25 18 16.25C20.3472 16.25 22.25 14.3472 22.25 12C22.25 9.65279 20.3472 7.75 18 7.75C16.619 7.75 15.3919 8.4079 14.6144 9.43049L13.9581 10.4151L12.71 9.58306L12.9826 9.17407L12.9495 9.14924L13.3904 8.56229L13.7919 7.95995L13.8626 8.00703C14.9075 6.92463 16.3751 6.25 18 6.25C21.1757 6.25 23.75 8.82436 23.75 12C23.75 15.1756 21.1757 17.75 18 17.75C16.1183 17.75 14.4477 16.8454 13.4 15.4504C13.3915 15.4392 13.3834 15.4277 13.3756 15.416L9.38826 9.43445Z"
                            fill="#1775FC"
                            style={{ fill: 'color(display-p3 0.0902 0.4588 0.9882)', fillOpacity: 1 }}
                        />
                    </svg>
                    <Typography className="text-3xl font-bold">Lifetime Membership</Typography>
                </div>

                <Typography
                    className="mt-2 leading-[1.625]"
                    color="text.secondary"
                >
                    Learn from like-minded individuals which are eager to make a living building stuff on the web. Pay
                    once and get lifetime access to the community.
                </Typography>

                <div className="mt-10 flex items-center">
                    <Typography
                        className="font-medium"
                        color="text.secondary"
                    >
                        INCLUDED FEATURES
                    </Typography>
                    <Divider className="ml-2 flex-auto" />
                </div>

                <div className="mt-6 grid grid-cols-1 gap-y-4 lg:grid-cols-2">
                    <div className="flex items-center">
                        <SingularitySvgIcon
                            size={20}
                            color="secondary"
                        >
                            heroicons-solid:check-circle
                        </SingularitySvgIcon>
                        <div className="ml-2">Private forum access</div>
                    </div>
                    <div className="flex items-center">
                        <SingularitySvgIcon
                            size={20}
                            color="secondary"
                        >
                            heroicons-solid:check-circle
                        </SingularitySvgIcon>
                        <div className="ml-2">Access to annual online conference</div>
                    </div>
                    <div className="flex items-center">
                        <SingularitySvgIcon
                            size={20}
                            color="secondary"
                        >
                            heroicons-solid:check-circle
                        </SingularitySvgIcon>
                        <div className="ml-2">Member resources</div>
                    </div>
                    <div className="flex items-center">
                        <SingularitySvgIcon
                            size={20}
                            color="secondary"
                        >
                            heroicons-solid:check-circle
                        </SingularitySvgIcon>
                        <div className="ml-2">Official member T-Shirt</div>
                    </div>
                    <div className="flex items-center">
                        <SingularitySvgIcon
                            size={20}
                            color="secondary"
                        >
                            heroicons-solid:check-circle
                        </SingularitySvgIcon>
                        <div className="ml-2">Exclusive webinars</div>
                    </div>
                    <div className="flex items-center">
                        <SingularitySvgIcon
                            size={20}
                            color="secondary"
                        >
                            heroicons-solid:check-circle
                        </SingularitySvgIcon>
                        <div className="ml-2">Priority support</div>
                    </div>
                </div>
            </div>

            <Box
                sx={{ backgroundColor: 'primary.dark', color: 'primary.contrastText' }}
                className="flex flex-col items-center p-2 lg:min-w-80 lg:px-10 lg:py-12"
            >
                <div className="flex items-center whitespace-nowrap">
                    <Typography
                        className="text-10xl font-extrabold tracking-tight"
                        color="primary.contrastText"
                    >
                        $599
                    </Typography>
                    <Typography
                        className="ml-0.5 text-2xl font-semibold"
                        color="primary.contrastText"
                    >
                        USD
                    </Typography>
                </div>
                <Typography
                    className="text-center font-medium"
                    color="primary.contrastText"
                >
                    No monthly subscription,
                    <br />
                    you only pay once.
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    className="mt-8 w-full lg:mt-auto"
                >
                    Get Started
                </Button>
            </Box>
        </Paper>
    );
}

export default SinglePricingCard;