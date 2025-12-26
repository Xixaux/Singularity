'use client';

import React, { useCallback, useEffect, useState } from 'react';
import SingularityUtils from '@singularity/utils';
import {
  getSessionRedirectUrl,
  resetSessionRedirectUrl,
  setSessionRedirectUrl,
} from '@singularity/core/SingularityAuthorization/sessionRedirectUrl';
import { SingularityRouteObjectType } from '@singularity/core/SingularityLayout/SingularityLayout';
import SingularityLoading from '@singularity/core/SingularityLoading';
import usePathname from '@singularity/hooks/usePathname';
import useNavigate from '@singularity/hooks/useNavigate';
import useUser from './useUser';
import settingsConfig from 'src/configs/settingsConfig';

type AuthGuardProps = {
  auth?: SingularityRouteObjectType['auth'];
  children: React.ReactNode;
  loginRedirectUrl?: string;
};

function AuthGuardRedirect({ auth, children, loginRedirectUrl = '/dashboards/control-panel' }: AuthGuardProps) {
  const { data: user, isGuest, loading } = useUser();
  const userRole = user?.role;
  const navigate = useNavigate();
  const [accessGranted, setAccessGranted] = useState<boolean>(false);
  const pathname = usePathname();

  const handleRedirection = useCallback(() => {
    const redirectUrl = getSessionRedirectUrl() || loginRedirectUrl;
    console.log('AuthGuardRedirect: Handling redirection', { isGuest, userRole, redirectUrl, pathname });

    if (pathname === '/sign-in') {
      console.log('AuthGuardRedirect: Already on /sign-in, skipping redirection');
      return;
    }

    if (isGuest) {
      navigate('/sign-in');
    } else {
      navigate(redirectUrl);
      resetSessionRedirectUrl();
    }
  }, [isGuest, loginRedirectUrl, navigate, pathname]);

  useEffect(() => {
    console.log('AuthGuardRedirect: Running useEffect', { pathname, isGuest, user, auth, loading });

    if (loading) {
      console.log('AuthGuardRedirect: User data loading');
      return;
    }

    // Handle post-sign-in redirection
    if (pathname === '/sign-in' && user && !isGuest) {
      console.log('AuthGuardRedirect: User authenticated on /sign-in, redirecting to dashboard');
      const redirectUrl = getSessionRedirectUrl() || loginRedirectUrl;
      navigate(redirectUrl);
      resetSessionRedirectUrl();
      return;
    }

    if (pathname === '/sign-in') {
      console.log('AuthGuardRedirect: On /sign-in, granting access');
      setAccessGranted(true);
      return;
    }

    const requiredRoles = auth || settingsConfig.defaultAuth || ['user', 'admin'];
    const isOnlyGuestAllowed = Array.isArray(requiredRoles) && requiredRoles.length === 0;
    const userHasPermission = SingularityUtils.hasPermission(requiredRoles, userRole);
    const ignoredPaths = ['/', '/callback', '/sign-in', '/sign-out', '/logout', '/404', '/example'];

    console.log('AuthGuardRedirect: Checking access', {
      userRole,
      requiredRoles,
      isOnlyGuestAllowed,
      userHasPermission,
      isGuest,
      pathname,
    });

    if (!user) {
      console.log('AuthGuardRedirect: No user, redirecting to /sign-in');
      setSessionRedirectUrl(pathname);
      navigate('/sign-in');
      return;
    }

    if (userRole === 'user' || userRole === 'admin' || userHasPermission || (isOnlyGuestAllowed && isGuest)) {
      console.log('AuthGuardRedirect: Access granted for', { userRole, pathname });
      setAccessGranted(true);
      return;
    }

    console.log('AuthGuardRedirect: Access denied', { userRole, requiredRoles });
    if (!ignoredPaths.includes(pathname)) {
      setSessionRedirectUrl('/401');
    }
    handleRedirection();
  }, [auth, userRole, isGuest, pathname, handleRedirection, loading, user, loginRedirectUrl]);

  return loading ? <SingularityLoading /> : accessGranted ? children : <SingularityLoading />;
}

export default AuthGuardRedirect;