'use client';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import PageBreadcrumb from 'src/components/PageBreadcrumb';

/**
 * The FinancialDashboardAppHeader component.
 */
function FinancialDashboardAppHeader() {
    return (
        <div className="flex w-full container">
            <div className="flex flex-col sm:flex-row flex-auto sm:items-center min-w-0 p-6 md:p-8 pb-0 md:pb-0">
                <div className="flex flex-col flex-auto">
                    <PageBreadcrumb className="mb-2" />
                    <Typography className="text-3xl font-semibold tracking-tight leading-8">
                        Financial dashboard
                    </Typography>
                    <Typography
                        className="font-medium tracking-tight"
                        color="text.secondary"
                    >
                        Keep track of your financial status
                    </Typography>
                </div>
                <div className="flex items-center mt-6 sm:mt-0 sm:mx-2 space-x-2">
                    <Button
                        className="whitespace-nowrap"
                        startIcon={<SingularitySvgIcon size={20}>heroicons-solid:document-chart-bar</SingularitySvgIcon>}
                        variant="contained"
                        color="primary"
                    >
                        Reports
                    </Button>
                    <Button
                        className="whitespace-nowrap"
                        variant="contained"
                        color="primary"
                        startIcon={<SingularitySvgIcon size={20}>heroicons-solid:arrow-up-tray</SingularitySvgIcon>}
                    >
                        Export
                    </Button>
                    <Button
                        className="whitespace-nowrap"
                        startIcon={<SingularitySvgIcon size={20}>heroicons-solid:cog-6-tooth</SingularitySvgIcon>}
                        variant="contained"
                        color="secondary"
                    >
                        Settings
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default FinancialDashboardAppHeader;