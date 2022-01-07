import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import sharedStyles from '../styles/shared.module.css';
import styles from '../styles/skills.module.css';
import { PATHS, TITLE_ANIMATION } from '../utilities/constants';

export default function Skills() {
    return (
        <main>
            <Head>
                <title>Ben Vandenberg: Skills</title>
                <meta
                    name='description'
                    content='Page showing off languages and tools I use.'
                />
            </Head>

            <div className={sharedStyles.root}>
                <Navbar links={PATHS} currentPage={'Skills'} />

                <div id='home' className={sharedStyles.home}>
                    <AnimatePresence>
                        <motion.div
                            id='topText'
                            className={sharedStyles.body}
                            {...TITLE_ANIMATION}
                        >
                            <motion.h1
                                className={`${sharedStyles.title} ${styles.title}`}
                            >
                                My Skills
                            </motion.h1>

                            <motion.p className={sharedStyles.description}>
                                A display of my most used languages and tools.
                                Data collection started March 12, 2021
                            </motion.p>
                        </motion.div>
                    </AnimatePresence>

                    <div className={styles.gridContainer}>
                        <figure>
                            <embed src='https://wakatime.com/share/@0be2531b-4dd7-482a-8b03-7ebc76236fc7/cf66bf54-ee48-4536-ae71-ce9f8847fb39.svg'></embed>
                        </figure>
                        <figure>
                            <embed src='https://wakatime.com/share/@0be2531b-4dd7-482a-8b03-7ebc76236fc7/ff8d63ac-1162-4a70-98cd-4f7658d66e0d.svg'></embed>
                        </figure>
                        <figure>
                            <embed src='https://wakatime.com/share/@0be2531b-4dd7-482a-8b03-7ebc76236fc7/e3107cbc-32b1-4a0a-9bc7-97d4fb472b6f.svg'></embed>
                        </figure>
                        <figure>
                            <embed src='https://wakatime.com/share/@0be2531b-4dd7-482a-8b03-7ebc76236fc7/5b32a517-3c50-43e7-a678-44673c2f8929.svg'></embed>
                        </figure>
                    </div>
                </div>
            </div>
        </main>
    );
}
