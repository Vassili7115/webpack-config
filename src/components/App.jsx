import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import About from './About';
import Home from './Home';
import Topics from './Topics';
import Page404 from './Page404';
import 'Src/assets/styles/global.css';

const App = () => (
  <Router>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/topics" component={Topics} />
      <Route path="/about" component={About} />
      <Route path="/" component={Page404} />
    </Switch>
  </Router>
);

export default App;
