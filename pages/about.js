import Head from 'next/head'

export default function About() {
    return (
        <div>
            <Head>
                <title>
                    Filippo Medici
                </title>
                <meta
                    name="description"
                    content=""
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>
                    Filippo Medici
                </h1>
                <h2>About</h2>
                <p>I like nice things
                    <br />
                    email
                    <br />
                    <a href="mailto:filippo.medici@outlook.com">filippo.medici@outlook.com</a>
                    <br />
                    whatsapp/telegram
                    <br />
                    (+39)3711139365
                </p>
            </main>
        </div>
    )
}
