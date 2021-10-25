import { GetStaticProps } from 'next'
import Head from 'next/head'
import { ContentModel } from '../models/content-model'
import content from '../public/data/content.json'

type Props = {
  content: ContentModel
}
export const Sound = ({ content }: Props) => {
  const soundPortfolioData = content.soundPortfolio
  const soundPortfolio = soundPortfolioData.map((data, index) => {
    return <div key={index}>ciao</div>
  })

  return (
    <div>
      <Head>
        <title>Filippo Medici</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Filippo Medici</h1>
        <h2>Sound Desing and Composition</h2>
        <div>{soundPortfolio}</div>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      content,
    },
  }
}

export default Sound
