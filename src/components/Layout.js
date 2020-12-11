import React from 'react';
import styles from '../styles/Layout.module.css';

function Layout({ children }) {
    return (
        <div className="Layout" >
            <div className={styles.Card_container}>
                <div className={styles.Card}>
                    {children}
                </div>
                <div className={styles.team_intro}>광주에 있는 개와 토끼 두마리</div>
            </div>
        </div>
    )

}

export default Layout;