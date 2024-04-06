import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CustomerPage from "./pages/CustomerPage";
import ItemPage from "./pages/ItemPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import Navigation from "./components/Navigation";

axios.defaults.baseURL = 'http://localhost:8080/spring_pos/';

export default function App() {
    return (
        <div>
            <Navigation />
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/customers" element={<CustomerPage />} />
                    <Route path="/items" element={<ItemPage />} />
                    <Route path="/placeOrder" element={<PlaceOrderPage />} />
                    <Route path="/orderDetails" element={<OrderDetailsPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
