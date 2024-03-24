import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./UI/HomeUI";
import CustomerView from "./UI/CustomerUI";
import ItemView from "./UI/ItemUI";
import OrdersView from "./UI/OrdersUI";
import OrderDetailsView from "./UI/OrderDetailsUI";
import Navigation from "./components/Navigation";

export default function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/home" element={<HomeView />} />
                <Route path="/customers" element={<CustomerView />} />
                <Route path="/items" element={<ItemView />} />
                <Route path="/orders" element={<OrdersView />} />
                <Route path="/orderdetails" element={<OrderDetailsView />} />
            </Routes>
        </BrowserRouter>
    );
}
