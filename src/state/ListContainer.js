//import React, { Component } from "react"; ?
import { Container } from "unstated";

class ListContainer extends Container {
  state = JSON.parse(localStorage.getItem("state"))
    ? JSON.parse(localStorage.getItem("state"))
    : {
        list: []
      };

  add = async item => {
    await this.setState({
      list: [...this.state.list, { item: item, status: false }]
    });

    localStorage.setItem("state", JSON.stringify(this.state));
  };
  toggle = async (item, status) => {
    const helper = this.state.list.map(
      obj => (obj.item === item ? { item: item, status: !status } : obj)
    );
    await this.setState({
      list: helper
    });
    localStorage.setItem("state", JSON.stringify(this.state));
  };
  remove = async item => {
    const helper = this.state.list.filter(obj => obj.item != item);

    alert(helper);
    await this.setState({
      list: helper
    });
    localStorage.setItem("state", JSON.stringify(this.state));
  };
}

export default ListContainer;
