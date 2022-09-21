import React from 'react';
import { useDispatch } from 'react-redux';
import { __postTargetTime } from '../../app/slice/timeTimerSlice';
import styles from './setTimeModal.module.css';
import SetTimePicker from './SetTimePicker';
import font from '../../common/css/font.module.css';

const SetTimeModal = ({ time, setTime, setMode, targetToSec }) => {
    const dispatch = useDispatch();
    return (
        <div className={styles.modal}>
            <SetTimePicker setTime={setTime} time={time} />
            <button
                className={`${styles.startBtn} ${font.subtitle2_600_16}`}
                onClick={() => {
                    setMode('normal');
                    dispatch(__postTargetTime({ targetTime: targetToSec * 1000 }));
                }}>
                설정하기
            </button>
        </div>
    );
};

export default SetTimeModal;
