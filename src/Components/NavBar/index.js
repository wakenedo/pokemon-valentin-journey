import Pokeball from '../../assets/pokeball.png'
import { NavBarContainer, NavLink, NavBarImg, NavBarText } from './style'

const NavBar = () => {
        return (
                <NavBarContainer>
                        <NavLink to='/pages/About'>
                                <NavBarImg src={Pokeball} />
                                <NavBarText>About the project</NavBarText>
                        </NavLink>
                        <NavLink to='/pages/PokemonsCaptured'>
                                <NavBarImg src={Pokeball} />
                                <NavBarText>Pokemons Captured</NavBarText>
                        </NavLink>
                        <NavLink to='/pages/GamesFinished'>
                                <NavBarImg src={Pokeball} />
                                <NavBarText>Games Finished</NavBarText>
                        </NavLink>
                        <NavLink to='/pages/BerriesAcquired'>
                                <NavBarImg src={Pokeball} />
                                <NavBarText>Berries Acquired</NavBarText>
                        </NavLink>
                </NavBarContainer>
        )
}

export default NavBar