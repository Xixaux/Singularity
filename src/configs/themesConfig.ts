import { singularityDark, skyBlue } from '@singularity/colors';
import { blueGrey } from '@mui/material/colors';
import { SingularityThemesType } from '@singularity/core/SingularitySettings/SingularitySettings';

export const lightPaletteText = {
  primary: '#1C1C1C',
  secondary: 'rgb(112, 119, 133)',
  disabled: 'rgb(154, 161, 174)',
};

export const darkPaletteText = {
  primary: 'rgb(255,255,255)',
  secondary: 'rgb(153, 168, 189)',
  disabled: 'rgb(161, 168, 180)',
};

export const themesConfig: SingularityThemesType = {
  default: {
    palette: {
      mode: 'light',
      divider: 'rgba(0, 0, 0, 0.12)',
      dividerChannel: '0 0 0',
      text: {
        primary: lightPaletteText.primary,
        secondary: '#43464bff',
      },
      badgeColor: '#00E600',
      reactionColor: '#7B1FA2',
      icon: {
        primary: lightPaletteText.primary,
        active: '#63677C',
        material: '#0571D1',
      },
      common: {
        black: '#000000',
        white: '#FFFFFF',
      },
      primary: {
        light: '#5B758F',
        main: '#0571D1',
        dark: '#004B94',
        contrastText: '#FFFFFF',
      },
      secondary: {
        light: '#6BC9F7',
        main: '#79D7FF',
        dark: '#0082E0',
        contrastText: '#FFFFFF',
      },
      background: {
        paper: '#F7f7f9',
        default: '#ffffff',
        paperChannel: '255 255 255',
        defaultChannel: '255 255 255',
      },
      NavigationBar: {
        background: '#f7f7f9',
      },
      footer: {
        background: 'transparent',
      },
      error: {
        light: '#FFD2D7',
        main: '#D93A3A',
        dark: '#BC2525',
        contrastText: '#FFFFFF',
      },
    },
  },
  defaultDark: {
    palette: {
      mode: 'dark',
      divider: 'rgba(255, 255, 255, 0.12)',
      dividerChannel: '255 255 255',
      text: {
        primary: darkPaletteText.primary,
        secondary: '#B6C4CA',
      },
      badgeColor: '#6BC9F7',
      reactionColor: '#AB47BC',
      icon: {
        primary: '#B0B0B0',
        active: '#FFFFFF',
        material: '#64B5F6',
      },
      common: {
        black: '#000000',
        white: '#FFFFFF',
      },
      primary: {
        light: '#5B758F',
        main: '#0571D1',
        dark: '#004B94',
        contrastText: '#FFFFFF',
      },
      secondary: {
        light: '#6BC9F7',
        main: '#79D7FF',
        dark: '#0082E0',
        contrastText: '#FFFFFF',
      },
      background: {
        paper: '#1E1E1E',
        default: '#1C1C1C',
        paperChannel: '30 30 30',
        defaultChannel: '28 28 28',
      },
      footer: {
        background: 'transparent',
      },
      error: {
        light: '#FFD2D7',
        main: '#D93A3A',
        dark: '#BC2525',
        contrastText: '#FFFFFF',
      },
    },
  },
  sapphireSteel: {
    palette: {
      mode: 'light',
      primary: {
        main: '#124CA6',
        light: '#5B79D7',
        dark: '#002A7A',
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        main: '#B6C4CA',
        light: '#F7F7F7',
        dark: '#87959C',
        contrastText: lightPaletteText.primary,
      },
      badgeColor: '#00E600',
      reactionColor: '#7B1FA2',
      background: {
        paper: '#F7F7F7',
        default: '#ffffff',
        paperChannel: '247 247 247',
        defaultChannel: '255 255 255',
      },
      NavigationBar: {
        background: '#ffffff',
      },
      footer: {
        background: 'transparent',
      },
      text: lightPaletteText,
      icon: {
        primary: lightPaletteText.primary,
        active: '#63677C',
        material: '#124CA6',
      },
      divider: '#F7F7F7',
      dividerChannel: '247 247 247',
    },
  },
  sapphireSteelDark: {
    palette: {
      mode: 'dark',
      primary: {
        main: '#124CA6',
        light: '#5B79D7',
        dark: '#002A7A',
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        main: '#B6C4CA',
        light: '#E6F3F9',
        dark: '#87959C',
        contrastText: lightPaletteText.primary,
      },
      badgeColor: '#6BC9F7',
      reactionColor: '#AB47BC',
      background: {
        default: '#003366',
        paper: '#0051A2',
        defaultChannel: '0 51 102',
        paperChannel: '0 81 162',
      },
      footer: {
        background: 'transparent',
      },
      text: darkPaletteText,
      icon: {
        primary: '#B0B0B0',
        active: '#FFFFFF',
        material: '#5B79D7',
      },
      divider: '#42474d',
      dividerChannel: '66 71 77',
    },
  },
  graphiteRuby: {
    palette: {
      mode: 'light',
      primary: {
        main: '#3E4E56',
        light: '#697E82',
        dark: '#17262E',
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        main: '#D93A3A',
        light: '#FF7063',
        dark: '#A1080F',
        contrastText: darkPaletteText.primary,
      },
      badgeColor: '#00E600',
      reactionColor: '#7B1FA2',
      background: {
        default: '#ffffff',
        paper: '#F7F7F7',
        defaultChannel: '255 255 255',
        paperChannel: '247 247 247',
      },
      NavigationBar: {
        background: '#ffffff',
      },
      footer: {
        background: 'transparent',
      },
      text: lightPaletteText,
      icon: {
        primary: lightPaletteText.primary,
        active: '#63677C',
        material: '#3E4E56',
      },
      divider: '#F7F7F7',
      dividerChannel: '247 247 247',
    },
  },
  graphiteRubyDark: {
    palette: {
      mode: 'dark',
      primary: {
        main: '#3E4E56',
        light: '#697E82',
        dark: '#17262E',
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        main: '#D93A3A',
        light: '#FF7063',
        dark: '#A1080F',
        contrastText: darkPaletteText.primary,
      },
      badgeColor: '#6BC9F7',
      reactionColor: '#AB47BC',
      background: {
        default: '#1C1C1C',
        paper: '#2e2e2e',
        defaultChannel: '28 28 28',
        paperChannel: '46 46 46',
      },
      footer: {
        background: 'transparent',
      },
      text: darkPaletteText,
      icon: {
        primary: '#B0B0B0',
        active: '#FFFFFF',
        material: '#697E82',
      },
      divider: '#3a3d40',
      dividerChannel: '58 61 64',
    },
  },
  jadeAmber: {
    palette: {
      mode: 'light',
      primary: {
        main: '#007265',
        light: '#4A9F90',
        dark: '#00463C',
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        main: '#FFDB4A',
        light: '#FFFF7D',
        dark: '#D1AF0A',
        contrastText: lightPaletteText.primary,
      },
      badgeColor: '#00E600',
      reactionColor: '#7B1FA2',
      background: {
        default: '#ffffff',
        paper: '#F7F7F7',
        defaultChannel: '255 255 255',
        paperChannel: '247 247 247',
      },
      NavigationBar: {
        background: '#ffffff',
      },
      footer: {
        background: 'transparent',
      },
      text: lightPaletteText,
      icon: {
        primary: lightPaletteText.primary,
        active: '#63677C',
        material: '#007265',
      },
      divider: '#b3c4c3',
      dividerChannel: '179 196 195',
    },
  },
  jadeAmberDark: {
    palette: {
      mode: 'dark',
      primary: {
        main: '#007265',
        light: '#4A9F90',
        dark: '#00463C',
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        main: '#FFDB4A',
        light: '#FFFF7D',
        dark: '#D1AF0A',
        contrastText: lightPaletteText.primary,
      },
      badgeColor: '#6BC9F7',
      reactionColor: '#AB47BC',
      background: {
        default: '#004D40',
        paper: '#00544a',
        defaultChannel: '0 77 64',
        paperChannel: '0 84 74',
      },
      footer: {
        background: 'transparent',
      },
      text: darkPaletteText,
      icon: {
        primary: '#B0B0B0',
        active: '#FFFFFF',
        material: '#4A9F90',
      },
      divider: '#2d6360',
      dividerChannel: '45 99 96',
    },
  },
  navyCoral: {
    palette: {
      mode: 'light',
      primary: {
        main: '#2E3B98',
        light: '#6666C8',
        dark: '#00196D',
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        main: '#FF784D',
        light: '#FFA879',
        dark: '#CF481F',
        contrastText: lightPaletteText.primary,
      },
      badgeColor: '#00E600',
      reactionColor: '#7B1FA2',
      background: {
        default: '#ffffff',
        paper: '#F7F7F7',
        defaultChannel: '255 255 255',
        paperChannel: '247 247 247',
      },
      NavigationBar: {
        background: '#ffffff',
      },
      footer: {
        background: 'transparent',
      },
      text: lightPaletteText,
      icon: {
        primary: lightPaletteText.primary,
        active: '#63677C',
        material: '#2E3B98',
      },
      divider: '#F7F7F7',
      dividerChannel: '247 247 247',
    },
  },
  navyCoralDark: {
    palette: {
      mode: 'dark',
      primary: {
        main: '#2E3B98',
        light: '#6666C8',
        dark: '#00196D',
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        main: '#FF784D',
        light: '#FFA879',
        dark: '#CF481F',
        contrastText: lightPaletteText.primary,
      },
      badgeColor: '#6BC9F7',
      reactionColor: '#AB47BC',
      background: {
        default: '#1A237E',
        paper: '#283593',
        defaultChannel: '26 35 126',
        paperChannel: '40 53 147',
      },
      footer: {
        background: 'transparent',
      },
      text: darkPaletteText,
      icon: {
        primary: '#B0B0B0',
        active: '#FFFFFF',
        material: '#6666C8',
      },
      divider: '#4d557e',
      dividerChannel: '77 85 126',
    },
  },
  onyxTeal: {
    palette: {
      mode: 'light',
      primary: {
        main: '#0E4F48',
        light: '#2F6A61',
        dark: '#00534A',
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        main: '#009E8F',
        light: '#59CCBD',
        dark: '#007064',
        contrastText: darkPaletteText.primary,
      },
      badgeColor: '#00E600',
      reactionColor: '#7B1FA2',
      background: {
        default: '#ffffff',
        paper: '#F7F7F7',
        defaultChannel: '255 255 255',
        paperChannel: '247 247 247',
      },
      NavigationBar: {
        background: '#ffffff',
      },
      footer: {
        background: 'transparent',
      },
      text: lightPaletteText,
      icon: {
        primary: lightPaletteText.primary,
        active: '#63677C',
        material: '#0E4F48',
      },
      divider: '#F7F7F7',
      dividerChannel: '247 247 247',
    },
  },
  onyxTealDark: {
    palette: {
      mode: 'dark',
      primary: {
        main: '#4C616B',
        light: '#788E99',
        dark: '#23383F',
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        main: '#009E8F',
        light: '#59CCBD',
        dark: '#007064',
        contrastText: darkPaletteText.primary,
      },
      badgeColor: '#6BC9F7',
      reactionColor: '#AB47BC',
      background: {
        default: '#102027',
        paper: '#102027',
        defaultChannel: '16 32 39',
        paperChannel: '16 32 39',
      },
      footer: {
        background: 'transparent',
      },
      text: darkPaletteText,
      icon: {
        primary: '#B0B0B0',
        active: '#FFFFFF',
        material: '#788E99',
      },
      divider: '#2d383d',
      dividerChannel: '45 56 61',
    },
  },
  azureTangerine: {
    palette: {
      mode: 'light',
      primary: {
        main: '#64B5F6',
        light: '#9BE7FF',
        dark: '#298EC8',
        contrastText: lightPaletteText.primary,
      },
      secondary: {
        main: '#FBAA32',
        light: '#F7B248',
        dark: '#D4902A',
        contrastText: lightPaletteText.primary,
      },
      badgeColor: '#00E600',
      reactionColor: '#7B1FA2',
      background: {
        default: '#ffffff',
        paper: '#F7F7F7',
        defaultChannel: '255 255 255',
        paperChannel: '247 247 247',
      },
      NavigationBar: {
        background: '#ffffff',
      },
      footer: {
        background: 'transparent',
      },
      text: lightPaletteText,
      icon: {
        primary: lightPaletteText.primary,
        active: '#63677C',
        material: '#64B5F6',
      },
      divider: '#F7F7F7',
      dividerChannel: '247 247 247',
    },
  },
  azureTangerineDark: {
    palette: {
      mode: 'dark',
      primary: {
        main: '#7D5BA6',
        light: '#A188B6',
        dark: '#5C3D82',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#9E9E9E',
        light: '#BDBDBD',
        dark: '#757575',
        contrastText: '#121212',
      },
      background: {
        default: '#46008C',
        paper: '#3D007C',
        defaultChannel: '70 0 140',
        paperChannel: '61 0 124',
      },
      footer: {
        background: 'transparent',
      },
      text: {
        primary: '#F7F7F7',
        secondary: '#BDBDBD',
        disabled: '#616161',
      },
      icon: {
        primary: '#BDBDBD',
        active: '#FFFFFF',
        material: '#7D5BA6',
      },
      divider: '#424242',
      dividerChannel: '66 66 66',
    },
  },
  lightJadeBurgundy: {
    palette: {
      mode: 'light',
      primary: {
        main: '#88CC8B',
        light: '#B7F4BB',
        dark: '#589D5E',
        contrastText: lightPaletteText.primary,
      },
      secondary: {
        main: '#DE2568',
        light: '#FF6594',
        dark: '#A9083F',
        contrastText: darkPaletteText.primary,
      },
      badgeColor: '#00E600',
      reactionColor: '#7B1FA2',
      background: {
        default: '#ffffff',
        paper: '#F7F7F7',
        defaultChannel: '255 255 255',
        paperChannel: '247 247 247',
      },
      NavigationBar: {
        background: '#ffffff',
      },
      footer: {
        background: 'transparent',
      },
      text: lightPaletteText,
      icon: {
        primary: lightPaletteText.primary,
        active: '#63677C',
        material: '#88CC8B',
      },
      divider: '#F7F7F7',
      dividerChannel: '247 247 247',
    },
  },
  lightJadeBurgundyDark: {
    palette: {
      mode: 'dark',
      primary: {
        main: '#88CC8B',
        light: '#B7F4BB',
        dark: '#589D5E',
        contrastText: lightPaletteText.primary,
      },
      secondary: {
        main: '#DE2568',
        light: '#FF6594',
        dark: '#A9083F',
        contrastText: darkPaletteText.primary,
      },
      badgeColor: '#6BC9F7',
      reactionColor: '#AB47BC',
      background: {
        default: '#1a1a1a',
        paper: '#292929',
        defaultChannel: '26 26 26',
        paperChannel: '41 41 41',
      },
      footer: {
        background: 'transparent',
      },
      text: darkPaletteText,
      icon: {
        primary: '#B0B0B0',
        active: '#FFFFFF',
        material: '#B7F4BB',
      },
      divider: '#505250',
      dividerChannel: '80 82 80',
    },
  },
  mistRose: {
    palette: {
      mode: 'light',
      primary: {
        main: '#F7F7F7',
        light: '#FFFFFF',
        dark: '#A5AEB1',
        contrastText: lightPaletteText.primary,
      },
      secondary: {
        main: '#F16B99',
        light: '#FF9CC7',
        dark: '#C3366D',
        contrastText: darkPaletteText.primary,
      },
      badgeColor: '#00E600',
      reactionColor: '#7B1FA2',
      background: {
        default: '#ffffff',
        paper: '#F7F7F7',
        defaultChannel: '255 255 255',
        paperChannel: '247 247 247',
      },
      NavigationBar: {
        background: '#ffffff',
      },
      footer: {
        background: 'transparent',
      },
      text: lightPaletteText,
      icon: {
        primary: lightPaletteText.primary,
        active: '#63677C',
        material: '#F7F7F7',
      },
      divider: '#F7F7F7',
      dividerChannel: '247 247 247',
    },
  },
  mistRoseDark: {
    palette: {
      mode: 'dark',
      primary: {
        main: '#E0E9ED',
        light: '#FFFFFF',
        dark: '#A5AEB1',
        contrastText: lightPaletteText.primary,
      },
      secondary: {
        main: '#F16B99',
        light: '#FF9CC7',
        dark: '#C3366D',
        contrastText: darkPaletteText.primary,
      },
      badgeColor: '#6BC9F7',
      reactionColor: '#AB47BC',
      background: {
        default: '#999999',
        paper: '#F7F7F7',
        defaultChannel: '153 153 153',
        paperChannel: '247 247 247',
      },
      footer: {
        background: 'transparent',
      },
      text: darkPaletteText,
      icon: {
        primary: '#B0B0B0',
        active: '#FFFFFF',
        material: '#FF9CC7',
      },
      divider: '#424242',
      dividerChannel: '66 66 66',
    },
  },
  legacy: {
    palette: {
      mode: 'light',
      divider: '#F7F7F7',
      dividerChannel: '247 247 247',
      text: lightPaletteText,
      common: {
        black: '#1C1C1C',
        white: 'rgb(255, 255, 255)',
      },
      badgeColor: '#00E600',
      reactionColor: '#7B1FA2',
      primary: {
        light: singularityDark[200],
        main: singularityDark[500],
        dark: singularityDark[800],
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: skyBlue[100],
        main: skyBlue[500],
        dark: skyBlue[900],
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: '#FFFFFF',
        default: '#ffffff',
        paperChannel: '255 255 255',
        defaultChannel: '255 255 255',
      },
      NavigationBar: {
        background: '#ffffff',
      },
      footer: {
        background: 'transparent',
      },
      icon: {
        primary: lightPaletteText.primary,
        active: '#63677C',
        material: singularityDark[500],
      },
      error: {
        light: '#ffd2d7',
        main: '#fa4c3f',
        dark: '#bc2525',
      },
    },
  },
  light1: {
    palette: {
      mode: 'light',
      divider: '#F7F7F7',
      dividerChannel: '247 247 247',
      text: lightPaletteText,
      badgeColor: '#00E600',
      reactionColor: '#7B1FA2',
      primary: {
        light: '#B8D5D5',
        main: '#006E6E',
        dark: '#004040',
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: '#FFEEC4',
        main: '#FFC235',
        dark: '#FFA01A',
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: '#FFFFFF',
        default: '#ffffff',
        paperChannel: '255 255 255',
        defaultChannel: '255 255 255',
      },
      NavigationBar: {
        background: '#ffffff',
      },
      footer: {
        background: 'transparent',
      },
      icon: {
        primary: lightPaletteText.primary,
        active: '#63677C',
        material: '#006E6E',
      },
      error: {
        light: '#ffd2d7',
        main: '#fa4c3f',
        dark: '#bc2525',
      },
    },
  },
  light2: {
    palette: {
      mode: 'light',
      divider: '#F7F7F7',
      dividerChannel: '247 247 247',
      text: lightPaletteText,
      badgeColor: '#00E600',
      reactionColor: '#7B1FA2',
      primary: {
        light: '#BFE6DE',
        main: '#22A58C',
        dark: '#0F795C',
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: '#FFD5C6',
        main: '#FF6B3A',
        dark: '#FF3D1C',
        contrastText: darkPaletteText.primary,
      },
      background: {
        paper: '#FFFFFF',
        default: '#ffffff',
        paperChannel: '255 255 255',
        defaultChannel: '255 255 255',
      },
      NavigationBar: {
        background: '#ffffff',
      },
      footer: {
        background: 'transparent',
      },
      icon: {
        primary: lightPaletteText.primary,
        active: '#63677C',
        material: '#22A58C',
      },
      error: {
        light: '#ffd2d7',
        main: '#fa4c3f',
        dark: '#bc2525',
      },
    },
  },
  light3: {
    palette: {
      mode: 'light',
      divider: '#F7F7F7',
      dividerChannel: '247 247 247',
      text: lightPaletteText,
      badgeColor: '#00E600',
      reactionColor: '#7B1FA2',
      primary: {
        light: '#F7F7F7',
        main: '#72335E',
        dark: '#431733',
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: '#C7C6D5',
        main: '#3D3A71',
        dark: '#1D1B43',
        contrastText: darkPaletteText.primary,
      },
      background: {
        paper: '#FFFFFF',
        default: '#ffffff',
        paperChannel: '255 255 255',
        defaultChannel: '255 255 255',
      },
      NavigationBar: {
        background: '#ffffff',
      },
      footer: {
        background: 'transparent',
      },
      icon: {
        primary: lightPaletteText.primary,
        active: '#63677C',
        material: '#72335E',
      },
      error: {
        light: '#ffd2d7',
        main: '#fa4c3f',
        dark: '#bc2525',
      },
    },
  },
  light4: {
    palette: {
      mode: 'light',
      divider: '#F7F7F7',
      dividerChannel: '247 247 247',
      text: lightPaletteText,
      badgeColor: '#00E600',
      reactionColor: '#7B1FA2',
      primary: {
        light: '#F7F7F7',
        main: '#47525E',
        dark: '#232A33',
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: '#F7F7F7',
        main: '#3C5070',
        dark: '#1D283F',
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: '#FFFFFF',
        default: '#ffffff',
        paperChannel: '255 255 255',
        defaultChannel: '255 255 255',
      },
      NavigationBar: {
        background: '#ffffff',
      },
      footer: {
        background: 'transparent',
      },
      icon: {
        primary: lightPaletteText.primary,
        active: '#63677C',
        material: '#47525E',
      },
      error: {
        light: '#ffd2d7',
        main: '#fa4c3f',
        dark: '#bc2525',
      },
    },
  },
  light5: {
    palette: {
      mode: 'light',
      divider: '#F7F7F7',
      dividerChannel: '247 247 247',
      text: lightPaletteText,
      badgeColor: '#00E600',
      reactionColor: '#7B1FA2',
      primary: {
        light: '#F7F7F7',
        main: '#414141',
        dark: '#1F1F1F',
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: '#F7F7F7',
        main: '#F7F7F7',
        dark: '#B3B2A8',
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: '#ffffff',
        default: '#ffffff',
        paperChannel: '255 255 255',
        defaultChannel: '255 255 255',
      },
      NavigationBar: {
        background: '#ffffff',
      },
      footer: {
        background: 'transparent',
      },
      icon: {
        primary: lightPaletteText.primary,
        active: '#63677C',
        material: '#414141',
      },
      error: {
        light: '#F7F7F7',
        main: '#F7F7F7',
        dark: '#F7F7F7',
      },
    },
  },
  dark1: {
    palette: {
      mode: 'dark',
      divider: 'rgba(241,245,249,.12)',
      dividerChannel: '241 245 249',
      text: darkPaletteText,
      badgeColor: '#6BC9F7',
      reactionColor: '#AB47BC',
      primary: {
        light: '#F7F7F7',
        main: '#393A3F',
        dark: '#1A1B1E',
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: '#BDE5DD',
        main: '#19A286',
        dark: '#0C7556',
        contrastText: darkPaletteText.primary,
      },
      background: {
        paper: '#262526',
        default: '#1E1D1E',
        paperChannel: '38 37 38',
        defaultChannel: '30 29 30',
      },
      footer: {
        background: 'transparent',
      },
      icon: {
        primary: '#B0B0B0',
        active: '#FFFFFF',
        material: '#393A3F',
      },
      error: {
        light: '#ffd2d7',
        main: '#fa4c3f',
        dark: '#bc2525',
      },
    },
  },
  dark2: {
    palette: {
      mode: 'dark',
      divider: 'rgba(241,245,249,.12)',
      dividerChannel: '241 245 249',
      text: darkPaletteText,
      badgeColor: '#6BC9F7',
      reactionColor: '#AB47BC',
      primary: {
        light: '#F7F7F7',
        main: '#525661',
        dark: '#2A2D35',
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: '#F7F7F7',
        main: '#F7F7F7',
        dark: '#F7F7F7',
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: '#31343E',
        default: '#2A2D35',
        paperChannel: '49 52 62',
        defaultChannel: '42 45 53',
      },
      footer: {
        background: 'transparent',
      },
      icon: {
        primary: '#B0B0B0',
        active: '#FFFFFF',
        material: '#525661',
      },
      error: {
        light: '#F8ECEC',
        main: '#EDD1D1',
        dark: '#E5BEBE',
      },
    },
  },
  dark3: {
    palette: {
      mode: 'dark',
      divider: 'rgba(241,245,249,.12)',
      dividerChannel: '241 245 249',
      text: darkPaletteText,
      badgeColor: '#6BC9F7',
      reactionColor: '#AB47BC',
      primary: {
       長: '#F7F7F7',
        main: '#3C5070',
        dark: '#1D283F',
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: '#F5D3CF',
        main: '#DB614F',
        dark: '#C83C2D',
        contrastText: darkPaletteText.primary,
      },
      background: {
        paper: '#23354E',
        default: '#1B2A3F',
        paperChannel: '35 53 78',
        defaultChannel: '27 42 63',
      },
      footer: {
        background: 'transparent',
      },
      icon: {
        primary: '#B0B0B0',
        active: '#FFFFFF',
        material: '#3C5070',
      },
      error: {
        light: '#ffd2d7',
        main: '#fa4c3f',
        dark: '#bc2525',
      },
    },
  },
  dark4: {
    palette: {
      mode: 'dark',
      divider: 'rgba(241,245,249,.12)',
      dividerChannel: '241 245 249',
      text: darkPaletteText,
      badgeColor: '#6BC9F7',
      reactionColor: '#AB47BC',
      primary: {
        light: '#F7F7F7',
        main: '#61559A',
        dark: '#352C6B',
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: '#B8EFDA',
        main: '#07C37E',
        dark: '#07A04E',
        contrastText: darkPaletteText.primary,
      },
      background: {
        paper: '#22184B',
        default: '#180F3D',
        paperChannel: '34 24 75',
        defaultChannel: '24 15 61',
      },
      footer: {
        background: 'transparent',
      },
      icon: {
        primary: '#B0B0B0',
        active: '#FFFFFF',
        material: '#61559A',
      },
      error: {
        light: '#ffd2d7',
        main: '#fa4c3f',
        dark: '#bc2525',
      },
    },
  },
  dark5: {
    palette: {
      mode: 'dark',
      divider: 'rgba(241,245,249,.12)',
      dividerChannel: '241 245 249',
      text: darkPaletteText,
      badgeColor: '#6BC9F7',
      reactionColor: '#AB47BC',
      primary: {
        light: '#F7F7F7',
        main: '#5D7FA3',
        dark: '#324F76',
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: '#DAD6EE',
        main: '#8073C8',
        dark: '#5044A9',
        contrastText: darkPaletteText.primary,
      },
      background: {
        paper: '#465261',
        default: '#232931',
        paperChannel: '70 82 97',
        defaultChannel: '35 41 49',
      },
      footer: {
        background: 'transparent',
      },
      icon: {
        primary: '#B0B0B0',
        active: '#FFFFFF',
        material: '#5D7FA3',
      },
      error: {
        light: '#ffd2d7',
        main: '#fa4c3f',
        dark: '#bc2525',
      },
    },
  },
  dark6: {
    palette: {
      mode: 'dark',
      divider: 'rgba(241,245,249,.12)',
      dividerChannel: '241 245 249',
      text: darkPaletteText,
      badgeColor: '#6BC9F7',
      reactionColor: '#AB47BC',
      primary: {
        light: '#F7F7F7',
        main: '#2C3050',
        dark: '#141628',
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: '#F7F7F7',
        main: '#5780FD',
        dark: '#2E50FD',
        contrastText: darkPaletteText.primary,
      },
      background: {
        paper: '#2D3159',
        default: '#202441',
        paperChannel: '45 49 89',
        defaultChannel: '32 36 65',
      },
      footer: {
        background: 'transparent',
      },
      icon: {
        primary: '#B0B0B0',
        active: '#FFFFFF',
        material: '#2C3050',
      },
      error: {
        light: '#ffd2d7',
        main: '#fa4c3f',
        dark: '#bc2525',
      },
    },
  },
  dark7: {
    palette: {
      mode: 'dark',
      divider: 'rgba(241,245,249,.12)',
      dividerChannel: '241 245 249',
      text: darkPaletteText,
      badgeColor: '#6BC9F7',
      reactionColor: '#AB47BC',
      primary: {
        light: '#F7F7F7',
        main: '#274D5E',
        dark: '#122733',
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: '#B8EFCA',
        main: '#07C445',
        dark: '#07A122',
        contrastText: darkPaletteText.primary,
      },
      background: {
        paper: '#1C1E27',
        default: '#15171E',
        paperChannel: '28 30 39',
        defaultChannel: '21 23 30',
      },
      footer: {
        background: 'transparent',
      },
      icon: {
        primary: '#B0B0B0',
        active: '#FFFFFF',
        material: '#274D5E',
      },
      error: {
        light: '#ffd2d7',
        main: '#fa4c3f',
        dark: '#bc2525',
      },
    },
  },
  greyDark: {
    palette: {
      mode: 'dark',
      divider: 'rgba(241,245,249,.12)',
      dividerChannel: '241 245 249',
      text: darkPaletteText,
      badgeColor: '#6BC9F7',
      reactionColor: '#AB47BC',
      primary: {
        light: singularityDark[200],
        main: singularityDark[700],
        dark: singularityDark[800],
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: skyBlue[100],
        main: skyBlue[500],
        dark: skyBlue[900],
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: '#455a64',
        default: '#263238',
        paperChannel: '69 90 100',
        defaultChannel: '38 50 56',
      },
      footer: {
        background: 'transparent',
      },
      icon: {
        primary: '#B0B0B0',
        active: '#FFFFFF',
        material: singularityDark[700],
      },
      error: {
        light: '#ffd2d7',
        main: '#fa4c3f',
        dark: '#bc2525',
      },
    },
  },
};

export default themesConfig;