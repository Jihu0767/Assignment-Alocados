import { GlobalTheme } from 'styles/GlobalTheme'

type GlobalThemeType = typeof GlobalTheme

declare module 'styled-components' {
  export interface DefaultTheme extends GlobalThemeType {}
}
