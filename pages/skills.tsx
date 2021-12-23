import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Navbar from '../components/Navbar';
import sharedStyles from '../styles/shared.module.css';
import styles from '../styles/skills.module.css';
import {
    BAR_COLOURS,
    BAR_OUTLINE_COLOURS,
    PATHS,
    TITLE_ANIMATION,
} from '../utilities/constants';

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
                                {
                                    'A display of my most used languages and tools.'
                                }
                            </motion.p>
                        </motion.div>

                        <figure>
                            <embed src='https://wakatime.com/share/@0be2531b-4dd7-482a-8b03-7ebc76236fc7/6e6a6ed8-a1c2-45cd-b797-674d4f321c31.svg'></embed>
                        </figure>
                        <figure>
                            <embed src='https://wakatime.com/share/@0be2531b-4dd7-482a-8b03-7ebc76236fc7/e9c338b5-b492-40f3-af30-664ddb1472af.svg'></embed>
                        </figure>
                        <figure>
                            <embed src='https://wakatime.com/share/@0be2531b-4dd7-482a-8b03-7ebc76236fc7/58e94ffc-77a8-4129-8f1b-4750241f310d.svg'></embed>
                        </figure>
                        <figure>
                            <embed src='https://wakatime.com/share/@0be2531b-4dd7-482a-8b03-7ebc76236fc7/d5e43372-9d2d-488d-861a-a9ef16ce87e9.svg'></embed>
                        </figure>
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
}
