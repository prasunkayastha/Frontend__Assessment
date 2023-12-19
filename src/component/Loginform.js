import React from "react";
import { useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { Image } from 'react-bootstrap';
import '../css/loginform.css';
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";
function Loginform() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const handleLogin = async (event) => {
        event.preventDefault();
        setLoading(true);
        if (username === 'admin' && password === '12345') {
            localStorage.setItem("isLoggedIn", true);
            setRedirect(true);
            toast.success("Login successful");
        }
        else {
            toast.error("Invalid Username or Password");
        }
    };

    if (redirect) {
        return <Navigate to="/products" />
    }

    const login = localStorage.getItem("isLoggedIn");

    if (login) {
        return <Navigate to="/products" />
    }

    return (
        <div className="container-fluid p-0">
            <Row className="g-0 w-100">
                <Col lg={6}>
                    <div className="contain h-100">
                        <Container>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" onChange={(e) => setUsername(e.target.value)} placeholder="admin" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="12345" />
                                </Form.Group>
                                <Button type="submit" className="px-3" onClick={handleLogin}>
                                    Login
                                    {loading && (
                                        <>
                                            <Spinner className="login__btn" />
                                        </>
                                    )}
                                </Button>
                            </Form>

                        </Container>

                    </div>
                </Col>

                <Col lg={6}>
                    <Image src="/images/image2.svg" alt="Image" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </Col>
            </Row>
        </div >
    );
}
export default Loginform;