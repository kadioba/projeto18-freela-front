import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import { FlighDetailsContainer } from "./styled"
import dayjs from "dayjs"

export default function FlightDetails() {
    const params = useParams()

    const [flight, setFlight] = useState([])
    console.log(flight)

    useEffect(() => {
        const request = axios.get(`http://localhost:5000/flight/${params.flightId}`)
        request.then(response => {
            setFlight(response.data)
        })
    }, [params.flightId])

    if (!flight) {
        return <h1>Carregando...</h1>
    }

    return (
        <>
            <Header goBack={true} />
            <FlighDetailsContainer>
                <h1>Passagens para {flight.destination}</h1>
                <h1>{dayjs(flight.departureTime).format("DD/MM/YYYY")}</h1>
                <div>
                    <h2>Cidade de destino: {flight.destination}</h2>
                    <h2>Cidade de origem: {flight.origin}</h2>
                    <h2>Companhia aérea: {flight.name}</h2>
                    <h2>Horário de partida: {dayjs(flight.departureTime).format("HH:mm")}</h2>
                    <h2>Horário previsto para chegada: {dayjs(flight.arrivalTime).format("HH:mm")}</h2>
                    <h2>Preço da passagem: R$ {flight.price},00</h2>
                </div>
            </FlighDetailsContainer>
        </>
    )
}