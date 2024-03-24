import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeUI from "./UI/HomeUI";
import CustomerUI from "./UI/CustomerUI";
import ItemUI from "./UI/ItemUI";
import OrdersUI from "./UI/OrdersUI";
import OrderDetailsUI from "./UI/OrderDetailsUI";
import Navigation from "./components/Navigation";

export default function App() {
    return (
        <div>
            <Navigation />
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<HomeUI />} />
                    <Route path="/home" element={<HomeUI />} />
                    <Route path="/customers" element={<CustomerUI />} />
                    <Route path="/items" element={<ItemUI />} />
                    <Route path="/orders" element={<OrdersUI />} />
                    <Route path="/orderdetails" element={<OrderDetailsUI />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
