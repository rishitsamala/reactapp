import MainNavbar from './components/MainNavbar/MainNavbar';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import bitcoin from './imgs/Bitcoin.jpg';
import ethereum from './imgs/Ethereum.jpg';
import litecoin from './imgs/Litecoin.jpg';
import { useState } from 'react';
import { CardGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Charts from './components/Charts/Charts';

export default function App() {
  const [clickedId, setclickedId] = useState(1);

  const cryptos = [
    { id: 1, title: "Bitcoin", img: bitcoin },
    { id: 2, title: "Ethereum", img: ethereum },
    { id: 3, title: "Litecoin", img: litecoin }
  ];

  return (
    <div>
      <MainNavbar />
      <Container>
        <CardGroup>
          {
            cryptos.map(crypto => (
              <Card onClick={() => setclickedId(crypto.id)}
                border={crypto.id === clickedId ? "dark" : ""}
                style={{ width: '100rem' }} key={crypto.id}>
                <Card.Img variant="top" src={crypto.img} height="200" />
                <Card.Title align="middle">{crypto.title}</Card.Title>
              </Card>
            ))
          }
        </CardGroup>
        <Charts clickedId={clickedId}></Charts>
      </Container>
    </div>
  );
}