//import React, { Component } from "react"; ?
import { Container } from "unstated";

class ListContainer extends Container {
  state = {
    list: []
  };

  add = async item => {
    this.setState({
      list: [...this.state.list, { item: item, status: false }]
    });

    return [...this.state.list, item]; //?
  };
  toggle = async (item, status) => {
    alert("radi");
    const helper = this.state.list.map(
      obj => (obj.item === item ? { item: item, status: !status } : obj)
    );
    this.setState({
      list: helper
    });
  };
}

export default ListContainer;
