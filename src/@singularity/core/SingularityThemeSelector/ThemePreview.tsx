import clsx from 'clsx';
import Typography from '@mui/material/Typography';
import { SingularityThemesType } from '@singularity/core/SingularitySettings/SingularitySettings';

export type SingularityThemeOption = {
  id: string;
  section: SingularityThemesType;
};

type ThemePreviewProps = {
  className?: string;
  onSelect?: (T: SingularityThemeOption) => void;
  theme: SingularityThemeOption;
};

function ThemePreview(props: ThemePreviewProps) {
  const { theme, className, onSelect = () => {} } = props;
  const { section, id } = theme;
  const { NavigationBarSlice, toolbar, footer, main } = section;

  // Define themes with white navigation and footer
  const themesWithWhiteNavAndFooter = [
    'Sky Blue Orange',
    'Soft Green Maroon',
    'Cool Grey Pink',
    'Charcoal Teal',
    'Slate Crimson',
  ];
  const useWhiteNavAndFooter = themesWithWhiteNavAndFooter.includes(id);

  return (
    <div className={clsx(className, 'w-full min-h-full mb-6')}>
      <button
        className={clsx(
          'flex p-0 h-28 max-w-[85%] mx-auto relative w-full cursor-pointer overflow-hidden rounded-xl text-left font-medium transition-all hover:scale-102 duration-300 ease-out bg-gradient-to-br',
          {
            'from-white to-gray-100': id === 'Default',
            'from-gray-800 to-gray-900': id !== 'Default',
          }
        )}
        style={{
          background: id === 'Default'
            ? 'linear-gradient(135deg, #ffffff, #e5e7eb)'
            : `linear-gradient(135deg, ${main.palette.background.default}, ${main.palette.background.paper})`,
          color: main.palette.text.primary,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
        onClick={() => onSelect(theme)}
        type="button"
      >
        <div
          className="flex flex-col w-1/4 min-h-full p-1.5 border-r border-gray-600/30 rounded-l-xl"
          style={{
            background: useWhiteNavAndFooter
              ? '#FFFFFF'
              : `linear-gradient(135deg, ${NavigationBarSlice.palette.background.default}, ${NavigationBarSlice.palette.background.paper || NavigationBarSlice.palette.background.default})`,
            color: useWhiteNavAndFooter ? '#1f2937' : NavigationBarSlice.palette.text.primary,
          }}
        >
          <span className="text-xs font-medium">Nav</span>
        </div>

        <div className="flex flex-col w-3/4">
          <div
            className="w-full px-1.5 py-0.5 border-b border-gray-600/30"
            style={{
              background: `linear-gradient(135deg, ${toolbar.palette.background.default}, ${toolbar.palette.background.paper || toolbar.palette.background.default})`,
              color: toolbar.palette.text.primary,
            }}
          >
            <span className="text-xs font-medium">Toolbar</span>
          </div>

          <div className="flex flex-1 flex-col w-full">
            <div
              className="relative h-8 w-full px-1.5 rounded-t-md"
              style={{
                background: main.palette.primary.main,
                color: main.palette.primary.contrastText,
              }}
            >
              <span className="text-xs font-medium">Header</span>

              <div
                className="absolute bottom-0 right-0 mb-1 mr-1.5 flex h-5 w-5 items-center justify-center rounded-full text-xs shadow-md z-10"
                style={{
                  background: main.palette.secondary.main,
                  color: main.palette.secondary.contrastText,
                }}
              >
                <span>S</span>
              </div>
            </div>

            <div className="-mt-4 flex-1 w-full pl-1.5 pr-1.5">
              <div
                className="relative w-full h-full rounded-md p-1.5 shadow-inner"
                style={{
                  background: main.palette.background.paper,
                  color: main.palette.text.primary,
                }}
              >
                <span className="text-xs font-medium">Content</span>
              </div>
            </div>

            <div
              className="w-full px-1.5 py-0.5 border-t border-gray-600/30 rounded-b-md"
              style={{
                background: useWhiteNavAndFooter
                  ? '#FFFFFF'
                  : `linear-gradient(135deg, ${footer.palette.background.default}, ${footer.palette.background.paper || footer.palette.background.default})`,
                color: useWhiteNavAndFooter ? '#1f2937' : footer.palette.text.primary,
              }}
            >
              <span className="text-xs font-medium">Footer</span>
            </div>
          </div>
        </div>
      </button>
      <Typography className="mt-2 w-full text-center text-base font-semibold tracking-tight">
        {id}
      </Typography>
    </div>
  );
}

export default ThemePreview;