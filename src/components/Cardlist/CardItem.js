import { Card } from "react-bootstrap";

export function CardItem(props) {
  return (
    <Card onClick={() => props.clickedId(props.cuisine.id)}>
      <Card.Img variant="top" src={props.cuisine.img} height="200" />
      <Card.Title align="middle">{props.cuisine.title}</Card.Title>
    </Card>
  );
}