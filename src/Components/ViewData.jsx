import { useState } from "react";
import { Navbar, Container, Row, Col, Table, Button, Form } from "react-bootstrap";
import { getDataLS } from "../Services/GetDataLS";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from '../images/logo.png';

const ViewData = () => {

    const [view, setView] = useState(getDataLS());
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const hndleEdit = (id) => navigate(`/EditData/${id}`);
    const hndleViewPerson = (id) => navigate(`/ViewPerson/${id}`);

    const hndleDelete = (id) => {
        let editData = view.filter(emp => emp.id != id);
        localStorage.setItem("employeeData", JSON.stringify(editData));
        setView(editData);
    };

    const hndleSort = (type, feild) => {
        let sortdata;
        if (type == 'A-Z') {
            sortdata = getDataLS().sort((a, b) => a[feild].localeCompare(b[feild]));
        } else {
            sortdata = getDataLS().sort((a, b) => b[feild].localeCompare(a[feild]));
        }
        setView(sortdata);
    }

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearch(value);

        const filteredData = getDataLS().filter(emp =>
            Object.values(emp).some(val =>
                String(val).toLowerCase().includes(value)
            )
        );

        setView(filteredData);
    };

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
                        <Col md={3}>
                            <Form.Control value={search} onChange={handleSearch} type="text" placeholder="Search" className=" mr-sm-2" />
                        </Col>
                        <Link to={'/AddData'} className="btn btn-primary ms-3">
                            Add+
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <Row className="p-4 mt-5 bg-light rounded shadow text-center">
                    <h2 className="mb-5 text-primary">View Employee Details</h2>
                    <Table bordered hover>
                        <thead className="table-primary">
                            <tr>
                                <th>#</th>
                                <th>
                                    <span>Employee ID</span>
                                </th>
                                <th>
                                    Full Name
                                    <span className="fs-7">
                                        <i onClick={() => hndleSort('A-Z', 'fname')} className="bi bi-chevron-bar-up mx-2"></i>
                                        <i onClick={() => hndleSort('Z-A', 'fname')} className="bi bi-chevron-bar-down"></i>
                                    </span>
                                </th>
                                <th>
                                    Age
                                    <span className="fs-7">
                                        <i onClick={() => hndleSort('A-Z', 'age')} className="bi bi-chevron-bar-up mx-2"></i>
                                        <i onClick={() => hndleSort('Z-A', 'age')} className="bi bi-chevron-bar-down"></i>
                                    </span>
                                </th>
                                <th>
                                    Department
                                    <span className="fs-7">
                                        <i onClick={() => hndleSort('A-Z', 'department')} className="bi bi-chevron-bar-up mx-2"></i>
                                        <i onClick={() => hndleSort('Z-A', 'department')} className="bi bi-chevron-bar-down"></i>
                                    </span>
                                </th>
                                <th>
                                    Position
                                    <span className="fs-7">
                                        <i onClick={() => hndleSort('A-Z', 'position')} className="bi bi-chevron-bar-up mx-2"></i>
                                        <i onClick={() => hndleSort('Z-A', 'position')} className="bi bi-chevron-bar-down"></i>
                                    </span>
                                </th>
                                <th>
                                    Salary
                                </th>
                                <th>
                                    Email
                                    <span className="fs-7">
                                        <i onClick={() => hndleSort('A-Z', 'email')} className="bi bi-chevron-bar-up mx-2"></i>
                                        <i onClick={() => hndleSort('Z-A', 'email')} className="bi bi-chevron-bar-down"></i>
                                    </span>
                                </th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                view.map((emp, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{emp.id}</td>
                                            <td>{emp.fname + ' ' + emp.lname}</td>
                                            <td>{emp.age}</td>
                                            <td>{emp.department}</td>
                                            <td>{emp.position}</td>
                                            <td>{emp.salary}</td>
                                            <td>{emp.email}</td>
                                            <td>
                                                <Button className="btn btn-primary" onClick={() => hndleEdit(emp.id)}>
                                                    <i className="bi bi-pencil-square"></i>
                                                </Button>
                                                &nbsp; || &nbsp;
                                                <Button className="btn btn-danger" onClick={() => hndleDelete(emp.id)}>
                                                    <i className="bi bi-trash-fill"></i>
                                                </Button>
                                                &nbsp; || &nbsp;
                                                <Button className="btn btn-success" onClick={() => hndleViewPerson(emp.id)}>
                                                    <i className="bi bi-eye-fill"></i>
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </>
    )
}
export default ViewData;