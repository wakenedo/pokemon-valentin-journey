import ValentinJourney from '../../assets/Home/valentinjourney.png'
import PokemonLogo from '../../assets/Home/pokemon-logo-3-1.png'

//Global Styles
import { HomeLink, GlobalLogoContainer, GlobalSubLogoContainer } from '../../Styles/GlobalStyle'

const GamesFinished = () => {
    return (
        <>
            <GlobalLogoContainer>
                <HomeLink to='/' >
                    <img src={PokemonLogo} alt='PokemonLogo' />
                </HomeLink>
                <GlobalSubLogoContainer>
                    <img src={ValentinJourney} alt='ValentinJourney' />
                </GlobalSubLogoContainer>
            </GlobalLogoContainer>
            <h1>Games Finished</h1>
        </>
    )
}
export default GamesFinished