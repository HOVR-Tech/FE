import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Button } from 'react-bootstrap';
import LogoNav from '../image/icons/logoNav.png';
import LogoNav2 from '../image/logoNav2.png';
import JumbotronIcon2 from '../image/jumbotron2.png';

import Login from '../auth/Login';
import Register from '../auth/Register';

import NavIn from './NavbarIn';
import NavAdmin from './NavAdmin';

export default function NavBar() {
  // MODAL
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);
  const navigate = useNavigate();

  // LOGIN USER CHECK

  const userLogin = [];
  const UserData = localStorage.getItem('users');
  const DataUser = JSON.parse(UserData);

  const isLogin = JSON.parse(localStorage.getItem('data_login'));

  const LoginUser = (data) => {
    DataUser.forEach((element) => {
      if (data.email === element.email && data.password === element.password) {
        userLogin.push(element);
        localStorage.setItem('data_login', JSON.stringify(userLogin));
        alert('ANJAY !!!');
        setModalLogin(false);
        navigate('/');
      }
    });
  };

  const remove = [...isLogin];
  const logout = () => {
    remove.pop();
    const userLogin = JSON.stringify(remove);
    localStorage.setItem('data_login', userLogin);

    navigate('/');
  };

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
          <img
            src={LogoNav}
            alt=""
            style={{ position: 'absolute', top: '5px', left: '7rem', cursor: 'pointer' }}
            onClick={() => {
              navigate('/');
            }}
          />
        </div>

        {isLogin.length > 0 ? (
          <>{remove[0].email === 'admin@gmail.com' ? <NavAdmin logout={logout} /> : <NavIn logout={logout} />}</>
        ) : (
          <div style={{ position: 'absolute', top: '20px', left: '58rem' }}>
            <Button variant="outline-light" style={{ width: '8vw' }} onClick={() => setModalLogin(true)}>
              Login
            </Button>
            <Button variant="warning" style={{ color: 'white', width: '8vw', marginLeft: '1rem' }} onClick={() => setModalRegister(true)}>
              Register
            </Button>
          </div>
        )}
      </Navbar>

      <Login modalLogin={modalLogin} setModalLogin={setModalLogin} switchRegister={setModalRegister} LoginUser={LoginUser} />
      <Register modalRegister={modalRegister} setModalRegister={setModalRegister} switchLogin={setModalLogin} />
    </>
  );
}
