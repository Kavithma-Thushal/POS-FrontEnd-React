import axios from "axios";
import { useState, useEffect } from "react";
import { successAlert, errorAlert, emptyMessage } from '../util/Alert';

export function PlaceOrderController() {

    const baseUrl = "http://localhost:8080/spring_pos/";

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
                console.log("Order", error.message);
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
                console.log("Order", error.message);
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

    const [disableAddToCart, setDisableAddToCrt] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [buyQty, setBuyQty] = useState('');
    const [emptyStockError, setEmptyStockError] = useState('');

    useEffect(() => {
        setDisableAddToCrt(buyQty <= 0);
    }, [buyQty]);

    const handleAddToCart = (e) => {
        // Check if itemDetails is not null and buyQty is greater than 0
        if (itemDetails && buyQty > 0) {
            const buyOnHand = itemDetails.qty - buyQty;
            // Check if the item is out of stock
            if (buyOnHand < 0) {
                setEmptyStockError("Empty Stock");
            } else {
                addToCart(itemDetails.code, itemDetails.description, itemDetails.unitPrice, buyQty);
            }
            setBuyQty('');
            setItemDetails('');
        }
    };

    //Add To Cart
    const [total, setTotal] = useState(0);
    const addToCart = (itemCode, itemDescription, itemUnitPrice, itemBuyQty) => {
        const total = itemUnitPrice * itemBuyQty;
        const newItem = {
            itemCode,
            itemDescription,
            itemUnitPrice,
            itemBuyQty,
            total
        };
        setCartItems(prevItems => [...prevItems, newItem]);
    };

    // Calculate total whenever cart Items changes
    useEffect(() => {
        const newTotal = cartItems.reduce((acc, item) => acc + (item.itemUnitPrice * item.itemBuyQty), 0);
        setTotal(newTotal);
    }, [cartItems]);

    const [discount, setDiscount] = useState('');
    const [subTotal, setSubTotal] = useState('');

    useEffect(() => {
        handleSubTotal();
    }, [discount]);

    // Discount Added
    const handleSubTotal = () => {
        const subtotal = total - ((total * discount) / 100);
        setSubTotal(subtotal);
    };

    // Cash Entered & Get Balance
    const [cash, setCash] = useState('');
    const [balance, setBalance] = useState(0);
    const [invalidCashError, setInvalidCashError] = useState('');
    const [disableBtnPurchase, setDisableBtnPurchase] = useState(true);

    const handleCash = (e) => {
        const enteredCash = parseFloat(e.target.value);
        setCash(enteredCash);
        calculateBalance(enteredCash);
    };

    const calculateBalance = (enteredCash) => {
        const newBalance = enteredCash - subTotal;
        setBalance(newBalance);
        if (newBalance >= 0) {
            setDisableBtnPurchase(false);
            setInvalidCashError('');
        } else {
            setDisableBtnPurchase(true);
            setInvalidCashError("Invalid Cash");
        }
    };

    const btnClearAll = () => {
        setCustomerDetails('');
        setItemDetails('');
        setOrderDate('');
        setDisableAddToCrt(true);
        setBuyQty('');
        setTotal(0);
        setDiscount(0);
        setSubTotal(0);
        setCash('');
        setBalance(0);
        setDisableBtnPurchase(true);
        setCartItems([]);
    }

    return {
        orderDate,
        setOrderDate,
        generatedId,

        customerCombo,
        customerDetails,
        handleCustomerCombo,

        itemCombo,
        itemDetails,
        handleItemCombo,

        buyQty,
        setBuyQty,
        cartItems,
        emptyStockError,
        disableAddToCart,
        handleAddToCart,

        total,
        setDiscount,
        subTotal,

        cash,
        balance,
        handleCash,
        invalidCashError,
        disableBtnPurchase,

        btnClearAll
    };
}
