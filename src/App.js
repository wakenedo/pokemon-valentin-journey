import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//Components
import Hero from './Components/Hero';
import Footer from './Components/Footer/Index';
import NavBar from './Components/NavBar';

//GlobalStyle
import { GlobalStyle, NavBarContainer } from './Styles/GlobalStyle'

//Pages
import About from './pages/About';
import PokemonsCaptured from './pages/PokemonsCaptured';
import GamesFinished from './pages/GamesFinished';
import BerriesAcquired from './pages/BerriesAcquired';

function App() {
  return (
    <Router>
      <GlobalStyle />
        <Routes>
          <Route path='pages/About' element={<About/>}/>
          <Route path='pages/PokemonsCaptured' element={<PokemonsCaptured/>}/>
          <Route path='pages/GamesFinished' element={<GamesFinished/>}/>
          <Route path='pages/BerriesAcquired' element={<BerriesAcquired/>}/>
          <Route path='/' element={<Hero/>} />
        </Routes>
      <NavBarContainer>
          <NavBar />
      </NavBarContainer>
      <Footer />

    </Router>
  );
}

export default App;
