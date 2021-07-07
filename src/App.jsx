import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
// import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Films from "./components/Films";
import People from "./components/People";

const App = () => {
  return (
    <BrowserRouter>
        <Route>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
              <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                  <img src='https://upload.wikimedia.org/wikipedia/sco/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png' width='250em'></img>
                </a>
              </nav>
              <div className="nav-container" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <ul>
                    <NavLink to="/" exact>Home Page</NavLink>
                  </ul>
                  <ul>
                    <NavLink to="/films" activeClassName="selectedLink">View Films</NavLink>
                  </ul>
                  <ul>
                    <NavLink to="/people" activeClassName="selectedLink">View People</NavLink>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </Route>

        {/* if something supposed to be static (navbar or header) leave it outside of the Switch component */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/films">
          <Films />
        </Route>
        {/* <Route exact path="/films/:id">
          <FilmDetails />
        </Route> */}
        <Route exact path="/people">
          <People />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
// films={films}
export default App;