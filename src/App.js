import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FlightsPage from "./pages/FlightsPage";
import FlightDetails from "./pages/FlightDetails";
import AccommodationsPage from "./pages/AccommodationsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/flights/:cityId" element={<FlightsPage />} />
          <Route path="/flights/details/:flightId" element={<FlightDetails />} />
          <Route path="/accommodations/:cityId" element={<AccommodationsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
