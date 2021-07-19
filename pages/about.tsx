import Head from 'next/head';
import Navbar from '../components/Navbar';
import styles from '../styles/About.module.css';
import { PATHS } from '../utilities/constants';

export default function About() {
    return (
        <div className={styles.root}>
            <Head>
                <title>Ben Vandenberg:About</title>
                <meta name='description' content='A resume site' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main>
                <div id='home' className={styles.home}>
                    <Navbar links={PATHS} currentPage={'About'} />

                    <h1 className={`${styles.text} + ${styles.title}`}>
                        {'About Me'}
                    </h1>

                    <p className={`${styles.text} + ${styles.description}`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod modi sed expedita, nam cumque corrupti vero quis!
                        Ea officia earum beatae eaque fuga eligendi provident
                        ullam rerum, ad recusandae quam?
                    </p>
                </div>
            </main>
        </div>
    );
}
