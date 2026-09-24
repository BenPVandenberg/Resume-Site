import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/index.module.css';
import sharedStyles from '../styles/shared.module.css';
import { PATHS, TITLE_ANIMATION } from '../utilities/constants';

const FEATURED_PROJECTS: {
    name: string;
    href: string;
    tech: string;
    description: string;
}[] = [
    {
        name: 'T&P Project',
        href: 'https://github.com/BenPVandenberg/TaP-Discord-Bot',
        tech: 'TypeScript, React, Express.js, Node.js, MySQL',
        description:
            'Discord bot backed by a React web app and API server for uploading and managing custom sound clips.',
    },
    {
        name: 'Blackjack AI',
        href: 'https://github.com/BenPVandenberg/blackjack-ai',
        tech: 'Python',
        description:
            'Blackjack game API paired with a NeuroEvolution of Augmenting Topologies (NEAT) implementation.',
    },
    {
        name: 'EZ Umpire',
        href: 'https://github.com/BenPVandenberg/EZ-Umpire',
        tech: 'Java, JavaFX',
        description:
            'Desktop app that makes scheduling umpires fast and painless.',
    },
];

export default function Home() {
    return (
        <main>
            <Head>
                <title>Ben Vandenberg</title>
                <meta
                    name='description'
                    content='A site to show off my work and projects.'
                />
            </Head>

            <div className={sharedStyles.root}>
                <Navbar links={PATHS} currentPage={'Home'} />

                <div id='home' className={styles.home}>
                    <AnimatePresence>
                        <motion.div
                            id='topText'
                            className={sharedStyles.body}
                            {...TITLE_ANIMATION}
                        >
                            <motion.h1
                                className={`${sharedStyles.title} ${styles.title}`}
                            >
                                I&apos;m Ben Vandenberg.
                            </motion.h1>

                            <motion.p className={sharedStyles.description}>
                                I&apos;m a Lindsay, ON based software developer
                                creating a variety of web, desktop, and CLI
                                apps. I have a strong interest in computer and
                                internet security.
                            </motion.p>

                            <motion.div>
                                <a
                                    className={`${styles.social} ${styles.resumeButton}`}
                                    href='/static/docs/BEN_VANDENBERG.pdf'
                                >
                                    Resume
                                </a>

                                <SocialIcon
                                    className={styles.social}
                                    url='mailto:contact@benvandenberg.ca'
                                />
                                <SocialIcon
                                    className={styles.social}
                                    url='https://www.linkedin.com/in/ben-vandenberg22/'
                                />
                                <SocialIcon
                                    className={styles.social}
                                    bgColor='#7f7f7f'
                                    url='https://github.com/BenPVandenberg'
                                />
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>About Me</h2>
                    <p className={styles.sectionText}>
                        I&apos;m a software developer who enjoys building
                        things end to end &mdash; from web apps and desktop
                        tools to command-line utilities. I have a background
                        in computer and internet security, and I like
                        projects where I get to own the whole stack, from
                        the database up to the UI.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Featured Projects</h2>
                    <div className={styles.projectsGrid}>
                        {FEATURED_PROJECTS.map((project) => (
                            <div
                                key={project.name}
                                className={styles.projectCard}
                            >
                                <a
                                    className={styles.projectName}
                                    href={project.href}
                                >
                                    {project.name}
                                </a>
                                <p className={styles.projectTech}>
                                    {project.tech}
                                </p>
                                <p className={styles.projectDescription}>
                                    {project.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    <p className={styles.sectionCta}>
                        <Link href='/experience'>
                            <a className={styles.ctaLink}>
                                See all experience &rarr;
                            </a>
                        </Link>
                    </p>
                </section>

                <Footer />
            </div>
        </main>
    );
}
