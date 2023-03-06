import Content from '@/components/content'
import Header from '@/components/header'
import SocialMedia from '@/components/socialmedia'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>IGMTINK - Links</title>
        <meta
          name="description"
          content="@igmtink. Official Website · YouTube · Instagram · GitHub · Tiktok."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="flex flex-col items-center justify-center h-screen">
        <Content>
          <Header />
          <SocialMedia />
        </Content>
      </main>
    </>
  )
}
