import React from 'react';
import Daun from './image/daun3.png'

export default function Footer() {
  return (
    <>
    {/* <span className='float-end'>
      <img src={Daun} alt="" style={{width:'119px'}}/>
    </span> */}
    <div className="bottom-100" style={{ width: '100%', height: '9vh', marginTop:'12rem', backgroundColor: '#FFAF00' }}>
      <h5 className='text-center' style={{ color: 'white', fontWeight: 80 }}>Copyright @ 2020 Dewe Tour - Hydrilla Fragrant - NIS. All Rights reserved</h5>
    </div>
    </>
  );
}
