import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function AddTrip() {
  return (
    <>
      <div style={{ marginTop: '10rem', marginLeft: '9rem' }}>
        <h3>Add Trip</h3>
        <div
          className="mt-4"
          style={{
            width: '150vh',
            minHeight: '50vh',
          }}
        >
          <Form>
            <Form.Group className="mb-3 fw-semibold" controlId="formBasicEmail">
              <Form.Label>Title Trip</Form.Label>
              <Form.Control type="text" style={{ backgroundColor: 'rgba(196, 196, 196, 0.5)' }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-semibold">Country</Form.Label>
              <Form.Select style={{ backgroundColor: 'rgba(196, 196, 196, 0.5)' }}>
                <option style={{ background: 'transparent' }}>Select Country</option>
                <option value="1">Indonesia</option>
                <option value="2">Japan</option>
                <option value="3">South Korea</option>
                <option value="4">Australia</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 fw-semibold" controlId="formBasicPassword">
              <Form.Label>Accomodation</Form.Label>
              <Form.Control type="text" style={{ backgroundColor: 'rgba(196, 196, 196, 0.5)' }} />
            </Form.Group>
            <Form.Group className="mb-3 fw-semibold" controlId="formBasicPassword">
              <Form.Label>Transportation</Form.Label>
              <Form.Control type="text" style={{ backgroundColor: 'rgba(196, 196, 196, 0.5)' }} />
            </Form.Group>
            <Form.Group className="mb-3 fw-semibold" controlId="formBasicPassword">
              <Form.Label>Eat</Form.Label>
              <Form.Control type="text" style={{ backgroundColor: 'rgba(196, 196, 196, 0.5)' }} />
            </Form.Group>
            <Form.Group className="mb-3 fw-semibold" controlId="formBasicPassword">
              <Form.Label>Duration</Form.Label>
              <div className="d-flex">
                <Form.Control type="text" className="w-25" style={{ backgroundColor: 'rgba(196, 196, 196, 0.5)' }} />
                <Form.Label>Day(s)</Form.Label>
                <Form.Control type="text" className="w-25" style={{ backgroundColor: 'rgba(196, 196, 196, 0.5)' }} />
                <Form.Label>Night(s)</Form.Label>
              </div>
            </Form.Group>
            <Form.Group className="mb-3 fw-semibold" controlId="formBasicPassword">
              <Form.Label>Date Trip</Form.Label>
              <Form.Control type="text" style={{ backgroundColor: 'rgba(196, 196, 196, 0.5)' }} />
            </Form.Group>
            <Form.Group className="mb-3 fw-semibold" controlId="formBasicPassword">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" style={{ backgroundColor: 'rgba(196, 196, 196, 0.5)' }} />
            </Form.Group>
            <Form.Group className="mb-3 fw-semibold" controlId="formBasicPassword">
              <Form.Label>Qouta</Form.Label>
              <Form.Control type="text" style={{ backgroundColor: 'rgba(196, 196, 196, 0.5)' }} />
            </Form.Group>
            <Form.Group className="mb-3 fw-semibold" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control type="password" style={{ backgroundColor: 'rgba(196, 196, 196, 0.5)' }} />
            </Form.Group>
            <Form.Group className="mb-3 fw-semibold" controlId="formBasicCheckbox">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" label="Upload Here" style={{ backgroundColor: 'rgba(196, 196, 196, 0.5)' }} />
            </Form.Group>
            <Button
              className="d-flex mx-auto mt-5 w-25 fw-bold text-light"
              variant="warning"
              type="submit"
              style={{
                justifyContent: 'center',
              }}
            >
              Add Trip
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
