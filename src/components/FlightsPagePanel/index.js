import { useState } from "react";
import { FlightsPagePanelContainer } from "./styled";

export default function FlightsPagePanel(props) {
    const prices = props.flights.map(flight => flight.price)
    const minPrice = Math.min(...prices)
    const maxPrice = Math.max(...prices)

    const [minPriceSelected, setMinPriceSelected] = useState("")
    const [maxPriceSelected, setMaxPriceSelected] = useState("")

    function handleMinPriceSelected(event) {
        setMinPriceSelected(event.target.value)
        const newFilteredFlights = props.flights.filter(flight => flight.price >= event.target.value)
        props.setFilteredFlights(newFilteredFlights)
    }

    function handleMaxPriceSelected(event) {
        setMaxPriceSelected(event.target.value)
        const newFilteredFlights = props.flights.filter(flight => flight.price <= event.target.value)
        props.setFilteredFlights(newFilteredFlights)
    }

    return (
        <FlightsPagePanelContainer>
            <div>
                <h1>Preço Mínimo{minPriceSelected ? `: R$${minPriceSelected},00` : ""} </h1>
                <input type="range" min={minPrice} max={maxPrice} onChange={handleMinPriceSelected} />
            </div>
            <div>
                <h1>Preço Máximo{maxPriceSelected ? `: R$${maxPriceSelected},00` : ""} </h1>
                <input type="range" min={minPrice} max={maxPrice} onChange={handleMaxPriceSelected} />
            </div>
        </FlightsPagePanelContainer>
    )
}