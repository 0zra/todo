import React, { Component } from "react";
import { Subscribe } from "unstated";

import ListContainer from "./state/ListContainer";

import { StyledApp } from "./components/styledComponents/DefaultStyle";

import ItemCard from "./components/ItemCard";

import Input from "./components/Input";

class App extends Component {
  state = {
    ispis: []
  };
  onAdd = () => {
    const val = document.getElementById("unos").value;
    document.getElementById("unos").value = "";
    return val;
  };
  update = ispis => {
    this.setState({
      ispis: ispis
    });
  };

  render() {
    const { ispis } = this.state;

    return (
      <Subscribe to={[ListContainer]}>
        {lista => (
          <StyledApp>
            <header className="AppHeader ">
              <h1 className="AppTitle">To Do</h1>
            </header>
            <div className="container">
              <Input />
              <div className="form-group card p-3 mt-2">
                <input
                  type="text"
                  id="unos"
                  className="form-control  mb-2"
                  placeholder="Make an app"
                />
                <div
                  className="btn btn-info btn-block"
                  onClick={() => {
                    lista
                      .add(this.onAdd())
                      .then(rez => this.setState({ ispis: rez }));
                  }}
                >
                  Add to the list
                </div>
              </div>
              {ispis !== lista.print() ? this.update(lista.print()) : null}

              {ispis.map((item, index) => <ItemCard item={item} key={index} />)}
            </div>
          </StyledApp>
        )}
      </Subscribe>
    );
  }
}

export default App;
