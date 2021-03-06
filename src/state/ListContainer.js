// import React, { Component } from "react"; ?
import { Container } from 'unstated';

class ListContainer extends Container {
  state = JSON.parse(localStorage.getItem('state'))
    ? JSON.parse(localStorage.getItem('state'))
    : {
      list: [],
    };

  add = async (item) => {
    await this.setState(state => ({ list: [...state.list, { text: item, status: false }] }));
    localStorage.setItem('state', JSON.stringify(this.state));
  };

  toggle = async (item, status) => {
    await this.setState(state => ({
      list: state.list.map(obj => (obj.item === item ? { text: item, status: !status } : obj)),
    }));
    localStorage.setItem('state', JSON.stringify(this.state));
  };

  remove = async (item) => {
    await this.setState(state => ({
      list: state.list.filter(obj => obj.text !== item),
    }));
    localStorage.setItem('state', JSON.stringify(this.state));
  };
}

export default ListContainer;
