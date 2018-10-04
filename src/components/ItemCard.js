import React from "react";
import styled from "styled-components";

import { Subscribe } from "unstated";
import ListContainer from "../state/ListContainer";

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  margin-bottom: 0.25rem;
  div {
    flex: 0.6 1 auto;
    padding: 1.25rem;
    h2 {
      background-color: #343a40;
      color: #fff;
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
    }
  }
  .StatusWraper {
    flex: 0.25 1 auto;
    zoom: 1;
    transform: scale(1.5);
    transform-origin: 0 0;
  }

  i {
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    flex: 0 1 auto;
    zoom: 1;
    transform: scale(1.5);
    transform-origin: 0 0;
    color: grey;
    :hover {
      color: red;
    }
  }
`;

const ItemCard = props => {
  const { item, status } = props.item;
  return (
    <Subscribe to={[ListContainer]}>
      {lista => (
        <Card>
          <i className="fas fa-times" onClick={() => lista.remove(item)} />
          <div>
            <h2>{item}</h2>
          </div>
          <div className="StatusWraper">
            <label>
              <input
                type="checkbox"
                onChange={() => lista.toggle(item, status)}
                checked={status}
              />{" "}
              Status
            </label>
          </div>
          {status ? (
            <div className="Botun">
              Move to done list <i className="fas fa-arrow-right" />
            </div>
          ) : null}
        </Card>
      )}
    </Subscribe>
  );
};

export default ItemCard;
