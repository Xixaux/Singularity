'use client';
import { useAppSelector } from 'src/store/hooks';
import { useMemo } from 'react';
import i18n from '@i18n';
import useUser from '@auth/useUser';
import useI18n from '@i18n/useI18n';
import SingularityUtils from '@singularity/utils';
import SingularityNavigationHelper from '@singularity/utils/SingularityNavigationHelper';
import { SingularityNavItemType } from '@singularity/core/SingularityNavigation/types/SingularityNavItemType';
import { selectNavigationAll } from '../store/navigationSlice';

function useNavigation() {
  const { data: user } = useUser();
  const userRole = user?.role;
  const { languageId } = useI18n();

  const navigationData = useAppSelector(selectNavigationAll);

  const navigation = useMemo(() => {
    // Fallback navigation if navigationData is empty
    const fallbackNavigation: SingularityNavItemType[] = [
      { id: 'mail', title: 'Mail', url: '/mail', icon: 'mail', auth: 'user' },
      { id: 'calendar', title: 'Calendar', url: '/calendar', icon: 'calendar', auth: 'user' },
      { id: 'contacts', title: 'Contacts', url: '/contacts', icon: 'contacts', auth: 'user' },
    ];

    const _navigation = navigationData.length
      ? SingularityNavigationHelper.unflattenNavigation(navigationData)
      : fallbackNavigation;

    function setAdditionalData(data: SingularityNavItemType[]): SingularityNavItemType[] {
      return data.map((item) => ({
        hasPermission: Boolean(SingularityUtils.hasPermission(item?.auth, userRole)),
        ...item,
        ...(item?.translate && item?.title ? { title: i18n.t(`navigation:${item?.translate}`) } : {}),
        ...(item?.children ? { children: setAdditionalData(item?.children) } : {}),
      }));
    }

    const translatedValues = setAdditionalData(_navigation);
    console.log('useNavigation - Navigation:', translatedValues);
    return translatedValues;
  }, [navigationData, userRole, languageId]);

  const flattenNavigation = useMemo(() => {
    const flat = SingularityNavigationHelper.flattenNavigation(navigation);
    console.log('useNavigation - flattenNavigation:', flat);
    return flat;
  }, [navigation]);

  return { navigation, flattenNavigation };
}

export default useNavigation;