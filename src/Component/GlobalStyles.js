import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`


${reset}

body{
    margin:0px;
    padding:0px;
    font-family: 'Nanum Gothic', sans-serif;
    }

li{
    list-style:none;
}

a{
    text-decoration:none;
    color:#262626;
}

H{
  font-size: 35px;
  padding-top: 100px;
  padding-left: 50px;
  font-weight: bold;
  text-align: center;
};



`;

export default globalStyles;
