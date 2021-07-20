import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import styles from '../styles/home.module.css';
import sharedStyles from '../styles/shared.module.css';
import { PATHS } from '../utilities/constants';

export default function Home() {
    return (
        <div className={sharedStyles.root}>
            <Head>
                <title>Ben Vandenberg</title>
                <meta
                    name='description'
                    content='A site to show off my work and projects.'
                />
            </Head>

            <main className={sharedStyles.main}>
                <Navbar links={PATHS} currentPage={'Home'} />

                <div id='home' className={sharedStyles.home}>
                    <AnimatePresence>
                        <motion.div
                            id='topText'
                            className={`${sharedStyles.text} ${styles.text}`}
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

                            <motion.p className={sharedStyles.description}>
                                {
                                    "I'm a Ottawa based software developer creating a variety of web, desktop, and cli apps. I have a strong intrest in computer and internet security."
                                }
                            </motion.p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
}
