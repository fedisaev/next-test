import '../styles/globals.css';
import Head from "next/head";
import {AppProps} from "next/app";
import {ReactElement} from "react";

function MyApp({Component, pageProps}: AppProps): ReactElement {
    return (
        <>
            <Head>
                <title>My first Next App</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Component {...pageProps} />
        </>
    )

}

export default MyApp;
