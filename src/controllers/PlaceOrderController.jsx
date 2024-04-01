import axios from "axios";
import { useState, useEffect } from "react";
import { successAlert, errorAlert, emptyMessage } from '../util/Alert';

export function PlaceOrderController() {

    let baseUrl = "http://localhost:8080/spring_pos/";

    useEffect(() => {
        customerComboBox();
    }, []);

    const [customerCombo, setCustomerCombo] = useState([]);

    const customerComboBox = () => {
        axios.get(baseUrl + 'customer/loadAllCustomers')
            .then((resp) => {
                setCustomerCombo(resp.data.data);
            })
            .catch((error) => {
                errorAlert("Order", error.message);
            });
    };

    return {
        customerCombo
    };
}
