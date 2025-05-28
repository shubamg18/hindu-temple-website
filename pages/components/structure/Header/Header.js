import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";

const Header = () => {

    return (
        <header>
            <div className={styles.globalHeaderWrapper}>
                <div className={styles.logoWrapper}>
                    <Link href="/">
                        <Image
                            src="/images/header-logo.png"
                            alt="Site Logo"
                            width={130}
                            height={130}
                            priority // loads immediately, good for logos
                        />
                        <div>Christchurch Hindu Temple and culture centre</div>
                    </Link>
                </div>
                <nav className={styles.menuWrapper}>
                    <ul>
                        <li>
                            <Link href="/about">About Us</Link>
                        </li>
                        <li>
                            <Link href="/construction">Construction</Link>
                        </li>
                        <li>
                            <Link href="/contribute">Contribute</Link>
                        </li>
                        <li>
                            <Link href="/contacts">Contacts</Link>
                        </li>
                    </ul>
                </nav>
                <div className={styles.navCTAWrapper}>
                    <Link className="button" href="/donate">Donate Now</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;