import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from './components/SearchPage';

function App() {
  return (
    //BEM naming convention
    <Router>
      {/* switch helps us to render certain components based on the route we are in */}
      <Switch>
        <Route path="/search">
          <SearchPage />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <div className="app">
        {/* Home (the one with the search bar) */}
        {/* Search page - the results page after the search */}
        {/* limited to 100 requests per day - use masked response to limit the api throttle */}
        {/* components - reusable components */}
        {/* pages are gonna refer to home page and search page */}
      </div>
    </Router>
  );
}

export default App;
