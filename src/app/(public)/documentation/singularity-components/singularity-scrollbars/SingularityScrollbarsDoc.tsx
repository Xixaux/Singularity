import SingularityHighlight from '@singularity/core/SingularityHighlight';
import Typography from '@mui/material/Typography';

/**
 * SingularityScrollbars Doc
 * This document provides information on how to use the SingularityScrollbars.
 */
function SingularityScrollbarsDoc() {
	return (
		<>
			<Typography
				variant="h4"
				className="mb-10 font-bold"
			>
				SingularityScrollbars
			</Typography>

			<Typography
				className="mb-4"
				component="p"
			>
				<code>SingularityScrollbars</code> is a simple{' '}
				<a
					href="http://utatti.github.io/perfect-scrollbar/"
					target="_blank"
					rel="noreferrer noopener"
				>
					perfect-scrollbar
				</a>{' '}
				component for react.
			</Typography>

			<Typography
				className="mb-4"
				component="p"
			>
				It can be disabled globally by Singularity Settings (<code>app/configs/settingsConfig.tsx</code>).
			</Typography>

			<SingularityHighlight
				component="pre"
				className="language-jsx"
			>
				{`
                                <SingularityScrollbars className={classes.content}>
                                    Content
                                </SingularityScrollbars>
                                `}
			</SingularityHighlight>

			<Typography
				className="text-2xl mt-5 mb-2.5 font-bold"
				variant="h5"
			>
				Props
			</Typography>

			<SingularityHighlight
				component="pre"
				className="language-jsx"
			>
				{`
                               {
                                    className               : '',
                                    enable                  : true,
                                    scrollToTopOnChildChange: false,
                                    scrollToTopOnRouteChange: false,
                                    option                  : {
                                        wheelPropagation: true
                                    },
                                    ref                     : undefined,
                                    onScrollY               : undefined,
                                    onScrollX               : undefined,
                                    onScrollUp              : undefined,
                                    onScrollDown            : undefined,
                                    onScrollLeft            : undefined,
                                    onScrollRight           : undefined,
                                    onYReachStart           : undefined,
                                    onYReachEnd             : undefined,
                                    onXReachStart           : undefined,
                                    onXReachEnd             : undefined
                                };
                                `}
			</SingularityHighlight>
		</>
	);
}

export default SingularityScrollbarsDoc;
