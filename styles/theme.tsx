import { extendTheme, theme as chakraTheme, type ThemeConfig } from '@chakra-ui/react'

const fonts = {
  ...chakraTheme.fonts,
  body: '\'Saira\', sans-serif',
  heading: '\'Saira\', sans-serif',
}

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const breakpoints = {
  sm: '320px',
  md: '767px',
  lg: '992px',
  xl: '1210px',
  base: '1920px',
}

const colors = {
  blackRadial: '#151515',
  cardBlack: '#0F0F11',
  activeBlack: '#0F1012',
  secondaryBlack: '#191A1C',
  greenRadial: '#17B384',
  greenLink: '#75DAB4',
  generalGray: '#E4E4E4',
  brightGrey: '#5F6062',
  maxGray: '#232323',
  nightBlue: '#0D0D0F',
  darkBlue: '#191A1C',
  midleGray: '#969595',
  lightGray: '#C4C4C4',
  lightYellow: '#FFC107',
  hightYellow: '#fff9e6',
  navBarColor: 'rgba(25, 26, 28, 0.6)',
}

const overrides = {
  ...chakraTheme,
  fonts,
  colors,
  breakpoints,
  fontWieghts: {
    normal: 300,
    medium: 500,
    semiMedium: 600,
    semiBold: 700,
    bold: 800,
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
  },
  config,
}

const customTheme = extendTheme(overrides)

export default customTheme
