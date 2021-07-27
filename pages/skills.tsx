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
import { Language } from '../utilities/types';
import { getTopLanguages } from '../utilities/wakatime';

const graphData = {
    labels: [''],
    datasets: [
        {
            data: [0],
            backgroundColor: BAR_COLOURS,
            hoverBackgroundColor: BAR_OUTLINE_COLOURS,
        },
    ],
};

export default function Skills() {
    const [languageData, setLanguageData] = useState<Language[]>([]);

    // fetch the latest data from the backend
    const updateLanguageData = async () => {
        const topTen = await getTopLanguages();

        graphData.labels = topTen.map(({ name }) => name);
        graphData.datasets[0].data = topTen.map(({ percent }) => percent);

        setLanguageData(topTen);
    };

    useEffect(() => {
        updateLanguageData();
    }, []);

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

                        <div>
                            <Bar
                                data={graphData}
                                height={200}
                                width={200}
                                options={{ maintainAspectRatio: false }}
                            />
                        </div>
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
}
