import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getDataLS } from "../Services/GetDataLS";
import { useNavigate, useParams } from "react-router";

const EditData = () => {

    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        age: "",
        department: "",
        position: "",
        salary: "",
        email: "",
    });
    const [storage, setStorage] = useState(getDataLS());
    const { id } = useParams();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        let editData = storage.map((emp) => {
            if (emp.id == id) {
                return formData;
            } else {
                return emp;
            }
        });

        localStorage.setItem("employeeData", JSON.stringify(editData));
        navigate('/');
    }

    useEffect(() => {
        let singleData = storage.find((emp) => emp.id == id);
        setFormData(singleData);
    }, []);

    return (
        <Container>
            <Row>
                <Form onSubmit={handleSubmit} className="p-4 bg-light rounded shadow col-8 mx-auto mt-5">
                    <h2 className="text-center mb-4 text-primary">Edit Employee Details Form</h2>
                    <div className="d-flex flex-wrap flex-column row-gap-3">
                        <Col xs={12}>
                            <Form.Group controlId="formFName">
                                <Form.Label>First Name :</Form.Label>
                                <Form.Control type="text" placeholder="Enter First Name" name="fname" value={formData.fname} onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Col xs={12}>
                            <Form.Group controlId="formLName">
                                <Form.Label>Last Name :</Form.Label>
                                <Form.Control type="text" placeholder="Enter Last Name" name="lname" value={formData.lname} onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Col xs={12}>
                            <Form.Group controlId="formAge">
                                <Form.Label>Age :</Form.Label>
                                <Form.Control type="number" placeholder="Enter Age" name="age" value={formData.age} onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Col xs={12}>
                            <Form.Group controlId="formDepartment">
                                <Form.Label>Department :</Form.Label>
                                <Form.Select name="department" value={formData.department} onChange={handleInputChange} >
                                    {
                                        ["Choose...", "IT", "HR", "Sales", "Finance", "Marketing", "Operations", "Procurement", "Production/Manufacturing", "Logistics", "Quality Control"].map((dep, index) => <option key={index} value={dep}>{dep}</option>)
                                    }
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col xs={12}>
                            <Form.Group controlId="formPosition">
                                <Form.Label>Position :</Form.Label>
                                <Form.Select name="position" value={formData.position} onChange={handleInputChange} >
                                    {
                                        ["Choose...", "Manager", "Developer", "Designer", "Accounts Clerk", "Bookkeeper", "Auditor", "Content Writer", "Marketing Manager", "Sales Representative", "Sales Manager", "Help Desk Technician", "Database Administrator", "Cloud Engineer", "Operations Analyst", "Operations Manager"].map((dep, index) => <option key={index} value={dep}>{dep}</option>)
                                    }
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col xs={12}>
                            <Form.Group controlId="formSalary">
                                <Form.Label>Salary :</Form.Label>
                                <Form.Control type="text" placeholder="Enter Salary" name="salary" value={formData.salary} onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Col xs={12}>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email :</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" name="email" value={formData.email} onChange={handleInputChange} />
                            </Form.Group>
                        </Col>
                        <Button variant="primary" type="submit" className="d-block mx-auto">
                            Submit
                        </Button>
                    </div>
                </Form>
            </Row>
        </Container>
    )
}

export default EditData;