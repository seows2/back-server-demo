import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    #root {
        width: 100%;
        height: 100vh;
        font-family: 'Noto Sans KR', sans-serif;
        background-color: #f4f7ff;
    }

    button[type='button'] {
        cursor: pointer;
        box-sizing: border-box;
    }

    a {
        color: black;
        text-decoration: none;
    }
`;

export default GlobalStyle;
