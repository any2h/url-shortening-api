import { createGlobalStyle } from "styled-components";
// import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
    ${'' /* ${normalize} */}

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    p,
    ul {
        margin: 0;
    }

    body {
        min-height: 100vh;
        ${'' /* padding-inline: 1.5rem; */}
        font-family: 'Poppins', sans-serif;
        line-height: 1.5;
        font-size: ${({theme}) => theme.fontSizes.reg};
        color: ${({theme}) => theme.colors.gray};
    }

    img,
    picture {
        max-width: 100%;
        display: block;
    }

    ul {
        list-style: none;
        padding-inline-start: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    input,
    button,
    textarea,
    select, 
    a {
        cursor: pointer;
        font: inherit;
    }
`

export default GlobalStyle
