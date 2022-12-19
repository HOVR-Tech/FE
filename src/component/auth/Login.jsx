import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavIn from '../navbar/NavbarIn';

export default function Login({ modalLogin, setModalLogin, switchRegister, LoginUser }) {
  const [userLogin, setUserLogin] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) => {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    LoginUser(userLogin);
  };
  return (
    <>
      <Modal size="sm" show={modalLogin} onHide={() => setModalLogin(false)}>
        <Modal.Header className="d-flex justify-content-center">
          <h4 className="fw-bold">Login</h4>
        </Modal.Header>
        <Form onSubmit={onSubmit} className="p-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control name="email" type="email" onChange={onChange} value={userLogin.email} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" onChange={onChange} value={userLogin.password} />
          </Form.Group>
          <Button className="w-100 text-white fw-bold" variant="warning" type="submit">
            Submit
          </Button>
          <Form.Text className="text-muted">
            Don't Have Account?{' '}
            <Link
              onClick={() => {
                setModalLogin(false);
                switchRegister(true);
              }}
            >
              Register Here!
            </Link>
          </Form.Text>
        </Form>
      </Modal>
    </>
  );
}
