import SingularityCountdown from '@singularity/core/SingularityCountdown';
import SingularityHighlight from '@singularity/core/SingularityHighlight';
import Typography from '@mui/material/Typography';
import Link from '@singularity/core/Link';

/**
 * SingularityCountdown Doc
 * This document provides information on how to use the SingularityCountdown.
 */
function SingularityCountdownDoc() {
    return (
        <>
            <Typography
                variant="h4"
                className="mb-10 font-bold"
            >
                SingularityCountdown
            </Typography>

            <Typography
                className="mb-4"
                component="p"
            >
                The <code>SingularityCountdown</code> is a tailored Singularity component designed for creating countdown timers.
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
          <SingularityCountdown endDate="2071-10-29" className="my-12"/>
        `}
            </SingularityHighlight>

            <Typography
                className="text-2xl mt-5 mb-2.5 font-bold"
                variant="h5"
            >
                Preview
            </Typography>

            <SingularityCountdown
                endDate="2071-10-29"
                className="my-12"
            />

            <Typography
                className="text-2xl mt-5 mb-2.5 font-bold"
                variant="h5"
            >
                Demos
            </Typography>

            <ul>
                <li className="mb-2">
                    <Link to="/pages/coming-soon/classic">Coming Soon</Link>
                </li>
            </ul>
        </>
    );
}

export default SingularityCountdownDoc;