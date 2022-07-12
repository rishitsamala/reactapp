import { CardGroup } from "react-bootstrap";
import { CardItem } from "./CardItem";

export function Cardlist(props) {
    return (
        <CardGroup>
            {
                props.cuisines.map(cuisine => (
                    <CardItem cuisine={cuisine} key={cuisine.id} clickedId={props.clickedId}></CardItem>
                ))
            }
        </CardGroup>
    );
}