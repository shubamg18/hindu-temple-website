import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.footerWrapper}>
                <div className={styles.logoWrapper}>
                    <Link href="/">
                        <Image
                            src="/images/header-logo.png"
                            alt="Site Logo"
                            width={150}
                            height={150}
                            priority // loads immediately, good for logos
                        />
                    </Link>
                </div>
                <nav className={styles.menuWrapper}>
                    <ul>
                        <li>
                            <Link href="/one-time-donation">One Time Donation</Link>
                        </li>
                        <li>
                            <Link href="/celebrate-with-us">Celebrate a Special Occasion</Link>
                        </li>
                        <li>
                            <Link href="/how-to-claim-tax-credits">Donation Tax Credits via MyIR</Link>
                        </li>
                        <li>
                            <Link href="/invoice-request">Invoice Request</Link>
                        </li>
                        <li>
                            <Link href="/maximize-your-impact">Maximize Your Impact</Link>
                        </li>
                    </ul>
                </nav>
                <div className={styles.socialFooter}>
                    <div className="flex justify-center space-x-6 text-2xl text-gray-600">
                        <a href="https://www.facebook.com/ChristchurchHinduTemple" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                            className="hover:text-blue-600 transition-colors">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.youtube.com/@christchurchhindutemple" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                            className="hover:text-red-600 transition-colors">
                            <FaYoutube />
                        </a>
                        <a href="https://www.instagram.com/christchurchhindutemple/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                            className="hover:text-pink-500 transition-colors">
                            <FaInstagram />
                        </a>
                        <a href="https://x.com/chchhindutemple" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                            className="hover:text-blue-400 transition-colors">
                            <FaXTwitter />
                        </a>
                    </div>
                </div>
                <div className={styles.navCTAWrapper}>
                    <Link className="button" href="/donate">Donate Now</Link>
                </div>
                <div className={styles.copyright}>© Christchurch Hindu Temple & Hindu Culture Centre . All Rights Reserved.</div>
            </div>
        </footer>
    );
};

export default Footer;