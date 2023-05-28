import { useNavigate } from "react-router-dom";
import { FlightContainer } from "./styled";

export default function FlightCard(props) {
    const navigate = useNavigate()

    function handleFlightDetails() {
        navigate(`/flights/details/${props.id}`)
    }

    return (
        <FlightContainer onClick={handleFlightDetails}>
            <img src={props.picture} alt="" />
            <h1>{props.departureTime}</h1>
            <h1>{props.price}</h1>
            <h1>{props.origin}</h1>
        </FlightContainer>
    )
}