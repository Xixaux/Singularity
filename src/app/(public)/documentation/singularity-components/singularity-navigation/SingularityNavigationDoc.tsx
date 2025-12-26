'use client';

import SingularityHighlight from '@singularity/core/SingularityHighlight';
import SingularityUtils from '@singularity/utils';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAppDispatch } from 'src/store/hooks';
import {
	appendNavigationItem,
	prependNavigationItem,
	removeNavigationItem,
	resetNavigation,
	setNavigation,
	updateNavigationItem
} from 'src/components/theme-layouts/components/navigation/store/navigationSlice';
import SingularityNavigation from '@singularity/core/SingularityNavigation';
import Paper from '@mui/material/Paper';
import navigationShowcase from './constants/navigationShowcase';
import navigationShowcaseRaw from './constants/navigationShowcase?raw';

/**
 * SingularityNavigation Doc
 * This document provides information on how to use the SingularityNavigation.
 */
function SingularityNavigationDoc() {
	const dispatch = useAppDispatch();

	return (
		<>
			<Typography
				variant="h4"
				className="mb-10 font-bold"
			>
				SingularityNavigation
			</Typography>

			<Typography
				className="mb-4"
				component="p"
			>
				<code>SingularityNavigation</code> is a custom-built Singularity component that allows you to create a multi-level
				collapsable navigation.
			</Typography>

			<Typography
				className="text-lg mt-4 mb-2.5 font-bold"
				variant="h6"
			>
				[navigation]
			</Typography>

			<Typography
				className="mb-4"
				component="p"
			>
				<code>SingularityNavigation</code> uses an array to populate the entire navigation. It supports four different
				navigation items; Group, Collapse, Item. and Divider. These items can be mixed and matched to create
				unique and complex navigation layouts.
			</Typography>

			<Typography
				className="text-lg mt-4 mb-2.5 font-bold"
				variant="h6"
			>
				[layout]
			</Typography>

			<Typography
				className="mb-4"
				component="p"
			>
				"vertical" or "horizontal" layout options.
			</Typography>

			<Typography
				className="text-lg mt-4 mb-2.5 font-bold"
				variant="h6"
			>
				[active]
			</Typography>

			<Typography
				className="mb-4"
				component="p"
			>
				You can set <b>active</b> to "square" to use square active item style instead of rounded/circle for{' '}
				<b>vertical layout</b>.
			</Typography>

			<Typography
				className="text-lg mt-4 mb-2.5 font-bold"
				variant="h6"
			>
				[dense]
			</Typography>

			<Typography
				className="mb-4"
				component="p"
			>
				You can use <b>{`dense={true}`}</b> to set dense variation of the navigation.
			</Typography>

			<Typography
				className="text-lg mt-4 mb-2.5 font-bold"
				variant="h6"
			>
				[checkPermission]
			</Typography>

			<Typography
				className="mb-4"
				component="p"
			>
				You can use <b>{`checkPermission={true}`}</b> to enable authorization for navigation.
			</Typography>

			<Typography
				className="text-2xl mt-5 mb-2.5 font-bold"
				variant="h5"
			>
				Usage
			</Typography>

			<SingularityHighlight
				component="pre"
				className="language-jsx"
			>
				{`
                                    <SingularityNavigation navigation={navigation} layout="vertical" active="square" dense={true}/>
                                `}
			</SingularityHighlight>

			<Typography
				className="mt-12 mb-2"
				variant="h4"
			>
				Navigation item types
			</Typography>

			<Typography className="mt-8 p-2 rounded-sm bg-yellow-100 border-1 border-yellow-700 text-black mb-2">
				It is mandatory to give a unique id to all of your navigation items.
			</Typography>

			<Typography
				className="text-lg mt-4 mb-2.5 font-bold"
				variant="h6"
			>
				Group
			</Typography>
			<SingularityHighlight
				component="pre"
				className="language-json"
			>
				{`
              {
                id: 'apps',
                title: 'Applications',
                subtitle: 'Custom apps ready for use',
                type: 'group',
                icon: 'heroicons-outline:home',
                children: [
                  {
                    id: 'apps.learning',
                    title: 'Academy',
                    type: 'item',
                    icon: 'heroicons-outline:academic-cap',
                    url: '/apps/learning',
                  }
                ]
             }
        `}
			</SingularityHighlight>

			<Typography
				className="text-lg mt-4 mb-2.5 font-bold"
				variant="h6"
			>
				Collapse
			</Typography>
			<SingularityHighlight
				component="pre"
				className="language-json"
			>
				{`
            {
                id: 'apps.ecommerce',
                title: 'ECommerce',
                type: 'collapse',
                icon: 'heroicons-outline:shopping-cart',
                children: [
                  {
                    id: 'e-commerce-products',
                    title: 'Products',
                    type: 'item',
                    url: 'apps/e-commerce/products',
                    end: true,
                  },
              ]
            }
      `}
			</SingularityHighlight>

			<Typography
				className="text-lg mt-4 mb-2.5 font-bold"
				variant="h6"
			>
				Item
			</Typography>
			<SingularityHighlight
				component="pre"
				className="language-json"
			>
				{`
           {
              id: 'dashboards.project',
              title: 'Project',
              type: 'item',
              icon: 'heroicons-outline:clipboard-check',
              url: '/dashboards/control-panel',
            }
        `}
			</SingularityHighlight>
			<Typography
				className="text-2xl mt-6 mb-2 font-medium"
				component="h2"
			>
				end: bool
			</Typography>
			<Typography
				className="text-lg mb-2"
				component="h2"
			>
				When true, the active class/style will only be applied if the location is exactly matched.
			</Typography>
			<SingularityHighlight
				component="pre"
				className="language-json"
			>
				{`
          {
              id: 'dashboards.project',
              title: 'Project',
              type: 'item',
              icon: 'heroicons-outline:clipboard-check',
              url: '/dashboards/control-panel',
              end: true
          }
                                `}
			</SingularityHighlight>
			<Typography
				className="text-lg mt-4 mb-2.5 font-bold"
				variant="h6"
			>
				Link
			</Typography>
			<SingularityHighlight
				component="pre"
				className="language-json"
			>
				{`
            {
                'id'    : 'test-link',
                'title' : 'Test Link',
                'type'  : 'link',
                'icon'  : 'link',
                'url'   : 'http://singularitythemes.com',
                'target': '_blank'
            },
         `}
			</SingularityHighlight>
			<Typography
				className="text-lg mt-4 mb-2.5 font-bold"
				variant="h6"
			>
				Divider
			</Typography>
			<SingularityHighlight
				component="pre"
				className="language-json"
			>
				{`
          {
              'id'   : 'project',
              'title': 'Project',
              'type' : 'item',
              'url'  : '/apps/dashboards/control-panel'
          }
          {
              'type': 'divider
          },
          {
              'id'   : 'project',
              'title': 'Project',
              'type' : 'item',
              'url'  : '/apps/dashboards/control-panel'
          }
          `}
			</SingularityHighlight>

			<Typography
				className="mt-12 mb-2"
				variant="h4"
			>
				Showcase
			</Typography>

			<div className="flex sm:flex-row flex-col gap-4 my-4 justify-center">
				<Paper className="flex py-4 max-w-sm rounded-sm">
					<SingularityNavigation
						navigation={navigationShowcase}
						layout="vertical"
					/>
				</Paper>
				<SingularityHighlight
					component="pre"
					className="flex flex-1 language-jsx max-h-md overflow-auto"
				>
					{navigationShowcaseRaw}
				</SingularityHighlight>
			</div>

			<Typography
				className="mt-12 mb-2"
				variant="h4"
			>
				Actions
			</Typography>

			<Typography
				className="text-lg mt-4 mb-2.5 font-bold"
				variant="h6"
			>
				setNavigation
			</Typography>
			<Typography
				className="text-lg mb-2"
				component="h2"
			>
				Use <code>setNavigation(navigation{'<Array>'})</code> action to set/change whole navigation.
			</Typography>

			<div className="border-1 rounded-xl p-4 my-4">
				<Typography
					className="text-lg mb-6"
					component="h2"
				>
					With the button below, whole navigation is changed.
				</Typography>

				<Button
					onClick={() => {
						dispatch(
							setNavigation([
								{
									id: 'dashboards',
									title: 'Dashboards',
									subtitle: 'Unique dashboard designs',
									type: 'group',
									icon: 'heroicons-outline:home',
									children: [
										{
											id: 'dashboards.project',
											title: 'Project',
											type: 'item',
											icon: 'heroicons-outline:clipboard-check',
											url: '/dashboards/control-panel'
										},
										{
											id: 'dashboards.analytics',
											title: 'Analytics',
											type: 'item',
											icon: 'heroicons-outline:chart-pie',
											url: '/dashboards/analytics'
										}
									]
								},
								{
									id: 'auth',
									title: 'Auth',
									type: 'group',
									icon: 'verified_user',
									children: [
										{
											id: 'sign-out',
											title: 'Sign out',
											type: 'item',
											url: 'sign-out',
											icon: 'exit_to_app'
										}
									]
								}
							])
						);
					}}
					variant="contained"
					color="secondary"
				>
					Set Navigation
				</Button>

				<SingularityHighlight
					component="pre"
					className="language-jsx mt-6"
				>
					{`
          <Button
            onClick={() => {
              dispatch(
                setNavigation([
                  {
                    id: 'dashboards',
                    title: 'Dashboards',
                    subtitle: 'Unique dashboard designs',
                    type: 'group',
                    icon: 'heroicons-outline:home',
                    children: [
                      {
                        id: 'dashboards.project',
                        title: 'Project',
                        type: 'item',
                        icon: 'heroicons-outline:clipboard-check',
                        url: '/dashboards/control-panel',
                      },
                      {
                        id: 'dashboards.analytics',
                        title: 'Analytics',
                        type: 'item',
                        icon: 'heroicons-outline:chart-pie',
                        url: '/dashboards/analytics',
                      },
                    ],
                  },
                  {
                    id: 'auth',
                    title: 'Auth',
                    type: 'group',
                    icon: 'verified_user',
                    children: [
                      {
                        id: 'sign-out',
                        title: 'Sign out',
                        type: 'item',
                        url: 'sign-out',
                        icon: 'exit_to_app',
                      },
                    ],
                  },
                ])
              );
            }}
            variant="contained"
            color="secondary"
          >
            Set Navigation
          </Button>
        `}
				</SingularityHighlight>
			</div>

			<Typography
				className="text-lg mt-4 mb-2.5 font-bold"
				variant="h6"
			>
				resetNavigation
			</Typography>
			<Typography
				className="text-lg mb-2"
				component="h2"
			>
				Use <code>resetNavigation()</code> action to reset navigation to initial state.
			</Typography>

			<div className="border-1 rounded-xl p-4 my-4">
				<Typography
					className="text-lg mb-6"
					component="h2"
				>
					With the button below, navigation is returned to config defaults.
				</Typography>

				<Button
					onClick={() => {
						dispatch(resetNavigation());
					}}
					variant="contained"
					color="secondary"
				>
					Reset Navigation
				</Button>

				<SingularityHighlight
					component="pre"
					className="language-jsx mt-6"
				>
					{`
            <Button
                onClick={()=> {
                    dispatch(resetNavigation());
                }}
                variant="contained"
                color="secondary"
            >
                Reset Navigation
            </Button>
            `}
				</SingularityHighlight>
			</div>

			<Typography
				className="text-lg mt-4 mb-2.5 font-bold"
				variant="h6"
			>
				updateNavigationItem
			</Typography>
			<Typography
				className="text-lg mb-2"
				component="h2"
			>
				Use
				<code>
					updateNavigationItem(id, <i>object</i>)
				</code>
				action to update a navigation item.
			</Typography>

			<div className="border-1 rounded-xl p-4 my-4">
				<Typography
					className="text-lg mb-6"
					component="h2"
				>
					With clicking the button below, a badge will be added into the 'Project' dashboard navigation item.
				</Typography>

				<Button
					onClick={() => {
						dispatch(
							updateNavigationItem('dashboards.project', {
								badge: {
									title: 'NEW'
								}
							})
						);
					}}
					variant="contained"
					color="secondary"
				>
					Update Navigation Item
				</Button>

				<SingularityHighlight
					component="pre"
					className="language-jsx mt-6"
				>
					{`
					<Button
						onClick={() => {
							dispatch(
								updateNavigationItem('dashboards.project', {
									badge: {
										title: 'NEW'
									}
								})
							);
						}}
						variant="contained"
						color="secondary"
					>
						Update Navigation Item
					</Button>
					
        `}
				</SingularityHighlight>
			</div>

			<Typography
				className="text-lg mt-4 mb-2.5 font-bold"
				variant="h6"
			>
				removeNavigationItem
			</Typography>
			<Typography
				className="text-lg mb-2"
				component="h2"
			>
				Use <code>removeNavigationItem(id)</code> action to remove a navigation item.
			</Typography>

			<div className="border-1 rounded-xl p-4 my-4">
				<Typography
					className="text-lg mb-6"
					component="h2"
				>
					With the button below, "Calendar" navigation item is removed.
				</Typography>

				<Button
					onClick={() => {
						dispatch(removeNavigationItem('apps.calendar'));
					}}
					variant="contained"
					color="secondary"
				>
					Remove Navigation Item
				</Button>

				<SingularityHighlight
					component="pre"
					className="language-jsx mt-6"
				>
					{`
            <Button
                  onClick={()=> {
                      dispatch(removeNavigationItem('apps.calendar'))
                  }}
                  variant="contained"
                  color="secondary"
            >
            Remove Navigation Item
            </Button>
      `}
				</SingularityHighlight>
			</div>

			<Typography
				className="text-lg mt-4 mb-2.5 font-bold"
				variant="h6"
			>
				prependNavigationItem
			</Typography>
			<Typography
				className="text-lg mb-2"
				component="h2"
			>
				Use
				<code>
					prependNavigationItem(<i>object</i>, <i>collapseId/groupId</i>?)
				</code>
				action to prepend a navigation item into the navigation array.
			</Typography>

			<div className="border-1 rounded-xl p-4 my-4">
				<Typography
					className="text-lg mb-6"
					component="h2"
				>
					With the button below, "singularitythemes.com" navigation item is added at the top of the navigation array.
				</Typography>

				<Button
					onClick={() => {
						dispatch(
							prependNavigationItem({
								id: `test-link-${SingularityUtils.generateGUID()}`,
								title: 'singularitythemes.com',
								type: 'link',
								icon: 'link',
								url: 'http://singularitythemes.com',
								target: '_blank'
							})
						);
					}}
					variant="contained"
					color="secondary"
				>
					Prepend Navigation Item
				</Button>

				<SingularityHighlight
					component="pre"
					className="language-jsx mt-6"
				>
					{`
            <Button
                onClick={()=> {
                    dispatch(prependNavigationItem(
                        {
                            'id'    : 'test-link',
                            'title' : 'singularitythemes.com',
                            'type'  : 'link',
                            'icon'  : 'link',
                            'url'   : 'http://singularitythemes.com',
                            'target': '_blank'
                        }
                    ))
                }}
                variant="contained"
                color="secondary"
            >
                Prepend Navigation Item
            </Button>
            `}
				</SingularityHighlight>
			</div>

			<div className="border-1 rounded-xl p-4 my-4">
				<Typography
					className="text-lg mb-6"
					component="h2"
				>
					With the button below, "singularitythemes.com" navigation item is added into the top of the "Dashboards"
					children.
				</Typography>

				<Button
					onClick={() => {
						dispatch(
							prependNavigationItem(
								{
									id: `test-link-${SingularityUtils.generateGUID()}`,
									title: 'singularitythemes.com',
									type: 'link',
									icon: 'link',
									url: 'http://singularitythemes.com',
									target: '_blank'
								},
								'dashboards'
							)
						);
					}}
					variant="contained"
					color="secondary"
				>
					Prepend Navigation Item
				</Button>

				<SingularityHighlight
					component="pre"
					className="language-jsx mt-6"
				>
					{`
                                <Button
                                    onClick={()=> {
                                        dispatch(prependNavigationItem(
                                            {
                                                'id'    : 'test-link',
                                                'title' : 'singularitythemes.com',
                                                'type'  : 'link',
                                                'icon'  : 'link',
                                                'url'   : 'http://singularitythemes.com',
                                                'target': '_blank'
                                            }, 'dashboards'
                                        ))
                                    }}
                                    variant="contained"
                                    color="secondary"
                                >
                                    Prepend Navigation Item
                                </Button>
                                `}
				</SingularityHighlight>
			</div>

			<Typography
				className="text-lg mt-4 mb-2.5 font-bold"
				variant="h6"
			>
				appendNavigationItem
			</Typography>
			<Typography
				className="text-lg mb-2"
				component="h2"
			>
				Use
				<code>
					appendNavigationItem(<i>object</i>, <i>collapseId/groupId</i>?)
				</code>
				action to append a navigation item into the navigation array.
			</Typography>

			<div className="border-1 rounded-xl p-4 my-4">
				<Typography
					className="text-lg mb-6"
					component="h2"
				>
					With the button below, "singularitythemes.com" navigation item is added at the bottom of the array.
				</Typography>

				<Button
					onClick={() => {
						dispatch(
							appendNavigationItem({
								id: `test-link-${SingularityUtils.generateGUID()}`,
								title: 'singularitythemes.com',
								type: 'link',
								icon: 'link',
								url: 'http://singularitythemes.com',
								target: '_blank'
							})
						);
					}}
					variant="contained"
					color="secondary"
				>
					Append Navigation Item
				</Button>
				<SingularityHighlight
					component="pre"
					className="language-jsx mt-6"
				>
					{`
            <Button
                onClick={()=> {
                    dispatch(appendNavigationItem(
                        {
                            'id'    : 'test-link',
                            'title' : 'singularitythemes.com',
                            'type'  : 'link',
                            'icon'  : 'link',
                            'url'   : 'http://singularitythemes.com',
                            'target': '_blank'
                        }
                    ))
                }}
                variant="contained"
                color="secondary"
            >
                Append Navigation Item
            </Button>
            `}
				</SingularityHighlight>
			</div>

			<div className="border-1 rounded-xl p-4 my-4">
				<Typography
					className="text-lg mb-6"
					component="h2"
				>
					With the button below, "singularitythemes.com" navigation item is added into the bottom of the "Dashboards"
					children.
				</Typography>

				<Button
					onClick={() => {
						dispatch(
							appendNavigationItem(
								{
									id: `test-link-${SingularityUtils.generateGUID()}`,
									title: 'singularitythemes.com',
									type: 'link',
									icon: 'link',
									url: 'http://singularitythemes.com',
									target: '_blank'
								},
								'dashboards'
							)
						);
					}}
					variant="contained"
					color="secondary"
				>
					Append Navigation Item
				</Button>

				<SingularityHighlight
					component="pre"
					className="language-jsx mt-6"
				>
					{`
                                <Button
                                    onClick={()=> {
                                        dispatch(appendNavigationItem(
                                            {
                                                'id'    : 'test-link',
                                                'title' : 'singularitythemes.com',
                                                'type'  : 'link',
                                                'icon'  : 'link',
                                                'url'   : 'http://singularitythemes.com',
                                                'target': '_blank'
                                            }, 'dashboards'
                                        ))
                                    }}
                                    variant="contained"
                                    color="secondary"
                                >
                                    Append Navigation Item
                                </Button>
                                `}
				</SingularityHighlight>
			</div>
		</>
	);
}

export default SingularityNavigationDoc;
