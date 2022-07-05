import { BrowserRouter as Router } from 'react-router-dom'

//Components
import Hero from './Components/Hero';
import Footer from './Components/Footer/Index';
import NavBar from './Components/NavBar';

//GlobalStyle
import { GlobalStyle } from './Styles/GlobalStyle'

// import { Navbar } from './Components/NavBar';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <NavBar />
      <Footer />

    </Router>
  );
}

export default App;
