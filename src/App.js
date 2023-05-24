import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Header />
      <PagesContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </PagesContainer>
    </>
  );
}

export default App;

const PagesContainer = styled.main`
  width: 100vw;
  height: calc(100vh - 70px);
  margin-top: 70px;
  background-color: #f2f2f2;
`