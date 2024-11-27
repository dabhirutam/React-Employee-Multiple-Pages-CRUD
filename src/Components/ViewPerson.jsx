import { Container, Row, Col, ListGroup, Navbar } from "react-bootstrap";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getDataLS } from "../Services/GetDataLS";
import logo from '../images/logo.png';
import { Link } from "react-router-dom";

const ViewPerson = () => {

    const { id } = useParams();
    let [singleData, setSingleData] = useState({
        fname: "",
        lname: "",
        age: "",
        department: "",
        position: "",
        salary: "",
        email: "",
    });

    useEffect(() => {
        let data = getDataLS().find(emp => emp.id == id);
        setSingleData(data);
    }, [])

    console.log(singleData);
    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand className="d-flex align-items-center text-primary fs-4 fw-medium" href="#home">
                        <img style={{ width: '50px' }} className="me-2" src={logo} alt="" />
                        Employee
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Link to={'/'} className="btn btn-primary">
                            Home
                        </Link>
                        <Link to={'/AddData'} className="btn btn-primary ms-3">
                            Add+
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <Row>
                    <Col md={6} className="p-4 mt-5 bg-light rounded shadow mx-auto">
                        <div className="d-flex align-items-center">
                            <Col md={6}>
                                <img style={{ height: '300px' }} src={logo} alt="" />
                            </Col>
                            <Col md={6}>
                                <ListGroup>
                                    <ListGroup.Item>
                                        <span className="fw-medium text-black">Name :</span>
                                        &nbsp; {singleData.fname + ' ' + singleData.lname}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <span className="fw-medium text-black">Employee ID :</span>
                                        &nbsp; {singleData.id}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <span className="fw-medium text-black">Age :</span>
                                        &nbsp; {singleData.age}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <span className="fw-medium text-black">Department :</span>
                                        &nbsp; {singleData.department}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <span className="fw-medium text-black">Position :</span>
                                        &nbsp; {singleData.position}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <span className="fw-medium text-black">Salary :</span>
                                        &nbsp; {singleData.salary}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <span className="fw-medium text-black">Email :</span>
                                        &nbsp; {singleData.email}
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default ViewPerson;