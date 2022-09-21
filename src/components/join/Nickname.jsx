import React, { useState } from "react";
import "animate.css";
import styles from "./join.module.css";
import arrowBtn from "../../common/svg/arrowback_icon.svg";
import deleteBtn from "../../common/svg/delete_icon.svg";
import { ReactComponent as Orange } from "../../common/svg/orange.svg";
import { ReactComponent as Red } from "../../common/svg/red.svg";
import { ReactComponent as Green } from "../../common/svg/green.svg";
import { __checkNickname } from "../../app/slice/joinSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

const Nickname = ({
  setMode,
  nickname,
  handleInput,
  checkMsg,
  setCheckMsg,
  initialState,
  userInfo,
  setUserInfo,
}) => {
  const dispatch = useDispatch();
  const nicknameUsable = useSelector((data) => data.join.ok);
  const [borderColor, setBorderColor] = useState("");
  const check = /^[가-힣]{2,8}$/;

  const checkNickname = () => {
    if (!check.test(userInfo.nickname)) {
      setBorderColor("orange");
      setCheckMsg("숫자,이모티콘,공백은 사용 불가능해요");
    } else {
      axios
        .get(process.env.REACT_APP_SERVER_URL + `/check/nick/${nickname}`, {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        })
        .then((res) =>
          res.data.ok === true
            ? (setBorderColor("green"), setCheckMsg("사용 가능한 닉네임이에요"))
            : (setBorderColor("red"), setCheckMsg("이미 존재하는 닉네임이에요"))
        );
    }
  };

  const allCheck = () => {
    borderColor === "green" && check.test(userInfo.nickname)
      ? setMode("Age")
      : void 0;
  };

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.btnWrap}>
          <img className={styles.arrowbackIcon} src={arrowBtn} alt="arrow" />
        </div>
        <p className={styles.infoText}>
          사용하실 닉네임을
          <br /> 입력해 주세요
        </p>
        <div
          className={
            nickname !== "" && borderColor === "red"
              ? styles.red
              : nickname !== "" && borderColor === "green"
              ? styles.green
              : nickname !== "" && borderColor === "orange"
              ? styles.orange
              : styles.inputContainer
          }
        >
          <div className={styles.InputGroup}>
            <label className={styles.label}>닉네임</label>
            <input
              type="text"
              name="nickname"
              className={styles.inputNickname}
              onBlur={checkNickname}
              onKeyPress={checkNickname}
              value={nickname}
              onChange={handleInput}
              placeholder="8자 이내 한글"
              autoComplete="off"
              autoFocus={true}
              maxLength="8"
            ></input>
          </div>
          <div>
            <img
              className={styles.deleteIcon}
              src={deleteBtn}
              alt="deleteBtn"
              onClick={() => {
                setUserInfo(initialState);
                setBorderColor("");
              }}
            />
          </div>
        </div>
        <p
          className={
            borderColor === "orange"
              ? styles.checkMsgOrange
              : borderColor === "green"
              ? styles.checkMsgGreen
              : borderColor === "red"
              ? styles.checkMsgRed
              : styles.checkMsg
          }
        >
          {borderColor === "orange" && (
            <Orange style={{ marginRight: "0.25rem" }} />
          )}
          {borderColor === "red" && <Red style={{ marginRight: "0.25rem" }} />}
          {borderColor === "green" && (
            <Green style={{ marginRight: "0.25rem" }} />
          )}
          {checkMsg}
        </p>
      </div>
      {!check.test(userInfo.nickname) && nickname.length < 2 ? (
        <button className={styles.joinBtnNo} disabled>
          다음
        </button>
      ) : (
        <button
          className={styles.joinBtnYes}
          onClick={() => {
            checkNickname();
            allCheck();
          }}
        >
          다음
        </button>
      )}
    </div>
  );
};

export default Nickname;
