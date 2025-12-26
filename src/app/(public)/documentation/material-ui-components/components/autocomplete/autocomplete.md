---
productId: material-ui
title: React Autocomplete Component
components: TextField, Popper, Autocomplete
githubLabel: 'component: autocomplete'
waiAria: https://www.w3.org/WAI/ARIA/apg/patterns/combobox/
githubSource: packages/mui-material/src/Autocomplete
---

# Autocomplete Component

The Autocomplete component enhances a standard text input by providing a dropdown panel of suggested options, streamlining user input.

This component is ideal for scenarios such as:
1. Requiring the user to select from a fixed list of valid options, like choosing a city in a location field (known as a combo box).
2. Allowing any text input but offering suggestions to improve efficiency, such as displaying past search terms in a search bar (free solo mode).

It serves as an advanced alternative to libraries like `react-select` and `downshift`.

## Combo Box

In this mode, users must select from a predefined list of options.

*Example*: A dropdown where users pick from a set list of items.

### Option Formats

The component supports options in these formats by default:
- Objects with a `label` property (e.g., `[{ label: 'Option 1', id: 1 }, { label: 'Option 2', id: 2 }]`)
- Simple strings (e.g., `['Option 1', 'Option 2']`)

For custom option structures, use the `getOptionLabel` prop to specify how labels are extracted. When using object-based options, provide an `isOptionEqualToValue` prop to ensure accurate selection and highlighting, as the default comparison uses strict equality.

### Interactive Example

Explore various features of the Autocomplete component through interactive demos.

*Example*: A playground showcasing different configuration options.

### Country Selector

Select from a list of 248 countries.

*Example*: A dropdown for choosing a country.

### Controlled vs. Uncontrolled States

The component manages two independent states:
1. **Value**: Controlled via `value` and `onChange` props, reflecting the user's final selection (e.g., after pressing Enter).
2. **Input Value**: Controlled via `inputValue` and `onInputChange` props, representing the text currently in the input field.

These states are separate and should be managed independently. A **controlled** component relies on parent props, while an **uncontrolled** component uses internal state (see [React's documentation](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components) for details).

*Example*: Demonstrates managing both states explicitly.

> **Note**: For controlled values, ensure the value reference remains stable across renders to avoid performance issues. Use tools like `useMemo` to memoize arrays when filtering options.

## Free Solo Mode

Enable `freeSolo` to allow users to enter any text, not restricted to the provided options.

### Search Input Use Case

Ideal for search inputs where suggestions (e.g., past searches) enhance the experience, similar to Google’s autocomplete or `react-autowhatever`.

*Example*: A search bar with dynamic suggestions.

> **Caution**: In free solo mode, typed input is always a string, which may cause type mismatches with non-string options.

### Creatable Options

For a combo box-like experience with free solo, consider enabling:
- `selectOnFocus`: Clears the input when focused.
- `clearOnBlur`: Resets the input after leaving focus.
- `handleHomeEndKeys`: Supports navigation with Home/End keys.
- Custom options, like adding a new entry based on user input.

*Example*: A demo allowing users to create new options dynamically.

*Example*: A dialog-based approach for adding new values.

## Grouped Options

Use the `groupBy` prop to organize options into groups. Ensure options are sorted by the same criterion used for grouping to avoid duplicate headers.

*Example*: A demo with grouped options.

You can customize group rendering with the `renderGroup` prop, which receives:
- `group`: The group name (string).
- `children`: The list items within the group.

*Example*: A demo customizing group appearance and styles.

## Disabled Options

Disable specific options to prevent selection.

*Example*: A demo with disabled options.

## `useAutocomplete` Hook

For advanced customization, the `useAutocomplete` hook provides the core functionality of the Autocomplete component without JSX rendering. It accepts most of the same props as the component, excluding those related to UI.

```tsx
import { useAutocomplete } from '@mui/base/useAutocomplete';
// or, for convenience:
import useAutocomplete from '@mui/material/useAutocomplete';