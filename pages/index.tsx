import { motion, AnimatePresence } from 'framer-motion';
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
                    <Navbar links={PATHS} currentPage={'Resume'} />
                    <AnimatePresence>
                        <motion.div
                            id='topText'
                            className={styles.text}
                            initial='hidden'
                            animate='visible'
                            exit='hidden'
                            variants={{
                                hidden: {
                                    scale: 0.8,
                                    opacity: 0,
                                    transition: {
                                        delay: 0.4,
                                        duration: 2,
                                    },
                                },
                                visible: {
                                    scale: 1,
                                    opacity: 1,
                                    transition: {
                                        delay: 0.4,
                                    },
                                },
                            }}
                        >
                            <motion.h1 className={styles.title}>
                            {"I'm Ben Vandenberg."}
                            </motion.h1>

                            <motion.p className={styles.description}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quod modi sed expedita, nam
                                cumque corrupti vero quis! Ea officia earum
                                beatae eaque fuga eligendi provident ullam
                                rerum, ad recusandae quam?
                            </motion.p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
}
