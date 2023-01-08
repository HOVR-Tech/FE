import React, { useContext } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import User1 from '../image/icons/user1.png';
import Bill1 from '../image/icons/bill1.png';
import Logout1 from '../image/icons/logout1.png';
import LogoProfile from '../image/icons/profil.png';
import { UserContext } from '../../context/userContext';

export default function DropdownUser() {
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
    <Dropdown>
    <Dropdown.Toggle className='mt-2 me-5' variant="none" id="none">
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
  </>
  );
}
