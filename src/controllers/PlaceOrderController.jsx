import axios from "axios";
import { useState, useEffect } from "react";
import { successAlert, errorAlert, emptyMessage } from '../util/Alert';

export function PlaceOrderController() {

    let baseUrl = "http://localhost:8080/spring_pos/";

    useEffect(() => {
        setDate();
        generateOrderId();
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

    const [generatedId, setGeneratedId] = useState('');
    const generateOrderId = () => {
        const baseUrl = "http://localhost:8080/spring_pos/";
        axios.get(baseUrl + 'orders/generateOrderId')
            .then((resp) => {
                console.log("Success");
                let generatedId = resp.data.value;
                if (generatedId === null) {
                    setGeneratedId("ODI-001");
                } else {
                    let tempId = parseInt(generatedId.split("-")[1]) + 1;
                    let newId = tempId <= 9 ? "ODI-00" + tempId : tempId <= 99 ? "ODI-0" + tempId : "ODI-" + tempId;
                    setGeneratedId(newId);
                }
            })
            .catch((error) => {
                console.log("Generate Order Id Error : ", error);
            });
    };

    const [orderDate, setOrderDate] = useState('');
    const setDate = () => {
        let date = new Date();
        let day = ("0" + date.getDate()).slice(-2);
        let month = ("0" + (date.getMonth() + 1)).slice(-2);
        let today = date.getFullYear() + "-" + month + "-" + day;
        setOrderDate(today);
    };

    return {
        orderDate,
        setOrderDate,
        generatedId,

        customerCombo,
        customerDetails,
        handleCustomerCombo,

        itemCombo,
        itemDetails,
        handleItemCombo
    };
}
