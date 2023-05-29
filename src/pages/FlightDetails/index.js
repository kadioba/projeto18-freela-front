import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import { FlighDetailsContainer, FlightDetailsHeading, FlightDetailsInfo, FlightDetailsSubHeading } from "./styled"
import dayjs from "dayjs"
import { AppBody } from "../../Style/BodyStyle"

export default function FlightDetails() {
    const params = useParams()

    const [flight, setFlight] = useState([])
    console.log(flight)

    useEffect(() => {
        const request = axios.get(`https://viagensalucinantes-api.onrender.com/flight/${params.flightId}`)
        request.then(response => {
            setFlight(response.data)
        })
    }, [params.flightId])

    if (!flight) {
        return <h1>Carregando...</h1>
    }

    return (
        <AppBody>
            <Header goBack={true} />
            <FlighDetailsContainer>
                <FlightDetailsHeading>Passagens para {flight.destination}</FlightDetailsHeading>
                <FlightDetailsHeading>{dayjs(flight.departureTime).format("DD/MM/YYYY")}</FlightDetailsHeading>
                <FlightDetailsInfo>
                    <FlightDetailsSubHeading>Cidade de destino: {flight.destination}</FlightDetailsSubHeading>
                    <FlightDetailsSubHeading>Cidade de origem: {flight.origin}</FlightDetailsSubHeading>
                    <FlightDetailsSubHeading>Companhia aérea: {flight.name}</FlightDetailsSubHeading>
                    <FlightDetailsSubHeading>Horário de partida: {dayjs(flight.departureTime).format("HH:mm")}</FlightDetailsSubHeading>
                    <FlightDetailsSubHeading>Horário previsto para chegada: {dayjs(flight.arrivalTime).format("HH:mm")}</FlightDetailsSubHeading>
                    <FlightDetailsSubHeading>Preço da passagem: R$ {flight.price},00</FlightDetailsSubHeading>
                </FlightDetailsInfo>
            </FlighDetailsContainer>
        </AppBody>
    );
}