import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

// IMPORT IMAGES
import Name from "./image/icons/name.png";
import Email from "./image/icons/email.png";
import Phone from "./image/icons/phone.png";
import Place from "./image/icons/place.png";
import Neymar from "./image/neymar.png";

import Logo from "./image/icons/logoDw.png";
import QrCode from "./image/qrCode.png";

import { UserContext } from "../context/userContext";
import { useQuery } from "react-query";
import { API } from "../config/api";

export default function Profile() {
  const userID = JSON.parse(localStorage.getItem("user"));

  let [state] = useContext(UserContext);

  let { data: transaction } = useQuery("transactionCache", async () => {
    const response = await API.get("/transactions-user/" + userID.id);

    return response.data.data;
  });
  console.log(transaction);

  return (
    <>
      <section
        className="shadow-lg"
        style={{
          marginTop: "10rem",
          marginLeft: "16rem",
          width: "60vw",
          height: "70vh",
          backgroundColor: "white",
        }}
      >
        <div className="d-flex justify-content-between">
          <div
            style={{
              marginTop: "1rem",
              marginLeft: "5rem",
            }}
          >
            <div>
              <h2>Personal Info</h2>
            </div>
            <div
              className="d-flex"
              style={{
                marginTop: "2rem",
              }}
            >
              <img
                src={Name}
                alt=""
                style={{
                  width: "32px",
                  height: "32px",
                }}
              />
              <div className="ms-2">
                <h5>{state.user.name}</h5>
                <p>Full Name</p>
              </div>
            </div>
            <div className="d-flex">
              <img
                src={Email}
                alt=""
                style={{
                  width: "32px",
                  height: "32px",
                }}
              />
              <div className="ms-2">
                <h5>{state.user.email}</h5>
                <p>Email</p>
              </div>
            </div>
            <div className="d-flex">
              <img
                src={Phone}
                alt=""
                style={{
                  width: "32px",
                  height: "32px",
                }}
              />
              <div className="ms-2">
                <h5>{state.user.number}</h5>
                <p>Phone Number</p>
              </div>
            </div>
            <div className="d-flex">
              <img
                src={Place}
                alt=""
                style={{
                  width: "32px",
                  height: "32px",
                }}
              />
              <div className="ms-2">
                <h5>{state.user.address}</h5>
                <p>Address</p>
              </div>
            </div>
          </div>
          <div className="mt-4 me-5">
            <div>
              <img
                className="shadow"
                src={Neymar}
                alt=""
                style={{
                  width: "250px",
                }}
              />
            </div>
            <Button
              variant="warning"
              className="fw-bold text-white bottom w-100"
              type="file"
            >
              Change Photo
            </Button>
          </div>
        </div>
      </section>

      {/* HISTORY TRIP */}
      <div>
        <h2
          style={{
            marginTop: "4rem",
            marginLeft: "11rem",
          }}
        >
          History Trip
        </h2>
      </div>

      {transaction?.map((items, index) => (
        <div key={index}>
          <section
            style={{
              marginTop: "2rem",
            }}
          >
            <Container
              className="shadow"
              style={{
                marginTop: "3rem",
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
                <img
                  src={Logo}
                  alt=""
                  style={{ width: "15vw", height: "10vh" }}
                />
                <div className="">
                  <h2>Booking</h2>
                  <span>
                    Saturday, <p>{items?.trip.date_trip}</p>
                  </span>
                </div>
              </div>

              <div
                className="d-flex justify-content-between"
                style={{ marginLeft: "2rem" }}
              >
                <div>
                  <h4>{items?.trip.title}</h4>
                  <p>{items?.trip.country.name}</p>
                  {items?.status === "Approved" ? (
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
                        {items?.status}
                      </p>
                    </>
                  ) : (
                    <>
                      {items?.status === "Refused" ? (
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
                          {items?.status}
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
                          {items?.status}
                        </p>
                      )}
                    </>
                  )}
                </div>
                <div className="d-flex">
                  <div>
                    <div>
                      <h6>Date Trip</h6>
                      <p>{items?.trip.date_trip}</p>
                    </div>
                    <div>
                      <h6>Accomodation</h6>
                      <p>{items?.trip.accomodation}</p>
                    </div>
                  </div>
                  <div className="ms-3">
                    <div>
                      <h6>Duration</h6>
                      <p>{items?.trip.duration}</p>
                    </div>
                    <div>
                      <h6>Transportation</h6>
                      <p>{items?.trip.transportation}</p>
                    </div>
                  </div>
                </div>
                <div style={{ marginRight: "4rem", marginTop: "1rem" }}>
                  <img src={QrCode} alt="" />
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
                  <h5>ID</h5>
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
                  <p>{index + 1}</p>
                  <p>{items?.user.name}</p>
                  <p>{items?.user.gender}</p>
                  <p>{items?.user.number}</p>
                </div>
                <div className="float-end" style={{ marginTop: "-40px" }}>
                  <h5>Qty : {items?.qty}</h5>
                  <p className="fw-bold" style={{ color: "red" }}>
                    Total : {items?.total.toLocaleString()}
                  </p>
                </div>
              </section>
              <div
                style={{
                  borderTop: "solid",
                  borderWeight: "1px",
                  marginTop: "2rem",
                  marginBottom: "2rem",
                }}
              />
            </Container>
          </section>
        </div>
      ))}
    </>
  );
}
