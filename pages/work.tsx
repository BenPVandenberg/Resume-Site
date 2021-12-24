import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import sharedStyles from '../styles/shared.module.css';
import styles from '../styles/work.module.css';
import { PATHS, TITLE_ANIMATION } from '../utilities/constants';

export default function Resume() {
    return (
        <main>
            <Head>
                <title>Ben Vandenberg: Work</title>
                <meta
                    name='description'
                    content='My up to date work experience'
                />
            </Head>

            <div className={sharedStyles.root}>
                <Navbar links={PATHS} currentPage={'Work'} />

                <div id='home' className={sharedStyles.home}>
                    <AnimatePresence>
                        <motion.div
                            id='topText'
                            className={`${sharedStyles.text} ${styles.text}`}
                            {...TITLE_ANIMATION}
                        >
                            <motion.h1 className={`${sharedStyles.title}`}>
                                Work Experience
                            </motion.h1>

                            <motion.p className={sharedStyles.description}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quod modi sed expedita, nam
                                cumque corrupti vero quis! Ea officia earum
                                beatae eaque fuga eligendi provident ullam
                                rerum, ad recusandae quam?
                            </motion.p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </main>
    );
}
