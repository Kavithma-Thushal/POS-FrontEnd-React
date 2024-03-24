import { Container, Form, Button, Table, Row, Col } from 'react-bootstrap';

export default function ItemView() {
    return (
        <main className="container-fluid" id="ItemSection">
            <Container className="d-flex flex-grow-1 flex-column">
                <div className="position-relative d-inline-block mt-3 mt-lg-4 mt-md-4">
                    <h2 id="H1-1"><i className="bi bi-boxes"></i> Item Management</h2>
                </div>
            </Container>
            <Container className="d-flex flex-grow-1 flex-column sectionBorder mb-5 mt-2" style={{ backgroundColor: '#f0f0f0' }}>
                <Row className="justify-content-around" style={{ height: 'max-content' }}>
                    {/* Item Search */}
                    <Col xs={10} md={6} lg={5} className="p-0 mt-5 sectionBorder" style={{ backgroundColor: 'white', height: 'max-content' }}>
                        <Row className="mb-3 ms-3 me-3 mt-3">
                            <Form.Label className="fw-bold">Search Item</Form.Label>
                            <div className="input-group">
                                <Form.Control className="me-3 mt-2 rounded-2 w-50" id="txtSearchItemCode" type="search" placeholder="Input Item Code" />
                                <Button variant="secondary" className="mt-2 rounded-2 w-25" id="btnSearchItem" type="button">Search</Button>
                            </div>
                            <Button variant="success" className="mt-3 ms-3 rounded-2 w-25" id="btnGetAllItems" type="button">Get All</Button>
                        </Row>
                    </Col>

                    {/* Item Form */}
                    <Col xs={10} md={5} lg={4} className="p-0 mt-5 mb-4 sectionBorder" style={{ backgroundColor: 'white' }}>
                        <Form id="itemForm">
                            <Form.Group className="mb-3 ms-3 me-3 mt-3">
                                <Form.Label className="fw-bold" htmlFor="txtItemCode">Item Code</Form.Label>
                                <Form.Control className="form-control" id="txtItemCode" name="code" type="text" />
                                <span className="control-error"></span>
                            </Form.Group>
                            <Form.Group className="mb-3 ms-3 me-3 mt-3">
                                <Form.Label className="fw-bold" htmlFor="txtItemDescription">Item Description</Form.Label>
                                <Form.Control className="form-control" id="txtItemDescription" name="description" type="text" />
                                <span className="control-error"></span>
                            </Form.Group>
                            <Form.Group className="mb-3 ms-3 me-3 mt-3">
                                <Form.Label className="fw-bold" htmlFor="txtItemQuantity">Item Quantity</Form.Label>
                                <Form.Control className="form-control" id="txtItemQuantity" name="qty" type="text" />
                                <span className="control-error"></span>
                            </Form.Group>
                            <Form.Group className="mb-3 ms-3 me-3 mt-3">
                                <Form.Label className="fw-bold" htmlFor="txtItemUnitPrice">Unit Price</Form.Label>
                                <Form.Control className="form-control" id="txtItemUnitPrice" name="unitPrice" type="text" />
                                <span className="control-error"></span>
                            </Form.Group>
                            <div className="m-4 text-center">
                                <Button variant="primary" className="mt-2 m-2 w-25" id="btnAddItem" type="button">Add</Button>
                                <Button variant="warning" className="mt-2 m-2 w-25" id="btnUpdateItem" type="button">Update</Button>
                                <Button variant="danger" className="mt-2 m-2 w-25" id="btnDeleteItem" type="button">Delete</Button>
                                <Button variant="secondary" className="mt-2 m-2 w-25" id="btnClearAllItem" type="button">Clear All</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>

                <Row className="mt-5 mb-5 mt-md-2 mt-lg-4 justify-content-around">
                    {/* Item Table */}
                    <Col xs={11} className="justify-content-around sectionBorder" style={{ background: 'white' }}>
                        <div className="ItemTableDiv">
                            <Table bordered hover className="mt-3">
                                <thead className="text-light table-dark text-center table-bordered">
                                    <tr>
                                        <th className="w-25">Item Code</th>
                                        <th className="w-25">Item Description</th>
                                        <th className="w-25">Item Quantity</th>
                                        <th className="w-25">Unit Price</th>
                                    </tr>
                                </thead>
                                <tbody id="itemTable"></tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}
