import Home from '../components/home/home.container';
import About from '../components/about/About.container';
import Nav from '../components/nav/Nav.container';
import { BrowserRouter, Route } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" exact={true} component={About} />
    </BrowserRouter>
  );
}

export default Router;
