import * as React from 'react';
import ReactDOM from 'react-dom';
import { styled } from '@mui/material/styles';
import { useRef } from 'react';
import DemoContainer from './DemoContainer';

const Frame = styled('iframe')(({ theme }) => ({
	backgroundColor: theme.vars.palette.background.default,
	flexGrow: 1,
	height: 400,
	border: 0,
	boxShadow: theme.shadows[1]
}));

type DemoContainerProps = {
	name: string;
	children: React.ReactElement;
	other?: React.HTMLAttributes<HTMLElement>;
};

/**
 * DemoContainer component for rendering a styled iframe
 */
function DemoContainer(props: DemoContainerProps) {
    const { children, name, ...other } = props;
    const title = `${name} demo`;

    const frameRef = useRef<HTMLIFrameElement>(null);

    // Loading portal content into the iframe before the load event can cause the content
    // to be dropped in Firefox.
    const [iframeLoaded, onLoad] = React.useReducer(() => true, false);

    React.useEffect(() => {
        const document = frameRef.current?.contentDocument;

        // During iframe hydration, the load event may already have been triggered
        // after the iframe markup is parsed, before React can attach event listeners.
        // We check the document's readyState upon iframe mounting to detect and
        // handle any missed load events.
        // (though not specifically designed for iframes).
		if (document != null && document.readyState === 'complete' && !iframeLoaded) {
			onLoad();
		}
	}, [iframeLoaded]);

	const document = frameRef.current?.contentDocument;

	return (
		<>
			<Frame
				onLoad={onLoad}
				ref={frameRef}
				title={title}
				{...other}
			/>
			{iframeLoaded !== false
				? ReactDOM.createPortal(<DemoContainer document={document}>{children}</DemoContainer>, document.body)
				: null}
		</>
	);
}

export default DemoContainer;
