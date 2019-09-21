import App from 'next/app'
import { ThemeProvider } from 'styled-components'

import theme from '../styles/theme'

export default class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props
        return (
            <ThemeProvider theme={theme}>
                <Component
                    {...pageProps}
                />
            </ThemeProvider>
        )
    }
}
