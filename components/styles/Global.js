import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

  body {

    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
  }
  
  * {
    box-sizing: border-box;
  }

  a {
    -webkit-transition: all .1s ease;
    transition: all .1s ease;

    

    text-decoration: none;
}
 
`

export default GlobalStyles
