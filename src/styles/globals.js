import { css } from 'styled-components';

export const main = css`
    *, *:before, *:after {
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
        display: block;
    }

    html,
    body {
        height: auto;
    }

    body {
        padding:0;
        margin: 0;
        background: #f8f8f8;
        position: relative;
        font-family: 'Lato', sans-serif;
        font-size: 16px;
        color: #63636a;
    }
`;
