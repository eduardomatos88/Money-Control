import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: string
      primary: string
      secondary: string
      withdraw: string
      deposit: string
      textTitle: string
      textBody: string
      inputBackground: string
      inputBorder: string
      shape: string
    }
  }
}
