// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client';

import SingularityExample from '@singularity/core/SingularityExample';
import SingularityHighlight from '@singularity/core/SingularityHighlight';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicCardComponent from '../../components/cards/BasicCard';
import BasicCardRaw from '../../components/cards/BasicCard.tsx?raw';
import OutlinedCardComponent from '../../components/cards/OutlinedCard';
import OutlinedCardRaw from '../../components/cards/OutlinedCard.tsx?raw';
import RecipeReviewCardComponent from '../../components/cards/RecipeReviewCard';
import RecipeReviewCardRaw from '../../components/cards/RecipeReviewCard.tsx?raw';
import MediaCardComponent from '../../components/cards/MediaCard';
import MediaCardRaw from '../../components/cards/MediaCard.tsx?raw';
import ImgMediaCardComponent from '../../components/cards/ImgMediaCard';
import ImgMediaCardRaw from '../../components/cards/ImgMediaCard.tsx?raw';
import ActionAreaCardComponent from '../../components/cards/ActionAreaCard';
import ActionAreaCardRaw from '../../components/cards/ActionAreaCard.tsx?raw';
import MultiActionAreaCardComponent from '../../components/cards/MultiActionAreaCard';
import MultiActionAreaCardRaw from '../../components/cards/MultiActionAreaCard.tsx?raw';
import MediaControlCardComponent from '../../components/cards/MediaControlCard';
import MediaControlCardRaw from '../../components/cards/MediaControlCard.tsx?raw';
import SelectActionCardComponent from '../../components/cards/SelectActionCard';
import SelectActionCardRaw from '../../components/cards/SelectActionCard.tsx?raw';

function CardsDoc(props) {
    return (
        <>
            <Button
                className="normal-case absolute right-0 not-prose"
                variant="contained"
                color="secondary"
                component="a"
                href="https://mui.com/components/cards"
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
                Card
            </Typography>
            <Typography className="description">
                Cards present content and actions focused on a single topic.
            </Typography>

            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Introduction
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Cards serve as surfaces that showcase content and actions related to a single subject. The Material UI Card component includes various utility components to support diverse use cases:
            </Typography>
            <ul className="space-y-4">
                <li>Card: a container at the surface level for grouping related components.</li>
                <li>Card Content: the container for the Card’s main content.</li>
                <li>Card Header: an optional container for the Card’s header section.</li>
                <li>Card Media: an optional container for displaying media such as images or videos.</li>
                <li>Card Actions: an optional container for grouping a set of buttons.</li>
                <li>Card Action Area: an optional container enabling interaction with a designated area of the Card.</li>
            </ul>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="BasicCard.js"
                    className="my-4"
                    iframe={false}
                    component={BasicCardComponent}
                    raw={BasicCardRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Basics
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {` 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
`}
            </SingularityHighlight>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                :::success While cards can support multiple actions, controls, and overflow menus, exercise caution to ensure cards remain entry points to more detailed and complex information. :::
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Outlined Card
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Use <code>{`variant="outlined"`}</code> to display a card with an outlined style.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="OutlinedCard.js"
                    className="my-4"
                    iframe={false}
                    component={OutlinedCardComponent}
                    raw={OutlinedCardRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Complex Interaction
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                On desktop, card content can be expanded. (Click the downward chevron to reveal the recipe.)
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="RecipeReviewCard.js"
                    className="my-4"
                    iframe={false}
                    component={RecipeReviewCardComponent}
                    raw={RecipeReviewCardRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Media
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                This example demonstrates a card using an image to enhance its content.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="MediaCard.js"
                    className="my-4"
                    iframe={false}
                    component={MediaCardComponent}
                    raw={MediaCardRaw}
                />
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                By default, a <code>{`<div>`}</code> element with a <em>background image</em> is used to display media. This approach may pose challenges in some cases, such as when displaying videos or responsive images. For these scenarios, utilize the <code>component</code> prop:
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="ImgMediaCard.js"
                    className="my-4"
                    iframe={false}
                    component={ImgMediaCardComponent}
                    raw={ImgMediaCardRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Primary action
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Cards often allow users to interact with their entire surface to trigger a primary action, such as expanding content, navigating to another screen, or performing another function. This action area can be defined by wrapping the card’s contents in a <code>CardActionArea</code> component.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="ActionAreaCard.js"
                    className="my-4"
                    iframe={false}
                    component={ActionAreaCardComponent}
                    raw={ActionAreaCardRaw}
                />
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Cards can also include supplemental actions, which should be distinctly separated from the primary action area to prevent event conflicts.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="MultiActionAreaCard.js"
                    className="my-4"
                    iframe={false}
                    component={MultiActionAreaCardComponent}
                    raw={MultiActionAreaCardRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                UI Controls
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Supplemental actions in a card are clearly indicated using icons, text, or UI controls, typically positioned at the bottom of the card.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                This example showcases a media control card.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="MediaControlCard.js"
                    className="my-4"
                    iframe={false}
                    component={MediaControlCardComponent}
                    raw={MediaControlCardRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Active state styles
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                To customize a Card’s appearance in its active state, add a <code>data-active</code> attribute to the Card Action Area component and apply styles using the <code>&[data-active]</code> selector, as demonstrated below:
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="SelectActionCard.js"
                    className="my-4"
                    iframe={false}
                    component={SelectActionCardComponent}
                    raw={SelectActionCardRaw}
                />
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                🎨 For inspiration, explore{' '}
                <a href="https://mui-treasury.com/?path=/docs/card-introduction--docs">
                    MUI Treasury's customization examples
                </a>.
            </Typography>
        </>
    );
}

export default CardsDoc;