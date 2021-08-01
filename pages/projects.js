import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import Head from 'next/head'


const ProjectList = dynamic(() => import('./projectlist'))

function projects() {
    return (
        <div>
            <Head>
                <title>Projects 🧪</title>
                <link rel="icon" href="/jesseb.jpg" />
            </Head>
            <main className={styles.projectsHeader}>
                <h1>🧪Some of My Projects 🧪</h1>
                <p>Check my <a style={{ color: 'blue' }} href='https://github.com/codejesse/'>github</a> profile for more</p>
                <a style={{ color: 'blue' }} href='/'>&larr; Home  </a>
                <a style={{ color: 'blue' }} href='/about'> About &rarr;</a>
            </main>
            <ProjectList
                img='screentime2.png'
                link='https://screentime.vercel.app/' name='screentime'
                description='Movie web app made with reactjs shows the latest movies'
            />
            <ProjectList
                img='reactnews.png'
                link='https://github.com/codejesse/Newsifyit' name='Newsify'
                description='A news site made with reactjs and tailwindcss get the latest news'
            />
            <ProjectList
                img='kso.png'
                link='https://kso.vercel.app/' name='Kso website'
                description='The prototype website made with Html, css and javaScript'
            />
            <ProjectList
                img='socialproof.png'
                link='https://github.com/codejesse/Social-proof-page/tree/master/social-proof-section-master' name='socialproof'
                description='social proof page challenge by frontendmentor'
            />
        </div>
    )
}
export default projects