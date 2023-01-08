import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Button, Modal } from "react-bootstrap";
import Logo from "../image/icons/logoDw.png";
import User from "../../dummy/User";
import { useMutation, useQuery } from "react-query";
import { API } from "../../config/api";

import Payment1 from "../image/payment.png";

export default function Approve({ modalApprove, setModalApprove, trx, trxID }) {
  const { id } = useParams();

  const handleApprove = useMutation(async (e) => {
    try {
      e.preventDefault();

      const body = "Approved";
      const response = await API.patch(
        "/transaction/" + trx.id,
        JSON.stringify(body)
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  });

  const handleRefuse = useMutation(async (e) => {
    try {
      e.preventDefault();

      const body = "Refused";
      const response = await API.patch(
        "/transaction/" + trx.id,
        JSON.stringify(body)
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      <Modal key={id} show={modalApprove} onHide={() => setModalApprove(false)}>
        <Container
          style={{
            marginLeft: "-15rem",
            width: "60rem",
            minHeight: "10rem",
            border: "solid",
            borderWidth: "2px",
            borderColor: "#B7B7B7",
            backgroundColor: "white",
          }}
        >
          <div
            className="d-flex justify-content-between"
            style={{
              marginTop: "1rem",
              marginLeft: "2rem",
              marginRight: "4rem",
            }}
          >
            <img src={Logo} alt="" style={{ width: "15vw", height: "10vh" }} />
            <div className="">
              <h2>Booking</h2>
              <span>
                Saturday, <p>{trx?.trip.date_trip}</p>
              </span>
            </div>
          </div>

          <div
            className="d-flex justify-content-between"
            style={{ marginLeft: "2rem" }}
          >
            <div>
              <h4>{trx?.trip.title}</h4>
              <p>{trx?.trip.country.name}</p>
              {trx?.status === "Approved" ? (
                <>
                  <p
                    className="border rounded-2 bg-success"
                    style={{
                      fontFamily: "Avenir",
                      fontStyle: "normal",
                      fontWeight: "bold",
                      fontSize: "12px",
                      lineHeight: "20px",
                      display: "flex",
                      justifyContent: "center",
                      color: "#FFFFFF",
                      width: "140px",
                    }}
                  >
                    {trx?.status}
                  </p>
                </>
              ) : (
                <>
                  {trx?.status === "Refused" ? (
                    <p
                      className="border rounded-2 bg-danger"
                      style={{
                        fontFamily: "Avenir",
                        fontStyle: "normal",
                        fontWeight: "bold",
                        fontSize: "12px",
                        lineHeight: "20px",
                        display: "flex",
                        justifyContent: "center",
                        color: "#FFFFFF",
                        width: "140px",
                      }}
                    >
                      {trx?.status}
                    </p>
                  ) : (
                    <p
                      className="border rounded-2 bg-warning"
                      style={{
                        fontFamily: "Avenir",
                        fontStyle: "normal",
                        fontWeight: "bold",
                        fontSize: "12px",
                        lineHeight: "20px",
                        display: "flex",
                        justifyContent: "center",
                        color: "#FFFFFF",
                        width: "140px",
                      }}
                    >
                      {trx?.status}
                    </p>
                  )}
                </>
              )}
            </div>
            <div className="d-flex">
              <div>
                <div>
                  <h6>Date Trip</h6>
                  <p>{trx?.trip.date_trip}</p>
                </div>
                <div>
                  <h6>Accomodation</h6>
                  <p>{trx?.trip.accomodation}</p>
                </div>
              </div>
              <div>
                <div>
                  <h6>Duration</h6>
                  <p>{trx?.trip.duration}</p>
                </div>
                <div>
                  <h6>Transportation</h6>
                  <p>{trx?.trip.transportation}</p>
                </div>
              </div>
            </div>
            <div style={{ marginRight: "2rem" }}>
              <img src={Payment1} alt="" />
            </div>
          </div>
          <section
            style={{
              width: "53rem",
              marginTop: "1rem",
              marginLeft: "2rem",
              marginBottom: "1rem",
            }}
          >
            <div
              className="d-flex justify-content-between"
              style={{
                width: "46rem",
                borderBottom: "solid",
                borderWidth: "2px",
              }}
            >
              <h5>No</h5>
              <h5>Full Name</h5>
              <h5>Gender</h5>
              <h5>Phone</h5>
              <h5 style={{ color: "white" }}>_</h5>
            </div>
            <div
              className="d-flex justify-content-between"
              style={{
                width: "40rem",
                borderBottom: "solid",
                borderWidth: "2px",
              }}
            >
              <p>{trxID}</p>
              <p>{trx?.user.name}</p>
              <p>Male</p>
              <p>{trx?.user.number}</p>
            </div>
            <div className="float-end" style={{ marginTop: "-40px" }}>
              <h5>Qty : {trx?.qty}</h5>
              <p className="fw-bold" style={{ color: "red" }}>
                Total : IDR. {trx?.total.toLocaleString()}
              </p>
            </div>
            <div
              className="float-end"
              style={{ marginTop: "30px", marginRight: "-10rem" }}
            >
              <Button
                variant="danger"
                className="fw-bold text-white"
                onClick={(e) => {
                  handleRefuse.mutate(e);
                  setModalApprove(false);
                }}
              >
                Refuse
              </Button>
              <Button
                variant="success"
                className="ms-3 fw-bold text-white"
                onClick={(e) => {
                  handleApprove.mutate(e);
                  setModalApprove(false);
                }}
              >
                Approve
              </Button>
            </div>
          </section>
          <div
            style={{
              borderTop: "solid",
              borderWeight: "1px",
              marginTop: "6rem",
              marginBottom: "2rem",
            }}
          />
        </Container>
      </Modal>
    </>
  );
}
