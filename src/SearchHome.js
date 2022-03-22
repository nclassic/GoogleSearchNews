/** @format */

import React, { useState } from "react";
import "./App.css";
import { Button, FormGroup, Input } from "reactstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
function App() {
  const [keyword, setKeyword] = useState("");

  return (
    <div className='App' data-testid='home'>
      <header className='App-header'>
        <p>Search</p>
        <FormGroup>
          <Input
            data-testid='search'
            type='text'
            name='searchText'
            id='searchText'
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <BrowserRouter>
            <Link
              to={"/result/" + keyword}
              className='search-button'
              data-testid='search'>
              Search Now
            </Link>
          </BrowserRouter>
        </FormGroup>
      </header>
    </div>
  );
}

export default App;
