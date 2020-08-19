import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FinishPage from './pages/FinishPage';
import UnfinishPage from './pages/UnfinishPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Finish</Link>
            </li>
            <li>
              <Link to="/unfinish">Unfinish</Link>
            </li>
            <li>
              <Link to="/error">Error</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <FinishPage />
          </Route>
          <Route path="/unfinish">
            <UnfinishPage />
          </Route>
          <Route path="/error">
            <ErrorPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
