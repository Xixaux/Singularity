// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client';

import SingularityExample from '@singularity/core/SingularityExample';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SimpleBadgeComponent from '../../components/badges/SimpleBadge';
import SimpleBadgeRaw from '../../components/badges/SimpleBadge.tsx?raw';
import ColorBadgeComponent from '../../components/badges/ColorBadge';
import ColorBadgeRaw from '../../components/badges/ColorBadge.tsx?raw';
import CustomizedBadgesComponent from '../../components/badges/CustomizedBadges';
import CustomizedBadgesRaw from '../../components/badges/CustomizedBadges.tsx?raw';
import BadgeVisibilityComponent from '../../components/badges/BadgeVisibility';
import BadgeVisibilityRaw from '../../components/badges/BadgeVisibility.tsx?raw';
import ShowZeroBadgeComponent from '../../components/badges/ShowZeroBadge';
import ShowZeroBadgeRaw from '../../components/badges/ShowZeroBadge.tsx?raw';
import BadgeMaxComponent from '../../components/badges/BadgeMax';
import BadgeMaxRaw from '../../components/badges/BadgeMax.tsx?raw';
import DotBadgeComponent from '../../components/badges/DotBadge';
import DotBadgeRaw from '../../components/badges/DotBadge.tsx?raw';
import BadgeOverlapComponent from '../../components/badges/BadgeOverlap';
import BadgeOverlapRaw from '../../components/badges/BadgeOverlap.tsx?raw';
import AccessibleBadgesComponent from '../../components/badges/AccessibleBadges';
import AccessibleBadgesRaw from '../../components/badges/AccessibleBadges.tsx?raw';

function BadgesDoc(props) {
    return (
        <>
            <Button
                className="normal-case absolute right-0 not-prose"
                variant="contained"
                color="secondary"
                component="a"
                href="https://mui.com/components/badges"
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
                Badge
            </Typography>
            <Typography className="description">
                The Badge component creates a small indicator positioned at the top-right of its child elements.
            </Typography>

            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Basic badge
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Demonstrations of badges with text, utilizing primary and secondary color schemes. The badge is attached to its child elements.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="SimpleBadge.js"
                    className="my-4"
                    iframe={false}
                    component={SimpleBadgeComponent}
                    raw={SimpleBadgeRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Color
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Apply the <code>color</code> prop to use the theme’s color palette on the component.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="ColorBadge.js"
                    className="my-4"
                    iframe={false}
                    component={ColorBadgeComponent}
                    raw={ColorBadgeRaw}
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
                This example illustrates how to customize the component. Learn more about customization options in the{' '}
                <a href="/material-ui/customization/how-to-customize/">overrides documentation page</a>.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="CustomizedBadges.js"
                    className="my-4"
                    iframe={false}
                    component={CustomizedBadgesComponent}
                    raw={CustomizedBadgesRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Badge visibility
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The display of badges can be managed using the <code>invisible</code> prop.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="BadgeVisibility.js"
                    className="my-4"
                    iframe={false}
                    component={BadgeVisibilityComponent}
                    raw={BadgeVisibilityRaw}
                />
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The badge is hidden by default when <code>badgeContent</code> is zero. This behavior can be overridden using the <code>showZero</code> prop.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="ShowZeroBadge.js"
                    className="my-4"
                    iframe={false}
                    component={ShowZeroBadgeComponent}
                    raw={ShowZeroBadgeRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Maximum value
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <code>max</code> prop can be used to limit the displayed value of the badge content.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="BadgeMax.js"
                    className="my-4"
                    iframe={false}
                    component={BadgeMaxComponent}
                    raw={BadgeMaxRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Dot badge
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <code>dot</code> prop transforms the badge into a small dot, useful for indicating a change without displaying a count.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="DotBadge.js"
                    className="my-4"
                    iframe={false}
                    component={DotBadgeComponent}
                    raw={DotBadgeRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Badge overlap
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <code>overlap</code> prop allows you to position the badge relative to the corner of its wrapped element.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="BadgeOverlap.js"
                    className="my-4"
                    iframe={false}
                    component={BadgeOverlapComponent}
                    raw={BadgeOverlapRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Badge alignment
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Use the <code>anchorOrigin</code> prop to adjust the badge’s position to any corner of the wrapped element.
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
                The badge content may not be announced correctly by assistive technologies. Provide a complete description, such as with the <code>aria-label</code> attribute:
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="AccessibleBadges.js"
                    className="my-4"
                    iframe={false}
                    component={AccessibleBadgesComponent}
                    raw={AccessibleBadgesRaw}
                />
            </Typography>
        </>
    );
}

export default BadgesDoc;