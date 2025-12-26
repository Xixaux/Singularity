// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client';

import SingularityExample from '@singularity/core/SingularityExample';
import SingularityHighlight from '@singularity/core/SingularityHighlight';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicPaginationComponent from '../../components/pagination/BasicPagination';
import BasicPaginationRaw from '../../components/pagination/BasicPagination.tsx?raw';
import PaginationOutlinedComponent from '../../components/pagination/PaginationOutlined';
import PaginationOutlinedRaw from '../../components/pagination/PaginationOutlined.tsx?raw';
import PaginationRoundedComponent from '../../components/pagination/PaginationRounded';
import PaginationRoundedRaw from '../../components/pagination/PaginationRounded.tsx?raw';
import PaginationSizeComponent from '../../components/pagination/PaginationSize';
import PaginationSizeRaw from '../../components/pagination/PaginationSize.tsx?raw';
import PaginationButtonsComponent from '../../components/pagination/PaginationButtons';
import PaginationButtonsRaw from '../../components/pagination/PaginationButtons.tsx?raw';
import CustomIconsComponent from '../../components/pagination/CustomIcons';
import CustomIconsRaw from '../../components/pagination/CustomIcons.tsx?raw';
import PaginationRangesComponent from '../../components/pagination/PaginationRanges';
import PaginationRangesRaw from '../../components/pagination/PaginationRanges.tsx?raw';
import PaginationControlledComponent from '../../components/pagination/PaginationControlled';
import PaginationControlledRaw from '../../components/pagination/PaginationControlled.tsx?raw';
import UsePaginationComponent from '../../components/pagination/UsePagination';
import UsePaginationRaw from '../../components/pagination/UsePagination.tsx?raw';
import TablePaginationDemoComponent from '../../components/pagination/TablePaginationDemo';
import TablePaginationDemoRaw from '../../components/pagination/TablePaginationDemo.tsx?raw';

function PaginationDoc(props) {
    return (
        <>
            <Button
                className="normal-case absolute right-0 not-prose"
                variant="contained"
                color="secondary"
                component="a"
                href="https://mui.com/components/pagination"
                target="_blank"
                role="button"
                size="small"
                startIcon={<SingularitySvgIcon size={16}>heroicons-outline:arrow-top-right-on-square</SingularitySvgIcon>}
            >
                Reference
            </Button>
            <Typography
                className="text-5xl my-4 font-bold"
                component="h1"
            >
                Pagination
            </Typography>
            <Typography className="description">
                The Pagination component allows users to choose a specific page from a series of available pages.
            </Typography>

            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Basic pagination
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="BasicPagination.js"
                    className="my-4"
                    iframe={false}
                    component={BasicPaginationComponent}
                    raw={BasicPaginationRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Outlined pagination
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="PaginationOutlined.js"
                    className="my-4"
                    iframe={false}
                    component={PaginationOutlinedComponent}
                    raw={PaginationOutlinedRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Rounded pagination
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="PaginationRounded.js"
                    className="my-4"
                    iframe={false}
                    component={PaginationRoundedComponent}
                    raw={PaginationRoundedRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Pagination size
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="PaginationSize.js"
                    className="my-4"
                    iframe={false}
                    component={PaginationSizeComponent}
                    raw={PaginationSizeRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Buttons
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                You can choose to include buttons for the first and last pages or deactivate the buttons for the previous and next pages.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="PaginationButtons.js"
                    className="my-4"
                    iframe={false}
                    component={PaginationButtonsComponent}
                    raw={PaginationButtonsRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Custom icons
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The control icons can be customized as needed.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="CustomIcons.js"
                    className="my-4"
                    iframe={false}
                    component={CustomIconsComponent}
                    raw={CustomIconsRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Pagination ranges
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                You can define the number of digits shown on either side of the current page using the <code>siblingCount</code> prop, and near the start and end page numbers with the <code>boundaryCount</code> prop.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="PaginationRanges.js"
                    className="my-4"
                    iframe={false}
                    component={PaginationRangesComponent}
                    raw={PaginationRangesRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Controlled pagination
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="PaginationControlled.js"
                    className="my-4"
                    iframe={false}
                    component={PaginationControlledComponent}
                    raw={PaginationControlledRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                <code>usePagination</code>
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                For advanced customization scenarios, the headless <code>usePagination()</code> hook is provided. It accepts nearly the same options as the Pagination component, excluding props related to JSX rendering. The Pagination component is built using this hook.
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {` 
import usePagination from '@mui/material/usePagination';
`}
            </SingularityHighlight>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="UsePagination.js"
                    className="my-4"
                    iframe={false}
                    component={UsePaginationComponent}
                    raw={UsePaginationRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Table pagination
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <code>Pagination</code> component is designed to navigate through a list of items when infinite loading is not utilized. It is ideal for scenarios where SEO matters, such as a blog.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                For paginating large datasets in a table, the <code>TablePagination</code> component is recommended.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="TablePaginationDemo.js"
                    className="my-4"
                    iframe={false}
                    component={TablePaginationDemoComponent}
                    raw={TablePaginationDemoRaw}
                />
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                :::warning Be aware that the <code>Pagination</code> page prop begins at 1 to align with URL inclusion requirements, whereas the <code>TablePagination</code> page prop starts at 0 to match the zero-based indexing of JavaScript arrays used for rendering large tabular datasets. :::
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                You can explore this use case further in the <a href="/material-ui/react-table/#custom-pagination-options">table section</a> of the documentation.
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Accessibility
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                ARIA
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The root node is assigned a "navigation" role and an aria-label of "pagination navigation" by default. Page items include an aria-label indicating their purpose (e.g., "go to first page", "go to previous page", "go to page 1"). These can be customized using the <code>getItemAriaLabel</code> prop.
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Keyboard
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Pagination items are accessible via keyboard, each with a tabindex of "0".
            </Typography>
        </>
    );
}

export default PaginationDoc;