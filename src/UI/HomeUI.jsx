import { Row, Col, Button } from 'react-bootstrap';
import { HomeController } from '../controllers/HomeController';
import DashboardCard from '../components/DashboardCard';

export default function HomeView() {
    const { customerCount, itemCount, orderCount } = HomeController();
    return (
        <main className="container-fluid mt-2" id="HomeSection">
            <div className="jumbotron mt-5">
                <div id="home-tiles">
                    <Row>
                        <Col lg={6} xl={3} mb={2}>
                            <DashboardCard header="Customers" icon="bi-people-fill" count={customerCount} />
                        </Col>
                        <Col lg={6} xl={3} mb={2}>
                            <DashboardCard header="Items" icon="bi-boxes" count={itemCount} />
                        </Col>
                        <Col lg={6} xl={3} mb={2}>
                            <DashboardCard header="Orders" icon="bi-cart-fill" count={orderCount} />
                        </Col>
                        <Col lg={6} xl={3} mb={2}>
                            <DashboardCard header="Settings" icon="bi-gear-wide-connected" count={<Button variant="danger">New</Button>} />
                        </Col>
                    </Row>
                </div>
            </div>
        </main>
    );
}
