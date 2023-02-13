import { UiProvider } from '@/context/UI/UiProvider'
import { lightTheme, darkTheme } from '../themes'
import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { EntriesProvider } from '../context/Entries/EntriesProvider';
import { SnackbarProvider } from 'notistack';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={3}>
      <UiProvider>
        <EntriesProvider>
          < ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </EntriesProvider>
      </UiProvider>
    </SnackbarProvider>
  )
}