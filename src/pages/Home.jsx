import React, { useState } from "react";
import Stopwatch from "../components/Stopwatch";
import Layout from "../components/common/Layout";
import Studing from "../components/Studing";
import TimeTimer from "../components/TimeTimer";
import Dday from "../components/Dday";
import alert from "../image/alert_icon.svg";
import styles from "../css/mainPage.module.css";
import styled from "styled-components";
import Footer from "../components/common/Footer";
import { useSelector } from "react-redux";

const Home = () => {
  const color = useSelector((state) => state.color);
  const [btsOn, setBtsOn] = useState(false);
  return (
    <Layout>
      <Gradient color={color}>
        <div className={btsOn ? styles.blurIn : styles.blurOut}>
          <div className={styles.aboveBox}>
            <img src={alert} alt="도움말 툴팁" className={styles.alert} />
            <Studing />
            <Stopwatch />
          </div>
          <Dday />
          <TimeTimer />
        </div>
        <div
          className={btsOn ? styles.todoBtsOn : styles.todoBtsOff}
          onClick={() => {
            setBtsOn(!btsOn);
          }}
        >
          오늘 할 일
        </div>
      </Gradient>
      <Footer />
    </Layout>
  );
};

export default Home;

const Gradient = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${(props) => {
    switch (props.color) {
      case "green":
        return "linear-gradient(to bottom, var(--neutral-20), #3b4f4b 34%, #558d71 74%, var(--primary-60))";
      case "blue":
        return "linear-gradient(to bottom, var(--neutral-20), #445364 48%, #5f809b 75%, var(--tertiary-60))";
      case "red":
        return "linear-gradient(to bottom, var(--neutral-20), #4f3f40 43%, #996153 73%, var(--secondary-60))";
      default:
        return "none";
    }
  }};
`;
