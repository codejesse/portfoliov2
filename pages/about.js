import styles from '../styles/Home.module.css'
import Head from 'next/head'


const about = () => {
    return (
        <div className={styles.about}>
            <Head>
                <title>About 👦🏾</title>
                <link rel="icon" href="/jesseb.jpg" />
            </Head>
            <h1>👋🏿 Get to know me</h1>
            <p>I'm Jesse Beke, a frontend developer from Nigeria, i love creating web applications and web experiences.</p>
            <p>I believe with the right approach anything is possible 🚀</p>
            <br></br>
            <a target="_blank" href="https://docs.google.com/document/d/e/2PACX-1vTPIavD7GNL8CRK7ZF1pguB4dtcvzNQO5ST7hUdD_RwWA9hCD5f-tp6lprxpQC_UWAY70bFBSe7eAKY/pub"><button>My resume</button></a>
            <p>My current tech-stack:</p>
            <img src="html-5.png" height="50px" width="50px"></img>
            <img src="css-3.png" height="50px" width="50px"></img>
            <img src="javascript.png" height="60px" width="60px"></img>
            <img src="react.png" height="50px" width="50px"></img>
            <img src="nodejs.png" height="50px" width="50px"></img>
            <img src="postgresql.png" height="50px" width="50px"></img>
            <img src="python.png" height="50px" width="50px"></img>
            <img src="flask.png" height="50px" width="90px"></img>
            <a href="/"><p className={styles.aboutlink}>&larr; Go home</p></a>
        </div>
    )
}
export default about;