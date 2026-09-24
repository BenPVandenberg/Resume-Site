import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import { useMemo, useState } from 'react';
import Navbar from '../components/Navbar';
import sharedStyles from '../styles/shared.module.css';
import styles from '../styles/skills.module.css';
import { PATHS, TITLE_ANIMATION } from '../utilities/constants';

interface Skill {
    name: string;
    xp: number; // 1 - 5
    blurb: string;
}

interface Branch {
    id: string;
    title: string;
    tagline: string;
    accent: string;
    skills: Skill[];
}

// Tweak xp/blurb freely — 5 = Mastered, 1 = Hello, world
const TREE: Branch[] = [
    {
        id: 'languages',
        title: 'Languages',
        tagline: 'What I think in',
        accent: '#7dd3fc',
        skills: [
            {
                name: 'Go',
                xp: 5,
                blurb: 'My daily driver. Goroutines make concurrency feel like a superpower.',
            },
            {
                name: 'Python',
                xp: 4,
                blurb: 'The trusty multi-tool — scripts, APIs, and everything in between.',
            },
            {
                name: 'TypeScript / JavaScript',
                xp: 4,
                blurb: "The web's mother tongue, with types to keep me honest.",
            },
            {
                name: 'Java',
                xp: 3,
                blurb: 'Battle-tested and verbose. We have an understanding.',
            },
            {
                name: 'Perl',
                xp: 2,
                blurb: 'Read more than written. Respect for the elders.',
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
                xp: 4,
                blurb: 'Components all the way down.',
            },
            {
                name: 'Node.js',
                xp: 4,
                blurb: 'JavaScript, unleashed from the browser.',
            },
            {
                name: 'Express.js',
                xp: 3,
                blurb: 'APIs without the ceremony.',
            },
            {
                name: 'Electron',
                xp: 2,
                blurb: 'Desktop apps wearing a web costume.',
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
                name: 'REST APIs',
                xp: 4,
                blurb: 'The lingua franca of the web.',
            },
            {
                name: 'MySQL',
                xp: 3,
                blurb: 'SELECT * FROM competence.',
            },
            {
                name: 'SSL / TLS',
                xp: 3,
                blurb: 'Keeping the padlock closed.',
            },
        ],
    },
    {
        id: 'focus',
        title: 'Focus Areas',
        tagline: 'What I obsess over',
        accent: '#fcd34d',
        skills: [
            {
                name: 'Computer & Internet Security',
                xp: 5,
                blurb: 'My degree and my hobby. Trust, but verify.',
            },
            {
                name: 'CLI Tooling',
                xp: 4,
                blurb: 'If I do it twice, it gets a command.',
            },
            {
                name: 'Automation',
                xp: 4,
                blurb: 'Laziness, engineered.',
            },
        ],
    },
];

const LEVEL_NAMES: Record<number, string> = {
    5: 'Mastered',
    4: 'Proficient',
    3: 'Comfortable',
    2: 'Dabbled',
    1: 'Hello, world',
};

interface ActiveSkill {
    branch: Branch;
    skill: Skill;
}

function XpBar({ xp, accent, large }: { xp: number; accent: string; large?: boolean }) {
    return (
        <div className={large ? styles.xpBarLarge : styles.xpBar} aria-label={`${xp} out of 5`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <motion.span
                    key={i}
                    className={styles.xpSegment}
                    style={i < xp ? { backgroundColor: accent } : undefined}
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

    const stats = useMemo(() => {
        const skillCount = TREE.reduce((n, b) => n + b.skills.length, 0);
        const totalXp = TREE.reduce(
            (n, b) => n + b.skills.reduce((m, s) => m + s.xp, 0),
            0
        );
        return { skillCount, totalXp };
    }, []);

    return (
        <main>
            <Head>
                <title>Ben Vandenberg: Skills</title>
                <meta
                    name='description'
                    content='An interactive skill tree of the languages, tools, and focus areas I work with.'
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
                            Skill Tree
                        </motion.h1>

                        <motion.p className={sharedStyles.description}>
                            {stats.skillCount} skills unlocked ·{' '}
                            {stats.totalXp} XP invested · Build: Full-Stack
                            Generalist
                        </motion.p>
                    </motion.div>

                    {/* Inspect readout */}
                    <div className={styles.inspectWrap}>
                        <AnimatePresence exitBeforeEnter>
                            <motion.div
                                key={active ? active.skill.name : 'idle'}
                                className={styles.inspect}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.18 }}
                            >
                                {active ? (
                                    <>
                                        <div className={styles.inspectHeader}>
                                            <span
                                                className={styles.inspectName}
                                                style={{ color: active.branch.accent }}
                                            >
                                                {active.skill.name}
                                            </span>
                                            <span className={styles.inspectMeta}>
                                                {active.branch.title} ·{' '}
                                                {LEVEL_NAMES[active.skill.xp]}
                                            </span>
                                        </div>
                                        <XpBar
                                            xp={active.skill.xp}
                                            accent={active.branch.accent}
                                            large
                                        />
                                        <p className={styles.inspectBlurb}>
                                            {active.skill.blurb}
                                        </p>
                                    </>
                                ) : (
                                    <p className={styles.inspectIdle}>
                                        <span className={styles.prompt}>
                                            $ inspect --skill
                                        </span>{' '}
                                        — hover or tap a skill to inspect it.
                                    </p>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Branches */}
                    <div className={styles.tree}>
                        {TREE.map((branch, branchIndex) => (
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
                                                    className={`${styles.skillNode} ${
                                                        isActive
                                                            ? styles.skillNodeActive
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
                                                    <XpBar
                                                        xp={skill.xp}
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

                    <p className={styles.footnote}>
                        Respec available on request.
                    </p>
                </div>
            </div>
        </main>
    );
}
