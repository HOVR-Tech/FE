import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Approve from "./Approve";
import { Button } from "react-bootstrap";

import Search from "../image/icons/search1.png";
import User from "../../dummy/User";
import { UserContext } from "../../context/userContext";
import { useQuery } from "react-query";
import { API } from "../../config/api";

export default function Transaction() {
  const [modalApprove, setModalApprove] = useState(false);
  const [trx, setTrx] = useState(null);

  const [trxID, setTrxID] = useState(null);

  const [state] = useContext(UserContext);

  let { data: transactions } = useQuery("transactionsCache", async () => {
    const response = await API.get("/transactions");

    return response.data.data;
  });

  return (
    <div key={trxID}>
      <div
        style={{
          marginTop: "12rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3 style={{ marginBottom: "1rem", marginLeft: "-42rem" }}>
          Incoming Transaction
        </h3>
        <section
          style={{
            backgroundColor: "white",
            width: "70vw",
            border: "solid",
            borderColor: "transparent",
            boxShadow: "4px 4px 12px 0px",
            minHeight: "10vh",
            paddingBottom: "1rem",
          }}
        >
          <div
            className="d-flex justify-content-between fw-bold"
            style={{
              marginLeft: "2rem",
              width: "54rem",
              borderBottom: "solid",
              borderWidth: "3px",
              borderColor: "#B7B7B7",
              marginTop: "1rem",
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
            {transactions?.map((items, index) => (
              <div
                className="d-flex justify-content-between"
                style={{
                  marginLeft: "2rem",
                  width: "54rem",
                  borderBottom: "solid",
                  borderWidth: "3px",
                  borderColor: "#B7B7B7",
                  marginTop: "1rem",
                  marginBottom: "2rem",
                  odd: { backgroundColor: "white" },
                  even: { backgroundColor: "red" },
                }}
              >
                <div>{index + 1}</div>
                <div style={{ marginLeft: "-3rem" }}>{items.user?.name}</div>
                <div style={{ marginLeft: "-3rem" }}>
                  {items.trip?.country.name}
                </div>
                <div style={{ marginLeft: "-3rem" }}>{items?.image}</div>
                <div>
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
                <div>
                  <img
                    src={Search}
                    alt=""
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setTrxID(index + 1);
                      setTrx(items);
                      setModalApprove(true);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Approve
        modalApprove={modalApprove}
        setModalApprove={setModalApprove}
        trxID={trxID}
        trx={trx}
      />
    </div>
  );
}
