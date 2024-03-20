import { Row, Col, Card, Button } from 'react-bootstrap';
import { HomeController } from '../controllers/HomeController';

function HomeView() {
    const { customerCount, itemCount, orderCount } = HomeController();
    return (
        <main className="container-fluid mt-2" id="HomeSection">
            <div className="jumbotron mt-5">
                <div id="home-tiles">
                    <Row>
                        <Col lg={6} xl={3} mb={2}>
                            <Card className="sectionBorder">
                                <Card.Header className="font-weight-bolder" style={{ backgroundColor: 'dodgerblue' }}>Customers</Card.Header>
                                <Card.Body className="d-flex justify-content-around align-items-center">
                                    <div className="dash-tile-icon me-2"><i className="bi bi-people-fill"></i></div>
                                    <div className="dash-tile-text text-black-50"><h1 id="txtCustomerCount">{customerCount}</h1></div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6} xl={3} mb={2}>
                            <Card className="sectionBorder">
                                <Card.Header className="font-weight-bolder" style={{ backgroundColor: 'dodgerblue' }}>Items</Card.Header>
                                <Card.Body className="d-flex justify-content-around align-items-center">
                                    <div className="dash-tile-icon"><i className="bi bi-boxes"></i></div>
                                    <div className="dash-tile-text text-black-50"><h1 id="txtItemsCount">{itemCount}</h1></div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6} xl={3} mb={2}>
                            <Card className="sectionBorder">
                                <Card.Header className="font-weight-bolder" style={{ backgroundColor: 'dodgerblue' }}>Orders</Card.Header>
                                <Card.Body className="d-flex justify-content-around align-items-center">
                                    <div className="dash-tile-icon"><i className="bi bi-cart-fill"></i></div>
                                    <div className="dash-tile-text text-black-50"><h1 id="txtOrderCount">{orderCount}</h1></div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6} xl={3} mb={2}>
                            <Card className="sectionBorder">
                                <Card.Header className="font-weight-bolder" style={{ backgroundColor: 'dodgerblue' }}>Settings</Card.Header>
                                <Card.Body className="d-flex justify-content-around align-items-center">
                                    <div className="dash-tile-icon"><i className="bi bi-gear-wide-connected"></i></div>
                                    <div>
                                        <Button variant="danger">New</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </main>
    );
}

export default HomeView;
