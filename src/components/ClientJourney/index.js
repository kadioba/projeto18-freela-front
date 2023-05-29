import { useNavigate } from "react-router-dom";
import { ClientJourneyContainer } from "./styled";
import { IoAirplaneOutline, IoAirplaneSharp, IoMapOutline, IoMapSharp, IoBusinessOutline, IoBusinessSharp } from "react-icons/io5";

export default function ClientJourney(props) {

    const navigate = useNavigate()

    function handleDestination() {
        if (props.cityId && props.page === "accommodations") {
            navigate(`/flights/${props.cityId}`)
        }
        if (props.cityId && props.page === "flights") {
            navigate(`/accommodations/${props.cityId}`)
        }
        if (!props.cityId) {
            alert("Selecione uma cidade de destino")
        }
    }

    return (
        <ClientJourneyContainer>
            {props.page === "home" ? < IoMapSharp size={"32px"} /> : < IoMapOutline size={"32px"} onClick={() => navigate("/")} />}
            {props.page === "flights" ? < IoAirplaneSharp size={"32px"} /> : < IoAirplaneOutline size={"32px"} onClick={handleDestination} />}
            {props.page === "accommodations" ? < IoBusinessSharp size={"32px"} /> : <IoBusinessOutline size={"32px"} onClick={handleDestination} />}
        </ClientJourneyContainer>
    )
}

