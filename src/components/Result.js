import React from 'react';
import { Route, Link } from 'react-router-dom';
import styles from '../styles/Result.module.css';
import Layout from './Layout';
import mainImg from '../assets/mainImg.png';

function Result({ foodPicture, mainMenu, foodName }) {

    // 카톡 공유 버튼 이벤트함수
    const kakaoButtonClick = () => {
        document.getElementById("kakao-link-btn").click();
    };

    return (
        <div className="Result">
            <Layout>
                <div className={styles.Result_container}>
                    <div className={styles.blank}></div>
                    <img src={foodPicture} height="200" draggable="false" />
                    <div className={styles.blank}></div>
                    <div className={styles.main_menu}>대표메뉴 : {mainMenu}</div>
                    <div className={styles.result_txt_container}>
                        <div className={styles.result_txt}>광개토법 제 3장에 의거 !!</div>
                        <div className={styles.result_txt}>너의 점심은...</div>
                        <br />
                        <div className={styles.result_txt_name}>{foodName}</div>
                    </div>
                    <div className={styles.footer}>
                        <button className={styles.kakaoBtn}>카톡 공유</button>
                        <div className={styles.blank}></div>
                        <Link to="/" ><button className={styles.appealBtn}>다시 하기</button></Link>
                    </div>
                </div>
            </Layout>
        </div >
    )

}

export default Result;