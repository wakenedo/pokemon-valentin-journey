import ValentinJourney from '../../assets/Home/valentinjourney.png'
import PokemonLogo from '../../assets/Home/pokemon-logo-3-1.png'
import { LogoContainer, SubLogoContainer } from '../../Components/Hero/heroElements'

function About() {
    return (
        <LogoContainer>
            <img src={PokemonLogo} alt='PokemonLogo' />
            <SubLogoContainer>
                <img src={ValentinJourney} alt='ValentinJourney' />
            </SubLogoContainer>
        </LogoContainer>

    )
}
export default About