import React, { useState } from 'react';
import { Container, Row, Col, Stack, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import CardTour from '../dummy/CardTour';
import Payment from './Payment';

import DetailTour1 from './image/tour/detailTour1.png';
import DetailTour2 from './image/tour/detailTour2.png';
import DetailTour3 from './image/tour/detailTour3.png';

import Hotel from './image/icons/hotel.png';
import Flight from './image/icons/vector.png';
import Meal from './image/icons/meal.png';
import Time from './image/icons/time.png';
import Calendar from './image/icons/calendar.png';
import { type } from '@testing-library/user-event/dist/type';

export default function DetailCard() {
  const navigate = useNavigate();
  const { index } = useParams();

  const [counter, setCounter] = useState(1);
  const plusCounter = () => setCounter(counter + 1);
  let minusCounter = () => setCounter(counter - 1);

  const Hitung = (props) => {
    return parseInt(counter) * parseInt(props);
  };

  if (counter <= 1) {
    minusCounter = () => setCounter(1);
  }

  return (
    <>
      <div style={{ marginTop: '10rem' }}>
        <section style={{ marginLeft: '15rem' }}>
          <div className=" ">
            <h1 style={{ fontFamily: 'sans-serif', fontWeight: 'bold' }}>{CardTour[index].title}</h1>
            <p style={{ fontFamily: 'sans-serif', fontWeight: 'bold', color: '#A8A8A8' }}>{CardTour[index].country}</p>
          </div>
        </section>

        <Container style={{ marginTop: '2rem' }}>
          <Row>
            <Col className="d-flex justify-content-center mb-2">
              <img src={CardTour[index].image} style={{ width: '59vw', height: '55vh' }} alt="" />
            </Col>
          </Row>
          <Row style={{ marginLeft: '142px' }}>
            <Col>
              <img src={DetailTour1} style={{ width: '19vw', height: '28vh' }} alt="" />
            </Col>
            <Col style={{ marginLeft: '-10rem' }}>
              <img src={DetailTour2} style={{ width: '19vw', height: '28vh' }} alt="" />
            </Col>
            <Col style={{ marginLeft: '-10rem' }}>
              <img src={DetailTour3} style={{ width: '19vw', height: '28vh' }} alt="" />
            </Col>
          </Row>
        </Container>

        <section style={{ marginLeft: '15rem', marginTop: '2rem' }}>
          <h4>Information Trip</h4>
          <div className="d-flex">
            <div>
              <p style={{ fontFamily: 'sans-serif', fontWeight: 'bold', color: '#A8A8A8' }}>Accommodation</p>
              <div className="d-flex">
                <img src={Hotel} style={{ width: '2vw' }} />
                <h5 className="ms-1">Hotel 4 Nights</h5>
              </div>
            </div>
            <div className="ms-1">
              <p style={{ fontFamily: 'sans-serif', fontWeight: 'bold', color: '#A8A8A8' }}>Transportation</p>
              <div className="d-flex">
                <img src={Flight} style={{ width: '2vw' }} />
                <h5 className="ms-1">Qatar Airways</h5>
              </div>
            </div>
            <div className="ms-1">
              <p style={{ fontFamily: 'sans-serif', fontWeight: 'bold', color: '#A8A8A8' }}>Eat</p>
              <div className="d-flex">
                <img src={Meal} style={{ width: '2vw' }} />
                <h5 className="ms-1">Included as Itenary</h5>
              </div>
            </div>
            <div className="ms-1">
              <p style={{ fontFamily: 'sans-serif', fontWeight: 'bold', color: '#A8A8A8' }}>Duration</p>
              <div className="d-flex">
                <img src={Time} style={{ width: '2vw' }} />
                <h5 className="ms-1">6 Days 4 Nights</h5>
              </div>
            </div>
            <div className="ms-1">
              <p style={{ fontFamily: 'sans-serif', fontWeight: 'bold', color: '#A8A8A8' }}>Date Trip</p>
              <div className="d-flex">
                <img src={Calendar} style={{ width: '2vw' }} />
                <h5 className="ms-1">26 August 2020</h5>
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginLeft: '15rem', marginTop: '2rem', width: '56rem', textAlign: 'justify' }}>
          <h4>Description</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
            Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </section>

        <section>
          <div className="d-flex justify-content-center">
            <Stack
              className=" d-flex justify-content-between"
              direction="horizontal"
              gap={2}
              style={{
                width: '66%',
                marginLeft: '1rem',
              }}
            >
              <div className="d-flex">
                <h4 className="fw-bold text-warning">IDR. {CardTour[index].budget.toLocaleString()}</h4>
                <h4 className="ms-2 fw-bold">/ Person</h4>
              </div>
              <div style={{ marginRight: '-5px' }}>
                <Button className="text-white fw-bold" variant="warning" onClick={minusCounter}>
                  -
                </Button>
                <span className="ms-2 me-2 fw-bold">{counter}</span>
                <Button className="text-white fw-bold" variant="warning" onClick={plusCounter}>
                  +
                </Button>
              </div>
            </Stack>
          </div>

          <div className="d-flex justify-content-center mt-3">
            <Stack
              className=" d-flex justify-content-between"
              direction="horizontal"
              gap={2}
              style={{
                width: '66%',
                marginLeft: '1rem',
              }}
            >
              <h4 className="fw-bold">Total:</h4>
              <h4 className="fw-bold text-warning" style={{ marginRight: '-5px' }}>
                IDR. {Hitung(CardTour[index].budget).toLocaleString()}
              </h4>
            </Stack>
          </div>
          <div className="d-flex float-end mt-4" style={{ marginRight: '217px' }}>
            <p className="">
              <Button onClick={() => navigate(`/payment/${index}`)} className="text-white fw-bold ps-4 pe-4" variant="warning">
                Book Now
              </Button>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
