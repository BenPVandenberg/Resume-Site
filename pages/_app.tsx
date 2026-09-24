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
                    href='/apple-touch-icon.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/favicon-16x16.png'
                />
                <link rel='icon' href='/favicon.ico' />
                <link rel='manifest' href='/manifest.json' />

                <meta property='og:type' content='website' />
                <meta
                    property='og:url'
                    content='https://benvandenberg.ca/'
                />
                <meta property='og:title' content='Ben Vandenberg' />
                <meta
                    property='og:description'
                    content='Software developer creating web, desktop, and CLI apps, with a strong interest in computer and internet security.'
                />
                <meta
                    property='og:image'
                    content='https://benvandenberg.ca/android-chrome-192x192.png'
                />

                <meta name='twitter:card' content='summary' />
                <meta name='twitter:title' content='Ben Vandenberg' />
                <meta
                    name='twitter:description'
                    content='Software developer creating web, desktop, and CLI apps, with a strong interest in computer and internet security.'
                />
                <meta
                    name='twitter:image'
                    content='https://benvandenberg.ca/android-chrome-192x192.png'
                />

                {/* Global Site Tag (gtag.js) - Google Analytics */}
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                        page_path: window.location.pathname,
                        });
                        `,
                    }}
                />
            </Head>
            <Component {...pageProps} />
        </div>
    );
}
