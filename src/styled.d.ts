import 'styled-components';

interface ThemeDimensions {
  mobile: string;
  tablet: string;
  desktop: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    dimensions: ThemeDimensions;
  }
}
