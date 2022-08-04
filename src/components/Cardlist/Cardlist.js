import { CardGroup } from "react-bootstrap";
import { CardItem } from "./CardItem";

export function Cardlist(props) {
    return (
        <CardGroup style={{ margin: '5px auto' }}>
            {
                props.cryptos.map(crypto => (
                    <CardItem crypto={crypto} key={crypto.id} clickedId={props.clickedId}
                        border={crypto.id === props.selectedId ? "2px groove black" : "2px groove black"}>
                    </CardItem>
                ))
            }
        </CardGroup>
    );
}