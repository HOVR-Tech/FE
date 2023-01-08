import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import DetailPage from "../views/DetailPage";

import JumbotronIcon1 from "./image/jumbotron1.png";
import JumbotronIcon2 from "./image/jumbotron2.png";
import ContentIcon1 from "./image/icons/guarantee1.png";
import ContentIcon2 from "./image/icons/heart1.png";
import ContentIcon3 from "./image/icons/agent1.png";
import ContentIcon4 from "./image/icons/support1.png";
import { Card, Form, InputGroup, Button } from "react-bootstrap";
import { UserContext } from "../context/userContext";
import { useQuery } from "react-query";
import { API } from "../config/api";

function Content() {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);

  let { data: trips } = useQuery("tripsCache", async () => {
    const response = await API.get("/trip");
    return response.data.data;
  });

  // console.log(trip)

  return (
    <>
      <div className="">
        <div>
          <img
            src={JumbotronIcon1}
            style={{
              marginTop: "0px",
              width: "100%",
              height: "577px",
              marginLeft: "-1px",
            }}
          />
          <img
            src={JumbotronIcon2}
            style={{
              marginTop: "-38rem",
              width: "100%",
              height: "577px",
              marginLeft: "-1px",
              background: "rgba(0, 0, 0, 0.25)",
            }}
          />
          <div
            className="text-white"
            style={{
              width: "715px",
              height: "145px",
              marginLeft: "7rem",
              marginTop: "-28rem",
              fontFamily: `url(${"https://fonts.cdnfonts.com/css/product-sans"})`,
            }}
          >
            <h1
              style={{
                fontWeight: 500,
                fontSize: "54px",
              }}
            >
              Explore
            </h1>
            <p
              style={{
                marginTop: "-15px",
                fontSize: "50px",
                fontWeight: 10,
              }}
            >
              your amazing city together
            </p>
          </div>
          <div
            style={{
              marginTop: "2rem",
              marginLeft: "8rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ color: "white", fontSize: "20px", fontWeight: 150 }}>
              Find Great Places For Vacation
            </p>
            <InputGroup
              className="mb-3"
              style={{
                width: "77vw",
              }}
            >
              <Form.Control
                placeholder="Search Here ..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <Button variant="warning" style={{ color: "white" }}>
                Search
              </Button>
            </InputGroup>
          </div>
        </div>

        <div
          className="d-flex"
          style={{
            marginTop: "7rem",
            marginLeft: "10rem",
            textAlign: "center",
          }}
        >
          <Card
            style={{
              width: "12rem",
              height: "18rem",
              marginLeft: "3rem",
              paddingBottom: "25px",
            }}
          >
            <Card.Img
              className="mx-auto mt-5 mb-2"
              variant="top"
              src={ContentIcon1}
              style={{ width: "3rem" }}
            />
            <Card.Body>
              <Card.Title>Best Price Guarantee</Card.Title>
              <Card.Text>
                A small river named Duren flows by their place and supplies
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "12rem",
              height: "18rem",
              marginLeft: "3rem",
              paddingBottom: "25px",
            }}
          >
            <Card.Img
              className="mx-auto mt-5 mb-2"
              variant="top"
              src={ContentIcon2}
              style={{ width: "3rem" }}
            />
            <Card.Body>
              <Card.Title>Travellers Love Us</Card.Title>
              <Card.Text>
                A small river named Duren flows by their place and supplies
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "12rem",
              height: "18rem",
              marginLeft: "3rem",
              paddingBottom: "25px",
            }}
          >
            <Card.Img
              className="mx-auto mt-5 mb-2"
              variant="top"
              src={ContentIcon3}
              style={{ width: "3rem" }}
            />
            <Card.Body>
              <Card.Title>Best Travel Agent</Card.Title>
              <Card.Text>
                A small river named Duren flows by their place and supplies
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "12rem",
              height: "18rem",
              marginLeft: "3rem",
              paddingBottom: "25px",
            }}
          >
            <Card.Img
              className="mx-auto mt-5 mb-2"
              variant="top"
              src={ContentIcon4}
              style={{ width: "3rem" }}
            />
            <Card.Body>
              <Card.Title>Our Dedicated Support</Card.Title>
              <Card.Text>
                A small river named Duren flows by their place and supplies
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div
          style={{
            marginTop: "4rem",
          }}
        >
          <h1
            className=""
            style={{
              marginLeft: "560px",
              marginBottom: "3rem",
            }}
          >
            Group Tour
          </h1>
          <div
            className="GroupTour"
            style={{
              width: "80vw",
              marginLeft: "160px",
              textAlign: "center",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {trips?.map((items, index) => (
              <Card
                key={index}
                style={{
                  width: "25%",
                  height: "19rem",
                  marginLeft: "3rem",
                  marginBottom: "2rem",
                  paddingBottom: "25px",
                  cursor: "Pointer",
                }}
                onClick={() => {
                  navigate(`/detail/${items.id}`);
                  console.log(items.id);
                }}
              >
                <Card.Img
                  className="mx-auto mt-2 "
                  variant="top"
                  src={items?.image}
                  style={{ width: "19vw" }}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      width: "18vw",
                      marginLeft: "-8px",
                      fontSize: "18px",
                    }}
                  >
                    {items?.title}
                  </Card.Title>
                  <div
                    className="d-flex"
                    style={{ width: "18vw", height: "8vh", marginLeft: "5px" }}
                  >
                    <Card.Text style={{ width: "8vw", color: "#FFAF00" }}>
                      IDR. {items?.price.toLocaleString()}
                    </Card.Text>
                    <Card.Text style={{ width: "8vw", textAlign: "right" }}>
                      {items?.country.name}
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
