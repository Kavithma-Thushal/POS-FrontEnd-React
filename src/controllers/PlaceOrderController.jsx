import axios from "axios";
import { useState, useEffect } from "react";
import { successAlert, errorAlert, emptyMessage } from '../util/Alert';

export function PlaceOrderController() {

    let baseUrl = "http://localhost:8080/spring_pos/";

    useEffect(() => {
        customerComboBox();
        itemComboBox();
    }, []);

    const [customerCombo, setCustomerCombo] = useState([]);
    const [itemCombo, setItemCombo] = useState([]);

    const customerComboBox = () => {
        axios.get(baseUrl + 'customer/loadAllCustomers')
            .then((resp) => {
                setCustomerCombo(resp.data.data);
            })
            .catch((error) => {
                errorAlert("Order", error.message);
            });
    };

    const itemComboBox = () => {
        axios.get(baseUrl + 'item/loadAllItems')
            .then((resp) => {
                setItemCombo(resp.data.data);
            })
            .catch((error) => {
                errorAlert("Order", error.message);
            });
    };

    return {
        customerCombo,
        itemCombo
    };
}
