import React, { useContext, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { UserContext } from '../../context/userContext';
import { API } from '../../config/api';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
export default function AddTrip() {
  let navigate = useNavigate()
  const [message, setMessage] = useState(null)
  const [state, dispatch] = useContext(UserContext)
  const [form, setform] = useState({
    title: '',
    accomodation: '',
    transportation: '',
    eat: '',
    duration: '',
    date_trip: '',
    price: '',
    quota: '',
    description: '',
    image: '',
    country_id: '',
  });

  const onChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.type == "file" ? e.target.files :  e.target.value,
    });
  };
  
  
  const onSubmit = useMutation(async (e) => {
    try {
    e.preventDefault();

    const formData = new FormData()
    formData.append("title", form.title)
    formData.append("accomodation", form.accomodation)
    formData.append("transportation", form.transportation)
    formData.append("eat", form.eat)
    formData.append("duration", form.duration)
    formData.append("date_trip", form.date_trip)
    formData.append("price", form.price)
    formData.append("quota", form.quota)
    formData.append("description", form.description)
    formData.append("image", form.image[0])
    formData.append("country_id", form.country_id)

    const response = await API.post('/trip', formData)
    console.log(response)
    // if (response.data.status === 'success...') {

    //   const alert = (
    //     <Alert variant='success' className='py-1'>
    //       Add Trip Success
    //       </Alert>
    //   )
    //   setMessage(alert)
      
    //   }
    } catch (error) {
        const alert = (
          <Alert variant='danger' className='py-1'>
            Add Trip Failed
            </Alert>
        )
        setMessage(alert)
        console.log(error)
        
    } 
    navigate('/incomeTrip')
});
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
          <Form onSubmit={(e) => onSubmit.mutate(e)}>
            <Form.Group className="mb-3 fw-semibold" >
              <Form.Label>Title Trip</Form.Label>
              {message && message}
              <Form.Control type="text" style={{ backgroundColor: 'rgba(196, 196, 196, 0.5)' }}  name='title' onChange={onChange} value={form.title}/>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label className="fw-semibold">Country</Form.Label>
              <Form.Select style={{ backgroundColor: 'rgba(196, 196, 196, 0.5)' }} name='country_id' onChange={onChange} value={form.country_id} >
                <option style={{ background: 'transparent' }}>Select Country</option>
                <option value="1">Indonesia</option>
                <option value="2">Japan</option>
                <option value="3">South Korea</option>
                <option value="4">Australia</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 fw-semibold" >
              <Form.Label>Accomodation</Form.Label>
              <Form.Control type="text" style={{ backgroundColor: 'rgba(196, 196, 196, 0.5)' }} name='accomodation' onChange={onChange} value={form.accomodation}/>
            </Form.Group>
            <Form.Group className="mb-3 fw-semibold" >
              <Form.Label>Transportation</Form.Label>
              <Form.Control type="text" style={{ backgroundColor: 'rgba(196, 196, 196, 0.5)' }} name='transportation' onChange={onChange} value={form.transportation}/>
            </Form.Group>
            <Form.Group className="mb-3 fw-semibold" >
              <Form.Label>Eat</Form.Label>
              <Form.Control type="text" style={{ backgroundColor: 'rgba(196, 196, 196, 0.5)' }} name='eat' onChange={onChange} value={form.eat}/>
            </Form.Group>
            <Form.Group className="mb-3 fw-semibold">
              <Form.Label>Duration</Form.Label>
              <div className="d-flex">
                <Form.Control type="text" className="w-25" style={{ backgroundColor: 'rgba(196, 196, 196, 0.5)' }}  name='duration' onChange={onChange} value={form.duration}/>
                <Form.Label>Day(s)</Form.Label>
                {/* <Form.Control type="text" className="w-25" style={{ backgroundColor: 'rgba(196, 196, 196, 0.5)' }} name='duration' onChange={onChange} value={form.duration}/>
                <Form.Label>Night(s)</Form.Label> */}
              </div>
            </Form.Group>
            <Form.Group className="mb-3 fw-semibold" >
              <Form.Label>Date Trip</Form.Label>
              <Form.Control type="text" style={{ backgroundColor: 'rgba(196, 196, 196, 0.5)' }} name='date_trip' onChange={onChange} value={form.date_trip}/>
            </Form.Group>
            <Form.Group className="mb-3 fw-semibold" >
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" style={{ backgroundColor: 'rgba(196, 196, 196, 0.5)' }} name='price' onChange={onChange} value={form.price}/>
            </Form.Group>
            <Form.Group className="mb-3 fw-semibold" >
              <Form.Label>Qouta</Form.Label>
              <Form.Control type="text" style={{ backgroundColor: 'rgba(196, 196, 196, 0.5)' }} name='quota' onChange={onChange} value={form.quota}/>
            </Form.Group>
            <Form.Group className="mb-3 fw-semibold" >
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" style={{ backgroundColor: 'rgba(196, 196, 196, 0.5)' }} name='description' onChange={onChange} value={form.description}/>
            </Form.Group>
            <Form.Group className="mb-3 fw-semibold" >
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" label="Upload Here" style={{ backgroundColor: 'rgba(196, 196, 196, 0.5)'  }} name='image' onChange={onChange} />
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
