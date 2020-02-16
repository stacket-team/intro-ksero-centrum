import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap');

*,*::before,*::after {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  background-color: #1F1E1F;
  min-height: 100vh;
  color: #ffffff;
}

#root {
  position: relative;
  max-width: 100vw;
  overflow: hidden;
  min-height: 100vh;
}

a {
  text-decoration: none;
  color: #ffffff;
}
`;

export default GlobalStyle;