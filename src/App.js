import React, { Component } from "react";
import "./App.css";
import { Subscribe } from "unstated";

import ListContainer from "./state/ListContainer";

class App extends Component {
  state = {
    ispis: []
  };
  onAdd = () => {
    const val = document.getElementById("unos").value;
    document.getElementById("unos").value = "";
    return val;
  };

  render() {
    const { ispis } = this.state;

    return (
      <Subscribe to={[ListContainer]}>
        {lista => (
          <div className="App">
            <header className="App-header py-auto">
              <h1 className="App-title">To Do</h1>
            </header>
            <div className="container">
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

              {ispis.map((item, index) => (
                <div className="card mb-1" key={index}>
                  <div className="card-body">
                    <h2 className="bg-dark text-white my-2">{item}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Subscribe>
    );
  }
}

export default App;
