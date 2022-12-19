import React from 'react';

import Segitiga from '../image/icons/segitiga.png';
import Trip1 from '../image/icons/journey1.png';
import Bill1 from '../image/icons/bill1.png';
import Logout1 from '../image/icons/logout1.png';

export default function AdminDrop() {
  return (
    <>
      <section
        style={{
          backgroundColor: 'white',
          marginLeft: '30rem',
          marginTop: '2rem',
          width: ' 14vw',
          height: '27vh',
          border: 'solid',
          borderRadius: '10px',
          borderWeight: '1px',
          borderColor: 'transparent',
          boxShadow: '2px 4px 12px 0px',
        }}
      >
        <div className="float-end" style={{ marginTop: '-25px' }}>
          <img src={Segitiga} alt="" />
        </div>
        <div
          style={{
            marginTop: '1rem',
            minHeight: '10vh',
            marginLeft: '2rem',
          }}
        >
          <div className="d-flex mb-2">
            <img src={Trip1} alt="" />
            <h5 className="ms-1">Trip</h5>
          </div>
          <div className="d-flex mb-2">
            <img src={Bill1} alt="" />
            <h5 className="ms-1">Transaction</h5>
          </div>

          <div style={{ borderBottom: 'solid', borderColor: '#A8A8A8', marginLeft: '-2rem', marginBottom: '1rem' }} />
          <div className="d-flex">
            <img src={Logout1} alt="" />
            <h5 className="ms-1">Logout</h5>
          </div>
        </div>
      </section>
    </>
  );
}
