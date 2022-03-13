import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                {/* Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
                    rel="stylesheet"
                />

                {/* SEO */}
                <meta name="theme-color" content="#1f6aac" />
                <meta charSet="utf-8" />

                <meta name="author" content="kassq" />
                <meta name="designer" content="kassq" />
                <meta name="publisher" content="kassq" />

                <link
                    rel="alternate"
                    hrefLang="fi"
                    href="https://www.karhu.ac/fi"
                />
                <link
                    rel="alternate"
                    hrefLang="en"
                    href="https://www.karhu.ac"
                />

                <meta
                    name="description"
                    content="Karhu Anticheat is an advanced Minecraft-anticheat that detects large variety of cheats and works on versions 1.7.10 - 1.18.2. Don't let cheaters ruin your day!"
                />
                <meta
                    name="keywords"
                    content="karhuac, minecraft, karhu, cheat, killaura"
                />

                <meta name="robots" content="index, follow" />
                <meta name="subject" content="Minecraft anticheats" />

                {/* OpenGraph */}
                <meta
                    property="og:site_name"
                    content={`Don't let cheaters ruin your day!`}
                />
                <meta property="og:title" content="Karhu Anticheat" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.karhu.ac" />
                <meta
                    property="og:description"
                    content="Karhu Anticheat is an advanced Minecraft-anticheat that detects large variety of cheats and works on versions 1.7.10 - 1.18.2. Don't let cheaters ruin your day!"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
