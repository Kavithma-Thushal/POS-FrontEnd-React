import axios from "axios";
import { useState, useEffect } from "react";
import { successAlert, errorAlert, emptyMessage } from '../util/Alert';

export function PlaceOrderController() {

    let baseUrl = "http://localhost:8080/spring_pos/";

    const customerDetails = () => {
        console.log("Customer Details");
    }

    const itemDetails = () => {
        console.log("Item Details");
    }

    return {
        customerDetails,
        itemDetails
    };
}