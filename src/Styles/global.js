import styled from 'styled-components';

import { createGlobalStyle } from "styled-components";
import  BackgroundHome from '../assets/Home/BackgroundHome.svg'

export const GlobalStyle = createGlobalStyle`
:root {
    --primary: #FAC705;
    --text-primary: #000000;

};
`

//Home styles
export const HomeContainer = styled.div`
background-image: url(${BackgroundHome});
height: 100vh;
width: 1440px;
`

export const LogoContainer = styled.div`
width: 600px;
padding: 20px;
display: flex;
flex-direction: column;
`
export const SubLogoContainer = styled.div`
margin-left: 150px;
`