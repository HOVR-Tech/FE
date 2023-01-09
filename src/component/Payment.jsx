import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import Logo from "./image/icons/logoDw.png";

import Payment1 from "./image/payment.png";
import ModalPopUp from "../component/modal/Popup";
import { useMutation, useQuery } from "react-query";
import { API } from "../config/api";
// import { UserContext } from "../context/userContext";
import { Form } from "react-bootstrap";

export default function Payment() {
  const userID = JSON.parse(localStorage.getItem("user"));

  let navigate = useNavigate();
  const [preview, setPreview] = useState(null);
  const [payment, setPayment] = useState();

  let { data: transactions } = useQuery("transactionsCache", async () => {
    const response = await API.get("/transactions-user/" + userID.id);

    return response.data.data;
  });
  // console.log(transactions);

  const handleBuy = useMutation(async (id) => {
    console.log(id);
    try {
      // Insert transaction data
      const response = await API.get(`/snap/${id}`);

      console.log("Payment Response", response);
      const token = response.data.data.token;

      window.snap.pay(token, {
        onSuccess: function (result) {
          console.log(result);
          navigate("/payment");
        },
        onPending: function (result) {
          console.log(result);
          navigate("/payment");
        },
        onError: function (result) {
          console.log(result);
        },
        onClose: function () {
          alert("BAYAR SAYANG");
        },
      });
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    //change this to the script source you want to load, for example this is snap.js sandbox env
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    //change this according to your client-key
    const myMidtransClientKey = "SB-Mid-client-NNr-I8bdvxiP6zm4";

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    // optional if you want to set script attribute
    // for example snap.js have data-client-key attribute
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  const [form, setForm] = useState({
    image: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    // Create image url for preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleUpload = useMutation(async (e) => {
    try {
      e.preventDefault();

      // CONFIGURATION
      // const config = {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // };

      const formData = new FormData()
      formData.append("image", form.image[0])
      const response = await API.patch(
        "/transaction-upload/" + transactions.id
      );
      console.log(response.data);
      if (response.data.code === 200) {
        console.log("UPLOAD SUKSES");
      }
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      {/* {transactionFilter?.status === 'Waiting Payment' ? ( */}

      <div style={{ marginTop: "9rem", marginLeft: "11rem" }}>
        <h2>Your Payment</h2>
        {/* <div style={{border:'solid', borderWeight:'5px'}}/> */}
      </div>
      {transactions?.map((items, index) => (
        <>
          {items?.status === "Waiting Payment" ? (
            <div key={index}>
              <section>
                <Container
                  style={{
                    marginTop: "2rem",
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
                      <p
                        style={{
                          fontFamily: "Avenir",
                          fontStyle: "normal",
                          fontWeight: "bold",
                          fontSize: "12px",
                          lineHeight: "16px",
                          display: "flex",
                          justifyContent: "center",
                          color: "#EC7A7A",
                          backgroundColor: "#EEE9D4",
                          width: "112px",
                        }}
                      >
                        {items?.status}
                      </p>
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
                      <div className="ms-2">
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
                    <div style={{ marginRight: "4rem" }}>
                      <img src={Payment1} alt="" />
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: "14px",
                        }}
                      >
                        Click Photo to Change
                      </p>
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
                        width: "39rem",
                        borderBottom: "solid",
                        borderWidth: "2px",
                      }}
                    >
                      <p>{index + 1}</p>
                      <p>{items.user?.name}</p>
                      <p>{items.user?.gender}</p>
                      <p>{items.user?.number}</p>
                    </div>
                    <div className="float-end" style={{ marginTop: "-40px" }}>
                      <h5>Qty : {items?.qty}</h5>
                      <p className="fw-bold" style={{ color: "red" }}>
                        Total : IDR. {items?.total.toLocaleString()}
                      </p>
                    </div>
                    <Button
                      variant="warning"
                      className="d-flex float-end justify-content-center"
                      style={{
                        marginTop: "2rem",
                        marginRight: "-11rem",
                        width: "12vw",
                        height: "6vh",
                        fontWeight: "bold",
                        color: "white",
                      }}
                      onClick={() => handleBuy.mutate(items.id)}
                      // ; setPayment(true)}
                    >
                      PAY
                    </Button>
                  </section>
                  <div
                    style={{
                      borderTop: "solid",
                      borderWeight: "1px",
                      marginTop: "6rem",
                      marginBottom: "1rem",
                    }}
                  />
                </Container>
              </section>

              <ModalPopUp show={payment} onHide={() => setPayment(false)} />
            </div>
          ) : (
            " "
          )}
        </>
      ))}

      <div>
        <h2 style={{ marginTop: "3rem", marginLeft: "11rem" }}>
          Transaction Status
        </h2>
        <div
          className="mx-auto"
          style={{ border: "solid", borderWeight: "5px", width: "85%" }}
        />
      </div>
      {transactions?.map((items, index) => (
        <>
          {items?.status !== "Waiting Payment" ? (
            <div key={index}>
              <section>
                <Container
                  style={{
                    marginTop: "2rem",
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
                      <div className="ms-2">
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
                    <Form onSubmit={(e) => handleUpload.mutate(e)}>
                      <div style={{ marginRight: "4rem" }}>
                        <div
                          style={{
                            border: "groove",
                            width: "10vw",
                            height: "20vh",
                          }}
                        >
                          <p
                            style={{
                              fontSize: "13px",
                              textAlign: "center",
                              paddingTop: "3rem",
                            }}
                          >
                            Your Proof
                          </p>
                          <img src={items?.Image} alt="" />
                        </div>

                        <label
                          htmlFor="filePicker"
                          style={{
                            backgroundColor: "transparent",
                            padding: "5px 5px",
                            cursor: "pointer",
                          }}
                        >
                          Upload Proof
                        </label>
                        <input
                          id="filePicker"
                          type="file"
                          style={{ visibility: "hidden", width: "5px" }}
                          onChange={handleChange}
                        />
                      </div>
                    </Form>
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
                        width: "39rem",
                        borderBottom: "solid",
                        borderWidth: "2px",
                      }}
                    >
                      <p>{index + 1}</p>
                      <p>{items.user?.name}</p>
                      <p>{items.user?.gender}</p>
                      <p>{items.user?.number}</p>
                    </div>
                    <div className="float-end" style={{ marginTop: "-40px" }}>
                      <h5>Qty : {items?.qty}</h5>
                      <p className="fw-bold" style={{ color: "red" }}>
                        Total : IDR. {items?.total.toLocaleString()}
                      </p>
                    </div>
                  </section>
                  <div
                    style={{
                      borderTop: "solid",
                      borderWeight: "1px",
                      marginTop: "6rem",
                      marginBottom: "1rem",
                    }}
                  />
                </Container>
              </section>
            </div>
          ) : (
            ""
          )}
        </>
      ))}

      {/* // )} */}
    </>
  );
}
