import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Customer from "./pages/Customer";
import Item from "./pages/Item";
import Orders from "./pages/Orders";
import OrderView from "./pages/OrderView";
import NavBar from "./components/NavBar";

function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/customer" element={<Customer/>}/>
                    <Route path="/item" element={<Item/>}/>
                    <Route path="/orders" element={<Orders/>}/>
                    <Route path="/orderview" element={<OrderView/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;