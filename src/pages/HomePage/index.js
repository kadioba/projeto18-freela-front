import { useEffect, useState } from "react";
import Header from "../../components/Header/Header"
import { DestinationDropdown, HomepageContainer } from "./styled";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppBody } from "../../Style/BodyStyle";
import ClientJourney from "../../components/ClientJourney";

export default function HomePage() {

    const [cities, setCities] = useState([])
    console.log(cities)

    const navigate = useNavigate()

    useEffect(() => {
        const request = axios.get(`https://viagensalucinantes-api.onrender.com/cities`)
        request.then(response => {
            setCities(response.data)
        })
    }, [])

    function handleDestination(event) {
        navigate(`/flights/${event.target.value}`)
        console.log(event.target.value)
    }

    return (
        <AppBody background={"https://wallpaperaccess.com/full/488392.jpg"}>
            <Header />
            <HomepageContainer>
                <DestinationDropdown onChange={handleDestination}>
                    <option value=""> Selecione a cidade de destino </option>
                    {cities ? cities.map(city => <option value={city.id}>{city.name}</option>) : <option>Carregando...</option>}
                </DestinationDropdown>
            </HomepageContainer>
            <ClientJourney page={"home"} />
        </AppBody>
    );
}

