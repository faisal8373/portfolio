import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import NavBar from './components/NavBar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import AboutMe from './components/aboutMe/AboutMe'
import ContactMe from './components/contactMe/ContactMe';
import SkillSet from './components/skillset/SkillSet';
import TopBar from './components/TopBar';
import Routing from './components/navigation/Routing';



function App() {
  return (
    <div className="App bgColor">
      {/* <TopBar /> */}
      <Routing />
  {/* <NavBar /> */}
  {/* <Home /> */}
  {/* <AboutMe /> */}
  {/* <ContactMe /> */}
  {/* <SkillSet /> */}
  {/* <Footer /> */}
  {/* https://tohirlt.netlify.app/ */}
    </div>
  );
}

export default App;
