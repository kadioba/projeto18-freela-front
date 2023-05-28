import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import { Flights, FlightsPageContainer, FlightsPageContent } from "./styled"
import FlightCard from "../../components/FlightCard/FlightCard"
import dayjs from "dayjs"
import FlightsPagePanel from "../../components/FlightsPagePanel"

export default function FlightsPage() {
    const params = useParams()

    const [flights, setFlights] = useState([])
    const [filteredFlights, setFilteredFlights] = useState("")
    const [city, setCity] = useState("")
    console.log(flights)

    useEffect(() => {
        const requestFlights = axios.get(`http://localhost:5000/flights/${params.cityId}`)
        requestFlights.then(response => {
            setFlights(response.data)
            setFilteredFlights(response.data)
        })
        const requestCity = axios.get(`http://localhost:5000/city/${params.cityId}`)
        requestCity.then(response => {
            setCity(response.data.name)
        })

    }, [params.cityId])

    return (
        <>
            <Header />
            <FlightsPageContainer>
                <FlightsPagePanel
                    setFilteredFlights={setFilteredFlights}
                    filteredFlights={filteredFlights}
                    flights={flights}
                />
                <FlightsPageContent>
                    {city ? <h1>Passagens para {city} </h1> : <h1>Carregando...</h1>}
                    <Flights>
                        {filteredFlights ? filteredFlights.map(flight => <FlightCard
                            key={flight.id}
                            id={flight.id}
                            departureTime={dayjs(flight.departureTime).format("DD/MM/YYYY HH:mm")}
                            price={`R$ ${flight.price},00`}
                            origin={flight.origin}
                            picture={flight.picture} />) : <h1>Carregando...</h1>}
                    </Flights>
                </FlightsPageContent>
            </FlightsPageContainer>
        </>
    )
}