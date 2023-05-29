import { useNavigate, useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import { Accommodations, AccommodationsPageContainer, AccommodationsPageContent, AccommodationsPageTitle, FlightsPageButton } from "./styled"
import { useEffect, useState } from "react"
import axios from "axios"
import AccommodationsCard from "../../components/AccommodationsCard"
import AccommodationsPagePanel from "../../components/AccommodationsPagePanel"
import { AppBody } from "../../Style/BodyStyle"
import { AccommodationsPageButton } from "../FlightsPage/styled"
import ClientJourney from "../../components/ClientJourney"

export default function AccommodationsPage() {
    const params = useParams()

    const navigate = useNavigate()

    const [accommodations, setAccommodations] = useState([])
    const [filteredAccommodations, setFilteredAccommodations] = useState("")
    console.log(accommodations)
    const [city, setCity] = useState("")


    useEffect(() => {
        const requestAccommodations = axios.get(`http://localhost:5000/accommodations/${params.cityId}`)
        requestAccommodations.then(response => {
            setAccommodations(response.data)
            setFilteredAccommodations(response.data)
        })
        const requestCity = axios.get(`http://localhost:5000/city/${params.cityId}`)
        requestCity.then(response => {
            setCity(response.data.name)
        })
    }, [params.cityId])

    return (
        <AppBody>
            <Header />
            <AccommodationsPageContainer>
                <AccommodationsPagePanel
                    setFilteredAccommodations={setFilteredAccommodations}
                    filteredAccommodations={filteredAccommodations}
                    accommodations={accommodations}
                />
                <AccommodationsPageContent>
                    {city ? <AccommodationsPageTitle>Hospedagens em {city} </AccommodationsPageTitle> : <h1>Carregando...</h1>}
                    <Accommodations>
                        {filteredAccommodations ? filteredAccommodations.map(accommodation => <AccommodationsCard
                            key={accommodation.id}
                            id={accommodation.id}
                            name={accommodation.name}
                            pricePerDay={accommodation.pricePerDay}
                            picture={accommodation.picture} />) : <h1>Carregando...</h1>}

                    </Accommodations>
                </AccommodationsPageContent>
            </AccommodationsPageContainer>
            <ClientJourney page={"accommodations"} cityId={params.cityId} />
        </AppBody>
    )
}