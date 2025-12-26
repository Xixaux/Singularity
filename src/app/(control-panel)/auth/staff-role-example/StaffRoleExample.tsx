import SingularityHighlight from '@singularity/core/SingularityHighlight';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import Link from '@singularity/core/Link';
import SingularityPageCardLayout from '@singularity/core/SingularityPageCardLayout';

/**
 * StaffRoleExample component renders the page for staff users.
 */
function StaffRoleExample() {
	return (
		<SingularityPageCardLayout
			header={
				<div className="flex flex-1 items-center justify-between p-6">
					<Typography className="text-3xl md:text-4xl font-extrabold tracking-tight leading-7 sm:leading-10 truncate">
						Staff: Auth role example page
					</Typography>
					<Button
						component={Link}
						variant="contained"
						color="secondary"
						to="/sign-out"
						startIcon={<SingularitySvgIcon>heroicons-outline:arrow-right-on-rectangle</SingularitySvgIcon>}
					>
						Sign out
					</Button>
				</div>
			}
			content={
				<div className="p-6">
					<Typography className="mb-6">
						You can see this page because you have logged in and have permission. Otherwise you should be
						redirected to login page.
					</Typography>

					<Typography className="mb-6">This is the page's config file:</Typography>

					<SingularityHighlight
						component="pre"
						className="language-js"
					>
						{`
              import {authRoles} from 'auth';
              import StaffRoleExample from './StaffRoleExample';

              export const StaffRoleExampleConfig = {
                  settings: {
                      layout: {
                          config: {}
                      }
                  },
                  auth    : authRoles.staff,//['admin',staff']
                  routes  : [
                      {
                          path     : '/auth/staff-role-example',
                          element:StaffRoleExample
                      }
                  ]
              };
              `}
					</SingularityHighlight>

					<Typography className="my-6">
						You can also hide the navigation item/collapse/group with user roles by giving auth property.
					</Typography>

					<SingularityHighlight
						component="pre"
						className="language-json"
					>
						{`
              export const singularityNavigationConfig = [
                 {
                      'id'   : 'only-staff-navigation-item',
                      'title': 'Nav item only for Staff',
                      'type' : 'item',
                      'auth' : authRoles.staff,//['admin','staff']
                      'url'  : '/auth/staff-role-example',
                      'icon' : 'verified_user'
                  }
              ];
          `}
					</SingularityHighlight>
				</div>
			}
		/>
	);
}

export default StaffRoleExample;
