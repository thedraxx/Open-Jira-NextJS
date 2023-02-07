import { UiProvider } from '@/context/UI/UiProvider'
import { lightTheme, darkTheme } from '../themes'
import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { EntriesProvider } from '../context/Entries/EntriesProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (



    <UiProvider>
      <EntriesProvider>
        < ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </EntriesProvider>
    </UiProvider>

  )
}