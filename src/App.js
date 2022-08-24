import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Cardlist } from './components/Cardlist/Cardlist';
import Charts from './components/Charts/Charts';
import bitcoin from './imgs/Bitcoin.jpg';
import ethereum from './imgs/Ethereum.jpg';
import litecoin from './imgs/Litecoin.jpg';

export default function App() {
  const [clickedId, setclickedId] = useState(1);

  const cryptos = [
    { id: 1, title: "Bitcoin", img: bitcoin },
    { id: 2, title: "Ethereum", img: ethereum },
    { id: 3, title: "Litecoin", img: litecoin }
  ];

  return (
    <>
      <Cardlist cryptos={cryptos} clickedId={(clickedId) => setclickedId(clickedId)} selectedId={clickedId} />
      <Charts clickedId={clickedId} />
    </>
  );
}