'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import AutoFixHighSharpIcon from '@mui/icons-material/AutoFixHighSharp';
import { BasicFloatingWidgetProps } from './BasicFloatingWidgetItemType';
import BasicFloatingWidgetCard from './BasicFloatingWidgetCard';
import { useTheme } from '@mui/material/styles';

const defaultFeatures = [
  { id: 'feature1', label: 'Customization Options', action: () => {} },
  { id: 'feature2', label: 'View Full Documentation', action: () => {} },
];

const BasicFloatingWidgetPage: React.FC<BasicFloatingWidgetProps> = ({
  initialOpen = false,
  position = { bottom: '160px', right: '240px' },
  features = defaultFeatures,
}) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(initialOpen);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (!isVisible) {
    return createPortal(
      <button
        className="fixed z-[1000] rounded-full p-2 hover:bg-gray-300 transition"
        style={{
          bottom: position.bottom,
          right: position.right,
          top: position.top || 'auto',
          left: position.left || 'auto',
          backgroundColor: '#6BC9F7',
        }}
        onClick={() => setIsVisible(true)}
        aria-label="Reopen site customization panel"
      >
        <AutoFixHighSharpIcon style={{ color: theme.palette.common.white }} />
      </button>,
      document.body
    );
  }

  const widget = (
    <div
      className="fixed z-[1000] rounded-md max-w-xs box-border"
      style={{
        bottom: position.bottom,
        right: position.right,
        top: position.top || 'auto',
        left: position.left || 'auto',
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.divider}`,
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '8px',
        width: '296px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <button
        className="px-4 py-2 rounded-md hover:bg-gray-200 transition w-full flex items-center justify-center gap-2 whitespace-nowrap"
        style={{ backgroundColor: theme.palette.background.paper, color: theme.palette.text.primary, fontWeight: 400, fontSize: '14px' }}
        onClick={() => (isOpen ? setIsVisible(false) : setIsOpen(true))}
        aria-label="Toggle or close site customization panel"
      >
        {isOpen ? (
          <CloseTwoToneIcon style={{ color: theme.palette.text.primary }} />
        ) : (
          <>
            <AutoFixHighSharpIcon style={{ color: theme.palette.text.primary }} />
            Site Components Library
          </>
        )}
      </button>
      {isOpen && <BasicFloatingWidgetCard features={features} />}
    </div>
  );

  return createPortal(widget, document.body);
};

export default BasicFloatingWidgetPage;