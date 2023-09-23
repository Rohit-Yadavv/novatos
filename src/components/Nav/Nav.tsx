'use client'
import { useLayoutEffect, useState } from 'react';
import styles from './nav.module.css'
const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [auth, setAuth] = useState(false);
    const [headerBgColor, setHeaderBgColor] = useState('transparent')

    useLayoutEffect(() => {
        const handleScroll = () => {
            const color: any = window.scrollY > 10 ? '#ffffffe0' : 'transparent';
            setHeaderBgColor(color);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    };

    return (
        <header style={{ backgroundColor: `${headerBgColor}` }} className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.logo}>
                    <img src="/logoT.png" alt="questify Logo" className={styles.logoImage} />
                </div>
                <nav className={`${styles.nav} ${isMenuOpen ? styles.showMenu : ''}`} >
                    <a href="/">Home</a>
                    <a href="/all-blogs">All Articles</a>
                    {!auth ? (
                        <>
                            <a href="/register">Register</a>
                            <a href="/login">Login</a>
                        </>
                    ) : (
                        <>
                            <a href="/user/liked-articles">Liked Articles</a>
                            <a style={{ display: 'flex', alignItems: 'center' }} href="/user/dashboard">jnk
                                {/* <AiOutlineUser style={{ fontSize: "20px" }} /> */}
                            </a>
                        </>
                    )
                    }
                </nav >
                <div className={styles.hamburger} onClick={toggleMenu}>
                    {/* <HiMenu className={`${styles.mobileMenu} ${!(isMenuOpen) ? styles.showMenu : ''}`} /> */}
                    {/* <AiOutlineClose className={`${styles.mobileMenu} ${isMenuOpen ? styles.showMenu : ''}`} /> */}
                    x
                </div>
            </div>
        </header>
    )
}

export default Nav