'use client';

import Button from '@mui/material/Button';
import { Squares2X2Icon } from '@heroicons/react/24/outline';
import { useTheme } from '@mui/material/styles';

type ComponentLibraryButtonProps = {
  className?: string;
};

/**
 * Component Library button.
 */
function ComponentLibraryButton(props: ComponentLibraryButtonProps) {
  const { className = '' } = props;
  const theme = useTheme();

  return (
    <Button
      component="a"
      href="https://singularitythemes.com"
      target="_blank"
      rel="noopener noreferrer"
      role="button"
      className={className}
      variant="contained"
      color="primary"
      sx={{ backgroundColor: 'secondary.main', color: 'white', borderRadius: '5px' }}
      startIcon={
        <Squares2X2Icon
          className="shortcut-icon"
          style={{
            width: 18,
            height: 18,
            shapeRendering: 'geometricPrecision',
            stroke: theme?.vars?.palette?.text?.primary || 'var(--text-color, #000000)',
          }}
        />
      }
    >
      Component Library
    </Button>
  );
}

export default ComponentLibraryButton;