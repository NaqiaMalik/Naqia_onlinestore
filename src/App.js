import "./App.css";
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/order" element={<Order />} />
            </Routes>
        </div>
    );
}

export default App;
