import React, { Component } from "react";
import { Subscribe } from "unstated";

import ListContainer from "./state/ListContainer";

import { StyledApp } from "./components/styledComponents/DefaultStyle";

import ItemCard from "./components/ItemCard";
// import Input from "./components/Input";
import FinalInput from "./components/FinalInput";

class App extends Component {
  render() {
    return (
      <StyledApp>
        <header>
          <h1>To Do</h1>
        </header>
        <div className="container">
          <FinalInput />
          {/* <Input /> */}
          <Subscribe to={[ListContainer]}>
            {lista =>
              lista.state.list.map((item, index) => (
                <ItemCard item={item} key={index} />
              ))
            }
          </Subscribe>
        </div>
      </StyledApp>
    );
  }
}

export default App;
