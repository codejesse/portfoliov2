import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'

const ProjectList = dynamic(() => import('./projectlist'))

function projects() {
    return (
        <div>
            <main className={styles.projectsHeader}>
                <h2>Projects 🧪</h2>
                <p>🚀some of my projects, <a style={{color: 'blue'}} href='/'>Home 👋 &rarr;</a></p> 
                <p>Check my github profile for more</p><a style={{color: 'blue'}} href='https://github.com/codejesse/'>github &rarr;</a>
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
                link='' name='socialproof'
                description='social proof page challenge by frontendmentor'
            />
        </div>
    )
}
export default projects