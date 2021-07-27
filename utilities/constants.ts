import { Path } from '../components/Navbar';

export const PATHS: Path[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/work' },
    { label: 'Skills', href: '/skills' },
];

export const TITLE_ANIMATION = {
    initial: 'hidden',
    animate: 'visible',
    exit: 'hidden',
    variants: {
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
    },
};

// no need for an api key, we are using public data
export const WAKATIME_API_URL = 'https://wakatime.com/api/v1';
export const WAKATIME_USERID = '@0be2531b-4dd7-482a-8b03-7ebc76236fc7';
