import SingularityLoading from '@singularity/core/SingularityLoading';
import { ReactNode, Suspense } from 'react';
import { SingularityLoadingProps } from '@singularity/core/SingularityLoading/SingularityLoading';

type SingularitySuspenseProps = {
	loadingProps?: SingularityLoadingProps;
	children: ReactNode;
};

/**
 * The SingularitySuspense component is a wrapper around the React Suspense component.
 * It is used to display a loading spinner while the wrapped components are being loaded.
 * The component is memoized to prevent unnecessary re-renders.
 * React Suspense defaults
 * For to Avoid Repetition
 */
function SingularitySuspense(props: SingularitySuspenseProps) {
	const { children, loadingProps } = props;
	return <Suspense fallback={<SingularityLoading {...loadingProps} />}>{children}</Suspense>;
}

export default SingularitySuspense;
