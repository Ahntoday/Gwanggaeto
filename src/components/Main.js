import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import styles from '../styles/Main.module.css';
import mainImg from '../assets/mainImg.png'

function Main(props) {

    return (
        <div>
            <Layout>
                <div className={styles.Main_container}>
                    <img src={mainImg} height="250" draggable="false" />
                    <div className={styles.main_txt}>
                        <div className={styles.main_txt_1}>솔로몬</div>
                        <div className={styles.main_txt_2}>광개토<div className={styles.main_txt_2_2}>의</div></div>
                        <div className={styles.main_txt_3}>점심판결</div>
                    </div>
                    <div className={styles.blank}></div>
                    <Link to="/ggtresult" ><button className={styles.startBtn}>판결 신청 ></button></Link>
                </div>
            </Layout>
        </div>
    )

}

export default Main;