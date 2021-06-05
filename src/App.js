
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navigation from './Composants/pages/Navigation'
import Accueil from "./Composants/pages/Accueil"
import Services from "./Composants/pages/Services"
import Propos from "./Composants/pages/Propos"
import Contact from "./Composants/pages/Contact"
import Foot from './Composants/pages/Foot';
import PageNonTrouve from './Composants/pages/PageNonTrouve';



const App = () => {
  
  return (
    <Router >
    <Navigation />
    <Switch>
      <Route path="/" component={Accueil} exact />
      <Route path="/services" component={Services} />
      <Route path="/propos" component={Propos} />
      <Route path="/contact" component={Contact} />
      <Route path="/" component={PageNonTrouve}/>
    </Switch>
    <Foot />
    </Router>
  );
}

export default App
