import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function FlightsPage() {
    const params = useParams()

    const [flights, setFlights] = useState([])
    console.log(flights)

    useEffect(() => {
        const request = axios.get(`http://localhost:5000/flights/${params.cityId}`)
        request.then(response => {
            setFlights(response.data)
        })
    }, [])

    return (
        <div>
            <h1>Flights</h1>
        </div>
    )
}