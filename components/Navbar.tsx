import Link from 'next/link';
import { useState } from 'react';

export interface Path {
    label: string;
    href: string;
}

export interface NavbarProps {
    links: Path[];
    currentPage: string;
}

export default function Navbar(props: NavbarProps) {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <nav className='flex flex-wrap p-3 justify-center'>
            {/* hamburgur button that only appears on small screens */}
            <button
                className='inline-flex p-3 hover:bg-blue-300 rounded sm:hidden ml-auto outline-none'
                onClick={handleClick}
            >
                <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h16M4 18h16'
                    />
                </svg>
            </button>
            {/* Note that in this div we will use a ternary operator to decide whether or not to display the content of the div */}
            <div
                className={`${
                    active ? '' : 'hidden'
                }   w-full sm:inline-flex sm:w-auto`}
            >
                <div className='sm:inline-flex sm:flex-row sm:w-auto w-full items-center flex flex-col sm:h-auto text-center'>
                    {/* create a link dynamically */}
                    {props.links.map((link, index) => {
                        return (
                            <Link href={link.href} key={index}>
                                <a
                                    className={`sm:inline-flex sm:w-auto w-full px-3 py-2 rounded font-bold ${
                                        link.label === props.currentPage
                                            ? 'text-blue-300'
                                            : ''
                                    }`}
                                >
                                    {link.label}
                                </a>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
