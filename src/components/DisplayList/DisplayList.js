import { ListGroup } from "react-bootstrap";

export function DisplayList(props) {

    const allRestaurantList = [
        { cuisineId: 1, names: ["Biryani Pot", "Paradise", "Bawarchi"] },
        { cuisineId: 2, names: ["Olive", "Cheese cake", "Olivia Med"] },
        { cuisineId: 3, names: ["Chillis", "Burger King", "Mc Donald's"] }
    ];

    return (
        <ListGroup as="ul" >
            {
                allRestaurantList.filter(cuisine => cuisine.cuisineId === props.clickedId).map(cuisine => (
                    cuisine.names.map(restaurantName => (
                        <ListGroup.Item as="li" key={restaurantName}>
                            {restaurantName}
                        </ListGroup.Item>
                    ))
                ))
            }
        </ListGroup>
    );
}