import React from "react";
import { Instagram, X, Facebook } from "@mui/icons-material";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import styles from "./index.module.css";

export const Basement = () => {

    return (
        <>
            <div className={styles.logo}><img src={logo} alt="logo" /></div>
            <div className={styles.footerWrapper}>
                <div className={styles.infoWrapper}>
                    <div className={styles.informationBox}>
                        <Link to="/aboutus" className={styles.aboutUs}>
                            <p>О нас</p>
                        </Link>
                        <p>Поддержка</p>
                        <div>E-mail: <a href="mailto:auto.guide@gmail.com">auto.guide@gmail.com</a></div>
                        <div>Телефон: <a href="tel:+375441234567">+375 44 123-45-67</a></div>
                    </div>
                    <div className={styles.snBox}>
                        <p>Мы в социальных сетях</p>
                        <div className={styles.refWrapper}>
                            <a 
                                href="https://www.instagram.com/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <Instagram className={styles.instagram} style={{ fontSize: 40 }} />
                            </a>
                            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                                <X className={styles.x} style={{ fontSize: 40 }} />
                            </a>
                            <a 
                                href="https://www.facebook.com/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <Facebook className={styles.facebook} style={{ fontSize: 40 }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}