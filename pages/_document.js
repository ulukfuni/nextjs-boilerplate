import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import GlobalStyles from '../styles/global'

/**
 * Rendered Server Side
 */
export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet()
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
        const styleTags = sheet.getStyleElement()
        return { ...page, styleTags }
    }

    render = () => (
        <Html lang="en">
            <Head>
                <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
                {/* <link rel="icon" href="/static/favicon.ico" /> */}
                <meta key="viewport" name="viewport" content="initial-scale=1, minimum-scale=1, width=device-width" />
                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=EB+Garamond:400,500" rel="stylesheet" />
                <GlobalStyles />
                {this.props.styleTags}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
