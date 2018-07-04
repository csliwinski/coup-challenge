import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const LogoSvg = styled.svg`
    fill: #1c1c29;
`;

const Logo = props => (
    <LogoSvg viewBox="0 0 121 30" {...props}>
        <path d="M110.12 21.747h-3.851a.589.589 0 0 0-.592.586V28.2c0 .648-.53 1.173-1.185 1.173h-6.517A1.179 1.179 0 0 1 96.79 28.2V2.387c0-.648.53-1.173 1.185-1.173h12.015c5.717 0 10.455 4.527 10.497 10.188.043 5.706-4.615 10.345-10.367 10.345zm-31.991 7.919c-8.179 0-13.625-5.686-13.625-13.786l-.001-13.494c0-.648.53-1.172 1.185-1.172h24.881c.655 0 1.185.525 1.185 1.173l.001 13.493c0 8.1-5.446 13.786-13.626 13.786zm-32.563 0c-8.18 0-14.811-6.566-14.811-14.666S37.386.334 45.566.334C53.745.334 60.376 6.9 60.376 15s-6.631 14.666-14.81 14.666zM19.438 13.917a1.173 1.173 0 0 0-.838 1.437l3.186 11.772a1.171 1.171 0 0 1-.682 1.385 14.905 14.905 0 0 1-5.787 1.155C7.212 29.659.569 23.116.521 15.09.471 6.949 7.121.334 15.332.334c6.409 0 11.382 4.16 13.383 9.819a1.171 1.171 0 0 1-.814 1.518l-8.463 2.246z" />
    </LogoSvg>
);

const StyledLogo = styled(Logo)`
    width: 120px;
    height: 29.75px;
`;

const HeaderComponent = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
`;

const Header = () => {
    return (
        <HeaderComponent>
            <StyledLogo />
        </HeaderComponent>
    );
};

export default Header;
