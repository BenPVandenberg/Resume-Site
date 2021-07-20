import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import sharedStyles from '../styles/shared.module.css';
import { PATHS } from '../utilities/constants';

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
                            initial='hidden'
                            animate='visible'
                            exit='hidden'
                            variants={{
                                hidden: {
                                    scale: 0.8,
                                    opacity: 0,
                                    transition: {
                                        delay: 0.4,
                                        duration: 2,
                                    },
                                },
                                visible: {
                                    scale: 1,
                                    opacity: 1,
                                    transition: {
                                        delay: 0.4,
                                    },
                                },
                            }}
                        >
                            <motion.h1 className={sharedStyles.title}>
                                My Skills
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
            </main>
        </div>
    );
}