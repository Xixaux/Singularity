'use client';

import { useEffect, useState } from 'react';
import { useTheme, Theme } from '@mui/material/styles';

/**
 * The useThemeMediaQuery function is a custom hook that returns a boolean indicating whether the current screen matches the specified media query.
 * It takes in a themeCallbackFunc as a parameter, which is a function that returns a string representing the media query to match.
 * It returns a boolean indicating whether the current screen matches the specified media query.
 */
function useThemeMediaQuery(themeCallbackFunc: (theme: Theme) => string) {
	const theme = useTheme();

	const query = themeCallbackFunc(theme).replace('@media ', '');

	const [hasMounted, setHasMounted] = useState(false);
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	useEffect(() => {
		if (hasMounted) {
			const mediaQuery = window.matchMedia(query);

			setMatches(mediaQuery.matches);

			const handler = (event: MediaQueryListEvent) => setMatches(event.matches);
			mediaQuery.addEventListener('change', handler);

			return () => mediaQuery.removeEventListener('change', handler);
		}

		return undefined;
	}, [query, hasMounted]);

	if (!hasMounted) {
		return false;
	}

	return matches;
}

export default useThemeMediaQuery;
