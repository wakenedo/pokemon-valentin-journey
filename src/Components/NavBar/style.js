import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBarContainer = styled.div`
display: flex;
background: #ffffff;
border: 2px solid #FAC705;
border-radius: 50px;
width: fit-content; ;
`

export const NavLink = styled(Link)`
display: flex;
flex-direction: column;
align-items: center;
margin: 15px 26px 0 26px;
padding: 1px;
cursor: pointer;
transform: scale(0.9) ;
transition: all 1s smooth;
text-decoration: none;


&:hover {
transform: scale(1.0);
transition: all 1s smooth;
}
`

export const NavBarImg = styled.img`
width: 60px;
`

export const NavBarText = styled.p`
font-size: 14px;
`
