// This file extends the MUI theme types to include custom properties (e.g., badgeColor, reactionColor, icon) 
// used in the Singularity project's theme configuration. It augments the Palette and PaletteOptions 
// interfaces from @mui/material/styles to ensure TypeScript recognizes these custom properties 
// in theme-aware components like SingularityNavBadge, preventing type errors such as 
// "Property 'badgeColor' does not exist on type 'Palette & CssVarsPalette'".

import { Palette as MuiPalette, PaletteOptions as MuiPaletteOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette extends MuiPalette {
    badgeColor: string;
    reactionColor: string;
    icon: {
      primary: string;
      active: string;
      material: string;
    };
  }

  interface PaletteOptions extends MuiPaletteOptions {
    badgeColor?: string;
    reactionColor?: string;
    icon?: {
      primary?: string;
      active?: string;
      material?: string;
    };
  }
}