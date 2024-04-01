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
    const [customerDetails, setCustomerDetails] = useState(null);

    const customerComboBox = () => {
        axios.get(baseUrl + 'customer/loadAllCustomers')
            .then((resp) => {
                setCustomerCombo(resp.data.data);
            })
            .catch((error) => {
                errorAlert("Order", error.message);
            });
    };

    const handleCustomerCombo = (customerId) => {
        const selected = customerCombo.find(customer => customer.id === customerId);
        setCustomerDetails(selected);
    };

    const [itemCombo, setItemCombo] = useState([]);
    const [itemDetails, setItemDetails] = useState(null);


    const itemComboBox = () => {
        axios.get(baseUrl + 'item/loadAllItems')
            .then((resp) => {
                setItemCombo(resp.data.data);
            })
            .catch((error) => {
                errorAlert("Order", error.message);
            });
    };

    const handleItemCombo = (itemCode) => {
        const selected = itemCombo.find(item => item.code === itemCode);
        setItemDetails(selected);
    };

    return {
        customerCombo,
        customerDetails,
        handleCustomerCombo,

        itemCombo,
        itemDetails,
        handleItemCombo
    };
}
