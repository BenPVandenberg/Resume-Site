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

export const BAR_COLOURS = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 205, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(201, 203, 207, 0.2)',
];
export const BAR_OUTLINE_COLOURS = [
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)',
];
