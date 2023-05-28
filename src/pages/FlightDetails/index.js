import { useParams } from "react-router-dom"

export default function FlightDetails() {
    const params = useParams()

    return (
        <h1>FlightDetails id {params.flightId}</h1>

    )
}