

//Images
import ValentinJourney from './assets/Home/valentinjourney.png'
import PokemonLogo from './assets/Home/pokemon-logo-3-1.png'

//Global Styles
import { LogoContainer, HomeContainer, SubLogoContainer, DisclaimerText } from './Styles/global';
import { Navbar } from './Components/NavBar';

function App() {
  return (
    <HomeContainer>
      <LogoContainer>
        <img src={PokemonLogo} alt='PokemonLogo'></img>
        <SubLogoContainer>
          <img src={ValentinJourney} alt='ValentinJourney'></img>
        </SubLogoContainer>
      </LogoContainer>
      <Navbar />
      <DisclaimerText>
      Disclaimer: I don't own any of the rights from Pokemon brand, this is only a fun project with no monetary intent, all the credits goes to the creators of the show and games.
      </DisclaimerText>
    </HomeContainer>
  );
}

export default App;
