import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
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
            lista.add(this.onAdd());
            ispis = lista.lista();
          }}
        >
          Add to the list
        </div>
      </div>
    );
  }
}
