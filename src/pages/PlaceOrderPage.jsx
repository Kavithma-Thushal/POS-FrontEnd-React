import { Container, Form, Table, Row, Col, Button } from 'react-bootstrap';

export default function PlaceOrderPage() {
    return (
        <main className="container-fluid">
            <Container className="d-flex flex-grow-1 flex-column">
                <div className="position-relative d-inline-block mt-3 mt-lg-4 mt-md-4">
                    <h2 id="H1-2"><i className="bi bi-cart-fill"></i> Place Order</h2>
                </div>
            </Container>
            <Container className="d-flex flex-grow-1 flex-column mb-5 mt-2 sectionBorder" style={{ backgroundColor: '#f0f0f0' }}>
                <Row className="justify-content-around mt-3" style={{ height: 'min-content' }}>
                    {/* Invoice Details */}
                    <Col xs={10} md={5} lg={4} className="p-3 mt-3 sectionBorder" style={{ backgroundColor: 'white' }}>
                        <h5 className="text-center p-2 text-light rounded-3" style={{ background: 'dodgerblue' }}>Invoice Details</h5>
                        <Row className="mt-1">
                            <Col xs={12} md={6} lg={6}>
                                <Form.Label className="fw-bold" htmlFor="orderId">Order ID</Form.Label>
                                <Form.Control className="form-control" disabled type="text" value="ODI-001" />
                            </Col>
                            <Col xs={12} md={6} lg={6}>
                                <Form.Label className="fw-bold" htmlFor="orderDate">Order Date</Form.Label>
                                <Form.Control className="form-control" type="date" />
                            </Col>
                        </Row>
                        <Row className="mt-1">
                            <Col xs={12} md={6} lg={6}>
                                <Form.Label className="fw-bold" htmlFor="cmbCustomerId">Customer ID</Form.Label>
                                <Form.Select className="form-select" aria-label="Default select example" value="Customer ID" />
                            </Col>
                            <Col xs={12} md={6} lg={6}>
                                <Form.Label className="fw-bold" htmlFor="customerName">Customer Name</Form.Label>
                                <Form.Control className="form-control" disabled type="text" />
                            </Col>
                        </Row>
                        <Row className="mt-1">
                            <Col xs={12} md={6} lg={6}>
                                <Form.Label className="fw-bold" htmlFor="customerAddress">Address</Form.Label>
                                <Form.Control className="form-control" disabled type="text" />
                            </Col>
                            <Col xs={12} md={6} lg={6}>
                                <Form.Label className="fw-bold" htmlFor="customerSalary">Salary</Form.Label>
                                <Form.Control className="form-control" disabled type="text" />
                            </Col>
                        </Row>
                    </Col>
                    {/* Item Details */}
                    <Col xs={10} md={5} lg={4} className="p-3 mt-3 sectionBorder" style={{ backgroundColor: 'white' }}>
                        <h5 className="text-center p-2 text-light rounded-3" style={{ background: 'dodgerblue' }}>Item Details</h5>
                        <Row className="mt-1">
                            <Col xs={12} md={6} lg={6}>
                                <Form.Label className="fw-bold" htmlFor="cmbItemCode">Item Code</Form.Label>
                                <Form.Select className="form-select" aria-label="Default select example" value="Item Code" />
                            </Col>
                            <Col xs={12} md={6} lg={6}>
                                <Form.Label className="fw-bold" htmlFor="itemName">Item Description</Form.Label>
                                <Form.Control className="form-control" disabled type="text" />
                            </Col>
                        </Row>
                        <Row className="mt-1">
                            <Col xs={12} md={6} lg={6}>
                                <Form.Label className="fw-bold" htmlFor="itemPrice">Unit Price</Form.Label>
                                <Form.Control className="form-control" disabled type="text" />
                            </Col>
                            <Col xs={12} md={6} lg={6}>
                                <Form.Label className="fw-bold" htmlFor="qtyOnHand">Qty On Hand</Form.Label>
                                <Form.Control className="form-control" disabled type="text" />
                            </Col>
                        </Row>
                        <Row className="mt-1">
                            <Col xs={12} md={6} lg={6}>
                                <Form.Label className="fw-bold" htmlFor="buyQty">Buy Qty</Form.Label>
                                <Form.Control className="form-control" type="text" />
                                <strong className="control-error"></strong>
                            </Col>
                            <Col xs={12} md={6} lg={6} className="mt-4">
                                <Button variant="primary" className="w-100" type="button">Add To Cart</Button>
                            </Col>
                        </Row>
                    </Col>
                    {/* Payment Details */}
                    <Col xs={10} md={5} lg={3} className="p-3 mt-3 sectionBorder" style={{ backgroundColor: 'white' }}>
                        <h5 className="text-center p-2 text-light rounded-3" style={{ background: 'dodgerblue' }}>Payment Details</h5>
                        <Row className="mt-1">
                            <Col xs={12} md={6} lg={6}>
                                <Form.Label className="fw-bold" htmlFor="txtTotal">Total</Form.Label>
                                <Form.Control className="form-control" disabled type="number" />
                            </Col>
                            <Col xs={12} md={6} lg={6}>
                                <Form.Label className="fw-bold" htmlFor="txtDiscount">Discount</Form.Label>
                                <Form.Control className="form-control" role="spinbutton" type="number" />
                            </Col>
                        </Row>
                        <Row className="mt-1">
                            <Col xs={12} md={6} lg={6}>
                                <Form.Label className="fw-bold" htmlFor="txtSubTotal">Sub Total</Form.Label>
                                <Form.Control className="form-control" disabled type="number" />
                            </Col>
                            <Col xs={12} md={6} lg={6}>
                                <Form.Label className="fw-bold" htmlFor="txtCash">Cash</Form.Label>
                                <Form.Control className="form-control" type="text" />
                                <strong className="control-error"></strong>
                            </Col>
                        </Row>
                        <Row className="mt-1">
                            <Col xs={12} md={6} lg={6}>
                                <Form.Label className="fw-bold" htmlFor="txtBalance">Balance</Form.Label>
                                <Form.Control className="form-control" disabled type="number" />
                            </Col>
                            <Col xs={12} md={6} lg={6} className="mt-4">
                                <Button variant="success" className="w-100" type="submit">Purchase</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {/* ClearAll Button*/}
                <div className="d-grid col-6 col-md-2 mt-4 mb-2 mx-auto">
                    <Button variant="danger" className="sectionBorder" type="button">Clear All</Button>
                </div>
                {/* PlaceOrder Table */}
                <Row className="mt-1 mb-5 mt-md-2 mt-lg-3 justify-content-around">
                    <Col xs={11} className="justify-content-around sectionBorder" style={{ background: 'white' }}>
                        <div className="PlaceOrderTableDiv">
                            <Table bordered hover className="mt-3">
                                <thead className="text-light table-dark text-center table-bordered">
                                    <tr>
                                        <th>Item Code</th>
                                        <th>Item Description</th>
                                        <th>Unit Price</th>
                                        <th>Order Quantity</th>
                                        <th>Payment Total</th>
                                    </tr>
                                </thead>
                                <tbody id="tblAddToCart"></tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}
