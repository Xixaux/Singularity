// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client';

import SingularityExample from '@singularity/core/SingularityExample';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicBreadcrumbsComponent from '../../components/breadcrumbs/BasicBreadcrumbs';
import BasicBreadcrumbsRaw from '../../components/breadcrumbs/BasicBreadcrumbs.tsx?raw';
import ActiveLastBreadcrumbComponent from '../../components/breadcrumbs/ActiveLastBreadcrumb';
import ActiveLastBreadcrumbRaw from '../../components/breadcrumbs/ActiveLastBreadcrumb.tsx?raw';
import CustomSeparatorComponent from '../../components/breadcrumbs/CustomSeparator';
import CustomSeparatorRaw from '../../components/breadcrumbs/CustomSeparator.tsx?raw';
import IconBreadcrumbsComponent from '../../components/breadcrumbs/IconBreadcrumbs';
import IconBreadcrumbsRaw from '../../components/breadcrumbs/IconBreadcrumbs.tsx?raw';
import CollapsedBreadcrumbsComponent from '../../components/breadcrumbs/CollapsedBreadcrumbs';
import CollapsedBreadcrumbsRaw from '../../components/breadcrumbs/CollapsedBreadcrumbs.tsx?raw';
import CondensedWithMenuComponent from '../../components/breadcrumbs/CondensedWithMenu';
import CondensedWithMenuRaw from '../../components/breadcrumbs/CondensedWithMenu.tsx?raw';
import CustomizedBreadcrumbsComponent from '../../components/breadcrumbs/CustomizedBreadcrumbs';
import CustomizedBreadcrumbsRaw from '../../components/breadcrumbs/CustomizedBreadcrumbs.tsx?raw';

function BreadcrumbsDoc(props) {
    return (
        <>
            <Button
                className="normal-case absolute right-0 not-prose"
                variant="contained"
                color="secondary"
                component="a"
                href="https://mui.com/components/breadcrumbs"
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
                Breadcrumbs
            </Typography>
            <Typography className="description">
                Breadcrumbs are a sequence of links that illustrate a page's position within a website's hierarchical structure, enabling navigation to any parent page.
            </Typography>

            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Basic breadcrumbs
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="BasicBreadcrumbs.js"
                    className="my-4"
                    iframe={false}
                    component={BasicBreadcrumbsComponent}
                    raw={BasicBreadcrumbsRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Active last breadcrumb
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Maintain interactivity for the final breadcrumb.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="ActiveLastBreadcrumb.js"
                    className="my-4"
                    iframe={false}
                    component={ActiveLastBreadcrumbComponent}
                    raw={ActiveLastBreadcrumbRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Custom separator
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The following examples demonstrate the use of two string separators and an SVG icon.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="CustomSeparator.js"
                    className="my-4"
                    iframe={false}
                    component={CustomSeparatorComponent}
                    raw={CustomSeparatorRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Breadcrumbs with icons
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="IconBreadcrumbs.js"
                    className="my-4"
                    iframe={false}
                    component={IconBreadcrumbsComponent}
                    raw={IconBreadcrumbsRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Collapsed breadcrumbs
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="CollapsedBreadcrumbs.js"
                    className="my-4"
                    iframe={false}
                    component={CollapsedBreadcrumbsComponent}
                    raw={CollapsedBreadcrumbsRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Condensed with menu
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                As an alternative approach, consider incorporating a Menu component to present condensed links in a dropdown format.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="CondensedWithMenu.js"
                    className="my-4"
                    iframe={false}
                    component={CondensedWithMenuComponent}
                    raw={CondensedWithMenuRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Customization
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Below is an example of tailoring the component. Explore more details in the <a href="/material-ui/customization/how-to-customize/">overrides documentation page</a>.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="CustomizedBreadcrumbs.js"
                    className="my-4"
                    iframe={false}
                    component={CustomizedBreadcrumbsComponent}
                    raw={CustomizedBreadcrumbsRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Accessibility
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                (WAI-ARIA: <a href="https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/">https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/</a>)
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Ensure the <code>Breadcrumbs</code> component includes an <code>aria-label</code> description for accessibility.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The accessibility of this component depends on:
            </Typography>
            <ul className="space-y-4">
                <li>
                    Links are organized using an ordered list (<code>{`<ol>`}</code> element).
                </li>
                <li>
                    Visual separators between links are hidden from screen readers using <code>aria-hidden</code>.
                </li>
                <li>
                    A <code>nav</code> element with an <code>aria-label</code> marks the structure as a breadcrumb trail, establishing it as a navigation landmark for easy discovery.
                </li>
            </ul>
        </>
    );
}

export default BreadcrumbsDoc;