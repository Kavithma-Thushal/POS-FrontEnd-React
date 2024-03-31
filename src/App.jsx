import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CustomerPage from "./pages/CustomerPage";
import ItemPage from "./pages/ItemPage";
import OrdersPage from "./pages/OrdersPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import Navigation from "./components/Navigation";

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
                    <Route path="/orders" element={<OrdersPage />} />
                    <Route path="/orderdetails" element={<OrderDetailsPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
