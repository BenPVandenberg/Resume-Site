import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import sharedStyles from '../styles/shared.module.css';
import styles from '../styles/skills.module.css';
import { PATHS, TITLE_ANIMATION } from '../utilities/constants';

const SKILL_GROUPS: { title: string; skills: string[] }[] = [
    {
        title: 'Languages',
        skills: ['Python', 'TypeScript / JavaScript', 'Java', 'Perl'],
    },
    {
        title: 'Web',
        skills: ['React', 'Node.js', 'Express.js', 'Electron'],
    },
    {
        title: 'Data & Infra',
        skills: ['MySQL', 'REST APIs', 'SSL Certificates'],
    },
    {
        title: 'Focus Areas',
        skills: [
            'Computer & Internet Security',
            'CLI Tooling',
            'Automation',
        ],
    },
];

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
                                A selection of languages, tools, and focus areas
                                I work with.
                            </motion.p>
                        </motion.div>
                    </AnimatePresence>

                    <div className={styles.skillsGrid}>
                        {SKILL_GROUPS.map((group) => (
                            <div
                                key={group.title}
                                className={styles.skillCard}
                            >
                                <h2 className={styles.skillCardTitle}>
                                    {group.title}
                                </h2>
                                <div className={styles.skillList}>
                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className={styles.skillPill}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
