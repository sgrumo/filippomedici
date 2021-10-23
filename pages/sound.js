import Head from 'next/head';
import content from '../public/data/content';

export default function Sound({ content }) {
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
                <h2>Sound Desing and Composition</h2>
            </main>
        </div>
    )
}


export const getStaticProps = async () => {
    console.log(JSON.stringify(content));
    return {
        props: {
            content,
        }
    };
}