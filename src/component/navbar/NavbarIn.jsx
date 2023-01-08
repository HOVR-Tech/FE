import React, { useState, useContext } from 'react';
import LogoProfile from '../image/icons/profil.png';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Navbar, Dropdown } from 'react-bootstrap';
import LogoNav from '../image/icons/logoNav.png';
import LogoNav2 from '../image/logoNav2.png';
import JumbotronIcon2 from '../image/jumbotron2.png';
import User1 from '../image/icons/user1.png';
import Bill1 from '../image/icons/bill1.png';
import Logout1 from '../image/icons/logout1.png';
import CardTour from '../../dummy/CardTour';

import { UserContext } from '../../context/userContext';

// IMPORT ROUTE
import Profile from '../Profile';
import Payment from '../Payment';
import { useEffect } from 'react';

export default function NavIn() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [state, dispatch] = useContext(UserContext)
  const logout = () => {
    console.log(state)
    dispatch({
        type: "LOGOUT"
    })
    navigate("/")
}



  return (
    <>
      <Navbar
        className='fixed-top'
        style={{
          width: '100%',
          display: 'flex',
          marginTop:'-8px'
        }}
      >
        <img
          src={LogoNav2}
          alt=""
          style={{
            height: '13vh',
            width: '100%',
          }}
        />
        <img
          src={JumbotronIcon2}
          alt=""
          style={{
            height: '13vh',
            marginLeft:'-1351px',
            width: '100%',
          }}
        />
        <div>
          <div>
            <img
             className='fixed-top mt-2'
             src={LogoNav}
             alt=""
             style={{ marginLeft:'8rem', cursor: 'pointer' }}
             onClick={() => {
               navigate('/');
             }}
            />
          </div>
          <Dropdown style={{ marginLeft:'-22rem' }}>
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
              <Dropdown.Item>
              <Link to='/profile' style={{textDecoration:'none', color:'black'}}>
                <div className="d-flex mb-2">
                  <img src={User1} alt="" />
                  <h5 className="ms-1">Profile</h5>
                </div>
              </Link>
              </Dropdown.Item>

              <Dropdown.Item>
                <Link to='/payment' style={{textDecoration:'none', color:'black'}}>
                <div className="d-flex mb-2">
                  <img src={Bill1} alt="" />
                  <h5 className="ms-1">Pay</h5>
                </div>
                </Link>
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
