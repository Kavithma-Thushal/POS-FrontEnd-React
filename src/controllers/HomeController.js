import { useState, useEffect } from 'react';
import axios from 'axios';

export function HomeController() {

    const [customerCount, setCustomerCount] = useState(0);
    const [itemCount, setItemCount] = useState(0);
    const [orderCount, setOrderCount] = useState(0);

    useEffect(() => {

        axios.get('customer/customerCount')
            .then(response => {
                setCustomerCount(response.data.count);
            })
            .catch(error => {
                console.log("Customer Count Error: ", error);
            });

        axios.get('item/itemCount')
            .then(response => {
                setItemCount(response.data.count);
            })
            .catch(error => {
                console.log("Item Count Error: ", error);
            });

        axios.get('orders/ordersCount')
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
