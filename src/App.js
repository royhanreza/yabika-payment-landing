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
import NotFoundPage from './pages/NotFoundPage';

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
          <Route path="/receipt/:id" exact>
            <Receipt />
          </Route>
          <Route path="*" exact>
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
