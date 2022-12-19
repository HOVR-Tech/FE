import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Register({ modalRegister, setModalRegister, switchLogin }) {
  const data = [];
  const DataUser = localStorage.getItem('users');
  const UserData = JSON.parse(DataUser);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    number: '',
  });

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log('register', user);
    if (UserData == null) {
      data.push(user);
      localStorage.setItem('users', JSON.stringify(data));
    } else {
      UserData.forEach((element) => {
        data.push(element);
      });

      data.push(user);
      localStorage.setItem('users', JSON.stringify(data));
    }
    console.log(user);
  };

  useEffect(() => {}, []);

  return (
    <Modal size="lg" show={modalRegister} onHide={() => setModalRegister(false)}>
      <Modal.Header className="d-flex justify-content-center">
        <h4 className="fw-bold active">Register</h4>
      </Modal.Header>
      <Form className="p-4" onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Full Name</Form.Label>
          <Form.Control name="name" type="text" onChange={onChange} value={user.name} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" type="email" onChange={onChange} value={user.email} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" onChange={onChange} value={user.password} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control name="number" type="number" onChange={onChange} value={user.number} />
        </Form.Group>
        <Button
          className="w-100 text-white fw-bold"
          variant="warning"
          type="submit"
          onClick={() => {
            setModalRegister(false);
            switchLogin(true);
          }}
        >
          Submit
        </Button>
      </Form>
      <p className="d-flex mx-auto">
        Already Have an Account?
        <Link
          onClick={() => {
            setModalRegister(false);
            switchLogin(true);
          }}
        >
          Login Here!
        </Link>
      </p>
    </Modal>
  );
}
