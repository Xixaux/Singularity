import SingularityUtils from '@singularity/utils';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import { useAppSelector } from 'src/store/hooks';
import SingularityLoading from '@singularity/core/SingularityLoading';
import MailListItem from './MailListItem';
import { selectSearchText } from '../mailboxAppSlice';
import { MailboxMail } from '../MailboxApi';
import useGetMails from '../hooks/useGetMails';

/**
 * The mail list.
 */
function MailList() {
	const { data: mails, isLoading } = useGetMails();

	const searchText = useAppSelector(selectSearchText);

	const [filteredData, setFilteredData] = useState<MailboxMail[]>([]);

	const { t } = useTranslation('mailboxApp');

	useEffect(() => {
		function getFilteredArray() {
			if (searchText.length === 0) {
				return mails;
			}

			return SingularityUtils.filterArrayByString<MailboxMail>(mails, searchText);
		}

		if (mails) {
			setFilteredData(getFilteredArray());
		}
	}, [mails, searchText]);

	if (isLoading) {
		return <SingularityLoading />;
	}

	if (!filteredData || filteredData?.length === 0) {
		return (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: { delay: 0.1 } }}
				className="flex flex-col flex-1 items-center justify-center p-6 min-h-full"
			>
				<SingularitySvgIcon
					className="icon-size-32 mb-4"
					color="disabled"
					size={24}
				>
					heroicons-outline:envelope
				</SingularitySvgIcon>
				<Typography
					className="mt-4 text-2xl font-semibold tracking-tight"
					color="text.secondary"
				>
					{t('NO_MESSAGES')}
				</Typography>
			</motion.div>
		);
	}

	return (
		<List className="p-0 w-full min-h-full">
			{filteredData.map((mail) => (
				<MailListItem
					mail={mail}
					key={mail.id}
				/>
			))}
		</List>
	);
}

export default MailList;
