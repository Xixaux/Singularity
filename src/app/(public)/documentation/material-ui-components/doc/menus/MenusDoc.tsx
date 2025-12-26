// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client';

import SingularityExample from '@singularity/core/SingularityExample';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicMenuComponent from '../../components/menus/BasicMenu';
import BasicMenuRaw from '../../components/menus/BasicMenu.tsx?raw';
import IconMenuComponent from '../../components/menus/IconMenu';
import IconMenuRaw from '../../components/menus/IconMenu.tsx?raw';
import DenseMenuComponent from '../../components/menus/DenseMenu';
import DenseMenuRaw from '../../components/menus/DenseMenu.tsx?raw';
import SimpleListMenuComponent from '../../components/menus/SimpleListMenu';
import SimpleListMenuRaw from '../../components/menus/SimpleListMenu.tsx?raw';
import PositionedMenuComponent from '../../components/menus/PositionedMenu';
import PositionedMenuRaw from '../../components/menus/PositionedMenu.tsx?raw';
import MenuListCompositionComponent from '../../components/menus/MenuListComposition';
import MenuListCompositionRaw from '../../components/menus/MenuListComposition.tsx?raw';
import AccountMenuComponent from '../../components/menus/AccountMenu';
import AccountMenuRaw from '../../components/menus/AccountMenu.tsx?raw';
import CustomizedMenusComponent from '../../components/menus/CustomizedMenus';
import CustomizedMenusRaw from '../../components/menus/CustomizedMenus.tsx?raw';
import LongMenuComponent from '../../components/menus/LongMenu';
import LongMenuRaw from '../../components/menus/LongMenu.tsx?raw';
import TypographyMenuComponent from '../../components/menus/TypographyMenu';
import TypographyMenuRaw from '../../components/menus/TypographyMenu.tsx?raw';
import FadeMenuComponent from '../../components/menus/FadeMenu';
import FadeMenuRaw from '../../components/menus/FadeMenu.tsx?raw';
import ContextMenuComponent from '../../components/menus/ContextMenu';
import ContextMenuRaw from '../../components/menus/ContextMenu.tsx?raw';
import GroupedMenuComponent from '../../components/menus/GroupedMenu';
import GroupedMenuRaw from '../../components/menus/GroupedMenu.tsx?raw';
import MenuPopupStateComponent from '../../components/menus/MenuPopupState';
import MenuPopupStateRaw from '../../components/menus/MenuPopupState.tsx?raw';

function MenusDoc(props) {
    return (
        <>
            <Button
                className="normal-case absolute right-0 not-prose"
                variant="contained"
                color="secondary"
                component="a"
                href="https://mui.com/components/menus"
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
                Menu
            </Typography>
            <Typography className="description">Menus present a selection of options on temporary surfaces.</Typography>

            <Typography
                className="text-base mb-8"
                component="div"
            >
                A menu showcases a list of options on a transient surface, appearing when a user engages with a button or another control.
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
                Menus are constructed using a set of interconnected components:
            </Typography>
            <ul className="space-y-4">
                <li>Menu: The container or surface that holds the menu.</li>
                <li>Menu Item: An individual option available for user selection within the menu.</li>
                <li>
                    Menu List (optional): An alternative, composable container for Menu Items—refer to{' '}
                    <a href="#composition-with-menu-list">Composition with Menu List</a> for more information.
                </li>
            </ul>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Basic menu
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                By default, a basic menu appears over its anchor element (this behavior can be <a href="#menu-positioning">adjusted</a> via props). When near a screen edge, it realigns vertically to ensure all menu items are fully visible.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The component should be set up so that choosing an option immediately confirms the selection and closes the menu, as demonstrated below.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="BasicMenu.js"
                    className="my-4"
                    iframe={false}
                    component={BasicMenuComponent}
                    raw={BasicMenuRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Icon menu
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                In desktop viewports, the menu's padding is expanded to provide additional space.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="IconMenu.js"
                    className="my-4"
                    iframe={false}
                    component={IconMenuComponent}
                    raw={IconMenuRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Dense menu
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                For menus with lengthy lists or extended text, the <code>dense</code> prop can be used to minimize padding and font size.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="DenseMenu.js"
                    className="my-4"
                    iframe={false}
                    component={DenseMenuComponent}
                    raw={DenseMenuRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Selected menu
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                When used for item selection, simple menus focus on the selected menu item upon opening. The selected item is defined using the <code>selected</code> prop (from <a href="/material-ui/api/list-item/">ListItem</a>). To use a selected item without affecting initial focus, set the <code>variant</code> prop to "menu".
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="SimpleListMenu.js"
                    className="my-4"
                    iframe={false}
                    component={SimpleListMenuComponent}
                    raw={SimpleListMenuRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Positioned menu
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Since the <code>Menu</code> component leverages the <code>Popover</code> component for positioning, you can utilize the same <a href="/material-ui/react-popover/#anchor-playground">positioning props</a> to adjust its placement. For example, you can position the menu above the anchor.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="PositionedMenu.js"
                    className="my-4"
                    iframe={false}
                    component={PositionedMenuComponent}
                    raw={PositionedMenuRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Composition with Menu List
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <code>Menu</code> component internally uses the <code>Popover</code> component. However, you may prefer an alternative positioning approach or want to avoid blocking scrolling.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <code>MenuList</code> component enables custom menu composition for such scenarios, primarily handling focus management. The example below demonstrates composition using <code>MenuList</code> with a <code>Popper</code> component instead of the default <code>Popover</code>.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="MenuListComposition.js"
                    className="my-4"
                    iframe={false}
                    component={MenuListCompositionComponent}
                    raw={MenuListCompositionRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Account menu
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The content of a <code>Menu</code> can be combined with other components, such as <code>Avatar</code>.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="AccountMenu.js"
                    className="my-4"
                    iframe={false}
                    component={AccountMenuComponent}
                    raw={AccountMenuRaw}
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
                This example illustrates how to customize the component. Learn more in the <a href="/material-ui/customization/how-to-customize/">overrides documentation page</a>.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="CustomizedMenus.js"
                    className="my-4"
                    iframe={false}
                    component={CustomizedMenusComponent}
                    raw={CustomizedMenusRaw}
                />
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <code>MenuItem</code> component wraps <code>ListItem</code> with added styles. You can leverage the same list composition features with the <code>MenuItem</code> component.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                🎨 For inspiration, explore <a href="https://mui-treasury.com/?path=/docs/menu-introduction--docs">MUI Treasury's customization examples</a>.
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Max height menu
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                When a menu's height prevents all items from being shown, it can scroll internally.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="LongMenu.js"
                    className="my-4"
                    iframe={false}
                    component={LongMenuComponent}
                    raw={LongMenuRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Limitations
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                A <a href="https://issues.chromium.org/issues/40344463">flexbox bug</a> prevents <code>text-overflow: ellipsis</code> from functioning in a flexbox layout. You can bypass this issue by using the <code>Typography</code> component with the <code>noWrap</code> prop.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="TypographyMenu.js"
                    className="my-4"
                    iframe={false}
                    component={TypographyMenuComponent}
                    raw={TypographyMenuRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Change transition
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Apply a different transition effect.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="FadeMenu.js"
                    className="my-4"
                    iframe={false}
                    component={FadeMenuComponent}
                    raw={FadeMenuRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Context menu
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                This example demonstrates a context menu, accessible via a right-click.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="ContextMenu.js"
                    className="my-4"
                    iframe={false}
                    component={ContextMenuComponent}
                    raw={ContextMenuRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Grouped Menu
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Organize items into categories using the <code>ListSubheader</code> component.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="GroupedMenu.js"
                    className="my-4"
                    iframe={false}
                    component={GroupedMenuComponent}
                    raw={GroupedMenuRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Supplementary projects
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                For advanced use cases, you can benefit from the following resources:
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                material-ui-popup-state
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <img
                    src="https://img.shields.io/github/stars/jcoreio/material-ui-popup-state?style=social&label=Star"
                    alt="stars"
                />
                <img
                    src="https://img.shields.io/npm/dm/material-ui-popup-state.svg"
                    alt="npm downloads"
                />
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <a href="https://github.com/jcoreio/material-ui-popup-state"><code>material-ui-popup-state</code></a> package simplifies menu state management in most scenarios.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="MenuPopupState.js"
                    className="my-4"
                    iframe={false}
                    component={MenuPopupStateComponent}
                    raw={MenuPopupStateRaw}
                />
            </Typography>
        </>
    );
}

export default MenusDoc;