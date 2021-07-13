import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
// import firebaseConfig from '../firebase'
import { hotjar } from 'react-hotjar'

const original = {
  colors: {
    primary: '#00FFFF',
    primaryVariant: '#00B7B7',
    secondary: '#FF00FF',
    secondaryVariant: '#AE00AE',
    tertiary: '#6AA6FF',
    tertiaryVariant: '#4F81CC',
    background: '#1B0028',
    surface: '#2B2130',
    surfaceVariant: '#3B3041',
    success: '#00F09A',
    error: '#FF005C',
    hot: '#CCFF00',
    onPrimary: '#1B0028',
    onSecondary: '#1B0028',
    onBackground: '#FFFFFF',
    onSurface: '#FFFFFF',
    greyLight: '#B6B6B6',
  },
  typo: {
    h1: {
      size: '64px',
      weight: '700',
      lineHeight: '82px',
    },
    h2: {
      size: '40px',
      weight: '500',
      lineHeight: '60px',
    },
    h3: {
      size: '32px',
      weight: '700',
      lineHeight: '48px',
    },
    h4: {
      size: '24px',
      weight: '600',
      lineHeight: '36px',
    },
    h5: {
      size: '20px',
      weight: '600',
      lineHeight: '24px',
    },
    h6: {
      size: '14px',
      weight: '600',
      lineHeight: '21px',
    },
    pBold: {
      size: '16px',
      weight: '700',
      lineHeight: '24px',
    },
    pSemiBold: {
      size: '16px',
      weight: '600',
      lineHeight: '24px',
    },
    pRegular: {
      size: '16px',
      weight: '400',
      lineHeight: '24px',
    },
    placeholder: {
      style: 'italic',
      size: '14px',
      weight: '300',
      lineHeight: '21px',
    },
    link: {
      size: '16px',
      weight: '600',
      lineHeight: '24px',
    },
    linkSmall: {
      size: '10px',
      weight: '600',
      lineHeight: '15px',
    },
    fontMedium: {
      size: '12px',
      weight: '400',
      lineHeight: '18px',
    },
    fontMediumBold: {
      size: '12px',
      weight: '700',
      lineHeight: '18px',
    },
    fontSmall: {
      size: '10px',
      weight: '400',
      lineHeight: '15px',
    },
    fontSmallBold: {
      size: '10px',
      weight: '700',
      lineHeight: '15px',
    },
    callToActionBtn: {
      size: '14px',
      weight: '600',
      lineHeight: '21px',
    },
    callToActionBigBtn: {
      size: '24px',
      weight: '600',
      lineHeight: '36px',
    },
    formSubmit: {
      size: '14px',
      weight: '600',
      lineHeight: '21px',
    },
    tinyRegular: {
      size: '8px',
      weight: '400',
      lineHeight: '12px',
    },
    tinyBold: {
      size: '8px',
      weight: '700',
      lineHeight: '12px',
    },
  },
}

function MyApp({ Component, pageProps }) {
  if (process.browser) {
    hotjar.initialize(process.env.NEXT_PUBLIC_HOTJAR_ID, 6)
  }
  return (
    <ThemeProvider theme={original}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
