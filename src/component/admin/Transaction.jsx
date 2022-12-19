import React, { useState } from 'react';
import CardTour from '../../dummy/CardTour';
import { useParams } from 'react-router-dom';
import Approve from './Approve';
import { Button } from 'react-bootstrap';

import Search from '../image/icons/search1.png';
import User from '../../dummy/User';

export default function Transaction() {
  const [modalApprove, setModalApprove] = useState(false);

  const { index } = useParams();
  return (
    <>
      <div
        style={{
          marginTop: '12rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h3 style={{ marginBottom: '1rem', marginLeft: '-42rem' }}>Incoming Transaction</h3>
        <section
          style={{
            backgroundColor: 'white',
            width: '70vw',
            border: 'solid',
            borderColor: 'transparent',
            boxShadow: '4px 4px 12px 0px',
            minHeight: '10vh',
            paddingBottom: '1rem',
          }}
        >
          <div
            className="d-flex justify-content-between fw-bold"
            style={{
              marginLeft: '2rem',
              width: '54rem',
              borderBottom: 'solid',
              borderWidth: '3px',
              borderColor: '#B7B7B7',
              marginTop: '1rem',
            }}
          >
            <div>No</div>
            <div>User</div>
            <div>Trip</div>
            <div>Transfer Proof</div>
            <div>Status Payment</div>
            <div>Action</div>
          </div>
          <div style={{ fontWeight: 450 }}>
            {User.map((items) => (
              <div
                className="d-flex justify-content-between"
                style={{
                  marginLeft: '2rem',
                  width: '54rem',
                  borderBottom: 'solid',
                  borderWidth: '3px',
                  borderColor: '#B7B7B7',
                  marginTop: '1rem',
                  marginBottom: '2rem',
                  odd: { backgroundColor: 'white' },
                  even: { backgroundColor: 'red' },
                }}
              >
                <div>{items.id}</div>
                <div style={{ marginLeft: '-3rem' }}>{items.name}</div>
                <div style={{ marginLeft: '-3rem' }}>{items.trip}</div>
                <div style={{ marginLeft: '-3rem' }}>bca.jpg</div>
                <div>
                  <Button variant="success" className="ms-3 fw-bold text-white">
                    Approve
                  </Button>
                </div>
                <div>
                  <img
                    src={Search}
                    alt=""
                    style={{
                      cursor: 'pointer',
                    }}
                    onClick={() => setModalApprove(true)}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Approve modalApprove={modalApprove} setModalApprove={setModalApprove} />
    </>
  );
}
