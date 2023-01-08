import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useNavigate, useParams, Link } from 'react-router-dom';

function ModalPopUp({ show, onHide }) {
  const navigate = useNavigate();
  const { index } = useParams();
  return (
    <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <h4 className="text-center m-0 p-5">
          Your payment will be confirmed within 1 x 24 hours To see orders click{' '}
         <Link to={'/paymentPending'} style={{ textDecoration: 'none', cursor: 'pointer' }} >
         <p className="text-success fs-5">
            Here
          </p>{' '}
          </Link>
          thank you

        </h4>
      </Modal.Body>
    </Modal>
  );
}

export default ModalPopUp;
