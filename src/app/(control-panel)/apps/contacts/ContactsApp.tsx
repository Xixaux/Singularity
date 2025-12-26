'use client';

import SingularitySimpleLayout from '@singularity/core/SingularitySimpleLayout';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import { styled } from '@mui/material/styles';
import useThemeMediaQuery from '@singularity/hooks/useThemeMediaQuery';
import useNavigate from '@singularity/hooks/useNavigate';
import ContactsHeader from './ContactsHeader';
import ContactsList from './contact-list/ContactsList';
import { useGetContactsListQuery, useGetContactsCountriesQuery, useGetContactsTagsQuery } from './ContactsApi';
import ContactsSidebarContent from './ContactsSidebarContent';

const Root = styled(SingularitySimpleLayout)(({ theme }) => ({
	'& .container': {
		maxWidth: '100%'
	},
	'& .SingularitySimpleLayout-header': {
		backgroundColor: theme.vars.palette.background.paper,
		boxShadow: `inset 0 -1px 0 0px ${theme.vars.palette.divider}`
	}
}));

type ContactsAppProps = {
	children?: React.ReactNode;
};

/**
 * The ContactsApp page.
 */
function ContactsApp(props: ContactsAppProps) {
	const { children } = props;
	const navigate = useNavigate();
	const routeParams = useParams();

	const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
	const pageLayout = useRef(null);
	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
	useGetContactsListQuery();
	useGetContactsCountriesQuery();
	useGetContactsTagsQuery();

	useEffect(() => {
		setRightSidebarOpen(!!routeParams.contactId);
	}, [routeParams]);

	return (
		<Root
			header={<ContactsHeader />}
			content={<ContactsList />}
			ref={pageLayout}
			rightSidebarContent={<ContactsSidebarContent>{children}</ContactsSidebarContent>}
			rightSidebarOpen={rightSidebarOpen}
			rightSidebarOnClose={() => navigate('/apps/contacts')}
			rightSidebarWidth={640}
			rightSidebarVariant="temporary"
			scroll={isMobile ? 'normal' : 'content'}
		/>
	);
}

export default ContactsApp;
