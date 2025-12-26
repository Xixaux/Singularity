'use client';

import * as React from 'react';
import { useMemo } from 'react';
import rtlPlugin from 'stylis-plugin-rtl';
import SingularityTheme from '@singularity/core/SingularityTheme';
import { useMainTheme } from '@singularity/core/SingularitySettings/hooks/SingularityThemeHooks';
import createCache, { Options, StylisPlugin } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

type MainThemeProviderProps = {
	children: React.ReactNode;
};
const wrapInLayer: (layerName: string) => StylisPlugin = (layerName) => (node) => {
	if (node.root) {
		return;
	}

	// If at the root, replace node with `@layer layerName { node }`
	const child = { ...node, parent: node, root: node };
	Object.assign(node, {
		children: [child],
		length: 6,
		parent: null,
		props: [layerName],
		return: '',
		root: null,
		type: '@layer',
		value: `@layer ${layerName}`
	});
};

const emotionCacheOptions: Record<string, Options> = {
	rtl: {
		key: 'muirtl',
		stylisPlugins: [rtlPlugin, wrapInLayer('mui')],
		prepend: false
	},
	ltr: {
		key: 'muiltr',
		stylisPlugins: [wrapInLayer('mui')],
		prepend: false
	}
};

function MainThemeProvider({ children }: MainThemeProviderProps) {
	const mainTheme = useMainTheme();
	const langDirection = mainTheme?.direction;

	const cacheProviderValue = useMemo(() => createCache(emotionCacheOptions[langDirection]), [langDirection]);

	return (
		<CacheProvider value={cacheProviderValue}>
			<SingularityTheme
				theme={mainTheme}
				root
			>
				{children}
			</SingularityTheme>
		</CacheProvider>
	);
}

export default MainThemeProvider;
