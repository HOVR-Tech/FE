import React, { useEffect, useState } from "react";
import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import CardTour from "../dummy/CardTour";
import Payment from "./Payment";

import DetailTour1 from "./image/tour/detailTour1.png";
import DetailTour2 from "./image/tour/detailTour2.png";
import DetailTour3 from "./image/tour/detailTour3.png";

import Hotel from "./image/icons/hotel.png";
import Flight from "./image/icons/vector.png";
import Meal from "./image/icons/meal.png";
import Time from "./image/icons/time.png";
import Calendar from "./image/icons/calendar.png";
import { type } from "@testing-library/user-event/dist/type";
import { useMutation, useQuery } from "react-query";
import { API } from "../config/api";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function DetailCard() {
  const navigate = useNavigate();
  const { id, user_id } = useParams();

  const [state, dispatch] = useContext(UserContext);

  const [counter, setCounter] = useState(1);
  const plusCounter = () => setCounter(counter + 1);
  let minusCounter = () => setCounter(counter - 1);

  const Hitung = (props) => {
    return parseInt(counter) * parseInt(props);
  };

  if (counter <= 1) {
    minusCounter = () => setCounter(1);
  }

  let { data: trip, refetch: tripFetch } = useQuery("tripCache", async () => {
    const response = await API.get("/trip/" + id);

    return response.data.data;
  });

  const handleBooking = useMutation(async (e) => {
    try {
      e.preventDefault();
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const data = {
        qty: counter,
        total: counter * trip.price,
        status: "Waiting Payment",
        trip_id: parseInt(id),
        user_id: parseInt(user_id),
      };

      const body = JSON.stringify(data);

      const response = await API.post("/transaction", body, config);
      if (response.status === 200) {
        tripFetch();
      }
    } catch (error) {
      console.log(error);
    }
  });

  // useEffect(() => {

  // }, [])

  return (
    <>
      <div style={{ marginTop: "10rem" }}>
        <section style={{ marginLeft: "15rem" }}>
          <div className=" ">
            <h1 style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>
              {trip?.title}
            </h1>
            <p
              style={{
                fontFamily: "sans-serif",
                fontWeight: "bold",
                color: "#A8A8A8",
              }}
            >
              {trip?.country.name}
            </p>
          </div>
        </section>

        <Container style={{ marginTop: "2rem" }}>
          <Row>
            <Col className="d-flex justify-content-center mb-2">
              <img
                src={trip?.image}
                style={{ width: "59vw", height: "55vh" }}
                alt=""
              />
            </Col>
          </Row>
          <Row style={{ marginLeft: "142px" }}>
            <Col>
              <img
                src={DetailTour1}
                style={{ width: "19vw", height: "28vh" }}
                alt=""
              />
            </Col>
            <Col style={{ marginLeft: "-10rem" }}>
              <img
                src={DetailTour2}
                style={{ width: "19vw", height: "28vh" }}
                alt=""
              />
            </Col>
            <Col style={{ marginLeft: "-10rem" }}>
              <img
                src={DetailTour3}
                style={{ width: "19vw", height: "28vh" }}
                alt=""
              />
            </Col>
          </Row>
        </Container>

        <section style={{ marginLeft: "15rem", marginTop: "2rem" }}>
          <h4>Information Trip</h4>
          <div className="d-flex">
            <div>
              <p
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  color: "#A8A8A8",
                }}
              >
                Accommodation
              </p>
              <div className="d-flex">
                <img src={Hotel} style={{ width: "2vw" }} />
                <h5 className="ms-1">{trip?.accomodation}</h5>
              </div>
            </div>
            <div className="ms-1">
              <p
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  color: "#A8A8A8",
                }}
              >
                Transportation
              </p>
              <div className="d-flex">
                <img src={Flight} style={{ width: "2vw" }} />
                <h5 className="ms-1">{trip?.transportation}</h5>
              </div>
            </div>
            <div className="ms-1">
              <p
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  color: "#A8A8A8",
                }}
              >
                Eat
              </p>
              <div className="d-flex">
                <img src={Meal} style={{ width: "2vw" }} />
                <h5 className="ms-1">{trip?.eat}</h5>
              </div>
            </div>
            <div className="ms-1">
              <p
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  color: "#A8A8A8",
                }}
              >
                Duration
              </p>
              <div className="d-flex">
                <img src={Time} style={{ width: "2vw" }} />
                <h5 className="ms-1">{trip?.duration}</h5>
              </div>
            </div>
            <div className="ms-1">
              <p
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  color: "#A8A8A8",
                }}
              >
                Date Trip
              </p>
              <div className="d-flex">
                <img src={Calendar} style={{ width: "2vw" }} />
                <h5 className="ms-1">{trip?.date_trip}</h5>
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            marginLeft: "15rem",
            marginTop: "2rem",
            width: "56rem",
            textAlign: "justify",
          }}
        >
          <h4>Description</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </section>

        <section>
          <div className="d-flex justify-content-center">
            <Stack
              className=" d-flex justify-content-between"
              direction="horizontal"
              gap={2}
              style={{
                width: "66%",
                marginLeft: "1rem",
              }}
            >
              <div className="d-flex">
                <h4 className="fw-bold text-warning">
                  IDR. {trip?.price.toLocaleString()}
                </h4>
                <h4 className="ms-2 fw-bold">/ Person</h4>
              </div>
              <div style={{ marginRight: "-5px" }}>
                <Button
                  className="text-white fw-bold"
                  variant="warning"
                  onClick={minusCounter}
                >
                  -
                </Button>
                <span className="ms-2 me-2 fw-bold">{counter}</span>
                <Button
                  className="text-white fw-bold"
                  variant="warning"
                  onClick={plusCounter}
                >
                  +
                </Button>
              </div>
            </Stack>
          </div>

          <div className="d-flex justify-content-center mt-3">
            <Stack
              className=" d-flex justify-content-between"
              direction="horizontal"
              gap={2}
              style={{
                width: "66%",
                marginLeft: "1rem",
              }}
            >
              <h4 className="fw-bold">Total:</h4>
              <h4
                className="fw-bold text-warning"
                style={{ marginRight: "-5px" }}
              >
                IDR. {Hitung(trip?.price).toLocaleString()}
              </h4>
            </Stack>
          </div>
          <div
            className="d-flex float-end mt-4"
            style={{ marginRight: "217px" }}
          >
            <p className="">
              {(() => {
                if (state.isLogin && state.user.role.includes("user")) {
                  return (
                    <Link to={"/payment"}>
                      <Button
                        onClick={(e) => handleBooking.mutate(e)}
                        className="text-white fw-bold ps-4 pe-4"
                        variant="warning"
                      >
                        Book Now
                      </Button>
                    </Link>
                  );
                }
              })()}
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
