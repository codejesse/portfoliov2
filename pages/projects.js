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
                <h1>Projects 🧪</h1>
                <p>🚀some of my projects</p>
                <p>Check my <a style={{ color: 'blue' }} href='https://github.com/codejesse/'>github</a> profile for more</p>
                <a style={{ color: 'blue' }} href='/'>&larr; Home  </a>
                <a style={{ color: 'blue' }} href='/about'> About &rarr;</a>
            </main>
            <ProjectList
                img='screentime2.png'
                link='https://screentime.vercel.app/' name='screentime'
                description='Movie web app made with reactjs'
            />
            <ProjectList
                img='reactnews.png'
                link='https://github.com/codejesse/Newsifyit' name='Newsify'
                description='A news site made with reactjs and tailwindcss'
            />
            <ProjectList
                img='readarticles.png'
                link='https://letsreadarticles.herokuapp.com/' name='Readarticles'
                description='A news web app made with python and flask'
            />
            <ProjectList
                img='socialproof.png'
                link='https://github.com/codejesse/Social-proof-page/tree/master/social-proof-section-master' name='socialproof'
                description='social proof page challenge by frontendmentor'
            />
            <ProjectList
                img='jesse.png'
                link='https://jesse-silk.vercel.app/' name='My Portfolio'
                description='The html version of my portfolio showing off some css'
            />
        </div>
    )
}
export default projects