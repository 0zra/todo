import React from "react";
import styled from "styled-components";

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  margin-bottom: 0.25rem;
  .CardBody {
    flex: 1 1 auto;
    padding: 1.25rem;
    .Item {
      background-color: #343a40;
      color: #fff;
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
    }
  }
`;

const ItemCard = props => {
  const { item } = props;
  return (
    <Card>
      <div className="CardBody">
        <h2 className="Item">{item}</h2>
      </div>
    </Card>
  );
};

export default ItemCard;
