import axios from 'axios';
import { useState, useEffect } from "react";

export function OrderDetailsController() {

    const baseUrl = "http://localhost:8080/spring_pos/";

    useEffect(() => {
        loadOrders();
        loadOrderDetails();
    }, []);

    const [orders, setOrders] = useState([]);
    const loadOrders = () => {
        axios.get(baseUrl + "orders/loadOrders")
            .then(resp => {
                setOrders(resp.data.data);
            })
            .catch(error => {
                console.error("Load All Orders Error:", error);
            });
    }

    const [orderDetails, setOrderDetails] = useState([]);
    const loadOrderDetails = () => {
        axios.get(baseUrl + "orders/loadOrderDetails")
            .then(resp => {
                setOrderDetails(resp.data.data);
            })
            .catch(error => {
                console.error("Load All OrderDetails Error:", error);
            });
    }

    return {
        orders,
        orderDetails
    };
}
