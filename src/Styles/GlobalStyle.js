import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";
import BackgroundHome from '../assets/Home/BackgroundHomeDesk.png'
import {Link} from 'react-router-dom'


export const GlobalStyle = createGlobalStyle`
:root {
    --primary: #FAC705;
    --text-primary: #000000;
    background-image: url(${BackgroundHome});
};
`

//NavBar
export const NavBarContainer = styled.div`
position: absolute;
bottom: 0;
margin: 15% 15% 4% 23%;
`

//Logo & SubLogo for pages
export const GlobalLogoContainer = styled.div`
margin-left: 230px;
padding: 20px;
display: flex;
flex-direction: column;
`
export const GlobalSubLogoContainer = styled.div`
margin-left: 80px;
img{
    width: 260px;
}
`
//HomeLink for Logo and SubLogo for pages
export const HomeLink = styled(Link)`
cursor: pointer;
width: fit-content;
img {
    width: 250px;
}
`
