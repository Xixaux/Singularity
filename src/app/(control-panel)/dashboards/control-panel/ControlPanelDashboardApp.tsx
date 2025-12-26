'use client';

import SingularitySimpleLayout from '@singularity/core/SingularitySimpleLayout';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import SingularityLoading from '@singularity/core/SingularityLoading';
import SingularityTabs from 'src/components/tabs/SingularityTabs';
import SingularityTab from 'src/components/tabs/SingularityTab';
import ControlPanelDashboardAppHeader from './ControlPanelDashboardAppHeader';
import HomeTab from './tabs/home/HomeTab';
import TeamTab from './tabs/team/TeamTab';
import ExpensesTab from './tabs/expenses/ExpensesTab';
import LocationTab from './tabs/location/LocationTab';
import { useGetControlPanelDashboardWidgetsQuery } from './ControlPanelDashboardApi';

const Root = styled(SingularitySimpleLayout)(({ theme }) => ({
  '& .SingularitySimpleLayout-header': {
    backgroundColor: theme.vars.palette.background.default,
    boxShadow: `inset 0 -1px 0 0px ${theme.vars.palette.divider}`,
  },
  '& .SingularitySimpleLayout-content': {
    backgroundColor: theme.vars.palette.background.default,
  },
}));

const StyledTabs = styled(SingularityTabs)(({ theme }) => ({
  '& .MuiTab-root': {
    fontSize: '0.9rem',
    fontWeight: 600,
    padding: theme.spacing(1.5, 2.5),
    color: theme.palette.text.secondary,
    textTransform: 'none',
    transition: 'color 0.2s ease',
    '&:hover': {
      color: theme.palette.text.primary,
    },
  },
  '& .MuiTab-root.Mui-selected': {
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
  '& .MuiTabs-indicator': {
    backgroundColor: theme.palette.primary.main,
    height: '2px',
  },
}));

function ControlPanelDashboardApp() {
  const { isLoading } = useGetControlPanelDashboardWidgetsQuery();

  const [tabValue, setTabValue] = useState('home');

  function handleTabChange(event: React.SyntheticEvent, value: string) {
    setTabValue(value);
  }

  if (isLoading) {
    return <SingularityLoading />;
  }

  return (
    <Root
      header={<ControlPanelDashboardAppHeader />}
      content={
        <div className="w-full pt-4 sm:pt-6">
          <div className="w-full px-6 md:px-8">
            <StyledTabs
              value={tabValue}
              onChange={handleTabChange}
              aria-label="Dashboard navigation tabs"
            >
              <SingularityTab value="home" label="Action" />
              <SingularityTab value="expenses" label="Expenses" />
              <SingularityTab value="team" label="Team" />
              <SingularityTab value="location" label="Location" />
            </StyledTabs>
          </div>
          {tabValue === 'home' && <HomeTab />}
          {tabValue === 'expenses' && <ExpensesTab />}
          {tabValue === 'team' && <TeamTab />}
          {tabValue === 'location' && <LocationTab />}
        </div>
      }
    />
  );
}

export default ControlPanelDashboardApp;