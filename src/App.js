import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import FinishPage from './pages/FinishPage';
import UnfinishPage from './pages/UnfinishPage';
import ErrorPage from './pages/ErrorPage';
import Receipt from './pages/Receipt';

function App() {
  return (
    <Router>
      <div>
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
          <Route path="/receipt">
            <Receipt />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
