import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import CardTour from '../../dummy/CardTour';
import { useQuery } from 'react-query';
import { API } from '../../config/api';

export default function IncomeTrip() {
  const navigate = useNavigate();

  let { data: trips } = useQuery('tripsCache', async () => {
    const response = await API.get('/trip');
    return response.data.data;
  });
  return (
    <>
      <div>
        <div className="d-flex justify-content-between fw-bold" style={{ marginTop: '10rem', marginLeft: '11rem', width: '70vw' }}>
          <h2>Income Trip</h2>
          <Button variant="warning" className="fw-bold text-white" onClick={() => navigate('/addTrip')}>
            Add Trip
          </Button>
        </div>
        <div
          className="GroupTour"
          style={{
            width: '80vw',
            marginTop: '2rem',
            marginLeft: '160px',
            textAlign: 'center',
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
         {trips?.map((items) => (
              <Card
                style={{ width: '25%', height: '18rem', marginLeft: '3rem', marginBottom: '2rem', paddingBottom: '25px', cursor: 'Pointer' }}
                onClick={() => {
                  navigate(`/detail/${items.id}`);
                  console.log(items.id)
                }}
              >
                <Card.Img className="mx-auto mt-2 " variant="top" src={items?.image} style={{ width: '19vw' }} />
                <Card.Body>
                  <Card.Title style={{ width: '18vw', marginLeft: '-8px', fontSize: '18px' }}>{items?.title}</Card.Title>
                  <div className="d-flex" style={{ width: '18vw', height: '8vh', marginLeft: '5px' }}>
                    <Card.Text style={{ width: '8vw', color: '#FFAF00' }}>IDR. {items?.price.toLocaleString()}</Card.Text>
                    <Card.Text style={{ width: '8vw', textAlign: 'right' }}>{items?.country.name}</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            ))}
        </div>
      </div>
    </>
  );
}
