'use client';

import { styled } from '@mui/material/styles';
import MobileDetect from 'mobile-detect';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import React, { useEffect, useRef, ReactNode, useCallback, useState, useMemo } from 'react';
import usePathname from '@singularity/hooks/usePathname';
import useSingularitySettings from '@singularity/core/SingularitySettings/hooks/useSingularitySettings';
import { debounce } from 'lodash';

const Root = styled('div')(({ theme }) => ({
  overscrollBehavior: 'contain',
  minHeight: '100%',
  backgroundColor: theme.vars.palette.background.default,
  color: theme.vars.palette.text.primary,
}));

const md = typeof window !== 'undefined' ? new MobileDetect(window.navigator.userAgent) : null;
const isMobile = md?.mobile();

const handlerNameByEvent = Object.freeze({
  'ps-scroll-y': 'onScrollY',
  'ps-scroll-x': 'onScrollX',
  'ps-scroll-up': 'onScrollUp',
  'ps-scroll-down': 'onScrollDown',
  'ps-scroll-left': 'onScrollLeft',
  'ps-scroll-right': 'onScrollRight',
  'ps-y-reach-start': 'onYReachStart',
  'ps-y-reach-end': 'onYReachEnd',
  'ps-x-reach-start': 'onXReachStart',
  'ps-x-reach-end': 'onXReachEnd',
});

export type SingularityScrollbarsProps = {
  id?: string;
  className?: string;
  children?: ReactNode;
  enable?: boolean;
  scrollToTopOnChildChange?: boolean;
  scrollToTopOnRouteChange?: boolean;
  option?: {
    wheelPropagation?: boolean;
    suppressScrollX?: boolean;
  };
  ref?: React.Ref<HTMLDivElement>;
};

function SingularityScrollbars(props: SingularityScrollbarsProps) {
  const {
    className = '',
    children,
    id = '',
    scrollToTopOnChildChange = false,
    scrollToTopOnRouteChange = false,
    enable = true,
    option: propOption = { wheelPropagation: true },
    ref,
  } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const psRef = useRef<PerfectScrollbar | null>(null);
  const handlerByEvent = useRef<Map<string, EventListener>>(new Map());
  const [style, setStyle] = useState({});
  const { data: settings } = useSingularitySettings();
  const customScrollbars = useMemo(() => settings.customScrollbars, [settings.customScrollbars]);
  const pathname = usePathname();

  const option = useMemo(() => ({
    wheelPropagation: true,
    ...propOption,
  }), [propOption]);

  const hookUpEvents = useCallback(() => {
    Object.keys(handlerNameByEvent).forEach((key) => {
      const callback = props[handlerNameByEvent[key] as keyof SingularityScrollbarsProps] as (T: HTMLDivElement) => void;
      if (callback && containerRef.current) {
        const handler: EventListener = () => callback(containerRef.current);
        handlerByEvent.current.set(key, handler);
        containerRef.current.addEventListener(key, handler, false);
      }
    });
  }, [props]);

  const unHookUpEvents = useCallback(() => {
    handlerByEvent.current.forEach((value, key) => {
      if (containerRef.current) {
        containerRef.current.removeEventListener(key, value, false);
      }
    });
    handlerByEvent.current.clear();
  }, []);

  const scrollToTop = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, []);

  useEffect(() => {
    if (customScrollbars && containerRef.current && !isMobile) {
      // Add passive listeners to mitigate warnings
      const handleTouchStart = () => {};
      const handleWheel = () => {};
      containerRef.current.addEventListener('touchstart', handleTouchStart, { passive: true });
      containerRef.current.addEventListener('wheel', handleWheel, { passive: true });

      psRef.current = new PerfectScrollbar(containerRef.current, option);
      hookUpEvents();

      const updateScroll = debounce(() => psRef.current?.update(), 100);
      window.addEventListener('resize', updateScroll);

      return () => {
        psRef.current?.destroy();
        psRef.current = null;
        unHookUpEvents();
        containerRef.current?.removeEventListener('touchstart', handleTouchStart);
        containerRef.current?.removeEventListener('wheel', handleWheel);
        window.removeEventListener('resize', updateScroll);
      };
    }
  }, [customScrollbars, hookUpEvents, option, unHookUpEvents]);

  useEffect(() => {
    if ((scrollToTopOnChildChange && children) || (scrollToTopOnRouteChange && pathname)) {
      scrollToTop();
    }
  }, [scrollToTop, children, pathname, scrollToTopOnChildChange, scrollToTopOnRouteChange]);

  useEffect(() => {
    if (customScrollbars && enable && !isMobile) {
      setStyle({
        position: 'relative',
        overflow: 'hidden',
      });
    } else {
      setStyle({});
    }
  }, [customScrollbars, enable]);

  useEffect(() => {
    if (customScrollbars && !isMobile) {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const timer = setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 0);
        return () => clearTimeout(timer);
      }
    }
  }, [customScrollbars, pathname]);

  return (
    <Root
      id={id}
      className={className}
      style={style}
      ref={(el) => {
        containerRef.current = el;
        if (typeof ref === 'function') {
          ref(el);
        } else if (ref) {
          ref.current = el;
        }
      }}
    >
      {children}
    </Root>
  );
}

export default React.memo(SingularityScrollbars);