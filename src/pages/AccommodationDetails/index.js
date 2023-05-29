import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { AccommodationsDetailsContainer, Description, Gallery, Title } from "./styled";
import { useEffect, useState } from "react";
import axios from "axios";
import { AppBody } from "../../Style/BodyStyle";

export default function AccommodationsDetails() {
    const params = useParams();

    const [accommodation, setAccommodation] = useState([]);
    const [pictures, setPictures] = useState([]);
    const [conveniences, setConveniences] = useState([]);
    console.log(accommodation)

    useEffect(() => {
        const request = axios.get(`http://localhost:5000/accommodation/${params.accommodationId}`);
        request.then(response => {
            setAccommodation(response.data);
            setPictures(response.data.pictures);
            setConveniences(response.data.conveniences);

        });
    }, [params.accommodationId]);

    if (!accommodation) {
        return <h1>Carregando...</h1>
    }

    return (
        <AppBody>
            <Header goBack={true} />
            <AccommodationsDetailsContainer>
                <Title>{accommodation.name}</Title>
                <Gallery>
                    {pictures.map(picture => <img src={picture.url} alt="" />)}
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
                        {conveniences.map(convenience => <li>{convenience.name}</li>)}
                    </ul>
                </Description>

            </AccommodationsDetailsContainer>
        </AppBody>
    )
}