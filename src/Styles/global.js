import styled from 'styled-components';

import { createGlobalStyle } from "styled-components";
import BackgroundHome from '../assets/Home/BackgroundHomeDesk.png'

export const GlobalStyle = createGlobalStyle`
:root {
    --primary: #FAC705;
    --text-primary: #000000;

};
`

//Home styles
export const HomeContainer = styled.div`
background-image: url(${BackgroundHome});
height: 905px;
width: 1730px;
`

export const LogoContainer = styled.div`
width: 700px;
padding: 20px;
display: flex;
flex-direction: column;
`
export const SubLogoContainer = styled.div`
width: 540px;
margin-left: 230px;
`
export const DisclaimerText = styled.p`
position: absolute;
bottom: 0;
margin-left: 10%
`