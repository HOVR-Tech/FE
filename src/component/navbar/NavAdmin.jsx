import React, { useState } from 'react';
import agent1 from '../image/icons/agent1.png';
import { useNavigate } from 'react-router-dom';
import { Navbar, Dropdown } from 'react-bootstrap';
import LogoNav from '../image/icons/logoNav.png';
import LogoNav2 from '../image/logoNav2.png';
import JumbotronIcon2 from '../image/jumbotron2.png';
import Journey1 from '../image/icons/journey1.png';
import Bill1 from '../image/icons/bill1.png';
import Logout1 from '../image/icons/logout1.png';

// IMPORT ROUTE
import Profile from '../Profile';
import Payment from '../Payment';

export default function NavAdmin({ logout }) {
  const navigate = useNavigate();

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
            <Dropdown.Toggle variant="light" id="none">
              <img
                src={agent1}
                variant="outline-light"
                style={{
                  width: '60px',
                }}
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  navigate('/incomeTrip');
                }}
              >
                <div className="d-flex mb-2">
                  <img src={Journey1} alt="" />
                  <h5 className="ms-1">Trip</h5>
                </div>
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  navigate('/listTransaction');
                }}
              >
                <div className="d-flex mb-2">
                  <img src={Bill1} alt="" />
                  <h5 className="ms-1">Transaction</h5>
                </div>
              </Dropdown.Item>
              <Dropdown.Item onClick={logout}>
                <div style={{ borderBottom: 'solid', borderColor: '#A8A8A8', marginLeft: '-2rem', marginBottom: '1rem' }} />
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
