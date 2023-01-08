import React, { useState, useEffect, useContext } from 'react';
import { Modal, Form, Button, Alert } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { API, setAuthToken } from '../../config/api';

import { UserContext }  from '../../context/userContext';


export default function Register({ modalRegister, setModalRegister, switchLogin }) {
  const [message, setMessage] = useState(null)
  let navigate = useNavigate()
  // const data = [];
  // const UserToken = localStorage.getItem('token');
  // const UserData = JSON.parse(UserToken);

  

  // const [state, dispatch] = useContext(UserContext);
  
  
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    number: '',
   
  });

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const body = JSON.stringify(form)
      const response = await API.post('/register', body, config);
      
      // if (UserData == null) {
      //       data.push(setToken);
      //       localStorage.setItem('token', JSON.stringify(data));
      //     } else {
      //       UserData.forEach((element) => {
      //         data.push(element);
      //       });
      
      //       data.push(setToken);
      //       localStorage.setItem('token', JSON.stringify(data));
      //     }
      // Notif
      if (response.data.status === 'success...') {
        const alert = (
          <Alert variant="success" className='py-1'>
          Success
        </Alert>  
        )
        setMessage(alert)
       
        setForm({
          name: '',
          email: '',
          password: '',
          number: '',
          
        })
      } else {
        const alert = (
          <Alert variant="danger" className='py-1'>
          Failed
        </Alert>
        )
        setMessage(alert)
      }
    } catch (error) {
      const alert = (
        <Alert variant="danger" className='py-1'>
          Failed
        </Alert>
      );
      setMessage(alert)
      console.log(error)
    }
    console.log(form)
  })
  
  
  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   console.log('register', user);
  //   if (UserData == null) {
  //     data.push(user);
  //     localStorage.setItem('users', JSON.stringify(data));
  //   } else {
  //     UserData.forEach((element) => {
  //       data.push(element);
  //     });

  //     data.push(user);
  //     localStorage.setItem('users', JSON.stringify(data));
  //   }
  //   console.log(user);
  // };
  // useEffect(() => {
  //   localStorage.setItem('authToken', state)
  // }, []);

  return (
    <Modal size="lg" show={modalRegister} onHide={() => setModalRegister(false)}>
      <Modal.Header className="d-flex justify-content-center">
        <h4 className="fw-bold active">Register</h4>
      </Modal.Header>


      <Form className="p-4" onSubmit={(e) => handleSubmit.mutate(e)}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Full Name</Form.Label>
          <Form.Control name="name" type="text" onChange={onChange} value={form.name} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" type="email" onChange={onChange} value={form.email} />
        </Form.Group>
        <Form.Group className="mb-3" co ntrolId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" onChange={onChange} value={form.password} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control name="number" type="text" onChange={onChange} value={form.number} />
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
