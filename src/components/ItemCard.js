import React from "react";
import styled from "styled-components";

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
    flex: 0.75 1 auto;
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
`;

const ItemCard = props => {
  const { item } = props;
  return (
    <Card>
      <div>
        <h2>{item}</h2>
      </div>
      <div className="StatusWraper">
        <label>
          <input type="checkbox" /> Status
        </label>
      </div>
    </Card>
  );
};

export default ItemCard;
