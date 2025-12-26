'use client';
import SingularityShortcuts from '@singularity/core/SingularityShortcuts';
import { useEffect, useState } from 'react';
import useUser from '@auth/useUser';
import useNavigation from './hooks/useNavigation';
import _ from 'lodash';

type NavigationShortcutsProps = {
  className?: string;
  variant?: 'horizontal' | 'vertical';
};

function NavigationShortcuts(props: NavigationShortcutsProps) {
  const { variant, className } = props;
  const { flattenNavigation: navigation } = useNavigation();
  const { data: user, isGuest } = useUser();
  const [userShortcuts, setUserShortcuts] = useState<string[]>(
    user?.shortcuts?.length ? user.shortcuts : ['mail', 'calendar', 'contacts']
  );

  useEffect(() => {
    console.log('NavigationShortcuts - User:', user);
    console.log('NavigationShortcuts - Shortcuts:', userShortcuts);
    console.log('NavigationShortcuts - Navigation:', navigation);

    if (user?.shortcuts && !_.isEqual(userShortcuts, user.shortcuts)) {
      setUserShortcuts(user.shortcuts.length ? user.shortcuts : ['mail', 'calendar', 'contacts']);
    }
  }, [user, isGuest, navigation]);

  function handleShortcutsChange(newShortcuts: string[]) {
    console.log('NavigationShortcuts - Updating:', newShortcuts);
    setUserShortcuts(newShortcuts);
  }

  return (
    <SingularityShortcuts
      className={className}
      variant={variant}
      navigation={navigation}
      shortcuts={userShortcuts}
      onChange={handleShortcutsChange}
    />
  );
}

export default NavigationShortcuts;