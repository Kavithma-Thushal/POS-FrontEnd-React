import { useState, useEffect } from 'react';
import axios from 'axios';

export function HomeController() {

    const baseUrl = "http://localhost:8080/spring_pos/";

    const [customerCount, setCustomerCount] = useState(0);
    const [itemCount, setItemCount] = useState(0);
    const [orderCount, setOrderCount] = useState(0);

    useEffect(() => {

        axios.get(baseUrl + "customer/CustomerCount")
            .then(response => {
                setCustomerCount(response.data.count);
            })
            .catch(error => {
                console.log("Customer Count Error: ", error);
            });

        axios.get(baseUrl + "item/itemCount")
            .then(response => {
                setItemCount(response.data.count);
            })
            .catch(error => {
                console.log("Item Count Error: ", error);
            });

        axios.get(baseUrl + "orders/ordersCount")
            .then(response => {
                setOrderCount(response.data.count);
            })
            .catch(error => {
                console.log("Orders Count Error: ", error);
            });
    }, []);

    return {
        customerCount,
        itemCount,
        orderCount
    };
};
