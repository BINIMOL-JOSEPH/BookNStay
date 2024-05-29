import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import BodyContent from "./components/Content/Content";
import Hotels from "./components/HotelsPage/HotelsPage";
import HotelDetails from "./components/HotelDetails/HotelDetails";
import RoomDetails from "./components/RoomDetails/RoomDetails";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BodyContent />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotel_room/:id" element={<HotelDetails />} />
        <Route path="/room_details/:room_id" element={<RoomDetails />} />
        <Route path="/not" element={<NotFound />} />
      </Routes>
    </Router>    
  );
}

export default App;
