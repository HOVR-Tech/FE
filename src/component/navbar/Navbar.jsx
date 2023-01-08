import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Button, Dropdown } from 'react-bootstrap';
import { API } from '../../config/api';
import { UserContext } from '../../context/userContext';
import { useQuery } from 'react-query';

import LogoNav from '../image/icons/logoNav.png';
import LogoNav2 from '../image/logoNav2.png';
import JumbotronIcon2 from '../image/jumbotron2.png';

import Login from '../auth/Login';
import Register from '../auth/Register';

import DropdownUser from '../dropdown/User';
import DropdownAdmin from '../dropdown/Admin';

export default function NavBar() {
  // MODAL
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);
  let navigate = useNavigate();

  // LOGIN USER CHECK
  const [state, dispatch] = useContext(UserContext)


  const logout = () => {
    console.log(state)
    dispatch({
        type: "LOGOUT"
    })
    navigate("/")
}

  const {data: user} = useQuery("userCache", async() => {
    const response = await API.get("users", {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
    return response.data.data
  })


  // const userLogin = [];
  // const UserData = localStorage.getItem('token');
  // const DataUser = JSON.parse(UserData);

  // const isLogin = JSON.parse(localStorage.getItem('data_login'));
  // const LoginUser = (data) => {
  //   DataUser.forEach((element) => {
  //     if (data.email === element.email && data.password === element.password) {
  //       userLogin.push(element);
  //       localStorage.setItem('', JSON.stringify(userLogin));
  //       alert('ANJAY !!!');
  //       setModalLogin(false);
  //       navigate('/');
  //     }
  //   });
  // };

  // const remove = [...isLogin];
  // const logout = () => {
  //   remove.pop();
  //   const userLogin = JSON.stringify(remove);
  //   localStorage.setItem('data_login', userLogin);

  //   navigate('/');
  // };

  return (
    <>
      <Navbar
        className='fixed-top'
        style={{
          width: '100%',
          display: 'flex',
          height: '13vh',
        }}
      >
        <div className='fixed-top d-flex justify-content-between w-75' style={{ margin:'auto' }}>
          <img
            src={LogoNav}
            alt=""
            style={{ cursor: 'pointer' }}
            onClick={() => {
              navigate('/');
            }}
          />

        {state.isLogin === false ? (
          <div className='d-flex mt-3'>
            <Button variant="outline-light" style={{ width: '8vw', height:'7vh',}} onClick={() => setModalLogin(true)}>
              Login
            </Button>
            <Button variant="warning" style={{ color: 'white', width: '8vw', height:'7vh', marginLeft: '1rem'}} onClick={() => setModalRegister(true)}>
              Register
            </Button>
            </div>
          ) : (
            <>
              {state.user.role === 'admin' ? (
                <DropdownAdmin logout={logout} />
              ) : (
                <div>
                  <DropdownUser logout={logout} />
                </div>
              )}
              
            </>
          )}
        </div>
        <img
          className='position-relative'
          src={LogoNav2}
          alt=""
          style={{
            height: '13vh',
            width: '100%',
          }}
        />
         
        <img
          className='position-fixed'
          src={JumbotronIcon2}
          alt=""
          style={{
            height: '13vh', 
            width: '98%',

          }}
        />
       
        
      </Navbar>

      <Login modalLogin={modalLogin} setModalLogin={setModalLogin} switchRegister={setModalRegister} />
      <Register modalRegister={modalRegister} setModalRegister={setModalRegister} switchLogin={setModalLogin} />
    </>
  );
}
