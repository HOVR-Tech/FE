import React, { useState, useContext } from "react";
import { Modal, Form, Button, Alert } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { API } from "../../config/api";
import { useMutation } from "react-query";
import { UserContext } from "../../context/userContext";

export default function Login({ modalLogin, setModalLogin, switchRegister }) {
  let navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [state, dispatch] = useContext(UserContext);
  console.log(state);
  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify(form);

      const response = await API.post("/login", body, config);
      console.log(response);
      if (response?.status === 200) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        });

        if (state.user.role === "admin") {
          navigate(0);
          setModalLogin(false);
        } else {
          navigate(0);
          setModalLogin(false);
        }

        const alert = (
          <Alert variant="success" className="py-1">
            Login Success
          </Alert>
        );
        setMessage(alert);
      }
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Login Failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  });

  return (
    <>
      <Modal size="sm" show={modalLogin} onHide={() => setModalLogin(false)}>
        <Modal.Header className="d-flex justify-content-center">
          <h4 className="fw-bold">Login</h4>
        </Modal.Header>
        {message && message}
        <Form onSubmit={(e) => onSubmit.mutate(e)} className="p-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              onChange={onChange}
              value={form.email}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              onChange={onChange}
              value={form.password}
            />
          </Form.Group>
          <Button
            className="w-100 text-white fw-bold"
            variant="warning"
            type="submit"
          >
            Submit
          </Button>
          <Form.Text className="text-muted">
            Don't Have Account?{" "}
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
