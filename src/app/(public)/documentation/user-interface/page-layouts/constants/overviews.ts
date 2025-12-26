import CardLayoutFullWidthNormalScrollComponent from '../CardLayout/full-width/normal-scroll/CardLayoutFullWidthNormalScrollComponent';
import CardLayoutFullWidthPageScrollComponent from '../CardLayout/full-width/page-scroll/CardLayoutFullWidthPageScrollComponent';
import CardLayoutFullWidthContentScrollComponent from '../CardLayout/full-width/content-scroll/CardLayoutFullWidthContentScrollComponent';
import CardLayoutWithSidebarsNormalScrollComponent from '../CardLayout/with-sidebars/normal-scroll/CardLayoutWithSidebarsNormalScrollComponent';
import CardLayoutWithSidebarsPageScrollComponent from '../CardLayout/with-sidebars/page-scroll/CardLayoutWithSidebarsPageScrollComponent';
import CardLayoutWithSidebarsContentScrollComponent from '../CardLayout/with-sidebars/content-scroll/CardLayoutWithSidebarsContentScrollComponent';
import SimpleFullWidthNormalScrollComponent from '../simple/full-width/normal-scroll/SimpleFullWidthNormalScrollComponent';
import SimpleFullWidthPageScrollComponent from '../simple/full-width/page-scroll/SimpleFullWidthPageScrollComponent';
import SimpleFullWidthContentScrollComponent from '../simple/full-width/content-scroll/SimpleFullWidthContentScrollComponent';
import SimpleWithSidebarsNormalScrollComponent from '../simple/with-sidebars/normal-scroll/SimpleWithSidebarsNormalScrollComponent';
import SimpleWithSidebarsPageScrollComponent from '../simple/with-sidebars/page-scroll/SimpleWithSidebarsPageScrollComponent';
import SimpleWithSidebarsContentScrollComponent from '../simple/with-sidebars/content-scroll/SimpleWithSidebarsContentScrollComponent';

const overviews = {
	CardLayout: {
		fullWidth: {
			title: 'CardLayout Full Width Page Layout',
			description:
				'CardLayout layout that spans the entire width of the content area with a dedicated header and 3 different scroll modes.',
			availableOptions: [
				{
					value: 'normalScroll',
					title: 'Normal Scroll'
				},
				{
					value: 'pageScroll',
					title: 'Page Scroll'
				},
				{
					value: 'contentScroll',
					title: 'Content Scroll'
				}
			],
			selectedOption: 'normalScroll',
			options: {
				normalScroll: {
					description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
					link: '/documentation/user-interface/page-layouts/CardLayout/full-width/normal-scroll',
					component: CardLayoutFullWidthNormalScrollComponent
				},
				pageScroll: {
					description:
						'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
					link: '/documentation/user-interface/page-layouts/CardLayout/full-width/page-scroll',
					component: CardLayoutFullWidthPageScrollComponent
				},
				contentScroll: {
					description:
						'Only the content area of the page scrolls making everything else to stick into their positions.',
					link: '/documentation/user-interface/page-layouts/CardLayout/full-width/content-scroll',
					component: CardLayoutFullWidthContentScrollComponent
				}
			}
		},
		withSidebars: {
			title: 'CardLayout Page Layout With Sidebars',
			description: 'Layout with left and right sidebars, a dedicated header and 3 different scroll modes.',
			availableOptions: [
				{
					value: 'normalScroll',
					title: 'Normal Scroll'
				},
				{
					value: 'pageScroll',
					title: 'Page Scroll'
				},
				{
					value: 'contentScroll',
					title: 'Content Scroll'
				}
			],
			selectedOption: 'normalScroll',
			options: {
				normalScroll: {
					description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
					link: '/documentation/user-interface/page-layouts/CardLayout/with-sidebars/normal-scroll',
					component: CardLayoutWithSidebarsNormalScrollComponent
				},
				pageScroll: {
					description:
						'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
					link: '/documentation/user-interface/page-layouts/CardLayout/with-sidebars/page-scroll',
					component: CardLayoutWithSidebarsPageScrollComponent
				},
				contentScroll: {
					description:
						'Only the content area of the page scrolls making everything else to stick into their positions.',
					link: '/documentation/user-interface/page-layouts/CardLayout/with-sidebars/content-scroll',
					component: CardLayoutWithSidebarsContentScrollComponent
				}
			}
		}
	},
	simple: {
		fullWidth: {
			title: 'Simple Full Width Page Layout',
			description:
				'Layout that spans the entire width of the content area with a dedicated header and 3 different scroll modes.',
			availableOptions: [
				{
					value: 'normalScroll',
					title: 'Normal Scroll'
				},
				{
					value: 'pageScroll',
					title: 'Page Scroll'
				},
				{
					value: 'contentScroll',
					title: 'Content Scroll'
				}
			],
			selectedOption: 'normalScroll',
			options: {
				normalScroll: {
					description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
					link: '/documentation/user-interface/page-layouts/simple/full-width/normal-scroll',
					component: SimpleFullWidthNormalScrollComponent
				},
				pageScroll: {
					description:
						'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
					link: '/documentation/user-interface/page-layouts/simple/full-width/page-scroll',
					component: SimpleFullWidthPageScrollComponent
				},
				contentScroll: {
					description:
						'Only the content area of the page scrolls making everything else to stick into their positions.',
					link: '/documentation/user-interface/page-layouts/simple/full-width/content-scroll',
					component: SimpleFullWidthContentScrollComponent
				}
			}
		},
		withSidebars: {
			title: 'Simple Page Layout With Sidebars',
			description: 'Layout with left and right sidebars, a dedicated header and 3 different scroll modes.',
			availableOptions: [
				{
					value: 'normalScroll',
					title: 'Normal Scroll'
				},
				{
					value: 'pageScroll',
					title: 'Page Scroll'
				},
				{
					value: 'contentScroll',
					title: 'Content Scroll'
				}
			],
			selectedOption: 'normalScroll',
			options: {
				normalScroll: {
					description: 'No scrolling area manipulations, entire viewport scrolls (body scroll).',
					link: '/documentation/user-interface/page-layouts/simple/with-sidebars/normal-scroll',
					component: SimpleWithSidebarsNormalScrollComponent
				},
				pageScroll: {
					description:
						'Only the page area scrolls making the main toolbar and footer to stick to the top and bottom of the viewport respectively.',
					link: '/documentation/user-interface/page-layouts/simple/with-sidebars/page-scroll',
					component: SimpleWithSidebarsPageScrollComponent
				},
				contentScroll: {
					description:
						'Only the content area of the page scrolls making everything else to stick into their positions.',
					link: '/documentation/user-interface/page-layouts/simple/with-sidebars/content-scroll',
					component: SimpleWithSidebarsContentScrollComponent
				}
			}
		}
	}
};

export default overviews;
