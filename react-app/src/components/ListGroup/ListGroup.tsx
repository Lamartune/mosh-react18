// import { MouseEvent } from "react";

import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;
interface ListGroupProps {
  items: string[];
  heading: string;
  //(item: string) => void
  onSelecetItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelecetItem }: ListGroupProps) {
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(0);

  // //Event Handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  const getMessage = () => {
    // return items.length === 0 ? <p>No item found</p> : null;
    return items.length === 0 && <p>No item found</p>;
  };

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelecetItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}
export default ListGroup;
