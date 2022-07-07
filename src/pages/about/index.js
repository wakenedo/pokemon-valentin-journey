import ValentinJourney from '../../assets/Home/valentinjourney.png'
import PokemonLogo from '../../assets/Home/pokemon-logo-3-1.png'

//Global Styles
import { HomeLink, GlobalLogoContainer, GlobalSubLogoContainer } from '../../Styles/GlobalStyle'


function About() {
    return (
        <>
            <HomeLink to='/' >
                <GlobalLogoContainer>
                    <img src={PokemonLogo} alt='PokemonLogo' />
                    <GlobalSubLogoContainer>
                        <img src={ValentinJourney} alt='ValentinJourney' />
                    </GlobalSubLogoContainer>
                </GlobalLogoContainer>
            </HomeLink>
            <h1>About</h1>
        </>

    )
}
export default About