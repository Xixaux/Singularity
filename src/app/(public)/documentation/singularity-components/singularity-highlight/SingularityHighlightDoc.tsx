import SingularityHighlight from '@singularity/core/SingularityHighlight';
import Typography from '@mui/material/Typography';

/**
 * SingularityHighlight Doc
 * This document provides information on how to use the SingularityHighlight.
 */
function SingularityHighlightDoc() {
    return (
        <>
            <Typography
                variant="h4"
                className="mb-10 font-bold"
            >
                SingularityHighlight
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                The <code>SingularityHighlight</code> is a customized Singularity component that enables syntax-highlighted code display using
                <a
                    href="http://prismjs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2"
                >
                    PrismJS
                </a>.
            </Typography>

            <Typography
                className="text-2xl mt-5 mb-2.5 font-bold"
                variant="h5"
            >
                Usage
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-jsx"
            >
                {`
                                 <SingularityHighlight component="pre" className="language-html">
                                   <div className="title">
                                        <span>Example Title</span>
                                    </div>
                                 </SingularityHighlight>
                                `}
            </SingularityHighlight>

            <Typography
                className="text-2xl mt-5 mb-2.5 font-bold"
                variant="h5"
            >
                Preview
            </Typography>

            <SingularityHighlight
                component="pre"
                className="language-html"
            >
                {`
                            <div className="title">
                                <span>Example Title</span>
                            </div>
                            `}
            </SingularityHighlight>
        </>
    );
}

export default SingularityHighlightDoc;