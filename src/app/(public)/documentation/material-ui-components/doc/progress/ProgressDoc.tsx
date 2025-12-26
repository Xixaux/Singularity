'use client';

import SingularityExample from '@singularity/core/SingularityExample';
import SingularityHighlight from '@singularity/core/SingularityHighlight';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularIndeterminateComponent from '../../components/progress/CircularIndeterminate';
import CircularIndeterminateRaw from '../../components/progress/CircularIndeterminate.tsx?raw';
import CircularColorComponent from '../../components/progress/CircularColor';
import CircularColorRaw from '../../components/progress/CircularColor.tsx?raw';
import CircularSizeComponent from '../../components/progress/CircularSize';
import CircularSizeRaw from '../../components/progress/CircularSize.tsx?raw';
import CircularDeterminateComponent from '../../components/progress/CircularDeterminate';
import CircularDeterminateRaw from '../../components/progress/CircularDeterminate.tsx?raw';
import CircularIntegrationComponent from '../../components/progress/CircularIntegration';
import CircularIntegrationRaw from '../../components/progress/CircularIntegration.tsx?raw';
import CircularWithValueLabelComponent from '../../components/progress/CircularWithValueLabel';
import CircularWithValueLabelRaw from '../../components/progress/CircularWithValueLabel.tsx?raw';
import LinearIndeterminateComponent from '../../components/progress/LinearIndeterminate';
import LinearIndeterminateRaw from '../../components/progress/LinearIndeterminate.tsx?raw';
import LinearColorComponent from '../../components/progress/LinearColor';
import LinearColorRaw from '../../components/progress/LinearColor.tsx?raw';
import LinearDeterminateComponent from '../../components/progress/LinearDeterminate';
import LinearDeterminateRaw from '../../components/progress/LinearDeterminate.tsx?raw';
import LinearBufferComponent from '../../components/progress/LinearBuffer';
import LinearBufferRaw from '../../components/progress/LinearBuffer.tsx?raw';
import LinearWithValueLabelComponent from '../../components/progress/LinearWithValueLabel';
import LinearWithValueLabelRaw from '../../components/progress/LinearWithValueLabel.tsx?raw';
import CustomizedProgressBarsComponent from '../../components/progress/CustomizedProgressBars';
import CustomizedProgressBarsRaw from '../../components/progress/CustomizedProgressBars.tsx?raw';
import DelayingAppearanceComponent from '../../components/progress/DelayingAppearance';
import DelayingAppearanceRaw from '../../components/progress/DelayingAppearance.tsx?raw';
import CircularUnderLoadComponent from '../../components/progress/CircularUnderLoad';
import CircularUnderLoadRaw from '../../components/progress/CircularUnderLoad.tsx?raw';

interface ProgressDocProps {
  className?: string;
}

function ProgressDoc({ className }: ProgressDocProps) {
  return (
    <div className={className}>
      <Button
        className="normal-case absolute right-0 not-prose"
        variant="contained"
        color="secondary"
        component="a"
        href="https://mui.com/components/progress"
        target="_blank"
        role="button"
        size="small"
        startIcon={<SingularitySvgIcon size={16}>heroicons-outline:arrow-top-right-on-square</SingularitySvgIcon>}
      >
        Reference
      </Button>
      <Typography className="text-5xl my-4 font-bold" component="h1">
        Progress
      </Typography>
      <Typography className="description">
        Progress indicators, often referred to as spinners, convey either an indefinite wait period or show the duration of a task.
      </Typography>
      <Typography className="text-base mb-8" component="div">
        Progress indicators provide users with updates on the status of ongoing tasks, such as application loading, form submission, or data saving.
      </Typography>
      <ul className="space-y-4">
        <li>
          <strong>Determinate</strong> indicators illustrate the expected duration of a process.
        </li>
        <li>
          <strong>Indeterminate</strong> indicators depict an unspecified waiting period.
        </li>
      </ul>
      <Typography className="text-base mb-8" component="div">
        The components' animations leverage CSS to the fullest to ensure functionality even before JavaScript is fully loaded.
      </Typography>
      <Typography className="text-3xl mt-6 mb-2.5 font-bold" component="h2">
        Circular
      </Typography>
      <Typography className="text-lg mt-5 mb-2.5 font-bold" component="h3">
        Circular indeterminate
      </Typography>
      <Typography className="text-base mb-8" component="div">
        <SingularityExample
          name="CircularIndeterminate.js"
          className="my-4"
          iframe={false}
          component={CircularIndeterminateComponent}
          raw={CircularIndeterminateRaw}
        />
      </Typography>
      <Typography className="text-lg mt-5 mb-2.5 font-bold" component="h3">
        Circular color
      </Typography>
      <Typography className="text-base mb-8" component="div">
        <SingularityExample
          name="CircularColor.js"
          className="my-4"
          iframe={false}
          component={CircularColorComponent}
          raw={CircularColorRaw}
        />
      </Typography>
      <Typography className="text-lg mt-5 mb-2.5 font-bold" component="h3">
        Circular size
      </Typography>
      <Typography className="text-base mb-8" component="div">
        <SingularityExample
          name="CircularSize.js"
          className="my-4"
          iframe={false}
          component={CircularSizeComponent}
          raw={CircularSizeRaw}
        />
      </Typography>
      <Typography className="text-lg mt-5 mb-2.5 font-bold" component="h3">
        Circular determinate
      </Typography>
      <Typography className="text-base mb-8" component="div">
        <SingularityExample
          name="CircularDeterminate.js"
          className="my-4"
          iframe={false}
          component={CircularDeterminateComponent}
          raw={CircularDeterminateRaw}
        />
      </Typography>
      <Typography className="text-lg mt-5 mb-2.5 font-bold" component="h3">
        Interactive integration
      </Typography>
      <Typography className="text-base mb-8" component="div">
        <SingularityExample
          name="CircularIntegration.js"
          className="my-4"
          iframe={false}
          component={CircularIntegrationComponent}
          raw={CircularIntegrationRaw}
        />
      </Typography>
      <Typography className="text-lg mt-5 mb-2.5 font-bold" component="h3">
        Circular with label
      </Typography>
      <Typography className="text-base mb-8" component="div">
        <SingularityExample
          name="CircularWithValueLabel.js"
          className="my-4"
          iframe={false}
          component={CircularWithValueLabelComponent}
          raw={CircularWithValueLabelRaw}
        />
      </Typography>
      <Typography className="text-3xl mt-6 mb-2.5 font-bold" component="h2">
        Linear
      </Typography>
      <Typography className="text-lg mt-5 mb-2.5 font-bold" component="h3">
        Linear indeterminate
      </Typography>
      <Typography className="text-base mb-8" component="div">
        <SingularityExample
          name="LinearIndeterminate.js"
          className="my-4"
          iframe={false}
          component={LinearIndeterminateComponent}
          raw={LinearIndeterminateRaw}
        />
      </Typography>
      <Typography className="text-lg mt-5 mb-2.5 font-bold" component="h3">
        Linear color
      </Typography>
      <Typography className="text-base mb-8" component="div">
        <SingularityExample
          name="LinearColor.js"
          className="my-4"
          iframe={false}
          component={LinearColorComponent}
          raw={LinearColorRaw}
        />
      </Typography>
      <Typography className="text-lg mt-5 mb-2.5 font-bold" component="h3">
        Linear determinate
      </Typography>
      <Typography className="text-base mb-8" component="div">
        <SingularityExample
          name="LinearDeterminate.js"
          className="my-4"
          iframe={false}
          component={LinearDeterminateComponent}
          raw={LinearDeterminateRaw}
        />
      </Typography>
      <Typography className="text-lg mt-5 mb-2.5 font-bold" component="h3">
        Linear buffer
      </Typography>
      <Typography className="text-base mb-8" component="div">
        <SingularityExample
          name="LinearBuffer.js"
          className="my-4"
          iframe={false}
          component={LinearBufferComponent}
          raw={LinearBufferRaw}
        />
      </Typography>
      <Typography className="text-lg mt-5 mb-2.5 font-bold" component="h3">
        Linear with label
      </Typography>
      <Typography className="text-base mb-8" component="div">
        <SingularityExample
          name="LinearWithValueLabel.js"
          className="my-4"
          iframe={false}
          component={LinearWithValueLabelComponent}
          raw={LinearWithValueLabelRaw}
        />
      </Typography>
      <Typography className="text-3xl mt-6 mb-2.5 font-bold" component="h2">
        Non-standard ranges
      </Typography>
      <Typography className="text-base mb-8" component="div">
        Progress components accept values between 0 and 100, simplifying accessibility for screen-reader users with these as default minimum and maximum values. However, if your data source uses a different range, you can transform those values to fit the 0–100 scale as shown below:
      </Typography>
      <SingularityHighlight component="pre" className="language-jsx">
        {` 
// MIN = Minimum expected value
// MAX = Maximum expected value
// Method to normalize the values (MIN / MAX could be integrated)
const normalise = (value) => ((value - MIN) * 100) / (MAX - MIN);

// Example component that utilizes the \`normalise\` function at the point of render.
function Progress(props) {
  return (
    <React.Fragment>
      <CircularProgress variant="determinate" value={normalise(props.value)} />
      <LinearProgress variant="determinate" value={normalise(props.value)} />
    </React.Fragment>
  );
}
`}
      </SingularityHighlight>
      <Typography className="text-3xl mt-6 mb-2.5 font-bold" component="h2">
        Customization
      </Typography>
      <Typography className="text-base mb-8" component="div">
        Below are examples of tailoring the component. Further details can be found in the{' '}
        <a href="/material-ui/customization/how-to-customize/">overrides documentation page</a>.
      </Typography>
      <Typography className="text-base mb-8" component="div">
        <SingularityExample
          name="CustomizedProgressBars.js"
          className="my-4"
          iframe={false}
          component={CustomizedProgressBarsComponent}
          raw={CustomizedProgressBarsRaw}
        />
      </Typography>
      <Typography className="text-3xl mt-6 mb-2.5 font-bold" component="h2">
        Delaying appearance
      </Typography>
      <Typography className="text-base mb-8" component="div">
        There are{' '}
        <a href="https://www.nngroup.com/articles/response-times-3-important-limits/">three critical thresholds</a> to understand regarding response times. The ripple effect in the <code>ButtonBase</code> component creates an immediate sense of responsiveness. Typically, no additional feedback is needed for delays between 0.1 and 1.0 seconds. Beyond 1.0 second, displaying a loader helps maintain the user’s thought flow.
      </Typography>
      <Typography className="text-base mb-8" component="div">
        <SingularityExample
          name="DelayingAppearance.js"
          className="my-4"
          iframe={false}
          component={DelayingAppearanceComponent}
          raw={DelayingAppearanceRaw}
        />
      </Typography>
      <Typography className="text-3xl mt-6 mb-2.5 font-bold" component="h2">
        Limitations
      </Typography>
      <Typography className="text-lg mt-5 mb-2.5 font-bold" component="h3">
        High CPU load
      </Typography>
      <Typography className="text-base mb-8" component="div">
        During intense processing, you may notice the loss of stroke dash animations or inconsistent <code>CircularProgress</code> ring widths. To avoid blocking the main rendering thread, consider running demanding operations in a web worker or processing them in batches.
      </Typography>
      <video autoPlay muted loop playsInline width="1082" height="158" style={{ width: '541px' }}>
        <source src="/material-ui-static/material-ui/react-components/progress-heavy-load.mp4" type="video/mp4" />
      </video>
      <Typography className="text-base mb-8" component="div">
        When this isn’t feasible, using the <code>disableShrink</code> prop can help address the issue. Refer to <a href="https://github.com/mui/material-ui/issues/10327">this issue</a> for more details.
      </Typography>
      <Typography className="text-base mb-8" component="div">
        <SingularityExample
          name="CircularUnderLoad.js"
          className="my-4"
          iframe={false}
          component={CircularUnderLoadComponent}
          raw={CircularUnderLoadRaw}
        />
      </Typography>
      <Typography className="text-lg mt-5 mb-2.5 font-bold" component="h3">
        High frequency updates
      </Typography>
      <Typography className="text-base mb-8" component="div">
        The <code>LinearProgress</code> component employs a CSS transform property transition for smooth value updates, with a default duration of 200ms. If a parent component updates the <code>value</code> prop too rapidly, there will be at least a 200ms delay before the progress bar fully reflects the change.
      </Typography>
      <Typography className="text-base mb-8" component="div">
        For scenarios requiring 30 or more re-renders per second, we suggest disabling the transition as shown below:
      </Typography>
      <SingularityHighlight component="pre" className="language-css">
        {` 
.MuiLinearProgress-bar {
  transition: none;
}
`}
      </SingularityHighlight>
    </div>
  );
}

export default ProgressDoc;