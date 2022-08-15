import { Card } from "react-bootstrap";

export function CardItem(props) {
  return (
    <Card onClick={() => props.clickedId(props.crypto.id)} 
    style={{ border: props.border, backgroundColor: props.background, color: props.color, margin: '5px' }}>
      {/* <Card.Img variant="top" src={props.crypto.img} height="200" /> */}
      <Card.Title align="middle">{props.crypto.title}</Card.Title>
    </Card>
  );
}