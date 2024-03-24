import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import CustomerView from "./views/CustomerView";
import ItemView from "./views/ItemView";
import OrdersView from "./views/OrdersView";
import OrderDetailsView from "./views/OrderDetailsView";
import Navigation from "./components/Navigation";

export default function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/home" element={<HomeView />} />
                <Route path="/customer" element={<CustomerView />} />
                <Route path="/item" element={<ItemView />} />
                <Route path="/orders" element={<OrdersView />} />
                <Route path="/orderview" element={<OrderDetailsView />} />
            </Routes>
        </BrowserRouter>
    );
}
