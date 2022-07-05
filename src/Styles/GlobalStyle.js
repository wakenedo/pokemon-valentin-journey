import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";
import BackgroundHome from '../assets/Home/BackgroundHomeDesk.png'

export const GlobalStyle = createGlobalStyle`
:root {
    --primary: #FAC705;
    --text-primary: #000000;
    background-image: url(${BackgroundHome});
};
`
export const NavBarContainer = styled.div`
position: absolute;
bottom: 0;
margin: 15% 15% 4% 23%;
`


