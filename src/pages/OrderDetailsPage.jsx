import { Container, Table, Row, Col } from 'react-bootstrap';

export default function OrderDetailsPage() {
    return (
        <main className="container-fluid" id="OrderDetails">
            <Container className="d-flex flex-grow-1 flex-column">
                <div className="position-relative d-inline-block mt-3 mt-lg-4 mt-md-4">
                    <h2 id="H1"><i className="bi bi-cart-check-fill"></i> Orders View</h2>
                </div>
            </Container>
            <Container className="d-flex flex-grow-1 flex-column mt-2 mb-5 sectionBorder" style={{ backgroundColor: '#f0f0f0', height: 'max-content' }}>
                <Row className="justify-content-around" style={{ height: 'max-content' }}>
                    <Row className="justify-content-evenly">
                        {/* Orders Table */}
                        <Col xs={11} className="justify-content-around sectionBorder mt-5 mb-5" style={{ background: 'white' }}>
                            <h5 className="text-center p-2 text-light rounded-3 mt-3" style={{ background: 'dodgerblue' }}>Orders</h5>
                            <div className="customerTableDiv">
                                <Table bordered className="mt-3">
                                    <thead className="text-light table-dark text-center table-bordered">
                                        <tr>
                                            <th className="w-25">Order ID</th>
                                            <th className="w-25">Order Date</th>
                                            <th className="w-25">Customer ID</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tblOrder"></tbody>
                                </Table>
                            </div>
                        </Col>
                        {/* OrdersDetails Table */}
                        <Col xs={11} className="justify-content-around sectionBorder mb-5" style={{ background: 'white' }}>
                            <h5 className="text-center p-2 text-light rounded-3 mt-3" style={{ background: 'dodgerblue' }}>Order Details</h5>
                            <div className="customerTableDiv">
                                <Table bordered className="mt-3">
                                    <thead className="text-light table-dark text-center table-bordered">
                                        <tr>
                                            <th className="w-25">Order ID</th>
                                            <th className="w-25">Item Code</th>
                                            <th className="w-25">Qty</th>
                                            <th className="w-25">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tblOrderDetails"></tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </main>
    );
}
