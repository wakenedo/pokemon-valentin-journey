import { LogoContainer, HomeContainer, SubLogoContainer } from './Styles/global';


//Images
import ValentinJourney from './assets/Home/valentinjourney.png'
import PokemonLogo from './assets/Home/pokemon-logo-3-1.png'

function App() {
  return (
    <HomeContainer>
      <LogoContainer>
        <img src={PokemonLogo} alt='PokemonLogo'></img>
        <SubLogoContainer>
          <img src={ValentinJourney} alt='ValentinJourney'></img>
        </SubLogoContainer>
      </LogoContainer>
    </HomeContainer>
  );
}

export default App;
