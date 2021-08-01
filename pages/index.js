import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useDencrypt } from "use-dencrypt-effect";

const values = [
  "Hi 👋 i'm ",
  "Hola 👋 soy ",
  "Bonjour 👋 je suis ",
  "Nǐ hǎo 👋, wǒ jiào ",
  "innovative 🚀 ",
  "⚡Work with ",
  "Namaste 🙏, i'm ",
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
        <title>Jesse 🚀</title>
        <link rel="icon" href="/jesseb.jpg" />
      </Head>
      <main className={styles.main}>
        <img className={styles.image} src="jesseb.jpg" />
        <h1 className={styles.title}>
          {result}
          <a href="https://twitter.com/jessebeke">Jesse Beke</a>
        </h1>
        {/* {console.log('Hi 👋 Jesse Here, want to talk hmu via twitter (https://twitter.com/jessebeke) or send an email (mailto:jessebeke10@gmail.com)')} */}
        <h3>a frontend developer creating web experiences </h3>
        <button>
          <a className={styles.mainlinks} href="/projects">
            Explore &rarr;
          </a>
        </button>
      </main>
      <footer className={styles.footer}>
        <p>
          <strong>Powered by innovation 🚀</strong>
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
