import Pokeball from '../../assets/pokeball.png'
import { NavBarContainer, NavBarIcon, NavBarImg, NavBarText } from './style'

export const Navbar = () => {
        return (
                <NavBarContainer>
                        <NavBarIcon to='/'>
                                <NavBarImg src={Pokeball} />
                                <NavBarText>About the project</NavBarText>
                        </NavBarIcon>
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
        )
}