import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    #root {
        width: 100%;
        height: 100vh;
    }

    a {
        color: black;
        text-decoration: none;
    }
`;

export default GlobalStyle;
