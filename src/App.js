import React from 'react';
import { Subscribe } from 'unstated';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';

import ListContainer from './state/ListContainer';

import StyledApp  from './components/styledComponents/DefaultStyle';

import ItemCard from './components/ItemCard';
// import Input from "./components/Input";
import FinalInput from './components/FinalInput';

const App = () => (
  <Router>
    <StyledApp>
      <header>
        <h1>To Do</h1>
        <ul>
          <li>
            <Link to="/add">Add</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
            {' '}
          </li>
        </ul>
      </header>
      <div className="container">
        <Switch>
          <Route exact path="/add" component={FinalInput} />
          {/* <FinalInput /> */}
          {/* <Input /> */}
          <Subscribe to={[ListContainer]}>
            {lista => lista.state.list.map((item, index) => (
              <ItemCard item={item} key={index} />
            ))
                }
          </Subscribe>
        </Switch>
      </div>
    </StyledApp>
  </Router>
);

export default App;
