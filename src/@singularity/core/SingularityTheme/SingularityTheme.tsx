import { ThemeProvider, Theme } from '@mui/material/styles';
import { memo, ReactNode, useEffect, useLayoutEffect } from 'react';
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';

/**
 * The useEnhancedEffect function is used to conditionally use the useLayoutEffect hook if the window object is defined.
 * Otherwise, it uses the useEffect hook.
 */
const useEnhancedEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

type SingularityThemeProps = {
	children: ReactNode;
	theme: Theme;
	root?: boolean;
};

const inputGlobalStyles = (
	<GlobalStyles
		styles={(theme) => ({
			html: {
				backgroundColor: `${theme.vars.palette.background.default}`,
				color: `${theme.vars.palette.text.primary}`
			},
			body: {
				backgroundColor: theme.vars.palette.background.default,
				color: theme.vars.palette.text.primary
			},
			/*  'code:not([class*="language-"])': {
        color: theme.vars.palette.secondary.dark,
        backgroundColor:
          theme.palette.mode === 'light' ? 'rgba(255, 255, 255, .9)' : 'rgba(0, 0, 0, .9)',
        padding: '2px 3px',
        borderRadius: 2,
        lineHeight: 1.7,
      }, */
			'& .MuiOutlinedInput-root': {
				backgroundColor: theme.vars.palette.common.background
			},
			'& .border-divider ': {
				borderColor: `${theme.vars.palette.divider}`
			},
			'table.simple tbody tr th': {
				borderColor: theme.vars.palette.divider
			},
			'table.simple thead tr th': {
				borderColor: theme.vars.palette.divider
			},
			'a:not([role=button]):not(.MuiButtonBase-root)': {
				color: theme.vars.palette.secondary.main,
				textDecoration: 'underline',
				'&:hover': {}
			},
			'a.link, a:not([role=button])[target=_blank]': {
			color: 'inherit',
			borderBottom: `0px solid ${theme.vars.palette.divider}`,
			textDecoration: 'none',
			'&:hover': {
			}
			},
			'[class^="border"]': {
				borderColor: theme.vars.palette.divider
			},
			'[class*="border"]': {
				borderColor: theme.vars.palette.divider
			},
			'[class*="divide-"] > :not([hidden])': {
				borderColor: theme.vars.palette.divider
			},
			hr: {
				borderColor: theme.vars.palette.divider
			},
			'::-webkit-scrollbar-thumb': {
				boxShadow: `inset 0 0 0 20px ${
					theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.24)' : 'rgba(255, 255, 255, 0.24)'
				}`
			},
			'::-webkit-scrollbar-thumb:active': {
				boxShadow: `inset 0 0 0 20px ${
					theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.37)' : 'rgba(255, 255, 255, 0.37)'
				}`
			}
		})}
	/>
);

/**
 * The SingularityTheme component is responsible for rendering the MUI ThemeProvider component with the specified theme and direction.
 * It also sets the direction of the document body and adds a class to the body based on the current theme mode.
 * The component is memoized to prevent unnecessary re-renders.
 */
function SingularityTheme(props: SingularityThemeProps) {
	const { theme, children, root = false } = props;
	const { mode } = theme.palette;
	const langDirection = theme.direction;

	useEnhancedEffect(() => {
		if (root) {
			document.documentElement.dir = langDirection;
		}
	}, [langDirection]);

	useEffect(() => {
		if (root) {
			document.body.classList.add(mode === 'light' ? 'light' : 'dark');
			document.body.classList.remove(mode === 'light' ? 'dark' : 'light');
		}
	}, [mode, root]);

	// console.warn('SingularityTheme:: rendered',mainTheme);
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
			{root && inputGlobalStyles}
		</ThemeProvider>
	);
}

export default memo(SingularityTheme);
