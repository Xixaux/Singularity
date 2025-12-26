// setup/server.ts
import express from 'express';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

interface Component {
  name: string;
  label: string;
  files: string[];
  dependencies: string[];
}

const components: Component[] = [
  {
    name: 'control-panel',
    label: 'Control Panel Dashboard',
    files: [
      'src/app/dashboards/control-panel/page.tsx',
      'src/components/dashboards/control-panel/ControlPanel.tsx',
      'src/data/dashboards/control-panel-data.json',
      'src/styles/dashboards/control-panel.module.css',
    ],
    dependencies: ['@mui/material', '@mui/x-data-grid'],
  },
  {
    name: 'analytics',
    label: 'Analytics Dashboard',
    files: [
      'src/app/dashboards/analytics/page.tsx',
      'src/components/dashboards/analytics/Analytics.tsx',
      'src/data/dashboards/analytics-data.json',
      'src/styles/dashboards/analytics.module.css',
    ],
    dependencies: ['recharts'],
  },
  {
    name: 'financial',
    label: 'Financial Dashboard',
    files: [
      'src/app/dashboards/financial/page.tsx',
      'src/components/dashboards/financial/Financial.tsx',
      'src/data/dashboards/financial-data.json',
      'src/styles/dashboards/financial.module.css',
    ],
    dependencies: ['recharts'],
  },
  {
    name: 'crypto-wallet',
    label: 'Crypto Wallet Dashboard',
    files: [
      'src/app/dashboards/crypto/page.tsx',
      'src/components/dashboards/crypto/CryptoWallet.tsx',
      'src/data/dashboards/crypto-data.json',
      'src/styles/dashboards/crypto.module.css',
    ],
    dependencies: ['recharts'],
  },
  {
    name: 'components-library',
    label: 'Components Library Dashboard',
    files: [
      'src/app/dashboards/components-library/page.tsx',
      'src/components/dashboards/components-library/ComponentsLibrary.tsx',
      'src/data/dashboards/customization-data.json',
      'src/styles/dashboards/components-library.module.css',
    ],
    dependencies: ['@mui/material'],
  },
  {
    name: 'user-management',
    label: 'User Management Dashboard',
    files: [
      'src/app/dashboards/user-management/users/page.tsx',
      'src/app/dashboards/user-management/roles/page.tsx',
      'src/app/dashboards/user-management/permissions/page.tsx',
      'src/app/dashboards/user-management/logs/page.tsx',
      'src/components/dashboards/user-management/Users.tsx',
      'src/components/dashboards/user-management/Roles.tsx',
      'src/components/dashboards/user-management/Permissions.tsx',
      'src/components/dashboards/user-management/Logs.tsx',
      'src/data/dashboards/user-management-data.json',
      'src/styles/dashboards/user-management.module.css',
    ],
    dependencies: ['@mui/x-data-grid'],
  },
  {
    name: 'calendar',
    label: 'Calendar App',
    files: [
      'src/app/apps/calendar/page.tsx',
      'src/components/apps/calendar/Calendar.tsx',
      'src/data/apps/calendar-data.json',
      'src/styles/apps/calendar.module.css',
    ],
    dependencies: ['react-calendar'],
  },
  {
    name: 'query-builder',
    label: 'Query Builder App',
    files: [
      'src/app/apps/query-builder/page.tsx',
      'src/components/apps/query-builder/AITools.tsx',
      'src/data/apps/query-builder-data.json',
      'src/styles/apps/query-builder.module.css',
    ],
    dependencies: ['@mui/material'],
  },
  {
    name: 'contacts',
    label: 'Contacts App',
    files: [
      'src/app/apps/contacts/page.tsx',
      'src/components/apps/contacts/Contacts.tsx',
      'src/data/apps/contacts-data.json',
      'src/styles/apps/contacts.module.css',
    ],
    dependencies: ['@mui/x-data-grid'],
  },
  {
    name: 'messenger',
    label: 'Messenger App',
    files: [
      'src/app/apps/messenger/page.tsx',
      'src/components/apps/messenger/Messenger.tsx',
      'src/data/apps/messages.json',
      'src/styles/apps/messenger.module.css',
    ],
    dependencies: ['socket.io-client'],
  },
  {
    name: 'e-commerce',
    label: 'ECommerce App',
    files: [
      'src/app/apps/e-commerce/products/page.tsx',
      'src/app/apps/e-commerce/products/[id]/[slug]/page.tsx',
      'src/app/apps/e-commerce/products/new/page.tsx',
      'src/app/apps/e-commerce/orders/page.tsx',
      'src/app/apps/e-commerce/orders/[id]/page.tsx',
      'src/components/apps/e-commerce/Products.tsx',
      'src/components/apps/e-commerce/ProductDetail.tsx',
      'src/components/apps/e-commerce/NewProduct.tsx',
      'src/components/apps/e-commerce/Orders.tsx',
      'src/components/apps/e-commerce/OrderDetail.tsx',
      'src/data/apps/e-commerce-data.json',
      'src/styles/apps/e-commerce.module.css',
    ],
    dependencies: ['@mui/x-data-grid'],
  },
  {
    name: 'file-manager',
    label: 'File Manager App',
    files: [
      'src/app/apps/file-manager/page.tsx',
      'src/components/apps/file-manager/FileManager.tsx',
      'src/data/apps/file-manager-data.json',
      'src/styles/apps/file-manager.module.css',
    ],
    dependencies: ['@mui/material'],
  },
  {
    name: 'learning',
    label: 'Learning App',
    files: [
      'src/app/apps/learning/page.tsx',
      'src/components/apps/learning/Learning.tsx',
      'src/data/apps/learning-data.json',
      'src/styles/apps/learning.module.css',
    ],
    dependencies: ['@mui/material'],
  },
  {
    name: 'help-center',
    label: 'Help Center App',
    files: [
      'src/app/apps/help-center/page.tsx',
      'src/app/apps/help-center/faqs/page.tsx',
      'src/app/apps/help-center/guides/page.tsx',
      'src/app/apps/help-center/support/page.tsx',
      'src/components/apps/help-center/Home.tsx',
      'src/components/apps/help-center/FAQs.tsx',
      'src/components/apps/help-center/Guides.tsx',
      'src/components/apps/help-center/Support.tsx',
      'src/data/apps/help-center-data.json',
      'src/styles/apps/help-center.module.css',
    ],
    dependencies: ['@mui/material'],
  },
  {
    name: 'mailbox',
    label: 'Mailbox App',
    files: [
      'src/app/apps/mailbox/folders/[folder]/page.tsx',
      'src/components/apps/mailbox/Mailbox.tsx',
      'src/data/apps/mailbox-data.json',
      'src/styles/apps/mailbox.module.css',
    ],
    dependencies: ['@mui/x-data-grid'],
  },
  {
    name: 'tasks',
    label: 'Tasks App',
    files: [
      'src/app/apps/tasks/page.tsx',
      'src/components/apps/tasks/Tasks.tsx',
      'src/data/apps/tasks-data.json',
      'src/styles/apps/tasks.module.css',
    ],
    dependencies: ['@mui/material'],
  },
  {
    name: 'scrumboard',
    label: 'Scrumboard App',
    files: [
      'src/app/apps/scrumboard/page.tsx',
      'src/components/apps/scrumboard/Scrumboard.tsx',
      'src/data/apps/scrumboard-data.json',
      'src/styles/apps/scrumboard.module.css',
    ],
    dependencies: ['react-beautiful-dnd'],
  },
  {
    name: 'notes',
    label: 'Notes App',
    files: [
      'src/app/apps/notes/page.tsx',
      'src/components/apps/notes/Notes.tsx',
      'src/data/apps/notes-data.json',
      'src/styles/apps/notes.module.css',
    ],
    dependencies: ['@mui/x-data-grid'],
  },
  {
    name: 'notifications',
    label: 'Notifications App',
    files: [
      'src/app/apps/notifications/page.tsx',
      'src/components/apps/notifications/Notifications.tsx',
      'src/data/apps/notifications-data.json',
      'src/styles/apps/notifications.module.css',
    ],
    dependencies: ['@mui/material'],
  },
  {
    name: 'profile',
    label: 'Profile App',
    files: [
      'src/app/apps/profile/page.tsx',
      'src/components/apps/profile/Profile.tsx',
      'src/data/apps/profile-data.json',
      'src/styles/apps/profile.module.css',
    ],
    dependencies: ['@mui/material'],
  },
  {
    name: 'settings',
    label: 'Settings App',
    files: [
      'src/app/apps/settings/page.tsx',
      'src/components/apps/settings/Settings.tsx',
      'src/data/apps/settings-data.json',
      'src/styles/apps/settings.module.css',
    ],
    dependencies: ['@mui/material'],
  },
  {
    name: 'activities',
    label: 'Activities Page',
    files: [
      'src/app/pages/activities/page.tsx',
      'src/components/pages/activities/Activities.tsx',
      'src/data/pages/activities-data.json',
      'src/styles/pages/activities.module.css',
    ],
    dependencies: ['@mui/material'],
  },
  {
    name: 'coming-soon',
    label: 'Coming Soon Pages',
    files: [
      'src/app/pages/coming-soon/classic/page.tsx',
      'src/app/pages/coming-soon/modern/page.tsx',
      'src/app/pages/coming-soon/modern-reversed/page.tsx',
      'src/app/pages/coming-soon/split-screen/page.tsx',
      'src/app/pages/coming-soon/split-screen-reversed/page.tsx',
      'src/app/pages/coming-soon/full-screen/page.tsx',
      'src/app/pages/coming-soon/full-screen-reversed/page.tsx',
      'src/components/pages/coming-soon/ClassicComingSoon.tsx',
      'src/components/pages/coming-soon/ModernComingSoon.tsx',
      'src/components/pages/coming-soon/ModernReversedComingSoon.tsx',
      'src/components/pages/coming-soon/SplitScreenComingSoon.tsx',
      'src/components/pages/coming-soon/SplitScreenReversedComingSoon.tsx',
      'src/components/pages/coming-soon/FullScreenComingSoon.tsx',
      'src/components/pages/coming-soon/FullScreenReversedComingSoon.tsx',
      'src/data/pages/coming-soon-data.json',
      'src/styles/pages/coming-soon.module.css',
    ],
    dependencies: ['@mui/material'],
  },
  {
    name: 'authentication',
    label: 'Authentication Pages',
    files: [
      'src/app/pages/authentication/sign-in/classic/page.tsx',
      'src/app/pages/authentication/sign-in/signature/page.tsx',
      'src/app/pages/authentication/sign-in/split-screen/page.tsx',
      'src/app/pages/authentication/sign-in/split-screen-reversed/page.tsx',
      'src/app/pages/authentication/sign-in/full-screen/page.tsx',
      'src/app/pages/authentication/sign-in/full-screen-reversed/page.tsx',
      'src/app/pages/authentication/sign-up/classic/page.tsx',
      'src/app/pages/authentication/sign-up/modern/page.tsx',
      'src/app/pages/authentication/sign-up/modern-reversed/page.tsx',
      'src/app/pages/authentication/sign-up/split-screen/page.tsx',
      'src/app/pages/authentication/sign-up/split-screen-reversed/page.tsx',
      'src/app/pages/authentication/sign-up/full-screen/page.tsx',
      'src/app/pages/authentication/sign-up/full-screen-reversed/page.tsx',
      'src/app/pages/authentication/sign-out/classic/page.tsx',
      'src/app/pages/authentication/sign-out/modern/page.tsx',
      'src/app/pages/authentication/sign-out/modern-reversed/page.tsx',
      'src/app/pages/authentication/sign-out/split-screen/page.tsx',
      'src/app/pages/authentication/sign-out/split-screen-reversed/page.tsx',
      'src/app/pages/authentication/sign-out/full-screen/page.tsx',
      'src/app/pages/authentication/sign-out/full-screen-reversed/page.tsx',
      'src/app/pages/authentication/forgot-password/classic/page.tsx',
      'src/app/pages/authentication/forgot-password/modern/page.tsx',
      'src/app/pages/authentication/forgot-password/modern-reversed/page.tsx',
      'src/app/pages/authentication/forgot-password/split-screen/page.tsx',
      'src/app/pages/authentication/forgot-password/split-screen-reversed/page.tsx',
      'src/app/pages/authentication/forgot-password/full-screen/page.tsx',
      'src/app/pages/authentication/forgot-password/full-screen-reversed/page.tsx',
      'src/app/pages/authentication/reset-password/classic/page.tsx',
      'src/app/pages/authentication/reset-password/modern/page.tsx',
      'src/app/pages/authentication/reset-password/modern-reversed/page.tsx',
      'src/app/pages/authentication/reset-password/split-screen/page.tsx',
      'src/app/pages/authentication/reset-password/split-screen-reversed/page.tsx',
      'src/app/pages/authentication/reset-password/full-screen/page.tsx',
      'src/app/pages/authentication/reset-password/full-screen-reversed/page.tsx',
      'src/app/pages/authentication/unlock-session/classic/page.tsx',
      'src/app/pages/authentication/unlock-session/modern/page.tsx',
      'src/app/pages/authentication/unlock-session/modern-reversed/page.tsx',
      'src/app/pages/authentication/unlock-session/split-screen/page.tsx',
      'src/app/pages/authentication/unlock-session/split-screen-reversed/page.tsx',
      'src/app/pages/authentication/unlock-session/full-screen/page.tsx',
      'src/app/pages/authentication/unlock-session/full-screen-reversed/page.tsx',
      'src/app/pages/authentication/confirmation-required/classic/page.tsx',
      'src/app/pages/authentication/confirmation-required/modern/page.tsx',
      'src/app/pages/authentication/confirmation-required/modern-reversed/page.tsx',
      'src/app/pages/authentication/confirmation-required/split-screen/page.tsx',
      'src/app/pages/authentication/confirmation-required/split-screen-reversed/page.tsx',
      'src/app/pages/authentication/confirmation-required/full-screen/page.tsx',
      'src/app/pages/authentication/confirmation-required/full-screen-reversed/page.tsx',
      'src/components/pages/authentication/SignInClassic.tsx',
      'src/components/pages/authentication/SignInSignature.tsx',
      'src/components/pages/authentication/SignInSplitScreen.tsx',
      'src/components/pages/authentication/SignInSplitScreenReversed.tsx',
      'src/components/pages/authentication/SignInFullScreen.tsx',
      'src/components/pages/authentication/SignInFullScreenReversed.tsx',
      'src/components/pages/authentication/SignUpClassic.tsx',
      'src/components/pages/authentication/SignUpModern.tsx',
      'src/components/pages/authentication/SignUpModernReversed.tsx',
      'src/components/pages/authentication/SignUpSplitScreen.tsx',
      'src/components/pages/authentication/SignUpSplitScreenReversed.tsx',
      'src/components/pages/authentication/SignUpFullScreen.tsx',
      'src/components/pages/authentication/SignUpFullScreenReversed.tsx',
      'src/components/pages/authentication/SignOutClassic.tsx',
      'src/components/pages/authentication/SignOutModern.tsx',
      'src/components/pages/authentication/SignOutModernReversed.tsx',
      'src/components/pages/authentication/SignOutSplitScreen.tsx',
      'src/components/pages/authentication/SignOutSplitScreenReversed.tsx',
      'src/components/pages/authentication/SignOutFullScreen.tsx',
      'src/components/pages/authentication/SignOutFullScreenReversed.tsx',
      'src/components/pages/authentication/ForgotPasswordClassic.tsx',
      'src/components/pages/authentication/ForgotPasswordModern.tsx',
      'src/components/pages/authentication/ForgotPasswordModernReversed.tsx',
      'src/components/pages/authentication/ForgotPasswordSplitScreen.tsx',
      'src/components/pages/authentication/ForgotPasswordSplitScreenReversed.tsx',
      'src/components/pages/authentication/ForgotPasswordFullScreen.tsx',
      'src/components/pages/authentication/ForgotPasswordFullScreenReversed.tsx',
      'src/components/pages/authentication/ResetPasswordClassic.tsx',
      'src/components/pages/authentication/ResetPasswordModern.tsx',
      'src/components/pages/authentication/ResetPasswordModernReversed.tsx',
      'src/components/pages/authentication/ResetPasswordSplitScreen.tsx',
      'src/components/pages/authentication/ResetPasswordSplitScreenReversed.tsx',
      'src/components/pages/authentication/ResetPasswordFullScreen.tsx',
      'src/components/pages/authentication/ResetPasswordFullScreenReversed.tsx',
      'src/components/pages/authentication/UnlockSessionClassic.tsx',
      'src/components/pages/authentication/UnlockSessionModern.tsx',
      'src/components/pages/authentication/UnlockSessionModernReversed.tsx',
      'src/components/pages/authentication/UnlockSessionSplitScreen.tsx',
      'src/components/pages/authentication/UnlockSessionSplitScreenReversed.tsx',
      'src/components/pages/authentication/UnlockSessionFullScreen.tsx',
      'src/components/pages/authentication/UnlockSessionFullScreenReversed.tsx',
      'src/components/pages/authentication/ConfirmationRequiredClassic.tsx',
      'src/components/pages/authentication/ConfirmationRequiredModern.tsx',
      'src/components/pages/authentication/ConfirmationRequiredModernReversed.tsx',
      'src/components/pages/authentication/ConfirmationRequiredSplitScreen.tsx',
      'src/components/pages/authentication/ConfirmationRequiredSplitScreenReversed.tsx',
      'src/components/pages/authentication/ConfirmationRequiredFullScreen.tsx',
      'src/components/pages/authentication/ConfirmationRequiredFullScreenReversed.tsx',
      'src/data/pages/authentication-data.json',
      'src/styles/pages/authentication.module.css',
    ],
    dependencies: ['@mui/material', 'react-hook-form'],
  },
  {
    name: 'error-types',
    label: 'Error Pages',
    files: [
      'src/app/pages/error/401/page.tsx',
      'src/app/pages/error/404/page.tsx',
      'src/app/pages/error/500/page.tsx',
      'src/components/pages/error/Error401.tsx',
      'src/components/pages/error/Error404.tsx',
      'src/components/pages/error/Error500.tsx',
      'src/data/pages/error-data.json',
      'src/styles/pages/error.module.css',
    ],
    dependencies: ['@mui/material'],
  },
  {
    name: 'invoice',
    label: 'Invoice Pages',
    files: [
      'src/app/pages/invoice/compact/page.tsx',
      'src/app/pages/invoice/modern/page.tsx',
      'src/components/pages/invoice/CompactInvoice.tsx',
      'src/components/pages/invoice/ModernInvoice.tsx',
      'src/data/pages/invoice-data.json',
      'src/styles/pages/invoice.module.css',
    ],
    dependencies: ['@mui/material'],
  },
  {
    name: 'pricing',
    label: 'Pricing Pages',
    files: [
      'src/app/pages/pricing/modern/page.tsx',
      'src/app/pages/pricing/simple/page.tsx',
      'src/app/pages/pricing/single/page.tsx',
      'src/app/pages/pricing/table/page.tsx',
      'src/components/pages/pricing/StandardPricing.tsx',
      'src/components/pages/pricing/MinimalistPricing.tsx',
      'src/components/pages/pricing/SingleProductPricing.tsx',
      'src/components/pages/pricing/TableFeaturesPricing.tsx',
      'src/data/pages/pricing-data.json',
      'src/styles/pages/pricing.module.css',
    ],
    dependencies: ['@mui/material'],
  },
  {
    name: 'react-tables',
    label: 'React Tables',
    files: [
      'src/app/pages/tables/page.tsx',
      'src/components/pages/tables/ReactTables.tsx',
      'src/data/pages/tables-data.json',
      'src/styles/pages/tables.module.css',
    ],
    dependencies: ['@tanstack/react-table'],
  },
  {
    name: 'carousels',
    label: 'Carousels',
    files: [
      'src/app/pages/carousels/element/fullscreen/page.tsx',
      'src/app/pages/carousels/element/vertical/page.tsx',
      'src/app/pages/carousels/element/multiitem/page.tsx',
      'src/app/pages/carousels/element/threed/page.tsx',
      'src/app/pages/carousels/element/content/page.tsx',
      'src/app/pages/carousels/element/testimonial/page.tsx',
      'src/components/pages/carousels/FullScreenCarousel.tsx',
      'src/components/pages/carousels/VerticalCarousel.tsx',
      'src/components/pages/carousels/MultiItemCarousel.tsx',
      'src/components/pages/carousels/ThreeDCarousel.tsx',
      'src/components/pages/carousels/ContentCarousel.tsx',
      'src/components/pages/carousels/TestimonialCarousel.tsx',
      'src/data/pages/carousels-data.json',
      'src/styles/pages/carousels.module.css',
    ],
    dependencies: ['@mui/material'],
  },
  {
    name: 'search',
    label: 'Search Pages',
    files: [
      'src/app/pages/search/classic/page.tsx',
      'src/app/pages/search/modern/page.tsx',
      'src/components/pages/search/ClassicSearch.tsx',
      'src/components/pages/search/ModernSearch.tsx',
      'src/data/pages/search-data.json',
      'src/styles/pages/search.module.css',
    ],
    dependencies: ['@mui/material'],
  },
  {
    name: 'maintenance',
    label: 'Maintenance Page',
    files: [
      'src/app/pages/maintenance/page.tsx',
      'src/components/pages/maintenance/Maintenance.tsx',
      'src/data/pages/maintenance-data.json',
      'src/styles/pages/maintenance.module.css',
    ],
    dependencies: ['@mui/material'],
  },
  {
    name: 'theme-layout-customizer',
    label: 'Theme Layout Customizer',
    files: [
      'src/components/theme/ThemeLayoutCustomizer.tsx',
      'src/data/theme/theme-layout-data.json',
      'src/styles/theme/theme-layout-customizer.module.css',
    ],
    dependencies: ['@mui/material'],
  },
  {
    name: 'api-management',
    label: 'API Management',
    files: [
      'src/components/api-management/APIManagement.tsx',
      'src/data/api-management/api-management-data.json',
      'src/styles/api-management/api-management.module.css',
    ],
    dependencies: ['@mui/material'],
  },
  {
    name: 'theme-style',
    label: 'Theme Style',
    files: [
      'src/components/theme/ThemeStyle.tsx',
      'src/data/theme/theme-style-data.json',
      'src/styles/theme/theme-style.module.css',
    ],
    dependencies: ['@mui/material'],
  },
];

app.post('/setup', async (req, res) => {
  const { components: selectedComponents }: { components: string[] } = req.body;
  const outputDir = path.join(__dirname, '../singularity-install');

  try {
    // Create output directory
    await fs.ensureDir(outputDir);

    // Copy core files (always included)
    await fs.copy(path.join(__dirname, '../src/app/page.tsx'), path.join(outputDir, 'src/app/page.tsx'));
    await fs.copy(path.join(__dirname, '../src/app/layout.tsx'), path.join(outputDir, 'src/app/layout.tsx'));
    await fs.copy(path.join(__dirname, '../src/components/core'), path.join(outputDir, 'src/components/core'));
    await fs.copy(path.join(__dirname, '../src/data/core'), path.join(outputDir, 'src/data/core'));
    await fs.copy(path.join(__dirname, '../src/styles/globals.css'), path.join(outputDir, 'src/styles/globals.css'));
    await fs.copy(path.join(__dirname, '../public/assets'), path.join(outputDir, 'public/assets'));
    await fs.copy(path.join(__dirname, '../next.config.ts'), path.join(outputDir, 'next.config.ts'));
    await fs.copy(path.join(__dirname, '../tsconfig.json'), path.join(outputDir, 'tsconfig.json'));
    await fs.copy(path.join(__dirname, '../postcss.config.js'), path.join(outputDir, 'postcss.config.js'));

    // Copy selected demo components
    for (const comp of components) {
      if (selectedComponents.includes(comp.name)) {
        for (const file of comp.files) {
          await fs.copy(path.join(__dirname, `../${file}`), path.join(outputDir, file));
        }
      }
    }
    // Copy demo assets if any demo components are selected
    if (selectedComponents.length > 0) {
      await fs.copy(path.join(__dirname, '../public/demo-assets'), path.join(outputDir, 'public/demo-assets'));
    }

    // Update package.json with selected dependencies
    const packageJson = await fs.readJson(path.join(__dirname, '../package.json'));
    const selectedDeps = components
      .filter((comp) => selectedComponents.includes(comp.name))
      .flatMap((comp) => comp.dependencies)
      .reduce((acc, dep) => ({ ...acc, [dep]: packageJson.dependencies[dep] || 'latest' }), {});
    packageJson.dependencies = {
      ...packageJson.dependencies,
      ...selectedDeps,
    };
    await fs.writeJson(path.join(outputDir, 'package.json'), packageJson, { spaces: 2 });

    res.status(200).send('Installation complete');
  } catch (err: any) {
    console.error('Installation failed:', err);
    res.status(500).send('Installation failed: ' + err.message);
  }
});

app.listen(3001, () => console.log('Setup server running on http://localhost:3001'));