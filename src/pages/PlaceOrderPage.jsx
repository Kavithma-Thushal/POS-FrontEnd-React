import { Container, Form, Table, Row, Col, Button } from 'react-bootstrap';
import { PlaceOrderController } from '../controllers/PlaceOrderController';

export default function PlaceOrderPage() {
    const { orderDate, setOrderDate, generatedId, customerCombo, customerDetails, handleCustomerCombo, itemCombo, itemDetails, handleItemCombo,
        buyQty, setBuyQty, cartItems, disableAddToCart, handleAddToCart } = PlaceOrderController();
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
                                <Form.Label className="fw-bold">Order ID</Form.Label>
                                <Form.Control className="form-control" disabled type="text" value={generatedId} />
                            </Col>
                            <Col xs={12} md={6} lg={6}>
                                <Form.Label className="fw-bold">Order Date</Form.Label>
                                <Form.Control className="form-control" type="date" value={orderDate} onChange={(e) => setOrderDate(e.target.value)} />
                            </Col>
                        </Row>
                        <Row className="mt-1">
                            <Col xs={12} md={6} lg={6}>
                                <Form.Label className="fw-bold">Customer ID</Form.Label>
                                <Form.Select className="form-select" aria-label="Default select example" onChange={(e) => handleCustomerCombo(e.target.value)}>
                                    <option disabled selected hidden value=''></option>
                                    {customerCombo.map(customer => (<option key={customer.id}>{customer.id}</option>))}</Form.Select>
                            </Col>
                            <Col xs={12} md={6} lg={6}>
                                <Form.Label className="fw-bold">Customer Name</Form.Label>
                                <Form.Control className="form-control" disabled type="text" value={customerDetails ? customerDetails.name : ''} />
                            </Col>
                        </Row>
                        <Row className="mt-1">
                            <Col xs={12} md={6} lg={6}>
                                <Form.Label className="fw-bold">Address</Form.Label>
                                <Form.Control className="form-control" disabled type="text" value={customerDetails ? customerDetails.address : ''} />
                            </Col>
                            <Col xs={12} md={6} lg={6}>
                                <Form.Label className="fw-bold">Salary</Form.Label>
                                <Form.Control className="form-control" disabled type="text" value={customerDetails ? customerDetails.salary : ''} />
                            </Col>
                        </Row>
                    </Col>
                    {/* Item Details */}
                    <Col xs={10} md={5} lg={4} className="p-3 mt-3 sectionBorder" style={{ backgroundColor: 'white' }}>
                        <h5 className="text-center p-2 text-light rounded-3" style={{ background: 'dodgerblue' }}>Item Details</h5>
                        <Row className="mt-1">
                            <Col xs={12} md={6} lg={6}>
                                <Form.Label className="fw-bold">Item Code</Form.Label>
                                <Form.Select className="form-select" aria-label="Default select example" onChange={(e) => handleItemCombo(e.target.value)}>
                                    <option disabled selected hidden value=''></option>
                                    {itemCombo.map(item => (<option key={item.code}>{item.code}</option>))}</Form.Select>
                            </Col>
                            <Col xs={12} md={6} lg={6}>
                                <Form.Label className="fw-bold">Item Description</Form.Label>
                                <Form.Control className="form-control" disabled type="text" value={itemDetails ? itemDetails.description : ''} />
                            </Col>
                        </Row>
                        <Row className="mt-1">
                            <Col xs={12} md={6} lg={6}>
                                <Form.Label className="fw-bold">Unit Price</Form.Label>
                                <Form.Control className="form-control" disabled type="text" value={itemDetails ? itemDetails.unitPrice : ''} />
                            </Col>
                            <Col xs={12} md={6} lg={6}>
                                <Form.Label className="fw-bold" >Qty On Hand</Form.Label>
                                <Form.Control className="form-control" disabled type="text" value={itemDetails ? itemDetails.qty : ''} />
                            </Col>
                        </Row>
                        <Row className="mt-1">
                            <Col xs={12} md={6} lg={6}>
                                <Form.Label className="fw-bold" >Buy Qty</Form.Label>
                                <Form.Control className="form-control" type="number" value={buyQty} onChange={(e) => setBuyQty(e.target.value)} />
                                <strong className="control-error"></strong>
                            </Col>
                            <Col xs={12} md={6} lg={6} className="mt-4">
                                <Button variant="primary" className="w-100" type="button" disabled={disableAddToCart} onClick={handleAddToCart}>Add To Cart</Button>
                            </Col>
                        </Row>
                    </Col>
                    {/* Payment Details */}
                    <Col xs={10} md={5} lg={3} className="p-3 mt-3 sectionBorder" style={{ backgroundColor: 'white' }}>
                        <h5 className="text-center p-2 text-light rounded-3" style={{ background: 'dodgerblue' }}>Payment Details</h5>
                        <Row className="mt-1">
                            <Col xs={12} md={6} lg={6}>
                                <Form.Label className="fw-bold" >Total</Form.Label>
                                <Form.Control className="form-control" disabled type="number" />
                            </Col>
                            <Col xs={12} md={6} lg={6}>
                                <Form.Label className="fw-bold" >Discount</Form.Label>
                                <Form.Control className="form-control" role="spinbutton" type="number" />
                            </Col>
                        </Row>
                        <Row className="mt-1">
                            <Col xs={12} md={6} lg={6}>
                                <Form.Label className="fw-bold" >Sub Total</Form.Label>
                                <Form.Control className="form-control" disabled type="number" />
                            </Col>
                            <Col xs={12} md={6} lg={6}>
                                <Form.Label className="fw-bold" >Cash</Form.Label>
                                <Form.Control className="form-control" type="text" />
                                <strong className="control-error"></strong>
                            </Col>
                        </Row>
                        <Row className="mt-1">
                            <Col xs={12} md={6} lg={6}>
                                <Form.Label className="fw-bold" >Balance</Form.Label>
                                <Form.Control className="form-control" disabled type="number" />
                            </Col>
                            <Col xs={12} md={6} lg={6} className="mt-4">
                                <Button className="w-100" variant="success" type="button">Purchase</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {/* ClearAll Button*/}
                <div className="d-grid col-6 col-md-2 mt-4 mb-2 mx-auto">
                    <Button variant="danger" type="button">Clear All</Button>
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
                                <tbody>
                                    {cartItems.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.itemCode}</td>
                                            <td>{item.itemDescription}</td>
                                            <td>{item.itemUnitPrice}</td>
                                            <td>{item.itemBuyQty}</td>
                                            <td>{item.total}</td>
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
