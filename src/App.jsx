import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './app.scss'
import Bin2Dec from './views/Bin2Dec'
import BorderRadiusPreviewer from './views/BorderRadiusPreviewer';

export default function App() {
  return (
    <Router>
      <div className='app'>
        <h1 className='app__heading'>Learning React</h1>
        <nav className='app__nav'>
          <ul className='app__nav__links'>
            <li>
              <Link to="/">/</Link>
            </li>
            <li>
              <Link to="/bin2dec">Binary to Decimal Converter</Link>
            </li>
            <li>
              <Link to="/border-radius-previewer">Border Radius Previewer</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/bin2dec">
            <Bin2Dec />
          </Route>
          <Route path="/border-radius-previewer">
            <BorderRadiusPreviewer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

