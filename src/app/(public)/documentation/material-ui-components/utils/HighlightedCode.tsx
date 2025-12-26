import SingularityHighlight from '@singularity/core/SingularityHighlight';

type HighlightedCodeProps = {
	code: string;
	language: string;
	ref?: React.RefObject<HTMLDivElement>;
};

export function HighlightedCode(props: HighlightedCodeProps) {
	const { code, ref, language, ...other } = props;

	return (
		<SingularityHighlight
			component="pre"
			className={`language-${language || 'jsx'}`}
			ref={ref}
			{...other}
		>
			{code}
		</SingularityHighlight>
	);
}

export default HighlightedCode;
