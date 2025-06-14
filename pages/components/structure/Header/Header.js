import React, { useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.globalHeaderWrapper}>
                <div className={styles.headerTopRow}>
                    <div className={styles.logoWrapper}>
                        <Link href="/">
                            <div className={styles.logoLink}>
                                <Image
                                    src="/images/Hawkes-Bay-Hindu-Temple.png"
                                    alt="Site Logo"
                                    width={130}
                                    height={130}
                                    priority
                                />
                                <div className={styles.logoText}>Hawkes Bay Hindu Temple and Culture Centre</div>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <nav className={styles.desktopNav}>
                        <ul>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/construction">Construction</Link></li>
                            <li><Link href="/contribute">Contribute</Link></li>
                            <li><Link href="/contacts">Contacts</Link></li>
                        </ul>
                    </nav>

                    <div className={styles.navCTAWrapperDesktop}>
                        <Link className="button" href="/donate">Donate Now</Link>
                    </div>

                    {/* Hamburger for mobile */}
                    <button
                        className={styles.menuToggle}
                        onClick={() => setMenuOpen(true)}
                        aria-label="Open navigation menu"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Slide-In Menu */}
            <nav
                className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ""}`}
            >
                <button
                    className={styles.menuClose}
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close navigation menu"
                >
                    ✕
                </button>

                <ul>
                    <li><Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
                    <li><Link href="/construction" onClick={() => setMenuOpen(false)}>Construction</Link></li>
                    <li><Link href="/contribute" onClick={() => setMenuOpen(false)}>Contribute</Link></li>
                    <li><Link href="/contacts" onClick={() => setMenuOpen(false)}>Contacts</Link></li>
                </ul>

                <div className={styles.navCTAWrapper}>
                    <Link className="button" href="/donate" onClick={() => setMenuOpen(false)}>Donate Now</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
