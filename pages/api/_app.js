import '../styles/globals.css'
import {SessionProvider} from 'next-ath/react'

function MyApp({ Component, pageProps }) {
    return (
        <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
        </SessionProvider>
    )
}