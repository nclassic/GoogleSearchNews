/** @format */

import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import SearchHome from "./SearchHome";
import ResultPage from "./ResultPage";
import NewsPage from "./News";
function App() {
  return (
    <main>
      <BrowserRouter>
        <div id='nav'>
          <ul>
            <li>
              <Link to='/'>HOME</Link>
            </li>
            <li>
              <Link to='/news'>NEWS</Link>
            </li>
          </ul>
        </div>
        <br />
        <Switch>
          <Route path='/result/:keyword' component={ResultPage} exact />
          <Route path='/' component={SearchHome} exact />
          <Route path='/news' component={NewsPage} exact />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
