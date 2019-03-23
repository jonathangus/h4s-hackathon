import { createGlobalStyle } from 'styled-components'
import { bgColor, textColor, titleFont, titleColor, textFont } from './vars'

const GlobalStyle = createGlobalStyle`

    *, *:after, *:before {
        margin: 0;
        padding: 0;
        outline: none;
    }
    body {
        background: ${bgColor};
    }

    body {
        background-color: ${bgColor};
        font-family: ${textFont}, sans-serif;
        color: ${textColor};
        font-size: 16px;
        line-height: 1.5;
        transition: background-color 0.3s ease;
      }
      
      img {
        max-width: 100%;
      }
      input {
        border-radius: none;
      }
      a{
        line-height:1;
      }
      
      h1,h2,h3,h4 {
        font-weight: bold;
        font-family:  ${titleFont};
        color: ${titleColor};
      }


      h2 {

      }

      h3 {
        font-size: 20px;
      }
      


`
export default GlobalStyle
