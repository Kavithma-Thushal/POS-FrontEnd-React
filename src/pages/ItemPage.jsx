import { Container, Form, Table, Row, Col, Button } from 'react-bootstrap';
import { ItemController } from '../controllers/ItemController';

export default function ItemPage() {
    const { handleChange, itemValidations, itemData, saveItem, updateItem, deleteItem, searchItemByCode, setSearchItemByCode, searchItem,
        allItems, loadAllItems, tableListener, clearInputFields } = ItemController();
    return (
        <main className="container-fluid">
            <Container className="d-flex flex-grow-1 flex-column">
                <div className="position-relative d-inline-block mt-3 mt-lg-4 mt-md-4">
                    <h2 id="H1-1"><i className="bi bi-boxes"></i> Item Management</h2>
                </div>
            </Container>
            <Container className="d-flex flex-grow-1 flex-column mb-5 mt-2 sectionBorder" style={{ backgroundColor: '#f0f0f0' }}>
                <Row className="justify-content-around" style={{ height: 'max-content' }}>
                    {/* Item Search */}
                    <Col xs={10} md={6} lg={5} className="p-0 mt-5 sectionBorder" style={{ backgroundColor: 'white', height: 'max-content' }}>
                        <Row className="m-3">
                            <Form.Label className="fw-bold">Search Item</Form.Label>
                            <div className="input-group">
                                <Form.Control className="me-3 mt-2 rounded-2 w-50" type="search" placeholder="Input Item Code" onKeyDown={(e) =>
                                    e.key === 'Enter' && searchItem()} value={searchItemByCode} onChange={(e) => setSearchItemByCode(e.target.value)} />
                                <Button variant="secondary" className="mt-2 rounded-2 w-25" type="button" onClick={searchItem}>Search</Button>
                            </div>
                            <Button variant="success" className="mt-3 ms-3 rounded-2 w-25" type="button" onClick={loadAllItems}>Get All</Button>
                        </Row>
                    </Col>
                    {/* Item Form */}
                    <Col xs={10} md={5} lg={4} className="p-0 mt-5 mb-4 sectionBorder" style={{ backgroundColor: 'white' }}>
                        <Form>
                            <Form.Group className="m-3" controlId="code">
                                <Form.Label className="fw-bold">Item Code</Form.Label>
                                <Form.Control className="form-control" type="text" disabled={true} value={itemData.code} onChange={handleChange} />
                                <span className="control-error">{itemValidations.code}</span>
                            </Form.Group>
                            <Form.Group className="m-3" controlId="description">
                                <Form.Label className="fw-bold">Item Description</Form.Label>
                                <Form.Control className="form-control" type="text" value={itemData.description} onChange={handleChange} />
                                <span className="control-error">{itemValidations.description}</span>
                            </Form.Group>
                            <Form.Group className="m-3" controlId="qty">
                                <Form.Label className="fw-bold">Item Quantity</Form.Label>
                                <Form.Control className="form-control" type="text" value={itemData.qty} onChange={handleChange} />
                                <span className="control-error">{itemValidations.qty}</span>
                            </Form.Group>
                            <Form.Group className="m-3" controlId="unitPrice">
                                <Form.Label className="fw-bold">Unit Price</Form.Label>
                                <Form.Control className="form-control" type="text" value={itemData.unitPrice} onChange={handleChange} />
                                <span className="control-error">{itemValidations.unitPrice}</span>
                            </Form.Group>
                            <div className="m-4 text-center">
                                <Button variant="primary" className="mt-2 m-2 w-25" type="button" onClick={saveItem}>Add</Button>
                                <Button variant="warning" className="mt-2 m-2 w-25" type="button" onClick={updateItem}>Update</Button>
                                <Button variant="danger" className="mt-2 m-2 w-25" type="button" onClick={deleteItem}>Delete</Button>
                                <Button variant="secondary" className="mt-2 m-2 w-25" type="button" onClick={clearInputFields}>Clear All</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
                <Row className="mt-5 mb-5 mt-md-2 mt-lg-4 justify-content-around">
                    {/* Item Table */}
                    <Col xs={11} className="justify-content-around sectionBorder" style={{ background: 'white' }}>
                        <div className="ItemTableDiv">
                            <Table bordered hover className="mt-3 table-cursor">
                                <thead className="text-light table-dark text-center table-bordered">
                                    <tr>
                                        <th className="w-25">Item Code</th>
                                        <th className="w-25">Item Description</th>
                                        <th className="w-25">Item Quantity</th>
                                        <th className="w-25">Unit Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allItems.map(item => (
                                        <tr key={item.code} onClick={() => tableListener(item.code, item.description, item.qty, item.unitPrice)}>
                                            <td>{item.code}</td>
                                            <td>{item.description}</td>
                                            <td>{item.qty}</td>
                                            <td>{item.unitPrice}</td>
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
