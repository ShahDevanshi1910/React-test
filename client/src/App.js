// import logo from './logo.svg';
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
