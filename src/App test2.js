import MainNavbar from './components/MainNavbar/MainNavbar';
import { Cardlist } from './components/Cardlist/Cardlist';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import indian from './imgs/Indian.jpg';
import italian from './imgs/Italian.jpg';
import american from './imgs/American.jpg';
import { DisplayList } from './components/DisplayList/DisplayList';
import { useState } from 'react';

export default function App() {
  const [clickedId, setclickedId] = useState();

  const cuisines = [
    { id: 1, title: "Indian", img: indian },
    { id: 2, title: "Italian", img: italian },
    { id: 3, title: "American", img: american }
  ];

  return (
    <div>
      <MainNavbar />
      <Container>
        <Cardlist cuisines={cuisines} clickedId={(clickedId) => setclickedId(clickedId)} classId={clickedId}> </Cardlist>
        <DisplayList clickedId={clickedId}></DisplayList>
      </Container>
    </div>
  );
}
