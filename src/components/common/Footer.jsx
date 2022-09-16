import React from 'react';
import styled from 'styled-components';
import home from '../../image/home_icon.svg';
import ranking from '../../image/ranking_icon.svg';
import stats from '../../image/stats_icon.svg';
import '../../css/color.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <FooterBar>
            <Link to='/ranking'>
                <img src={ranking} alt='ranking' />
            </Link>
            <Link to='/home'>
                <img src={home} alt='home' />
            </Link>
            <Link to='/mypage'>
                <img src={stats} alt='stats' />
            </Link>
        </FooterBar>
    );
};

export default Footer;

const FooterBar = styled.div`
    height: 5rem;
    display: flex;
    background-color: var(--neutral-20);
    position: fixed;
    bottom: 0;
    justify-content: space-around;
    img {
        width: 4rem;
        height: 4rem;
        margin-top: 0.4rem;
    }
    @media (max-width: 1200px) {
        width: 100%;
    }
    @media (min-width: 1200px) {
        width: 1200px;
    }
`;
