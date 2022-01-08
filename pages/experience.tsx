import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import styles from '../styles/experience.module.css';
import sharedStyles from '../styles/shared.module.css';
import { PATHS, TITLE_ANIMATION } from '../utilities/constants';

export default function Experience() {
    return (
        <main>
            <Head>
                <title>Ben Vandenberg: Experience</title>
                <meta name='description' content='My Experience' />
            </Head>

            <div className={sharedStyles.root}>
                <Navbar links={PATHS} currentPage={'Experience'} />

                <div id='home' className={sharedStyles.home}>
                    <AnimatePresence>
                        <motion.div
                            id='topText'
                            className={`${sharedStyles.body} ${styles.body}`}
                            {...TITLE_ANIMATION}
                        >
                            <motion.h1
                                className={`${sharedStyles.title} ${styles.title}`}
                            >
                                My Experience
                            </motion.h1>

                            <motion.h2 className={styles.header}>
                                School
                            </motion.h2>
                            {/* Carleton University */}
                            <motion.div className={styles.experienceBox}>
                                <motion.img
                                    className={styles.experienceImage}
                                    src='static/images/carleton.png'
                                />

                                <motion.div className={styles.experienceText}>
                                    <motion.h3
                                        className={styles.experienceHeader}
                                    >
                                        Carleton University
                                    </motion.h3>
                                    <motion.p>
                                        Bachelor of Computer Science: Computer
                                        and Internet Security
                                    </motion.p>
                                    <motion.p>
                                        Expected Graduation: May 2022
                                    </motion.p>
                                    <motion.p>
                                        {'CGPA: 10.25 A- '}
                                        <motion.a
                                            className={styles.a}
                                            href='https://carleton.ca/academicadvising/cgpas/'
                                        >
                                            (12 point scale)
                                        </motion.a>
                                    </motion.p>
                                </motion.div>
                            </motion.div>

                            <motion.h2 className={styles.header}>
                                Work Experience
                            </motion.h2>
                            {/* Irdeto */}
                            <motion.div className={styles.experienceBox}>
                                <motion.img
                                    className={styles.experienceImage}
                                    src='static/images/irdeto.jfif'
                                />

                                <motion.div className={styles.experienceText}>
                                    <motion.h3
                                        className={styles.experienceHeader}
                                    >
                                        Irdeto
                                    </motion.h3>
                                    <motion.p>
                                        Software Developer - Coop
                                    </motion.p>
                                    <motion.p>Jan 2021 - Aug. 2021</motion.p>
                                    <motion.p>
                                        - Produced over 500 code contributions
                                        (commits) of production code
                                    </motion.p>
                                    <motion.p>
                                        - Wrote a sophisticated CLI tool using
                                        the latest features of Python 3 and a
                                        highly extensible modular design
                                    </motion.p>
                                    <motion.p>
                                        - Rewrote a legacy Perl application
                                        using good coding practices in Python 3
                                    </motion.p>
                                    <motion.p>
                                        - 100% unit test coverage and
                                        consistently maintained an exceptionally
                                        high quality of work
                                    </motion.p>
                                    <motion.p>
                                        - Worked with a variety of languages and
                                        technologies, required learning skills
                                        on the fly
                                    </motion.p>
                                    <motion.p>
                                        - Maintained and created test
                                        environments for end-to-end testing by
                                        setting up servers in network
                                    </motion.p>
                                </motion.div>
                            </motion.div>
                            {/* Nokia */}
                            <motion.div className={styles.experienceBox}>
                                <motion.img
                                    className={styles.experienceImage}
                                    src='static/images/nokia.jpg'
                                />

                                <motion.div className={styles.experienceText}>
                                    <motion.h3
                                        className={styles.experienceHeader}
                                    >
                                        Nokia
                                    </motion.h3>
                                    <motion.p>
                                        Software Developer - Coop
                                    </motion.p>
                                    <motion.p>
                                        Sept. 2019 - Dec. 2019, May 2020 - Aug.
                                        2020
                                    </motion.p>
                                    <motion.p>
                                        - Developed multiple automation
                                        utilities with Python that interact with
                                        Nokia&apos;s 1830 Product Portfolio to
                                        handle mundane tasks and preform
                                        necessary system cleanups
                                    </motion.p>
                                    <motion.p>
                                        - Design and developed automation
                                        infrastructure and tool enhancements
                                        using ElectronJS + Python to maximize
                                        the effectiveness and productivity of
                                        ION Optics feature teams
                                    </motion.p>
                                    <motion.p>
                                        - Hosted collaboration and code review
                                        meetings to determine direction of new
                                        and existing projects and their
                                        requirements, resulting in improved
                                        communication skills
                                    </motion.p>
                                    <motion.p>
                                        - Created and maintained baseline setup
                                        configurations while handling other
                                        projects, lead to the development of
                                        time management and multitasking skills
                                    </motion.p>
                                </motion.div>
                            </motion.div>
                            {/* CRA */}
                            <motion.div className={styles.experienceBox}>
                                <motion.img
                                    className={styles.experienceImage}
                                    src='static/images/cra.jpg'
                                />

                                <motion.div className={styles.experienceText}>
                                    <motion.h3
                                        className={styles.experienceHeader}
                                    >
                                        Canadian Revenue Agency
                                    </motion.h3>
                                    <motion.p>Testing Analyst - Coop</motion.p>
                                    <motion.p>May 2019 - Aug 2019</motion.p>
                                    <motion.p>
                                        - Develop, prepare, execute new, and
                                        revise existing testing conditions in
                                        order to test requested system
                                        specification changes/requirements made
                                        by functional areas.
                                    </motion.p>
                                </motion.div>
                            </motion.div>

                            <motion.h2 className={styles.header}>
                                Personal Projects
                            </motion.h2>
                            {/* T&P Project */}
                            <motion.div className={styles.experienceBox}>
                                <motion.img
                                    className={styles.experienceImage}
                                    src='static/images/tap.png'
                                />

                                <motion.div className={styles.experienceText}>
                                    <motion.p>
                                        <motion.a
                                            className={`${styles.a} ${styles.experienceHeader}`}
                                            href='https://github.com/BenPVandenberg/TaP-Discord-Bot'
                                        >
                                            T&P Project
                                        </motion.a>
                                    </motion.p>
                                    <motion.p>
                                        Typescript/JavaScript, React,
                                        Express.js, Node.js, MySQL, SSL
                                        certificate
                                    </motion.p>
                                    <motion.p>
                                        - Designed and developed an application
                                        infrastructure centered around a Discord
                                        Bot
                                    </motion.p>
                                    <motion.p>
                                        - Engineered a node-based discord bot
                                        for use in a private discord server
                                    </motion.p>
                                    <motion.p>
                                        - Implemented React web application,
                                        Express.js API server, and a MySQL
                                        database, to allow users to easily
                                        upload/edit custom sound clips and
                                        gather data
                                    </motion.p>
                                </motion.div>
                            </motion.div>
                            {/* Blackjack AI */}
                            <motion.div className={styles.experienceBox}>
                                <motion.img
                                    className={styles.experienceImage}
                                    src='https://repository-images.githubusercontent.com/427737208/5fab1b64-601f-46d9-808d-7ee97843b147'
                                />

                                <motion.div className={styles.experienceText}>
                                    <motion.p>
                                        <motion.a
                                            className={`${styles.a} ${styles.experienceHeader}`}
                                            href='https://github.com/BenPVandenberg/blackjack-ai'
                                        >
                                            Blackjack AI
                                        </motion.a>
                                    </motion.p>
                                    <motion.p>Python</motion.p>
                                    <motion.p>
                                        - Developed a Blackjack game API with
                                        python
                                    </motion.p>
                                    <motion.p>
                                        - A NeuroEvolution of Augmenting
                                        Topologies (NEAT) implementation on the
                                        blackjack game API
                                    </motion.p>
                                </motion.div>
                            </motion.div>
                            {/* Carleton Schedule Creator */}
                            <motion.div className={styles.experienceBox}>
                                <motion.img
                                    className={styles.experienceImage}
                                    src='static/images/schedule.webp'
                                />

                                <motion.div className={styles.experienceText}>
                                    <motion.p>
                                        <motion.a
                                            className={`${styles.a} ${styles.experienceHeader}`}
                                            href='https://github.com/concastor/Schedule-Builder-CuHacking2020'
                                        >
                                            Carleton Schedule Creator
                                        </motion.a>
                                    </motion.p>
                                    <motion.p>
                                        JavaScript, React, Node.js, Ui Path
                                        Automation
                                    </motion.p>
                                    <motion.p>
                                        - Hackathon project designed to provide
                                        a better solution to the currently
                                        available methods of creating student
                                        schedules
                                    </motion.p>
                                    <motion.p>
                                        - Engineered a React web application
                                        that generates the best available course
                                        schedules possible based on given
                                        courses and the user&apos;s preferences
                                    </motion.p>
                                </motion.div>
                            </motion.div>
                            {/* EZ Umpire */}
                            <motion.div className={styles.experienceBox}>
                                <motion.img
                                    className={styles.experienceImage}
                                    src='static/images/umpire.png'
                                />

                                <motion.div className={styles.experienceText}>
                                    <motion.p>
                                        <motion.a
                                            className={`${styles.a} ${styles.experienceHeader}`}
                                            href='https://github.com/BenPVandenberg/EZ-Umpire'
                                        >
                                            EZ Umpire
                                        </motion.a>
                                    </motion.p>
                                    <motion.p>Java, JavaFX, JFoenix</motion.p>
                                    <motion.p>
                                        - Developed an application using java
                                        that allows the user to easily schedule
                                        umpires
                                    </motion.p>
                                    <motion.p>
                                        - Personal project inspired by learning
                                        how long it takes to schedule umpires
                                        manually and the cost of comparable
                                        solutions
                                    </motion.p>
                                    <motion.p>
                                        - Integrated JavaFX for a more appealing
                                        look, resulting in better usability
                                    </motion.p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </main>
    );
}
