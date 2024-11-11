import Home from "./pages/Home";
import "./app.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HotelList from './pages/HotelList'
import Hotel from "./pages/Hotel";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotelsList" element={<HotelList />} />
          <Route path="/hotels/:Id" element={<Hotel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
