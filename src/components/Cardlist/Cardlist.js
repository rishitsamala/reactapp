import { CardGroup } from "react-bootstrap";
import { CardItem } from "./CardItem";

//rgb(245,245,245)
export function Cardlist(props) {
    return (
        <CardGroup style={{ margin: '15px auto' }}>
            {
                props.cryptos.map(crypto => (
                    <CardItem crypto={crypto} key={crypto.id} clickedId={props.clickedId}
                        border={crypto.id === props.selectedId ? "2px groove black" : "2px groove black"}
                        background={crypto.id === props.selectedId ? "rgb(33,37,41)" : ""}
                        color={crypto.id === props.selectedId ? "white" : "black"}>
                    </CardItem>
                ))
            }
        </CardGroup>
    );
}