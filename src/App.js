import React from "react";
import Home from "./routes/Home";
import Reservations from "./routes/Reservations";
import About1 from "./routes/About1";

import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/reservations" element = {<Reservations />}/>
        <Route path = "/about" element = {<About1 />}/>
      </Routes>
    </>
  );
}

export default App;
