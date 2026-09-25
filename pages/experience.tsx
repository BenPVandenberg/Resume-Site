import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/experience.module.css';
import sharedStyles from '../styles/shared.module.css';
import { PATHS, TITLE_ANIMATION } from '../utilities/constants';

type QuestType = 'tutorial' | 'main' | 'side';

interface Quest {
    id: string;
    name: string;
    href?: string;
    logo: string;
    logoAlt: string;
    role: string;
    dates: string;
    type: QuestType;
    objectives: string[];
    loot: string[];
    defaultOpen?: boolean;
}

const TYPE_COLORS: Record<QuestType, string> = {
    tutorial: '#7dd3fc',
    main: '#fcd34d',
    side: '#f0abfc',
};

const QUESTS: { section: string; quests: Quest[] }[] = [
    {
        section: 'Education',
        quests: [
            {
                id: 'carleton',
                name: 'Carleton University',
                logo: '/static/images/carleton.png',
                logoAlt: 'Carleton University Logo',
                role: 'Bachelor of Computer Science: Computer and Internet Security',
                dates: 'Expected Graduation: May 2022',
                type: 'tutorial',
                objectives: ['CGPA: 10.5, A- (12 point scale)'],
                loot: ['Computer Security', 'Internet Security'],
            },
        ],
    },
    {
        section: 'Work Experience',
        quests: [
            {
                id: 'irdeto',
                name: 'Irdeto',
                logo: '/static/images/irdeto.jfif',
                logoAlt: 'Irdeto Logo',
                role: 'Software Developer - Coop',
                dates: 'Jan 2021 - Aug. 2021',
                type: 'main',
                objectives: [
                    'Produced over 500 code contributions (commits) of production code',
                    'Wrote a sophisticated CLI tool using the latest features of Python 3 and a highly extensible modular design',
                    'Rewrote a legacy Perl application using good coding practices in Python 3',
                    '100% unit test coverage and consistently maintained an exceptionally high quality of work',
                    'Worked with a variety of languages and technologies, required learning skills on the fly',
                    'Maintained and created test environments for end-to-end testing by setting up servers in network',
                ],
                loot: ['Python 3', 'CLI Design', 'Testing'],
                defaultOpen: true,
            },
            {
                id: 'nokia',
                name: 'Nokia',
                logo: '/static/images/nokia.jpg',
                logoAlt: 'Nokia Logo',
                role: 'Software Developer - Coop',
                dates: 'Sept. 2019 - Dec. 2019, May 2020 - Aug. 2020',
                type: 'main',
                objectives: [
                    "Developed multiple automation utilities with Python that interact with Nokia's 1830 Product Portfolio to handle mundane tasks and preform necessary system cleanups",
                    'Design and developed automation infrastructure and tool enhancements using ElectronJS + Python to maximize the effectiveness and productivity of ION Optics feature teams',
                    'Hosted collaboration and code review meetings to determine direction of new and existing projects and their requirements, resulting in improved communication skills',
                    'Created and maintained baseline setup configurations while handling other projects, lead to the development of time management and multitasking skills',
                ],
                loot: ['Python', 'ElectronJS', 'Automation'],
            },
            {
                id: 'cra',
                name: 'Canadian Revenue Agency',
                logo: '/static/images/cra.jpg',
                logoAlt: 'CRA Logo',
                role: 'Testing Analyst - Coop',
                dates: 'May 2019 - Aug 2019',
                type: 'main',
                objectives: [
                    'Develop, prepare, execute new, and revise existing testing conditions in order to test requested system specification changes/requirements made by functional areas.',
                ],
                loot: ['QA', 'Testing'],
            },
        ],
    },
    {
        section: 'Personal Projects',
        quests: [
            {
                id: 'tap',
                name: 'T&P Project',
                href: 'https://github.com/BenPVandenberg/TaP-Discord-Bot',
                logo: '/static/images/tap.png',
                logoAlt: 'T&P Project Logo',
                role: 'Discord bot backed by a web app and API',
                dates: 'Personal Project',
                type: 'side',
                objectives: [
                    'Designed and developed an application infrastructure centered around a Discord Bot',
                    'Engineered a node-based discord bot for use in a private discord server',
                    'Implemented React web application, Express.js API server, and a MySQL database, to allow users to easily upload/edit custom sound clips and gather data',
                ],
                loot: ['TypeScript', 'React', 'Express.js', 'Node.js', 'MySQL'],
            },
            {
                id: 'blackjack',
                name: 'Blackjack AI',
                href: 'https://github.com/BenPVandenberg/blackjack-ai',
                logo: 'https://repository-images.githubusercontent.com/427737208/5fab1b64-601f-46d9-808d-7ee97843b147',
                logoAlt: 'Blackjack AI Logo',
                role: 'Game AI experiment',
                dates: 'Personal Project',
                type: 'side',
                objectives: [
                    'Developed a Blackjack game API with python',
                    'A NeuroEvolution of Augmenting Topologies (NEAT) implementation on the blackjack game API',
                ],
                loot: ['Python', 'NEAT'],
            },
            {
                id: 'schedule',
                name: 'Carleton Schedule Creator',
                href: 'https://github.com/concastor/Schedule-Builder-CuHacking2020',
                logo: '/static/images/schedule.webp',
                logoAlt: 'Carleton Schedule Creator Logo',
                role: 'Hackathon project',
                dates: 'CuHacking 2020',
                type: 'side',
                objectives: [
                    'Hackathon project designed to provide a better solution to the currently available methods of creating student schedules',
                    "Engineered a React web application that generates the best available course schedules possible based on given courses and the user's preferences",
                ],
                loot: ['JavaScript', 'React', 'Node.js', 'UiPath'],
            },
            {
                id: 'umpire',
                name: 'EZ Umpire',
                href: 'https://github.com/BenPVandenberg/EZ-Umpire',
                logo: '/static/images/umpire.png',
                logoAlt: 'EZ Umpire Logo',
                role: 'Desktop scheduling app',
                dates: 'Personal Project',
                type: 'side',
                objectives: [
                    'Developed an application using java that allows the user to easily schedule umpires',
                    'Personal project inspired by learning how long it takes to schedule umpires manually and the cost of comparable solutions',
                    'Integrated JavaFX for a more appealing look, resulting in better usability',
                ],
                loot: ['Java', 'JavaFX', 'JFoenix'],
            },
        ],
    },
];

function QuestCard({ quest, index }: { quest: Quest; index: number }) {
    const [open, setOpen] = useState(!!quest.defaultOpen);
    const accent = TYPE_COLORS[quest.type];

    return (
        <motion.article
            className={styles.quest}
            style={{ ['--accent' as string]: accent }}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3 + index * 0.1,
                type: 'spring',
                stiffness: 110,
                damping: 16,
            }}
        >
            <button
                type='button'
                className={styles.questSummary}
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
            >
                <motion.img
                    className={styles.questLogo}
                    src={quest.logo}
                    alt={quest.logoAlt}
                />
                <div className={styles.questInfo}>
                    <div className={styles.questTitleRow}>
                        {quest.href ? (
                            <a
                                className={styles.questName}
                                href={quest.href}
                                target='_blank'
                                rel='noreferrer'
                                onClick={(e) => e.stopPropagation()}
                            >
                                {quest.name}
                            </a>
                        ) : (
                            <span className={styles.questName}>
                                {quest.name}
                            </span>
                        )}
                    </div>
                    <p className={styles.questRole}>{quest.role}</p>
                    <p className={styles.questDates}>{quest.dates}</p>
                    {quest.loot.length > 0 && (
                        <div className={styles.loot}>
                            <span className={styles.lootLabel}>Tech:</span>
                            {quest.loot.map((item) => (
                                <span
                                    key={item}
                                    className={styles.lootTag}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
                <span className={styles.toggle} aria-hidden='true'>
                    {open ? '▾' : '▸'}{' '}
                    <span className={styles.toggleLabel}>
                        {quest.objectives.length} highlight
                        {quest.objectives.length === 1 ? '' : 's'}
                    </span>
                </span>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key='objectives'
                        className={styles.objectivesWrap}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeInOut' }}
                    >
                        <ul className={styles.objectives}>
                            {quest.objectives.map((objective, i) => (
                                <motion.li
                                    key={i}
                                    className={styles.objective}
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + i * 0.07 }}
                                >
                                    <svg
                                        viewBox='0 0 24 24'
                                        className={styles.check}
                                        aria-hidden='true'
                                    >
                                        <motion.path
                                            d='M4 12.5l5 5L20 6.5'
                                            fill='none'
                                            stroke='currentColor'
                                            strokeWidth={3}
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{
                                                delay: 0.2 + i * 0.07,
                                                duration: 0.3,
                                            }}
                                        />
                                    </svg>
                                    <span>{objective}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.article>
    );
}

export default function Experience() {
    return (
        <main>
            <Head>
                <title>Ben Vandenberg: Experience</title>
                <meta
                    name='description'
                    content='My education, work experience, and personal projects'
                />
            </Head>

            <div className={sharedStyles.root}>
                <Navbar links={PATHS} currentPage={'Experience'} />

                <div id='home' className={sharedStyles.home}>
                    <motion.div
                        id='topText'
                        className={`${sharedStyles.body} ${styles.body}`}
                        {...TITLE_ANIMATION}
                    >
                        <motion.h1
                            className={`${sharedStyles.title} ${styles.title}`}
                        >
                            Experience
                        </motion.h1>

                        <motion.p className={sharedStyles.description}>
                            Where I&apos;ve studied, worked, and built.
                            Select an entry to see the highlights.
                        </motion.p>
                    </motion.div>

                    {QUESTS.map((group) => (
                        <section
                            key={group.section}
                            className={styles.section}
                        >
                            <h2 className={styles.sectionTitle}>
                                {group.section}
                            </h2>
                            <div className={styles.questList}>
                                {group.quests.map((quest, i) => (
                                    <QuestCard
                                        key={quest.id}
                                        quest={quest}
                                        index={i}
                                    />
                                ))}
                            </div>
                        </section>
                    ))}

                    <p className={styles.footnote}>
                        More to come.
                    </p>
                </div>
            </div>
        </main>
    );
}
