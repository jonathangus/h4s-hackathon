import { createGlobalStyle } from 'styled-components'
import {
  bgColor,
  textColor,
  semi,
  titleFont,
  titleColor,
  textFont,
  gutter,
  primary,
} from './vars'

const GlobalStyle = createGlobalStyle`

    *, *:after, *:before {
        margin: 0;
        padding: 0;
        outline: none;
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
        color: ${primary}
      }
      

      h1 {
        font-size: 48px;
      }
      
      h1,h2,h3,h4 {
        font-weight: ${semi};
        font-family:  ${titleFont};
        color: ${titleColor};
      }


      h2 {

      }

      h3 {
        font-size: 20px;
      }

      h4 {
        font-size: 18px;
      }

      p {
        margin-bottom: ${gutter}px;

        &:last-child {
          margin-bottom:0;
        }
      }
      
      ul, ol {
        margin-left: 20px;
      }


`
export default GlobalStyle
