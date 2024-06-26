import axios from "axios";
import { useState, useEffect } from "react";
import { successAlert, errorAlert, emptyMessage } from '../util/Alert';

export function CustomerController() {

    useEffect(() => {
        loadAllCustomers();
    }, []);

    const regExCusId = /^(C00-)[0-9]{3}$/;
    const regExCusName = /^[A-z ]{3,20}$/;
    const regExCusAddress = /^[A-Za-z0-9/, -]{4,30}$/;
    const regExCusSalary = /^[0-9]{1,}[.]?[0-9]{2}$/;

    const [customerData, setCustomerData] = useState({
        id: '',
        name: '',
        address: '',
        salary: ''
    });
    const [cusValidations, setCusValidations] = useState('');
    const [searchCusById, setSearchCusById] = useState('');
    const [allCustomers, setAllCustomers] = useState([]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        let errorMessage = '';

        switch (id) {
            case 'id':
                if (!regExCusId.test(value)) {
                    errorMessage = 'Customer id must match the pattern C00-001';
                }
                break;
            case 'name':
                if (!regExCusName.test(value)) {
                    errorMessage = 'Customer name must be between 3-20 characters';
                }
                break;
            case 'address':
                if (!regExCusAddress.test(value)) {
                    errorMessage = 'Customer address must be between 4-30 characters';
                }
                break;
            case 'salary':
                if (!regExCusSalary.test(value)) {
                    errorMessage = 'Customer salary must have 3 digits with 2 decimal places';
                }
                break;
            default:
                break;
        }

        setCusValidations({ ...cusValidations, [id]: errorMessage });
        setCustomerData({ ...customerData, [id]: value });
    };

    const saveCustomer = () => {
        const isValidId = regExCusId.test(customerData.id);
        const isValidName = regExCusName.test(customerData.name);
        const isValidAddress = regExCusAddress.test(customerData.address);
        const isValidSalary = regExCusSalary.test(customerData.salary);

        if (isValidId && isValidName && isValidAddress && isValidSalary) {
            axios.post('customer', customerData)
                .then((resp) => {
                    successAlert("Customer", resp.data.message);
                    loadAllCustomers();
                })
                .catch((error) => {
                    errorAlert("Customer", error.message);
                });
        } else {
            errorAlert("All Details Required - ");
        }
    };

    const searchCustomer = () => {
        axios.get('customer/searchCustomer/' + searchCusById)
            .then((resp) => {
                setAllCustomers([]);
                setAllCustomers([{
                    id: resp.data.id,
                    name: resp.data.name,
                    address: resp.data.address,
                    salary: resp.data.salary
                }]);
                clearInputFields();
            })
            .catch((error) => {
                emptyMessage(error.message);
                clearInputFields();
                loadAllCustomers();
            });
    };

    const updateCustomer = () => {
        axios.put('customer', customerData)
            .then((resp) => {
                successAlert("Customer", resp.data.message);
                loadAllCustomers();
            })
            .catch((error) => {
                errorAlert("Customer", error.message);
            });
    };

    const deleteCustomer = () => {
        axios.delete('customer/' + customerData.id)
            .then((resp) => {
                successAlert("Customer", resp.data.message);
                loadAllCustomers();
            })
            .catch((error) => {
                errorAlert("Customer", error.message);
            });
    };

    const loadAllCustomers = () => {
        axios.get('customer/loadAllCustomers')
            .then((resp) => {
                setAllCustomers(resp.data.data);
                generateCustomerId();
            })
            .catch((error) => {
                console.log("Load All Customers Error : " + error);
            });
    };

    const generateCustomerId = () => {
        axios.get('customer/generateCustomerId')
            .then((resp) => {
                let generatedId = resp.data.value;
                if (generatedId === null) {
                    setCustomerData({ ...customerData, id: "C00-001" });
                } else {
                    let tempId = parseInt(generatedId.split("-")[1]) + 1;
                    let newId = tempId <= 9 ? "C00-00" + tempId : tempId <= 99 ? "C00-0" + tempId : "C00-" + tempId;
                    setCustomerData({ ...customerData, id: newId });
                }
                setCustomerData(prevState => ({
                    ...prevState,
                    name: '',
                    address: '',
                    salary: ''
                }));
            })
            .catch((error) => {
                console.log("Generate Customer Id Error : ", error);
            });
    };

    const tableListener = (id, name, address, salary) => {
        setCustomerData({ id, name, address, salary });
    };

    const clearInputFields = () => {
        generateCustomerId();
        setCustomerData(prevState => ({
            ...prevState,
            name: '',
            address: '',
            salary: ''
        }));
        setSearchCusById('');
    }

    return {
        handleChange,
        cusValidations,
        customerData,
        saveCustomer,
        updateCustomer,
        deleteCustomer,

        searchCusById,
        setSearchCusById,
        searchCustomer,
        allCustomers,
        loadAllCustomers,
        tableListener,
        clearInputFields,
    };
}
