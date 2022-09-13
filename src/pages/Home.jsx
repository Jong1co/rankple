import React from 'react';
import Stopwatch from '../components/Stopwatch';
import Layout from '../components/common/Layout';
import Quote from '../components/Quote';
import Studing from '../components/Studing';
import TimeTimer from '../components/TimeTimer';
import Dday from '../components/Dday';
import alert from '../image/alert_icon.svg';
import styles from '../css/mainPage.module.css';

const Home = () => {
    return (
        <Layout>
            <div className={styles.aboveBox}>
                <img src={alert} alt='도움말 툴팁' className={styles.alert} />
                <Studing />
                <Stopwatch />
            </div>
            <Dday />
            <TimeTimer />
            <Quote />
        </Layout>
    );
};

export default Home;
