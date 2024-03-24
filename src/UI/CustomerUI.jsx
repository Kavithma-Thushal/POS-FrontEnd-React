import { Container, Form, Button, Table, Row, Col } from 'react-bootstrap';
import { CustomerController } from '../controllers/CustomerController';

export default function CustomerView() {
    const { customerData, handleChange, saveCustomer, updateCustomer, deleteCustomer, searchCusById, setSearchCusById, searchCustomer, allCustomers, loadAllCustomers, generateCustomerId } = CustomerController();
    return (
        <main className="container-fluid" id="CustomerSection">
            <Container className="d-flex flex-grow-1 flex-column">
                <div className="position-relative d-inline-block mt-3 mt-lg-4 mt-md-4">
                    <h2 id="H1-3"><i className="bi bi-people-fill"></i> Customer Management</h2>
                </div>
            </Container>
            <Container className="d-flex flex-grow-1 flex-column sectionBorder mb-5 mt-2" style={{ backgroundColor: '#f0f0f0' }}>
                <Row className="justify-content-around" style={{ height: 'max-content' }}>
                    {/* Customer Search */}
                    <Col xs={10} md={6} lg={5} className="p-0 mt-5 sectionBorder" style={{ backgroundColor: 'white', height: 'max-content' }}>
                        <Row className="mb-3 ms-3 me-3 mt-3">
                            <Form.Label className="fw-bold">Search Customer</Form.Label>
                            <div className="input-group">
                                <Form.Control className="me-3 mt-2 rounded-2 w-50" id="txtSearchCusId" type="search" placeholder="Input Customer ID" value={searchCusById} onChange={(e) => setSearchCusById(e.target.value)} />
                                <Button variant="secondary" className="mt-2 rounded-2 w-25" id="btnSearchCustomer" type="button" onClick={searchCustomer}>Search</Button>
                            </div>
                            <Button variant="success" className="mt-3 ms-3 rounded-2 w-25" id="btnGetAllCustomers" type="button" onClick={loadAllCustomers}>Get All</Button>
                        </Row>
                    </Col>

                    {/* Customer Form */}
                    <Col xs={10} md={5} lg={4} className="p-0 mt-5 mb-4 sectionBorder" style={{ backgroundColor: 'white' }}>
                        <Form id="customerForm">
                            <Form.Group className="m-3" controlId="id">
                                <Form.Label className="fw-bold">Customer ID</Form.Label>
                                <Form.Control className="form-control" type="text" value={customerData.id} onChange={handleChange} />
                                <span className="control-error"></span>
                            </Form.Group>
                            <Form.Group className="m-3" controlId="name">
                                <Form.Label className="fw-bold">Customer Name</Form.Label>
                                <Form.Control className="form-control" type="text" value={customerData.name} onChange={handleChange} />
                                <span className="control-error"></span>
                            </Form.Group>
                            <Form.Group className="m-3" controlId="address">
                                <Form.Label className="fw-bold">Customer Address</Form.Label>
                                <Form.Control className="form-control" type="text" value={customerData.address} onChange={handleChange} />
                                <span className="control-error"></span>
                            </Form.Group>
                            <Form.Group className="m-3" controlId="salary">
                                <Form.Label className="fw-bold">Customer Salary</Form.Label>
                                <Form.Control className="form-control" type="text" value={customerData.salary} onChange={handleChange} />
                                <span className="control-error"></span>
                            </Form.Group>
                            <div className="m-4 text-center">
                                <Button variant="primary" className="mt-2 m-2 w-25" id="btnSaveCustomer" type="button" onClick={saveCustomer}>Save</Button>
                                <Button variant="warning" className="mt-2 m-2 w-25" id="btnUpdateCustomer" type="button" onClick={updateCustomer}>Update</Button>
                                <Button variant="danger" className="mt-2 m-2 w-25" id="btnDeleteCustomer" type="button" onClick={deleteCustomer}>Delete</Button>
                                <Button variant="secondary" className="mt-2 m-2 w-25" id="btnClearAllCustomer" type="button" onClick={generateCustomerId}>Clear All</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>

                <Row className="mt-5 mb-5 mt-md-2 mt-lg-4 justify-content-around">
                    {/* Customer Table */}
                    <Col xs={11} className="justify-content-around sectionBorder" style={{ background: 'white' }}>
                        <div className="customerTableDiv">
                            <Table bordered hover className="mt-3">
                                <thead className="text-light table-dark text-center table-bordered">
                                    <tr>
                                        <th className="w-25">Customer ID</th>
                                        <th className="w-25">Customer Name</th>
                                        <th className="w-25">Customer Address</th>
                                        <th className="w-25">Customer Salary</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allCustomers.map(customer => (
                                        <tr key={customer.id}>
                                            <td>{customer.id}</td>
                                            <td>{customer.name}</td>
                                            <td>{customer.address}</td>
                                            <td>{customer.salary}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}
