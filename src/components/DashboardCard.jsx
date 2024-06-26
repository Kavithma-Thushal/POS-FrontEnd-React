import { Card } from 'react-bootstrap';

export default function DashboardCard({ header, icon, count }) {
    return (
        <Card className="sectionBorder">
            <Card.Header className="font-weight-bolder" style={{ backgroundColor: 'dodgerblue' }}>{header}</Card.Header>
            <Card.Body className="d-flex justify-content-around align-items-center">
                <div className="dash-tile-icon me-2"><i className={`bi ${icon}`}></i></div>
                <div className="dash-tile-text text-black-50"><h1>{count}</h1></div>
            </Card.Body>
        </Card>
    );
}
