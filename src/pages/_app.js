import {ThemeProvider} from "next-themes";

import {Inter} from 'next/font/google'

import '@/styles/global.css'

const inter = Inter({
    weight: ['400', '500', '600'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
    style: 'normal',
    variable: '--font-inter'
})

export default function App({Component, pageProps}) {
    return (
        <div className={inter.variable}>
            <ThemeProvider disableTransitionOnChange>
                <Component {...pageProps} />
            </ThemeProvider>
        </div>
    );
}