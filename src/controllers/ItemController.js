import axios from "axios";
import { useState, useEffect } from "react";
import { successAlert, errorAlert, emptyMessage } from '../util/Alert';

export function ItemController() {

    const baseUrl = "http://localhost:8080/spring_pos/";

    useEffect(() => {
        loadAllItems();
    }, []);

    const regExItemCode = /^(I00-)[0-9]{3}$/;
    const regExItemDescription = /^[A-z ]{3,20}$/;
    const regExItemQty = /^[0-9]{2,10}$/;
    const regExItemUnitPrice = /^[0-9]{1,}[.]?[0-9]{1}$/;

    const [itemData, setItemData] = useState({
        code: '',
        description: '',
        qty: '',
        unitPrice: ''
    });
    const [itemValidations, setItemValidations] = useState('');
    const [searchItemByCode, setSearchItemByCode] = useState('');
    const [allItems, setAllItems] = useState([]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        let errorMessage = '';

        switch (id) {
            case 'code':
                if (!regExItemCode.test(value)) {
                    errorMessage = 'Item code must match the pattern I00-001';
                }
                break;
            case 'description':
                if (!regExItemDescription.test(value)) {
                    errorMessage = 'Item description must be between 3-20 characters';
                }
                break;
            case 'qty':
                if (!regExItemQty.test(value)) {
                    errorMessage = 'Item quantity must have 2-10 digits';
                }
                break;
            case 'unitPrice':
                if (!regExItemUnitPrice.test(value)) {
                    errorMessage = 'Item price must have 2 digits with 2 decimal places';
                }
                break;
            default:
                break;
        }

        setItemValidations({ ...itemValidations, [id]: errorMessage });
        setItemData({ ...itemData, [id]: value });
    };

    const saveItem = () => {
        const isValidCode = regExItemCode.test(itemData.code);
        const isValidDescription = regExItemDescription.test(itemData.description);
        const isValidQty = regExItemQty.test(itemData.qty);
        const isValidUnitPrice = regExItemUnitPrice.test(itemData.unitPrice);

        if (isValidCode && isValidDescription && isValidQty && isValidUnitPrice) {
            axios.post(baseUrl + 'item', itemData)
                .then((resp) => {
                    successAlert("Item", resp.data.message);
                    loadAllItems();
                })
                .catch((error) => {
                    errorAlert("Item", error.message);
                });
        } else {
            errorAlert("All Details Required - ");
        }
    };

    const searchItem = () => {
        axios.get(baseUrl + 'item/searchItem/' + searchItemByCode)
            .then((resp) => {
                setAllItems([]);
                setAllItems([{
                    code: resp.data.code,
                    description: resp.data.description,
                    qty: resp.data.qty,
                    unitPrice: resp.data.unitPrice
                }]);
                clearInputFields();
            })
            .catch((error) => {
                emptyMessage(error.message);
                clearInputFields();
                loadAllItems();
            });
    };

    const updateItem = () => {
        axios.put(baseUrl + 'item', itemData)
            .then((resp) => {
                successAlert("Item", resp.data.message);
                loadAllItems();
            })
            .catch((error) => {
                errorAlert("Item", error.message);
            });
    };

    const deleteItem = () => {
        axios.delete(baseUrl + 'item/' + itemData.code)
            .then((resp) => {
                successAlert("Item", resp.data.message);
                loadAllItems();
            })
            .catch((error) => {
                errorAlert("Item", error.message);
            });
    };

    const loadAllItems = () => {
        axios.get(baseUrl + 'item/loadAllItems')
            .then((resp) => {
                setAllItems(resp.data.data);
                generateItemCode();
            })
            .catch((error) => {
                console.log("Load All Items Error : " + error);
            });
    };

    const generateItemCode = () => {
        axios.get(baseUrl + 'item/generateItemCode')
            .then((resp) => {
                let generatedId = resp.data.value;
                if (generatedId === null) {
                    setItemData({ ...itemData, code: "I00-001" });
                } else {
                    let tempId = parseInt(generatedId.split("-")[1]) + 1;
                    let newId = tempId <= 9 ? "I00-00" + tempId : tempId <= 99 ? "I00-0" + tempId : "I00-" + tempId;
                    setItemData({ ...itemData, code: newId });
                }
                setItemData(prevState => ({
                    ...prevState,
                    description: '',
                    qty: '',
                    unitPrice: ''
                }));
            })
            .catch((error) => {
                console.log("Generate Item Code Error : ", error);
            });
    };

    const tableListener = (code, description, qty, unitPrice) => {
        setItemData({ code, description, qty, unitPrice });
    };

    const clearInputFields = () => {
        generateItemCode();
        setItemData(prevState => ({
            ...prevState,
            description: '',
            qty: '',
            unitPrice: ''
        }));
        setSearchItemByCode('');
    }

    return {
        handleChange,
        itemValidations,
        itemData,
        saveItem,
        updateItem,
        deleteItem,

        searchItemByCode,
        setSearchItemByCode,
        searchItem,
        allItems,
        loadAllItems,
        tableListener,
        clearInputFields,
    };
}
