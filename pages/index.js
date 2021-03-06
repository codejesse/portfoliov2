import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useDencrypt } from "use-dencrypt-effect";
import 'animate.css' 

const values = [
  "Hi ππΏ i'm ",
  "Hola ππΏ soy ",
  "Bonjour ππΏ je suis ",
  "NΗ hΗo ππΏ, wΗ jiΓ o ",
  "innovative π ",
  "β‘Work with ",
  "Namaste π, i'm ",
];

export default function Home() {
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 4000);

    return () => clearInterval(action);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Hi ππΏ| Jesse Beke</title>
        <link rel="icon" href="/jesseb.jpg" />
      </Head>
      <main className={styles.main}>
        <img className={styles.image} src="Jessecart.png"/>
        <h1 className={styles.title}>
          {result}
          <a href="https://twitter.com/jessebeke">Jesse Beke</a>
        </h1>
        {/* {console.log('Hi π Jesse Here, want to talk hmu via twitter (https://twitter.com/jessebeke) or send an email (mailto:jessebeke10@gmail.com)')} */}
        {/* <h3>a passionate front end developer</h3> */}
        <button>
          <a className={styles.mainlinks} href="/projects">
            Explore &rarr;
          </a>
        </button>
      </main>
      <footer className={styles.footer}>
        <p>
          <strong>Powered by innovation π</strong>
        </p>
        <a href="https://twitter.com/jessebeke">
          <img src="twitter.png" />
        </a>
        <a href="https://github.com/codejesse">
          <img src="github.png" />
        </a>
        <a href="mailto:jessebeke10@gmail.com">
          <img src="gmail.png" />
        </a>
      </footer>
    </div>
  );
}
