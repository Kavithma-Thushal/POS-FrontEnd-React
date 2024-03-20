import React, { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = "http://localhost:8080/spring_pos/";

export function HomeController() {
    const [customerCount, setCustomerCount] = useState(0);
    const [itemCount, setItemCount] = useState(0);
    const [orderCount, setOrderCount] = useState(0);

    useEffect(() => {
        // Fetch customer count
        axios.get(baseUrl + "customer/CustomerCount")
            .then(response => {
                setCustomerCount(response.data.count);
            })
            .catch(error => {
                console.log("Customer Count Error: ", error);
            });

        // Fetch item count
        axios.get(baseUrl + "item/itemCount")
            .then(response => {
                setItemCount(response.data.count);
            })
            .catch(error => {
                console.log("Item Count Error: ", error);
            });

        // Fetch order count
        axios.get(baseUrl + "orders/ordersCount")
            .then(response => {
                setOrderCount(response.data.count);
            })
            .catch(error => {
                console.log("Orders Count Error: ", error);
            });
    }, []); // Empty dependency array to run only once on component mount

    return {
        customerCount,
        itemCount,
        orderCount
    };
};