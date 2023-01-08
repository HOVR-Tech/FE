import React, {useContext } from 'react';
import agent1 from '../image/icons/agent1.png';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

import Journey1 from '../image/icons/journey1.png';
import Bill1 from '../image/icons/bill1.png';
import Logout1 from '../image/icons/logout1.png';


import { UserContext } from '../../context/userContext';


export default function DropdownAdmin() {
 const navigate = useNavigate();

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
          <Dropdown >
            <Dropdown.Toggle className='mt-2 me-5' variant="none" id="none">
              <img
                src={agent1}
                variant="none"
                style={{
                  width: '50px',
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
                <div style={{ borderBottom: 'solid', borderColor: '#A8A8A8', marginBottom: '1rem' }} />
                <div className="d-flex">
                  <img src={Logout1} alt="" />
                  <h5 className="ms-1">Logout</h5>
                </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div style={{ position: 'absolute', top: '1rem', left: '65rem', cursor: 'pointer' }}></div>
    </>
  );
}
