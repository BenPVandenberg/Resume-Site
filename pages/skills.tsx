import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import styles from '../styles/skills.module.css';
import sharedStyles from '../styles/shared.module.css';
import { PATHS, TITLE_ANIMATION } from '../utilities/constants';

export default function Skills() {
    return (
        <div className={sharedStyles.root}>
            <Head>
                <title>Ben Vandenberg: Skills</title>
                <meta
                    name='description'
                    content='Page showing off languages and tools I use.'
                />
            </Head>

            <main className={sharedStyles.main}>
                <Navbar links={PATHS} currentPage={'Skills'} />

                <div id='home' className={sharedStyles.home}>
                    <AnimatePresence>
                        <motion.div
                            id='topText'
                            className={sharedStyles.text}
                            {...TITLE_ANIMATION}
                        >
                            <motion.h1
                                className={`${sharedStyles.title} ${styles.title}`}
                            >
                                My Skills
                            </motion.h1>

                            <motion.p className={sharedStyles.description}>
                                {'A display of my most used languages and tools. ' +
                                    "This page uses WakaTime's api to stay up-to-date."}
                            </motion.p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
}
