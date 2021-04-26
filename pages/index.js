import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jesse 🚀</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img className={styles.image} src='jesseb.jpg'/>
        <h1 className={styles.title}>
          Hi, 👋 i'm <a href="https://twitter.com/jessebeke">Jesse Beke</a>
        </h1>
        { console.log('Hi 👋 Jesse Here, want to talk hmu via twitter (https://twitter.com/jessebeke) or send an email (mailto:jessebeke10@gmail.com)') }
        <h3>A frontend developer creating web experiences 🚀</h3>
        <a className={styles.mainlinks} href="/projects">projects &rarr;</a>
      </main>

      <footer className={styles.footer}>
        <p><strong>Powered by innovation 🚀</strong></p>
        <a href='https://twitter.com/jessebeke'><img src='twitter.png'/></a>
        <a href='https://github.com/codejesse'><img src='github.png'/></a>
        <a href='mailto:jessebeke10@gmail.com'><img src='gmail.png'/></a>
      </footer>
    </div>
  )
}
