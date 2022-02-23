import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import { SocialIcon } from 'react-social-icons';
import Navbar from '../components/Navbar';
import styles from '../styles/index.module.css';
import sharedStyles from '../styles/shared.module.css';
import { PATHS, TITLE_ANIMATION } from '../utilities/constants';

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
                                    href='static/docs/BEN_VANDENBERG.pdf'
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
            </div>
        </main>
    );
}
