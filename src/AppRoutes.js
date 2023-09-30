import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Favorites from './Pages/favorite'
import NotFoundPage from "./Pages/NotFoundPage";

import ProDetails from "./Pages/ProDetails";
function AppRoutes() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProDetails />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/favorites" component={<Favorites/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
