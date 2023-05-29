import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import { AccommodationsPageButton, Flights, FlightsPageContainer, FlightsPageContent, FlightsPageTitle } from "./styled"
import FlightCard from "../../components/FlightCard/FlightCard"
import dayjs from "dayjs"
import FlightsPagePanel from "../../components/FlightsPagePanel"
import { AppBody } from "../../Style/BodyStyle"
import ClientJourney from "../../components/ClientJourney"

export default function FlightsPage() {
    const params = useParams()

    const navigate = useNavigate()

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
        <AppBody>
            <Header />
            <FlightsPageContainer>
                <FlightsPagePanel
                    setFilteredFlights={setFilteredFlights}
                    filteredFlights={filteredFlights}
                    flights={flights}
                />
                <FlightsPageContent>
                    {city ? <FlightsPageTitle>Passagens para {city} </FlightsPageTitle> : <h1>Carregando...</h1>}
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
            <ClientJourney page={"flights"} cityId={params.cityId} />
        </AppBody>
    )
}