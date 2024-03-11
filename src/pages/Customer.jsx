import axios from 'axios';
import React, {useState} from 'react';
import {Container, Form, Button} from 'react-bootstrap';

function Customer() {
    const [customerData, setCustomerData] = useState({
        id: "",
        name: "",
        address: "",
        salary: ""
    });

    const handleChange = (e) => {
        setCustomerData({
            ...customerData,
            [e.target.id]: e.target.value
        });
    };

    const updateCustomer = () => {
        axios.put('http://localhost:8080/javaee_pos/customer', customerData)
            .then((resp) => {
                alert("Customer Updated Successfully...!");
            })
            .catch((error) => {
                alert("Customer Updated Error...!");
            });
    };

    return (
        <Container>
            <h1 className="m-4">Customer Management</h1>
            <Form>
                <Form.Group controlId="id">
                    <Form.Control className="mb-2" type="text" placeholder="Customer ID" value={customerData.id}
                                  onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="name">
                    <Form.Control className="mb-2" type="text" placeholder="Customer Name" value={customerData.name}
                                  onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="address">
                    <Form.Control className="mb-2" type="text" placeholder="Customer Address"
                                  value={customerData.address}
                                  onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="salary">
                    <Form.Control className="mb-2" type="text" placeholder="Customer Salary" value={customerData.salary}
                                  onChange={handleChange}/>
                </Form.Group>

                <Button id="btnSaveCustomer" className={"m-1"} variant="primary" type="button">Save</Button>
                <Button id="btnUpdateCustomer" className={"m-1"} variant="warning" type="button"
                        onClick={updateCustomer}>Update</Button>
                <Button id="btndeleteCustomer" className={"m-1"} variant="danger" type="button">Delete</Button>
                <Button id="btnGetAllCustomers" className={"m-1"} variant="success" type="button">Get All</Button>
            </Form>
        </Container>
    );
}

export default Customer;