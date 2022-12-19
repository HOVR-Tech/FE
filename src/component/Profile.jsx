import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

// IMPORT IMAGES
import Name from './image/icons/name.png';
import Email from './image/icons/email.png';
import Phone from './image/icons/phone.png';
import Place from './image/icons/place.png';
import Neymar from './image/neymar.png';

import Logo from './image/icons/logoDw.png';
import CardTour from '../dummy/CardTour';
import QrCode from './image/qrCode.png';

export default function Profile() {
  return (
    <>
      <section
        className="shadow-lg"
        style={{
          marginTop: '10rem',
          marginLeft: '16rem',
          width: '60vw',
          height: '70vh',
          backgroundColor: 'white',
        }}
      >
        <div className="d-flex justify-content-between">
          <div
            style={{
              marginTop: '1rem',
              marginLeft: '5rem',
            }}
          >
            <div>
              <h2>Personal Info</h2>
            </div>
            <div
              className="d-flex"
              style={{
                marginTop: '2rem',
              }}
            >
              <img
                src={Name}
                alt=""
                style={{
                  width: '32px',
                  height: '32px',
                }}
              />
              <div className="ms-2">
                <h5>Neymar</h5>
                <p>Full Name</p>
              </div>
            </div>
            <div className="d-flex">
              <img
                src={Email}
                alt=""
                style={{
                  width: '32px',
                  height: '32px',
                }}
              />
              <div className="ms-2">
                <h5>neymar@gmail.com</h5>
                <p>Email</p>
              </div>
            </div>
            <div className="d-flex">
              <img
                src={Phone}
                alt=""
                style={{
                  width: '32px',
                  height: '32px',
                }}
              />
              <div className="ms-2">
                <h5>+13 8778 2782</h5>
                <p>Phone Number</p>
              </div>
            </div>
            <div className="d-flex">
              <img
                src={Place}
                alt=""
                style={{
                  width: '32px',
                  height: '32px',
                }}
              />
              <div className="ms-2">
                <h5>Sao Paulo, Brazil</h5>
                <p>Address</p>
              </div>
            </div>
          </div>
          <div className="mt-4 me-5">
            <div>
              <img
                className="shadow"
                src={Neymar}
                alt=""
                style={{
                  width: '250px',
                }}
              />
            </div>
            <Button variant="warning" className="fw-bold text-white mt-3 w-100" type="file">
              Change Photo
            </Button>
          </div>
        </div>
      </section>
      <section
        style={{
          marginTop: '10rem',
        }}
      >
        <h2
          style={{
            marginLeft: '11rem',
          }}
        >
          History Trip
        </h2>
        <Container
          className="shadow"
          style={{
            marginTop: '3rem',
            width: '60rem',
            minHeight: '10rem',
            border: 'solid',
            borderWidth: '2px',
            borderColor: '#B7B7B7',
            backgroundColor: 'white',
          }}
        >
          <div className="d-flex justify-content-between" style={{ marginTop: '1rem', marginLeft: '2rem', marginRight: '4rem' }}>
            <img src={Logo} alt="" style={{ width: '15vw', height: '10vh' }} />
            <div className="">
              <h2>Booking</h2>
              <span>
                Saturday, <p>22 July 2020</p>
              </span>
            </div>
          </div>

          <div className="d-flex justify-content-between" style={{ marginLeft: '2rem' }}>
            <div>
              <h4>6D/4N Fun Tassie Vacation</h4>
              <p>Australia</p>
              <p
                style={{
                  fontFamily: 'Avenir',
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  fontSize: '12px',
                  lineHeight: '16px',
                  display: 'flex',
                  justifyContent: 'center',
                  color: '#3CF71E',
                  backgroundColor: '#DFFDCF',
                  width: '112px',
                }}
              >
                Approved
              </p>
            </div>
            <div className="d-flex">
              <div>
                <div>
                  <h6>Date Trip</h6>
                  <p>26 August 2020</p>
                </div>
                <div>
                  <h6>Accomodation</h6>
                  <p>Hotel 4 Nights</p>
                </div>
              </div>
              <div className="ms-3">
                <div>
                  <h6>Duration</h6>
                  <p>6 Days 4 Nights</p>
                </div>
                <div>
                  <h6>Transportation</h6>
                  <p>Qatar Airways</p>
                </div>
              </div>
            </div>
            <div style={{ marginRight: '4rem', marginTop: '1rem' }}>
              <img src={QrCode} alt="" />
            </div>
          </div>
          <section style={{ width: '53rem', marginTop: '1rem', marginLeft: '2rem', marginBottom: '1rem' }}>
            <div className="d-flex justify-content-between" style={{ width: '46rem', borderBottom: 'solid', borderWidth: '2px' }}>
              <h5>No</h5>
              <h5>Full Name</h5>
              <h5>Gender</h5>
              <h5>Phone</h5>
              <h5 style={{ color: 'white' }}>_</h5>
            </div>
            <div className="d-flex justify-content-between" style={{ width: '40rem', borderBottom: 'solid', borderWidth: '2px' }}>
              <p>1</p>
              <p>Neymar Jr</p>
              <p>Male</p>
              <p>+1 64873 893</p>
            </div>
            <div className="float-end" style={{ marginTop: '-40px' }}>
              <h5>Qty : 1</h5>
              <p className="fw-bold" style={{ color: 'red' }}>
                Total : IDR. 12,398,000
              </p>
            </div>
          </section>
          <div style={{ borderTop: 'solid', borderWeight: '1px', marginTop: '2rem', marginBottom: '2rem' }} />
        </Container>
      </section>
    </>
  );
}
