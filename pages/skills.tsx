import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import { useMemo, useState } from 'react';
import Navbar from '../components/Navbar';
import sharedStyles from '../styles/shared.module.css';
import styles from '../styles/skills.module.css';
import { PATHS, TITLE_ANIMATION } from '../utilities/constants';

interface Skill {
    name: string;
    level: number; // 1 - 5
    blurb: string;
}

interface Branch {
    id: string;
    title: string;
    tagline: string;
    accent: string;
    skills: Skill[];
}

// Tweak freely: levels are 1-5 (5 = strongest). Rename the Meta-internal
// tooling entries below to their real names if you want them public.
const BRANCHES: Branch[] = [
    {
        id: 'languages',
        title: 'Languages',
        tagline: 'What I think in',
        accent: '#7dd3fc',
        skills: [
            {
                name: 'PHP / Hack',
                level: 5,
                blurb: "My daily driver. Hack's type system keeps a very large codebase honest.",
            },
            {
                name: 'JavaScript / TypeScript',
                level: 4,
                blurb: "The web's mother tongue, with types to keep me honest.",
            },
            {
                name: 'Rust',
                level: 4,
                blurb: 'The borrow checker and I are friends now.',
            },
            {
                name: 'C++',
                level: 4,
                blurb: 'Where performance matters and every byte is accounted for.',
            },
            {
                name: 'Python',
                level: 4,
                blurb: 'The trusty multi-tool — scripts, tooling, and everything in between.',
            },
        ],
    },
    {
        id: 'web',
        title: 'Web',
        tagline: 'What I ship',
        accent: '#f0abfc',
        skills: [
            {
                name: 'React',
                level: 5,
                blurb: 'Components all the way down.',
            },
            {
                name: 'Next.js',
                level: 4,
                blurb: 'This very site runs on it.',
            },
        ],
    },
    {
        id: 'data',
        title: 'Data & Infra',
        tagline: 'What it stands on',
        accent: '#86efac',
        skills: [
            {
                name: 'SQL',
                level: 4,
                blurb: 'SELECT * FROM competence.',
            },
            {
                name: 'Data pipelines',
                level: 4,
                blurb: 'Moving data reliably at scale.',
            },
            {
                name: 'Logging frameworks',
                level: 4,
                blurb: "If it isn't logged, it didn't happen.",
            },
            {
                name: 'Networking',
                level: 3,
                blurb: 'Packets in, packets out — respecting the layers below.',
            },
        ],
    },
    {
        id: 'focus',
        title: 'Focus Areas',
        tagline: 'What I care about',
        accent: '#fcd34d',
        skills: [
            {
                name: 'Security infrastructure',
                level: 5,
                blurb: 'My degree, my hobby, and my day job.',
            },
            {
                name: 'CLI Tooling',
                level: 4,
                blurb: 'If I do it twice, it gets a command.',
            },
            {
                name: 'Automation',
                level: 4,
                blurb: 'Laziness, engineered.',
            },
        ],
    },
];

const LEVEL_NAMES: Record<number, string> = {
    5: 'Expert',
    4: 'Proficient',
    3: 'Comfortable',
    2: 'Familiar',
    1: 'Learning',
};

interface ActiveSkill {
    branch: Branch;
    skill: Skill;
}

function LevelBar({ level, accent, large }: { level: number; accent: string; large?: boolean }) {
    return (
        <div className={large ? styles.levelBarLarge : styles.levelBar} aria-label={`${level} out of 5`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <motion.span
                    key={i}
                    className={styles.levelSegment}
                    style={i < level ? { backgroundColor: accent } : undefined}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.15 + i * 0.07, type: 'spring', stiffness: 400, damping: 18 }}
                />
            ))}
        </div>
    );
}

export default function Skills() {
    const [active, setActive] = useState<ActiveSkill | null>(null);

    const skillCount = useMemo(
        () => BRANCHES.reduce((n, b) => n + b.skills.length, 0),
        []
    );

    return (
        <main>
            <Head>
                <title>Ben Vandenberg: Skills</title>
                <meta
                    name='description'
                    content='The languages, tools, and focus areas I work with.'
                />
            </Head>

            <div className={sharedStyles.root}>
                <Navbar links={PATHS} currentPage={'Skills'} />

                <div id='home' className={sharedStyles.home}>
                    <motion.div
                        id='topText'
                        className={sharedStyles.body}
                        {...TITLE_ANIMATION}
                    >
                        <motion.h1
                            className={`${sharedStyles.title} ${styles.title}`}
                        >
                            Skills
                        </motion.h1>

                        <motion.p className={sharedStyles.description}>
                            {skillCount} languages, tools, and focus areas I
                            work with.
                        </motion.p>
                    </motion.div>

                    <div className={styles.layout}>
                        {/* Details panel */}
                        <aside className={styles.detailsCol}>
                            <AnimatePresence exitBeforeEnter>
                                <motion.div
                                    key={active ? active.skill.name : 'idle'}
                                    className={styles.details}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.18 }}
                                >
                                    {active ? (
                                        <>
                                            <div className={styles.detailsHeader}>
                                                <span
                                                    className={styles.detailsName}
                                                    style={{ color: active.branch.accent }}
                                                >
                                                    {active.skill.name}
                                                </span>
                                                <span className={styles.detailsMeta}>
                                                    {active.branch.title} ·{' '}
                                                    {LEVEL_NAMES[active.skill.level]}
                                                </span>
                                            </div>
                                            <LevelBar
                                                level={active.skill.level}
                                                accent={active.branch.accent}
                                                large
                                            />
                                            <p className={styles.detailsBlurb}>
                                                {active.skill.blurb}
                                            </p>
                                        </>
                                    ) : (
                                        <p className={styles.detailsIdle}>
                                            Hover or tap a skill to see more
                                            about it.
                                        </p>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </aside>

                        {/* Branches */}
                        <div className={styles.branches}>
                            {BRANCHES.map((branch, branchIndex) => (
                                <motion.section
                                    key={branch.id}
                                    className={styles.branch}
                                    style={{ ['--accent' as string]: branch.accent }}
                                    initial={{ opacity: 0, y: 32, scale: 0.97 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{
                                        delay: 0.35 + branchIndex * 0.12,
                                        type: 'spring',
                                        stiffness: 120,
                                        damping: 16,
                                    }}
                                >
                                    <header className={styles.branchHeader}>
                                        <h2 className={styles.branchTitle}>
                                            {branch.title}
                                        </h2>
                                        <p className={styles.branchTagline}>
                                            {branch.tagline}
                                        </p>
                                    </header>
                                    <ul className={styles.skillList}>
                                        {branch.skills.map((skill) => {
                                            const isActive =
                                                active?.skill.name === skill.name;
                                            return (
                                                <li key={skill.name}>
                                                    <button
                                                        type='button'
                                                        className={`${styles.skillRow} ${
                                                            isActive
                                                                ? styles.skillRowActive
                                                                : ''
                                                        }`}
                                                        onMouseEnter={() =>
                                                            setActive({ branch, skill })
                                                        }
                                                        onFocus={() =>
                                                            setActive({ branch, skill })
                                                        }
                                                        onClick={() =>
                                                            setActive({ branch, skill })
                                                        }
                                                    >
                                                        <span
                                                            className={styles.skillName}
                                                        >
                                                            {skill.name}
                                                        </span>
                                                        <LevelBar
                                                            level={skill.level}
                                                            accent={branch.accent}
                                                        />
                                                    </button>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </motion.section>
                            ))}
                        </div>
                    </div>

                    <p className={styles.footnote}>Always learning.</p>
                </div>
            </div>
        </main>
    );
}
