//import React, { Component } from "react"; ?
import { Container } from "unstated";

class ListContainer extends Container {
  state = {
    list: []
  };

  add = async item => {
    this.setState({ list: [...this.state.list, item] });
    return [...this.state.list, item];
  };
}

export default ListContainer;
