import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import { PATHS } from '../utilities/Constants';

export default function Home() {
    return (
        <div className={styles.root}>
            <Head>
                <title>Ben Vandenberg</title>
                <meta name='description' content='A resume site' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main>
                <div id='home' className={styles.home}>
                    <Navbar links={PATHS} currentPage={'Home'} />

                    <div id='topText' className={styles.text}>
                        <h1 className={styles.title}>
                            {"I'm Ben Vandenberg."}
                        </h1>

                        <p className={styles.description}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quod modi sed expedita, nam cumque corrupti
                            vero quis! Ea officia earum beatae eaque fuga
                            eligendi provident ullam rerum, ad recusandae quam?
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
