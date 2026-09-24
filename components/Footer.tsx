import styles from '../styles/index.module.css';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <p>&copy; {year} Ben Vandenberg</p>
            <p className={styles.footerLinks}>
                <a href='mailto:contact@benvandenberg.ca'>
                    contact@benvandenberg.ca
                </a>
                <span aria-hidden='true'> &middot; </span>
                <a href='https://www.linkedin.com/in/ben-vandenberg22/'>
                    LinkedIn
                </a>
                <span aria-hidden='true'> &middot; </span>
                <a href='https://github.com/BenPVandenberg'>GitHub</a>
            </p>
        </footer>
    );
}
