import React, { Component } from 'react';
import { Subscribe } from 'unstated';

import ListContainer from '../state/ListContainer';

class Input extends Component {
  onAdd = () => {
    const val = document.getElementById('unos').value;
    document.getElementById('unos').value = '';
    return val;
  };

  render() {
    return (
      <Subscribe to={[ListContainer]}>
        {lista => (
          <div className="form-group card p-3 mt-2">
            <input
              type="text"
              id="unos"
              className="form-control  mb-2"
              placeholder="Test"
            />
            <div
              className="btn btn-info btn-block"
              onClick={() => {
                lista.add(this.onAdd());
              }}
            >
              Add to the list
            </div>
          </div>
        )}
      </Subscribe>
    );
  }
}

export default Input;
