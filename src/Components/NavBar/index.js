import Pokeball from '../../assets/pokeball.png'
import { Nav, NavBarContainer, NavBarIcon, NavBarImg, NavBarText, NavLink } from './style'

export const Navbar = () => {
        return (
                <>
                        <Nav>
                                <NavBarContainer>
                                        <NavLink href='/'>
                                                link
                                                {/*<NavBarImg src={Pokeball} />
                                <NavBarText>About the project</NavBarText>*/}
                                        </NavLink>
                                        <NavBarIcon to='/'>
                                                <NavBarImg src={Pokeball} />
                                                <NavBarText>Pokemons Captured</NavBarText>
                                        </NavBarIcon>
                                        <NavBarIcon to='/'>
                                                <NavBarImg src={Pokeball} />
                                                <NavBarText>Games Finished</NavBarText>
                                        </NavBarIcon>
                                        <NavBarIcon to='/'>
                                                <NavBarImg src={Pokeball} />
                                                <NavBarText>Berries Acquired</NavBarText>
                                        </NavBarIcon>
                                </NavBarContainer>

                        </Nav>
                </>
        )
}