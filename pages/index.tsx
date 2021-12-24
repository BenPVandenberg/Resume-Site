import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import styles from '../styles/home.module.css';
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

                <div id='home' className={sharedStyles.home}>
                    <AnimatePresence>
                        <motion.div
                            id='topText'
                            className={`${sharedStyles.text} ${styles.text}`}
                            {...TITLE_ANIMATION}
                        >
                            <motion.h1
                                className={`${sharedStyles.title} ${styles.title}`}
                            >
                                {"I'm Ben Vandenberg."}
                            </motion.h1>

                            <motion.p className={sharedStyles.description}>
                                {"I'm a Ottawa based software developer " +
                                    'creating a variety of web, desktop, ' +
                                    'and CLI apps. I have a strong intrest ' +
                                    'in computer and internet security.'}
                            </motion.p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </main>
    );
}
