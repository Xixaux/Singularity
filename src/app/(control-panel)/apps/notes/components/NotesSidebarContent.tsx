import ListItemButton, { ListItemButtonProps } from '@mui/material/ListItemButton';
import SingularityNavLink from '@singularity/core/SingularityNavLink';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import { motion } from 'motion/react';
import { useAppDispatch } from 'src/store/hooks';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import { SingularityNavLinkPropsType } from '@singularity/core/SingularityNavLink/SingularityNavLink';
import { PartialDeep } from 'type-fest';
import { openLabelsDialog } from '../notesAppSlice';
import { useGetNotesLabelsQuery } from '../NotesApi';

const StyledListItemButton = styled(ListItemButton)<ListItemButtonProps & PartialDeep<SingularityNavLinkPropsType>>(
	({ theme }) => ({
		color: 'inherit',
		textDecoration: 'none',
		height: 36,
		width: '100%',
		borderRadius: 8,
		paddingLeft: 12,
		paddingRight: 12,
		marginBottom: 8,
		fontWeight: 500,
		'&.active': {
			backgroundColor: 'rgba(255, 255, 255, .1)',
			pointerEvents: 'none',
			'& .list-item-icon': {
				color: theme.vars.palette.secondary.main
			},
			...theme.applyStyles('light', {
				backgroundColor: 'rgba(0, 0, 0, .05)'
			})
		},
		'& .list-item-icon': {
			marginRight: 12
		}
	})
);

/**
 * The notes sidebar content.
 */
function NotesSidebarContent() {
	const dispatch = useAppDispatch();
	const { data: labels, isLoading } = useGetNotesLabelsQuery();

	if (isLoading) {
		return null;
	}

	return (
		<div className="px-4 py-6 w-60 slg:w-auto max-w-full ">
			<motion.div
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
			>
				<List>
					<StyledListItemButton
						component={SingularityNavLink}
						to="/apps/notes/all"
						activeClassName="active"
					>
						<SingularitySvgIcon
							className="list-item-icon"
							color="disabled"
						>
							heroicons-outline:pencil-square
						</SingularitySvgIcon>
						<ListItemText
							className="truncate"
							primary="Notes"
							disableTypography
						/>
					</StyledListItemButton>
					<StyledListItemButton
						component={SingularityNavLink}
						to="/apps/notes/reminders"
						activeClassName="active"
					>
						<SingularitySvgIcon
							className="list-item-icon"
							color="disabled"
						>
							heroicons-outline:bell
						</SingularitySvgIcon>
						<ListItemText
							className="truncate"
							primary="Reminders"
							disableTypography
						/>
					</StyledListItemButton>

					<StyledListItemButton
						component={SingularityNavLink}
						to="/apps/notes/archive"
						activeClassName="active"
					>
						<SingularitySvgIcon
							className="list-item-icon"
							color="disabled"
						>
							heroicons-outline:archive-box
						</SingularitySvgIcon>
						<ListItemText
							className="truncate"
							primary="Archive"
							disableTypography
						/>
					</StyledListItemButton>

					{labels.map((label) => (
						<StyledListItemButton
							key={label.id}
							component={SingularityNavLink}
							to={`/apps/notes/labels/${label.id}`}
							activeClassName="active"
						>
							<SingularitySvgIcon
								className="list-item-icon"
								color="disabled"
							>
								heroicons-outline:tag
							</SingularitySvgIcon>
							<ListItemText
								className="truncate"
								primary={label.title}
								disableTypography
							/>
						</StyledListItemButton>
					))}
					<StyledListItemButton onClick={() => dispatch(openLabelsDialog())}>
						<SingularitySvgIcon
							className="list-item-icon"
							color="disabled"
						>
							heroicons-outline:pencil
						</SingularitySvgIcon>
						<ListItemText
							className="truncate"
							primary="Edit Labels"
							disableTypography
						/>
					</StyledListItemButton>
				</List>
			</motion.div>
		</div>
	);
}

export default NotesSidebarContent;
