import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { AccommodationsDetailsContainer, Description, Gallery, Title } from "./styled";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AccommodationsDetails() {
    const params = useParams();

    const [accommodation, setAccommodation] = useState([]);
    console.log(accommodation)

    useEffect(() => {
        const request = axios.get(`http://localhost:5000/accommodation/${params.accommodationId}`);
        request.then(response => {
            setAccommodation(response.data);
        });
    }, [params.accommodationId]);

    if (!accommodation) {
        return <h1>Carregando...</h1>
    }

    return (
        <>
            <Header />
            <AccommodationsDetailsContainer>
                <Title>{accommodation.name}</Title>
                <Gallery>
                    {accommodation.pictures.map(picture => <img src={picture.url} alt="" />)}
                </Gallery>
                <Description>
                    <ul>
                        <h1>Características</h1>
                        <li>Cidade: {accommodation.location}</li>
                        <li>Preço da diária: R$ {accommodation.pricePerDay},00</li>
                        {<li>Descrição: {accommodation.description}</li>}
                    </ul>
                    <ul>
                        <h1>Comodidades</h1>
                        {accommodation.conveniences.map(convenience => <li>{convenience.name}</li>)}
                    </ul>
                </Description>

            </AccommodationsDetailsContainer>
        </>
    )
}