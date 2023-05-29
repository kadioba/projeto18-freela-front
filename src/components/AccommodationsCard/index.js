import { useNavigate } from "react-router-dom";
import { AccommodationContainer } from "./styled";

export default function AccommodationsCard(props) {
    const naigate = useNavigate()

    function handleAccommodationDetails() {
        naigate(`/accommodations/details/${props.id}`)
    }

    return (
        <AccommodationContainer onClick={handleAccommodationDetails}>
            <img src={props.picture} alt="" />
            <h1>{props.name}</h1>
            <h1>Valor da diária: R${props.pricePerDay}</h1>
        </AccommodationContainer>
    )
}