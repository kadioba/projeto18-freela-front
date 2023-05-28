import { useState } from "react"
import { AccommodationsPagePanelContainer } from "./styled"

export default function AccommodationsPagePanel(props) {
    const prices = props.accommodations.map(accommodation => accommodation.pricePerDay)
    const minPrice = Math.min(...prices)
    const maxPrice = Math.max(...prices)

    const [minPriceSelected, setMinPriceSelected] = useState("")
    const [maxPriceSelected, setMaxPriceSelected] = useState("")

    function handleMinPriceSelected(event) {
        setMinPriceSelected(event.target.value)
        const newFilteredAccommodations = props.accommodations.filter(accommodation => accommodation.pricePerDay >= event.target.value)
        props.setFilteredAccommodations(newFilteredAccommodations)
    }

    function handleMaxPriceSelected(event) {
        setMaxPriceSelected(event.target.value)
        const newFilteredAccommodations = props.accommodations.filter(accommodation => accommodation.pricePerDay <= event.target.value)
        props.setFilteredAccommodations(newFilteredAccommodations)
    }

    return (
        <AccommodationsPagePanelContainer>
            <div>
                <h1>Preço Mínimo{minPriceSelected ? `: R$${minPriceSelected},00` : ""} </h1>
                <input type="range" min={minPrice} max={maxPrice} onChange={handleMinPriceSelected} />
            </div>
            <div>
                <h1>Preço Máximo{maxPriceSelected ? `: R$${maxPriceSelected},00` : ""} </h1>
                <input type="range" min={minPrice} max={maxPrice} onChange={handleMaxPriceSelected} />
            </div>
        </AccommodationsPagePanelContainer>
    )
}