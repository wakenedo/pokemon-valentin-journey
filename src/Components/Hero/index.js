import ValentinJourney from '../../assets/Home/valentinjourney.png'
import PokemonLogo from '../../assets/Home/pokemon-logo-3-1.png'

//Styles
import { LogoContainer, SubLogoContainer, DisclaimerText, NavBarContainer } from './heroElements'

const Hero = () => {
    return (
        <>
            <LogoContainer>
                <img src={PokemonLogo} alt='PokemonLogo' />
                <SubLogoContainer>
                    <img src={ValentinJourney} alt='ValentinJourney' />
                </SubLogoContainer>
            </LogoContainer>

        </>

    )
}

export default Hero