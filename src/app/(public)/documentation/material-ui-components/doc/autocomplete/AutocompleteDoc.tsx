'use client';

import SingularityExample from '@singularity/core/SingularityExample';
import SingularityHighlight from '@singularity/core/SingularityHighlight';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PlaygroundComponent from '../../components/autocomplete/Playground';
import PlaygroundRaw from '../../components/autocomplete/Playground.tsx?raw';
import CountrySelectComponent from '../../components/autocomplete/CountrySelect';
import CountrySelectRaw from '../../components/autocomplete/CountrySelect.tsx?raw';
import ControllableStatesComponent from '../../components/autocomplete/ControllableStates';
import ControllableStatesRaw from '../../components/autocomplete/ControllableStates.tsx?raw';
import FreeSoloComponent from '../../components/autocomplete/FreeSolo';
import FreeSoloRaw from '../../components/autocomplete/FreeSolo.tsx?raw';
import FreeSoloCreateOptionComponent from '../../components/autocomplete/FreeSoloCreateOption';
import FreeSoloCreateOptionRaw from '../../components/autocomplete/FreeSoloCreateOption.tsx?raw';
import FreeSoloCreateOptionDialogComponent from '../../components/autocomplete/FreeSoloCreateOptionDialog';
import FreeSoloCreateOptionDialogRaw from '../../components/autocomplete/FreeSoloCreateOptionDialog.tsx?raw';
import GroupedComponent from '../../components/autocomplete/Grouped';
import GroupedRaw from '../../components/autocomplete/Grouped.tsx?raw';
import RenderGroupComponent from '../../components/autocomplete/RenderGroup';
import RenderGroupRaw from '../../components/autocomplete/RenderGroup.tsx?raw';
import DisabledOptionsComponent from '../../components/autocomplete/DisabledOptions';
import DisabledOptionsRaw from '../../components/autocomplete/DisabledOptions.tsx?raw';
import UseAutocompleteComponent from '../../components/autocomplete/UseAutocomplete';
import UseAutocompleteRaw from '../../components/autocomplete/UseAutocomplete.tsx?raw';
import CustomizedHookComponent from '../../components/autocomplete/CustomizedHook';
import CustomizedHookRaw from '../../components/autocomplete/CustomizedHook.tsx?raw';
import AsynchronousComponent from '../../components/autocomplete/Asynchronous';
import AsynchronousRaw from '../../components/autocomplete/Asynchronous.tsx?raw';
import GoogleMapsComponent from '../../components/autocomplete/GoogleMaps';
import GoogleMapsRaw from '../../components/autocomplete/GoogleMaps.tsx?raw';
import CustomSingleValueRenderingComponent from '../../components/autocomplete/CustomSingleValueRendering';
import CustomSingleValueRenderingRaw from '../../components/autocomplete/CustomSingleValueRendering.tsx?raw';
import TagsComponent from '../../components/autocomplete/Tags';
import TagsRaw from '../../components/autocomplete/Tags.tsx?raw';
import FixedTagsComponent from '../../components/autocomplete/FixedTags';
import FixedTagsRaw from '../../components/autocomplete/FixedTags.tsx?raw';
import CheckboxesTagsComponent from '../../components/autocomplete/CheckboxesTags';
import CheckboxesTagsRaw from '../../components/autocomplete/CheckboxesTags.tsx?raw';
import LimitTagsComponent from '../../components/autocomplete/LimitTags';
import LimitTagsRaw from '../../components/autocomplete/LimitTags.tsx?raw';
import SizesComponent from '../../components/autocomplete/Sizes';
import SizesRaw from '../../components/autocomplete/Sizes.tsx?raw';
import CustomInputAutocompleteComponent from '../../components/autocomplete/CustomInputAutocomplete';
import CustomInputAutocompleteRaw from '../../components/autocomplete/CustomInputAutocomplete.tsx?raw';
import GloballyCustomizedOptionsComponent from '../../components/autocomplete/GloballyCustomizedOptions';
import GloballyCustomizedOptionsRaw from '../../components/autocomplete/GloballyCustomizedOptions.tsx?raw';
import GitHubLabelComponent from '../../components/autocomplete/GitHubLabel';
import GitHubLabelRaw from '../../components/autocomplete/GitHubLabel.tsx?raw';
import AutocompleteHintComponent from '../../components/autocomplete/AutocompleteHint';
import AutocompleteHintRaw from '../../components/autocomplete/AutocompleteHint.tsx?raw';
import HighlightsComponent from '../../components/autocomplete/Highlights';
import HighlightsRaw from '../../components/autocomplete/Highlights.tsx?raw';
import FilterComponent from '../../components/autocomplete/Filter';
import FilterRaw from '../../components/autocomplete/Filter.tsx?raw';
import VirtualizeComponent from '../../components/autocomplete/Virtualize';
import VirtualizeRaw from '../../components/autocomplete/Virtualize.tsx?raw';

// Define props type (likely empty for a Next.js page component)
type AutocompleteDocProps = {};

function AutocompleteDoc(props: AutocompleteDocProps) {
    return (
        <>
            <Button
                className="normal-case absolute right-0 not-prose"
                variant="contained"
                color="secondary"
                component="a"
                href="https://mui.com/components/autocomplete"
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
                Autocomplete
            </Typography>
            <Typography className="description">
                The autocomplete enhances a standard text input by offering a dropdown with suggested selections.
            </Typography>

            <Typography
                className="text-base mb-8"
                component="div"
            >
                This component is ideal for scenarios where a single-line text input needs to be populated in one of two ways:
            </Typography>
            <ol>
                <li>
                    The text input must be selected from a fixed list of permitted values, such as a location field requiring a valid place name: <a href="#combo-box">combo box</a>.
                </li>
                <li>
                    The text input can accept any value, but providing suggestions, like past or related searches, helps streamline user input: <a href="#free-solo">free solo</a>.
                </li>
            </ol>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                It serves as an advanced alternative to the "react-select" and "downshift" libraries.
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Combo box
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The input must be chosen from a predefined collection of acceptable values.
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Options structure
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The component supports the following default option structures:
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-ts"
            >
                {`
interface AutocompleteOption {
  label: string;
}
// or
type AutocompleteOption = string;
`}
            </SingularityHighlight>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                For example:
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-js"
            >
                {`
const options = [
  { label: 'The Godfather', id: 1 },
  { label: 'Pulp Fiction', id: 2 },
];
// or
const options = ['The Godfather', 'Pulp Fiction'];
`}
            </SingularityHighlight>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                You can utilize alternative structures by specifying a <code>getOptionLabel</code> prop.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                When options are objects, you must include the <code>isOptionEqualToValue</code> prop to guarantee proper selection and highlighting. By default, it employs strict equality to compare options with the current value.
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Playground
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The following examples each highlight a specific feature of the Autocomplete component.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="Playground.js"
                    className="my-4"
                    iframe={false}
                    component={PlaygroundComponent}
                    raw={PlaygroundRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Country select
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Select from a list of 248 countries.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="CountrySelect.js"
                    className="my-4"
                    iframe={false}
                    component={CountrySelectComponent}
                    raw={CountrySelectRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Controlled states
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The component has two controllable states:
            </Typography>
            <ol>
                <li>
                    The "value" state, managed with the <code>value</code>/<code>onChange</code> prop pair, reflects the user's selected value, such as when they press <kbd className="key">Enter</kbd>.
                </li>
                <li>
                    The "input value" state, managed with the <code>inputValue</code>/<code>onInputChange</code> prop pair, represents the text displayed in the input field.
                </li>
            </ol>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                These states are independent and should be managed separately.
            </Typography>
            <div className="border-1 p-4 rounded-xl my-3">
                <ul className="space-y-4">
                    <li>
                        A <strong>controlled</strong> component is managed by its parent through props.
                    </li>
                    <li>
                        An <strong>uncontrolled</strong> component is managed internally by its own state.
                    </li>
                </ul>
                <Typography
                    className="text-base mb-8"
                    component="div"
                >
                    Explore more about controlled and uncontrolled components in the{' '}
                    <a href="https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components">
                        React documentation
                    </a>.
                </Typography>
            </div>

            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="ControllableStates.js"
                    className="my-4"
                    iframe={false}
                    component={ControllableStatesComponent}
                    raw={ControllableStatesRaw}
                />
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                :::warning
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                When controlling the <code>value</code>, ensure it remains referentially stable across renders, meaning the reference to the value should not change unless the value itself changes.
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-tsx"
            >
                {`
                // 🚫 NO
                return <Autocomplete multiple value={allValues.filter((v) => v.selected)} />;
                
                // ✅ YES
                const selectedValues = React.useMemo(
                  () => allValues.filter((v) => v.selected),
                  [allValues],
                );
                return <Autocomplete multiple value={selectedValues} />;
                `}
            </SingularityHighlight>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                In the first case, <code>allValues.filter</code> creates a <strong>new array</strong> on every render. The solution involves memoizing the value to update only when necessary. :::
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Free solo
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Enable <code>freeSolo</code> to allow the text input to accept any arbitrary value.
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Search input
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                This prop is tailored for a <strong>search input</strong> with suggestions, such as Google search or react-autowhatever.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="FreeSolo.js"
                    className="my-4"
                    iframe={false}
                    component={FreeSoloComponent}
                    raw={FreeSoloRaw}
                />
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                :::warning Exercise caution when using free solo mode with non-string options, as it may lead to type mismatches.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The value entered in the text input is always a string, regardless of the option types. :::
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Creatable
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                For a <a href="#combo-box">combo box</a>-like experience (an improved version of a select element), we suggest configuring:
            </Typography>
            <ul className="space-y-4">
                <li>
                    <code>selectOnFocus</code> to assist users in clearing the selected value.
                </li>
                <li>
                    <code>clearOnBlur</code> to facilitate entering a new value.
                </li>
                <li>
                    <code>handleHomeEndKeys</code> to enable navigation within the popup using <kbd className="key">Home</kbd> and <kbd className="key">End</kbd> keys.
                </li>
                <li>
                    A final option, such as: <code>{`Add "YOUR SEARCH"`}</code>.
                </li>
            </ul>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="FreeSoloCreateOption.js"
                    className="my-4"
                    iframe={false}
                    component={FreeSoloCreateOptionComponent}
                    raw={FreeSoloCreateOptionRaw}
                />
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                You can also present a dialog when users attempt to add a new value.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="FreeSoloCreateOptionDialog.js"
                    className="my-4"
                    iframe={false}
                    component={FreeSoloCreateOptionDialogComponent}
                    raw={FreeSoloCreateOptionDialogRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Grouped
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Options can be grouped using the <code>groupBy</code> prop. Ensure options are sorted by the same criterion used for grouping to avoid duplicate headers.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="Grouped.js"
                    className="my-4"
                    iframe={false}
                    component={GroupedComponent}
                    raw={GroupedRaw}
                />
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                To customize group rendering, use the <code>renderGroup</code> prop, a function that takes an object with two properties:
            </Typography>
            <ul className="space-y-4">
                <li>
                    <code>group</code>—a string indicating the group name.
                </li>
                <li>
                    <code>children</code>—a collection of list items within the group.
                </li>
            </ul>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The following example demonstrates using this prop to customize markup and override default group styles:
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="RenderGroup.js"
                    className="my-4"
                    iframe={false}
                    component={RenderGroupComponent}
                    raw={RenderGroupRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Disabled options
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="DisabledOptions.js"
                    className="my-4"
                    iframe={false}
                    component={DisabledOptionsComponent}
                    raw={DisabledOptionsRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                <code>useAutocomplete</code>
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                For advanced customization, a headless <code>useAutocomplete()</code> hook is provided, accepting nearly the same options as the Autocomplete component, excluding JSX rendering props. The Autocomplete component is built upon this hook.
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-tsx"
            >
                {`
                import { useAutocomplete } from '@mui/base/useAutocomplete';
                `}
            </SingularityHighlight>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <code>useAutocomplete</code> hook is also available from @mui/material for convenience and compatibility with earlier versions.
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-tsx"
            >
                {`
                import useAutocomplete from '@mui/material/useAutocomplete';
                `}
            </SingularityHighlight>
            <ul className="space-y-4">
                <li>
                    📦 <a href="https://bundlephobia.com/package/@mui/material">4.6 kB gzipped</a>.
                </li>
            </ul>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="UseAutocomplete.js"
                    className="my-4"
                    iframe={false}
                    component={UseAutocompleteComponent}
                    raw={UseAutocompleteRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Customized hook
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="CustomizedHook.js"
                    className="my-4"
                    iframe={false}
                    component={CustomizedHookComponent}
                    raw={CustomizedHookRaw}
                />
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Refer to the <a href="#customization">customization</a> section for an example using the <code>Autocomplete</code> component instead of the hook.
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Asynchronous requests
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The component supports two asynchronous use cases:
            </Typography>
            <ul className="space-y-4">
                <li>
                    <a href="#load-on-open">Load on open</a>: Options load only when the component is interacted with.
                </li>
                <li>
                    <a href="#search-as-you-type">Search as you type</a>: A new request is triggered with each keystroke.
                </li>
            </ul>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Load on open
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                A loading indicator is shown while the network request is in progress.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="Asynchronous.js"
                    className="my-4"
                    iframe={false}
                    component={AsynchronousComponent}
                    raw={AsynchronousRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Search as you type
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                If your logic fetches new options with each keystroke and filters on the server using the current text input, consider throttling requests to optimize performance.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                You should also disable the component’s built-in filtering by overriding the <code>filterOptions</code> prop:
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {`
                <Autocomplete filterOptions={(x) => x} />
                `}
            </SingularityHighlight>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Google Maps place
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                A tailored interface for Google Maps Places Autocomplete. This demo requires loading the{' '}
                <a href="https://developers.google.com/maps/documentation/javascript/overview">
                    Google Maps JavaScript
                </a>{' '}
                and{' '}
                <a href="https://developers.google.com/maps/documentation/places/web-service/overview">Google Places</a>{' '}
                APIs.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="GoogleMaps.js"
                    className="my-4"
                    iframe={false}
                    component={GoogleMapsComponent}
                    raw={GoogleMapsRaw}
                />
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                This example uses <a href="https://github.com/moroshko/autosuggest-highlight">autosuggest-highlight</a>, a compact (1 kB) tool for highlighting text in autosuggest and autocomplete components.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                :::error To use the Google Maps JavaScript and Places APIs, you must obtain your own{' '}
                <a href="https://developers.google.com/maps/documentation/javascript/get-api-key">API key</a>.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                This demo has restricted API request quotas. If the quota is exceeded, the response will default to "Paris". :::
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Custom Single Value Rendering
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                By default, with <code>{`multiple={false}`}</code>, the selected option appears as plain text in the input. Use the <code>renderValue</code> prop to customize the display of the selected value, enabling custom styling, additional details, or different formatting.
            </Typography>
            <ul className="space-y-4">
                <li>
                    The <code>getItemProps</code> callback provides props such as <code>data-item-index</code>, <code>disabled</code>, and <code>tabIndex</code>. Spread these props onto the rendered component for proper accessibility.
                </li>
                <li>
                    When using a custom component other than a Material UI Chip, destructure the <code>onDelete</code> prop, as it is specific to Material UI Chip.
                </li>
            </ul>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="CustomSingleValueRendering.js"
                    className="my-4"
                    iframe={false}
                    component={CustomSingleValueRenderingComponent}
                    raw={CustomSingleValueRenderingRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Multiple values
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                When <code>{`multiple={true}`}</code>, users can select multiple values. These selections, called "items," can be customized using the <code>renderValue</code> prop.
            </Typography>
            <ul className="space-y-4">
                <li>
                    The <code>getItemProps</code> callback provides essential props like <code>data-item-index</code>, <code>disabled</code>, and <code>tabIndex</code>. Ensure these are applied to each rendered item.
                </li>
                <li>
                    For custom components other than Material UI Chip, destructure the <code>onDelete</code> prop, as it is specific to Material UI Chip.
                </li>
            </ul>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="Tags.js"
                    className="my-4"
                    iframe={false}
                    component={TagsComponent}
                    raw={TagsRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Fixed options
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                To prevent certain tags from being removed, you can disable specific chips.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="FixedTags.js"
                    className="my-4"
                    iframe={false}
                    component={FixedTagsComponent}
                    raw={FixedTagsRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Checkboxes
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="CheckboxesTags.js"
                    className="my-4"
                    iframe={false}
                    component={CheckboxesTagsComponent}
                    raw={CheckboxesTagsRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Limit tags
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Use the <code>limitTags</code> prop to restrict the number of displayed options when the input is not focused.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="LimitTags.js"
                    className="my-4"
                    iframe={false}
                    component={LimitTagsComponent}
                    raw={LimitTagsRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Sizes
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                For more compact inputs, apply the <code>size</code> prop.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="Sizes.js"
                    className="my-4"
                    iframe={false}
                    component={SizesComponent}
                    raw={SizesRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Customization
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Custom input
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The <code>renderInput</code> prop allows customization of the input element. The first argument of this prop includes props that must be forwarded, particularly the <code>ref</code> and <code>inputProps</code> keys.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                :::warning When using a custom input component within Autocomplete, ensure the ref is forwarded to the underlying DOM element. :::
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="CustomInputAutocomplete.js"
                    className="my-4"
                    iframe={false}
                    component={CustomInputAutocompleteComponent}
                    raw={CustomInputAutocompleteRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Globally Customized Options
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                To customize Autocomplete options globally across your application, use the{' '}
                <a href="/material-ui/customization/theme-components/#theme-default-props">theme default props</a> and set the <code>renderOption</code> property in the <code>defaultProps</code> key. The <code>renderOption</code> property accepts <code>ownerState</code> as its fourth parameter, which includes props and internal state. Use the <code>getOptionLabel</code> prop from <code>ownerState</code> to display the label. This method allows varied options for each Autocomplete while maintaining consistent styling.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="GloballyCustomizedOptions.js"
                    className="my-4"
                    iframe={false}
                    component={GloballyCustomizedOptionsComponent}
                    raw={GloballyCustomizedOptionsRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                GitHub's picker
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                This example replicates the label picker used by GitHub:
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="GitHubLabel.js"
                    className="my-4"
                    iframe={false}
                    component={GitHubLabelComponent}
                    raw={GitHubLabelRaw}
                />
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                See the <a href="#customized-hook">Customized hook</a> section for a customization example using the <code>useAutocomplete</code> hook instead of the component.
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Hint
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                This example illustrates how to incorporate a hint feature into the Autocomplete:
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="AutocompleteHint.js"
                    className="my-4"
                    iframe={false}
                    component={AutocompleteHintComponent}
                    raw={AutocompleteHintRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Highlights
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                This example uses <a href="https://github.com/moroshko/autosuggest-highlight">autosuggest-highlight</a>, a lightweight (1 kB) utility for highlighting text in autosuggest and autocomplete components.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="Highlights.js"
                    className="my-4"
                    iframe={false}
                    component={HighlightsComponent}
                    raw={HighlightsRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Custom filter
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                The component provides a factory to create a custom filter method for the <code>filterOptions</code> prop, allowing you to modify the default filtering behavior.
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-js"
            >
                {`
                import { createFilterOptions } from '@mui/material/Autocomplete';
                `}
            </SingularityHighlight>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                <code>{`createFilterOptions(config) => filterOptions`}</code>
            </Typography>
            <Typography
                className="text-base mt-3 mb-2.5"
                component="h4"
            >
                Arguments
            </Typography>
            <ol>
                <li>
                    <code>config</code> (<em>object</em> [optional]):
                </li>
            </ol>
            <ul className="space-y-4">
                <li>
                    <code>config.ignoreAccents</code> (<em>bool</em> [optional]): Defaults to <code>true</code>. Strips diacritics from text.
                </li>
                <li>
                    <code>config.ignoreCase</code> (<em>bool</em> [optional]): Defaults to <code>true</code>. Converts text to lowercase.
                </li>
                <li>
                    <code>config.limit</code> (<em>number</em> [optional]): Defaults to null. Restricts the number of suggested options displayed. For example, setting <code>config.limit</code> to <code>100</code> shows only the first 100 matching options, useful when many options match and virtualization is not used.
                </li>
                <li>
                    <code>config.matchFrom</code> (<em>'any' | 'start'</em> [optional]): Defaults to <code>{`'any'`}</code>.
                </li>
                <li>
                    <code>config.stringify</code> (<em>func</em> [optional]): Defines how an option is converted to a string for matching against the input text.
                </li>
                <li>
                    <code>config.trim</code> (<em>bool</em> [optional]): Defaults to <code>false</code>. Removes trailing spaces.
                </li>
            </ul>
            <Typography
                className="text-base mt-3 mb-2.5"
                component="h4"
            >
                Returns
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <code>filterOptions</code>: The returned filter method can be directly passed to the <code>filterOptions</code> prop of the <code>Autocomplete</code> component or the equivalent hook parameter.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                In this example, options must begin with the query prefix:
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {`
                const filterOptions = createFilterOptions({
                  matchFrom: 'start',
                  stringify: (option) => option.title,
                });
                
                <Autocomplete filterOptions={filterOptions} />;
                `}
            </SingularityHighlight>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="Filter.js"
                    className="my-4"
                    iframe={false}
                    component={FilterComponent}
                    raw={FilterRaw}
                />
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                Advanced
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                For advanced filtering, such as fuzzy matching, consider using <a href="https://github.com/kentcdodds/match-sorter">match-sorter</a>. For example:
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {`
                import { matchSorter } from 'match-sorter';
                
                const filterOptions = (options, { inputValue }) => matchSorter(options, inputValue);
                
                <Autocomplete filterOptions={filterOptions} />;
                `}
            </SingularityHighlight>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Virtualization
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Search through 10,000 randomly generated options, with the list virtualized using <a href="https://github.com/bvaughn/react-window">react-window</a>.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                <SingularityExample
                    name="Virtualize.js"
                    className="my-4"
                    iframe={false}
                    component={VirtualizeComponent}
                    raw={VirtualizeRaw}
                />
            </Typography>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Events
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                To override the default key handler behavior, set the event’s <code>defaultMuiPrevented</code> property to <code>true</code>:
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {`
                <Autocomplete
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      // Prevents the default 'Enter' behavior.
                      event.defaultMuiPrevented = true;
                      // Your event handler code
                    }
                  }}
                />
                `}
            </SingularityHighlight>
            <Typography
                className="text-3xl mt-6 mb-2.5 font-bold"
                component="h2"
            >
                Limitations
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                autocomplete/autofill
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Browsers use heuristics to assist users in filling form inputs, which can sometimes negatively impact the component’s user experience.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                By default, the component disables the <strong>autocomplete</strong> feature (recalling previous user inputs for a field) with the <code>{`autoComplete="off"`}</code> attribute. Note that Google Chrome does not currently support this attribute (<a href="https://issues.chromium.org/issues/41239842">Issue 41239842</a>). A workaround is to omit the <code>id</code> attribute, allowing the component to generate a random one.
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Besides recalling past inputs, browsers may suggest <strong>autofill</strong> options (e.g., saved logins, addresses, or payment details). To prevent autofill, consider these approaches:
            </Typography>
            <ul className="space-y-4">
                <li>
                    <Typography
                        className="text-base mb-8"
                        component="div"
                    >
                        Use a generic input name that avoids providing browser-detectable information, such as <code>{`id="field1"`}</code> instead of <code>{`id="country"`}</code>. Leaving the id blank allows the component to assign a random one.
                    </Typography>
                </li>
                <li>
                    <Typography
                        className="text-base mb-8"
                        component="div"
                    >
                        Set <code>{`autoComplete="new-password"`}</code> (some browsers may suggest a strong password for inputs with this setting):
                    </Typography>

                    <SingularityHighlight
                        component="pre"
                        className="language-jsx"
                    >
                        {`
                        <TextField
                          {...params}
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password',
                          }}
                        />
                        `}
                    </SingularityHighlight>
                </li>
            </ul>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                Consult <a href="https://developer.mozilla.org/en-US/docs/Web/Security/Practical_implementation_guides/Turning_off_form_autocompletion">the MDN guide</a> for further details.
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                iOS VoiceOver
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                VoiceOver on iOS Safari has limited support for the <code>aria-owns</code> attribute. Use the <code>disablePortal</code> prop to address this issue.
            </Typography>
            <Typography
                className="text-lg mt-5 mb-2.5 font-bold"
                component="h3"
            >
                ListboxComponent
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                When providing a custom <code>ListboxComponent</code> prop, ensure the intended scroll container has the <code>role</code> attribute set to <code>listbox</code> to support proper scroll behavior, such as keyboard navigation.
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
                (WAI-ARIA: <a href="https://www.w3.org/WAI/ARIA/apg/patterns/combobox/">https://www.w3.org/WAI/ARIA/apg/patterns/combobox/</a>)
            </Typography>
            <Typography
                className="text-base mb-8"
                component="div"
            >
                We recommend using a label for the text input. The component adheres to WAI-ARIA authoring practices.
            </Typography>
        </>
    );
}

export default AutocompleteDoc;