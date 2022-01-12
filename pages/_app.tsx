import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Head>
                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='public/apple-touch-icon.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='public/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='public/favicon-16x16.png'
                />
                <link rel='icon' href='/favicon.ico' />
                <link rel='manifest' href='/manifest.json' />

                <meta
                    property='og:image'
                    content='/android-chrome-192x192.png'
                />
            </Head>
            <Component {...pageProps} />
        </div>
    );
}
