import React, { useState } from 'react';
import LogoProfile from '../image/icons/profil.png';
import { useNavigate, useParams } from 'react-router-dom';
import { Navbar, Dropdown } from 'react-bootstrap';
import LogoNav from '../image/icons/logoNav.png';
import LogoNav2 from '../image/logoNav2.png';
import JumbotronIcon2 from '../image/jumbotron2.png';
import User1 from '../image/icons/user1.png';
import Bill1 from '../image/icons/bill1.png';
import Logout1 from '../image/icons/logout1.png';
import CardTour from '../../dummy/CardTour';

// IMPORT ROUTE
import Profile from '../Profile';
import Payment from '../Payment';

export default function NavIn({ logout }) {
  const navigate = useNavigate();
  const { index } = useParams();

  return (
    <>
      <Navbar
        style={{
          width: '100%',
          position: 'fixed',
          top: '0px',
          zIndex: 50,
          display: 'flex',
        }}
      >
        <img
          src={LogoNav2}
          alt=""
          style={{
            position: 'absolute',
            top: '0px',
            height: '13vh',
            width: '100%',
          }}
        />
        <img
          src={JumbotronIcon2}
          alt=""
          style={{
            position: 'absolute',
            top: '0px',
            height: '13vh',
            width: '100%',
          }}
        />
        <div>
          <div>
            <img
              src={LogoNav}
              alt=""
              style={{ position: 'absolute', top: '5px', left: '7rem', cursor: 'pointer' }}
              onClick={() => {
                navigate('/');
              }}
            />
          </div>
          <Dropdown style={{ marginLeft: '65rem' }}>
            <Dropdown.Toggle variant="warning" id="none">
              <img
                src={LogoProfile}
                variant="outline-light"
                style={{
                  width: '60px',
                }}
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  navigate('/profile');
                }}
              >
                <div className="d-flex mb-2">
                  <img src={User1} alt="" />
                  <h5 className="ms-1">Profile</h5>
                </div>
              </Dropdown.Item>

              <Dropdown.Item onClick={() => navigate(`/payment/0`)}>
                <div className="d-flex mb-2">
                  <img src={Bill1} alt="" />
                  <h5 className="ms-1">Pay</h5>
                </div>
              </Dropdown.Item>
              <Dropdown.Item onClick={logout}>
                <div style={{ borderBottom: 'solid', borderColor: '#A8A8A8', marginBottom: '1rem' }} />
                <div className="d-flex">
                  <img src={Logout1} alt="" />
                  <h5 className="ms-1">Logout</h5>
                </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div style={{ position: 'absolute', top: '1rem', left: '65rem', cursor: 'pointer' }}></div>
        </div>
      </Navbar>
    </>
  );
}
