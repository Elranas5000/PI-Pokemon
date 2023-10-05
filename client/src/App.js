import './App.css';
import LandingPage from './views/landingPage/landingPage';
import Home from "./views/home/home"
import CreatePokemon from "./views/createPokemon/createPokemon"
import PokemonDetail from "./views/pokemonDetail/pokemonDetail"
import { Route } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  return (
    <div className="App">
      
      <Route path="/landing" component={LandingPage}/> 
      <Route exact path="/home" component={Home}/>
      <Route path="/home/:id" component={PokemonDetail}/>
      <Route path="/createPokemon" component={CreatePokemon}/>

      {/*no poner las etiquetas html dentro de las llaves en component={}*/}
      
    </div>
  );
}

export default App;
