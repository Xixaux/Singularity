import { useEffect, useState } from 'react';

type SingularityAsyncRenderProps = {
	delay?: number;
	children: React.ReactNode;
};

function SingularityAsyncRender(props: SingularityAsyncRenderProps) {
	const { delay = 0, children } = props;
	const [awaitRender, setAwaitRender] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setAwaitRender(false);
		}, delay);
	}, [delay]);

	return awaitRender ? null : children;
}

export default SingularityAsyncRender;
