import { lazy, memo, Suspense } from 'react';

const OverlayPanel = lazy(() => import('@/components/theme-layouts/components/overlay-panel/OverlayPanel'));
const MessengerPanel = lazy(() => import('@/app/(control-panel)/apps/messenger/messengerPanel/MessengerPanel'));
const NotificationPanel = lazy(() => import('@/app/(control-panel)/apps/notifications/NotificationPanel'));

/**
 * The right side layout 1.
 */
function RightSideLayout1() {
	return (
		<Suspense>
			<OverlayPanel />

			<MessengerPanel />

			<NotificationPanel />
		</Suspense>
	);
}

export default memo(RightSideLayout1);
