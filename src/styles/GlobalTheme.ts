export const GlobalTheme = {
  colors: {
    white: '#FFFFFF',

    primary100: '#5D28F2',
    primary24: '#5D28F21F',

    shade5: '#2A32490D',
    shade100: '#F4F5F8',
    shade200: '#E0E2E8',
    shade000: '#FAFBFC',
    shade300: '#C8CCD7',
    shade400: '#A9B0C1',
    shade600: '#546182',
    shade700: '#404E71',
    shade900: '#2A3249',

    info24: '#3756E43D',
  },
  spacing: {
    s8: '8px',
    s16: '16px',
    s24: '24px',
    s32: '32px',
  },
  radius: {
    s12: '12px',
    s30: '30px',
  },
} as const

export type ColorsType = keyof typeof GlobalTheme.colors
