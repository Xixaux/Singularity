import { useEffect, useRef } from 'react';

function useEventListener<T extends Event>(
	eventName: string,
	handler: (event: T) => void,
	element: HTMLElement | Window = window
) {
	const savedHandler = useRef<(event: T) => void>(undefined);

	useEffect(() => {
		savedHandler.current = handler;
	}, [handler]);

	useEffect(() => {
		const isSupported = Boolean(element && element.addEventListener);

		const eventListener = (event: Event) => {
			if (savedHandler.current) {
				savedHandler.current(event as T);
			}
		};

		if (isSupported) {
			element.addEventListener(eventName, eventListener);
		}

		return () => {
			if (isSupported) {
				element.removeEventListener(eventName, eventListener);
			}
		};
	}, [eventName, element]);
}

export default useEventListener;
