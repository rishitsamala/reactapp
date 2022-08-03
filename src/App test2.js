import MainNavbar from './components/MainNavbar/MainNavbar';
import { Cardlist } from './components/Cardlist/Cardlist';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import indian from './imgs/Indian.jpg';
import italian from './imgs/Italian.jpg';
import american from './imgs/American.jpg';
import { DisplayList } from './components/DisplayList/DisplayList';
import { useState } from 'react';
import { CardGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function App() {
  const [clickedId, setclickedId] = useState();

  const cuisines = [
    { id: 1, title: "Indian", img: indian },
    { id: 2, title: "Italian", img: italian },
    { id: 3, title: "American", img: american }
  ];

  const cryptos = [
    { id: 1, title: "Bitcoin", img: bitcoin },
    { id: 2, title: "Ethereum", img: ethereum },
    { id: 3, title: "Litecoin", img: litecoin }
  ];

  return (
    <div>
      <MainNavbar />
      <Container>
        <Cardlist cuisines={cuisines} clickedId={(clickedId) => setclickedId(clickedId)} selectedId={clickedId}></Cardlist>

        <CardGroup>
          {
            cryptos.map(crypto => (
              <Card onClick={() => setclickedId(crypto.id)} key={crypto.id}>
                <Card.Img variant="top" src={crypto.img} height="200" 
                  style={{ border: crypto.id === clickedId ? "3px groove black" : "1px groove black", margin: '5px' }} />
                <Card.Title align="middle">{crypto.title}</Card.Title>
              </Card>
            ))
          }
        </CardGroup>

        <DisplayList clickedId={clickedId}></DisplayList>
      </Container>
    </div>
  );
}
