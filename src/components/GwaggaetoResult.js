import React, { useState, useEffect } from 'react';
import Result2 from './Result2';
import Layout from './Layout';
import mainImg from '../assets/mainImg.png';
import first1 from '../assets/first1.png';
import first2 from '../assets/first2.png';
import second1 from '../assets/second1.png';
import second2 from '../assets/second2.png';

function GwanggaetoResult() {
    const restaurant = [
        {
            index: 1,
            logo: 1,
            name: '대왕김밥',
            mainMenu: '새우튀김초밥'
        },
        {
            index: 2,
            logo: 2,
            name: '애상마라탕',
            mainMenu: '마라탕'
        },
        {
            index: 3,
            logo: 3,
            name: '오늘김해뒷고기',
            mainMenu: '뒷고기'
        },
        {
            index: 4,
            logo: 4,
            name: '스피드반점',
            mainMenu: '매운쟁반짜장'
        },
        {
            index: 5,
            logo: 5,
            name: '로니로티',
            mainMenu: '시금치피자'
        },
        {
            index: 6,
            logo: 6,
            name: '돈부리가게',
            mainMenu: '일식(등심까스)'
        },
        {
            index: 7,
            logo: 7,
            name: '쭉심',
            mainMenu: '쭈꾸미'
        },
        {
            index: 8,
            logo: 8,
            name: '전대별식',
            mainMenu: '초밥덮밥'
        },
        {
            index: 9,
            logo: 9,
            name: '박준기감자탕',
            mainMenu: '우거지감자탕'
        },
        {
            index: 10,
            logo: 10,
            name: '등촌',
            mainMenu: '소고기 샤브샤브'
        },
        {
            index: 11,
            logo: 11,
            name: '대풍쪽갈비',
            mainMenu: '대풍쪽갈비(기본/매운맛)'
        },
        {
            index: 12,
            logo: 12,
            name: '월계수 식당',
            mainMenu: '매운돈까스'
        },
        {
            index: 13,
            logo: 13,
            name: '테스타',
            mainMenu: '로제파스타'
        },
        {
            index: 14,
            logo: 14,
            name: '미미원',
            mainMenu: '육전'
        },
        {
            index: 15,
            logo: 15,
            name: '엄마네 돼지찌개',
            mainMenu: '돼지찌개'
        },
        {
            index: 16,
            logo: 16,
            name: '밤실짬뽕',
            mainMenu: '짬뽕'
        },
        {
            index: 17,
            logo: 17,
            name: '복순이네',
            mainMenu: '굴보쌈'
        },
        {
            index: 18,
            logo: 18,
            name: '궁전제과',
            mainMenu: '공룡알 & 나비파이'
        },
        {
            index: 19,
            logo: 19,
            name: '천지라면',
            mainMenu: '오리지널 돈코츠라멘'
        }

    ];

    const firstDescriptionComment = [
        {
            comment1: '광개토법 제 3장에 의거 !!'
        },
        {
            comment1: '꽤 고집이 세군...'
        },
        {
            comment1: '이제 정말 마지막이닷..'
        }
    ];

    const secondDescriptionComment = [
        {
            comment2: '너의 점심은 ...'
        },
        {
            comment2: '그렇담 이건 어떠냣 !!!'
        },
        {
            comment2: '진지하게 생각해봐..'
        }
    ];

    const gaeto = [
        {
            first: first1,
            second: second1
        },
        {
            first: first2,
            second: second2
        }
    ];


    let imgLoading = 0;
    // 결과 전 이미지 preLoading state
    const [loading, setLoading] = useState(false);
    // 항소 횟수 state
    const [count, setCount] = useState(0);
    // 랜덤 인덱스 값 state
    function foodRandomIndex() {
        let result = Math.floor(Math.random() * 19);
        return result;
    };

    let [index, setIndex] = useState(foodRandomIndex());
    console.log('index', index);
    // 결과 전 사진 state (광개토1 -> 광개토2 -> 음식점)
    const [foodPicture, setFoodPicture] = useState("");
    // 음식점 이름 state
    const [foodName, setFoodName] = useState("");
    // 메인 메뉴 state
    const [mainMenu, setMainMenu] = useState("");
    // 애니메이션 효과 (fade_in, typing) state
    const [animationEffect, setAnimationEffect] = useState(true);
    // 버튼이름 state(항소 -> 상고);
    const [buttonName, setButtonName] = useState("항소");
    // 버튼 숨김 조절 state
    const [buttonHidden, setButtonHidden] = useState("");

    // 카톡 공유 버튼 이벤트함수
    const kakaoButtonClick = () => {
        document.getElementById("kakao-link-btn").click();
    };
    // 다시 하기 버튼 이벤트 함수
    const againButtonClick = () => {
        window.location.reload();
    }
    // 항소(상고) 하기 버튼 이벤트 함수
    const appealButtonClick = () => {
        setCount(count + 1);
        restaurant.splice(index, 1); // restaurant 객체에 식당이름, 음식사진, 메인메뉴
        setIndex(foodRandomIndex());
    };

    // Hooks
    useEffect(() => {
        setLoading(false);
        // 결과 전 화면들 보여주기
        let preLoad1 = new Image();
        preLoad1.assets = gaeto[count].first;
        preLoad1.onload = function () {
            imgLoading++;
        };
        let preLoad2 = new Image();
        preLoad2.assets = gaeto[count].second;
        preLoad2.onload = function () {
            imgLoading++;
        };

        let preLoad3 = new Image();
        // setIndex(foodRandomIndex());
        preLoad3.assets = restaurant[index].logo;
        preLoad3.onload = function () {
            imgLoading++;
        };

        setInterval(() => {
            if (imgLoading === 3) {
                setLoading(true);
            }
        }, 100);
        setFoodPicture(gaeto[count].first);

        setFoodName("");
        setMainMenu("");
        setAnimationEffect(true);
        setButtonHidden("none");
        if (count === 1) {
            setButtonName("상고");
        }
        setTimeout(() => {
            setFoodPicture(gaeto[count].second);

        }, 3000);
        setTimeout(() => {
            const basic_route = '/images/';
            const final_route = basic_route.concat(restaurant[index].logo);

            setFoodPicture(final_route.concat('.png'));

            setFoodName(restaurant[index].name);
            setMainMenu(restaurant[index].mainMenu);
        }, 5000);
        setTimeout(() => {
            setButtonHidden("");
            setAnimationEffect(false);
        }, 6000);
    }, [count, index]);

    return (
        <div>
            <Result2 foodPicture={foodPicture} foodName={foodName} mainMenu={mainMenu} />
            {console.log('FoodPicture: ', foodPicture)}
        </div>
    )

}

export default GwanggaetoResult;