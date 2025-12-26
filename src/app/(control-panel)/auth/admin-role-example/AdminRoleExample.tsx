import SingularityHighlight from '@singularity/core/SingularityHighlight';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SingularitySvgIcon from '@singularity/core/SingularitySvgIcon';
import SingularityPageCardLayout from '@singularity/core/SingularityPageCardLayout';
import Link from '@singularity/core/Link';

/**
 * AdminRoleExample component renders the page for admin users.
 */
function AdminRoleExample() {
	return (
		<SingularityPageCardLayout
			header={
				<div className="flex flex-1 items-center justify-between p-6">
					<Typography className="text-3xl md:text-4xl font-extrabold tracking-tight leading-7 sm:leading-10 truncate">
						Admin: Auth role example page
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
              import {authRoles} from '@auth';
              import AdminRoleExample from './AdminRoleExample';

              export const AdminRoleExampleConfig = {
                  settings: {
                      layout: {
                          config: {}
                      }
                  },
                  auth    : authRoles.admin,//['admin']
                  routes  : [
                      {
                          path     : '/auth/admin-role-example',
                          element: <AdminRoleExample/>
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
                      'id'   : 'only-admin-navigation-item',
                      'title': 'Nav item only for Admin',
                      'type' : 'item',
                      'auth' : authRoles.admin,//['admin']
                      'url'  : '/auth/admin-role-example',
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

export default AdminRoleExample;
