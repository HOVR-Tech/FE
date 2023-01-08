import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { API, setAuthToken } from "./config/api";
import { UserContext } from "./context/userContext";

import Home from "./views/Home";
import DetailPage from "./views/DetailPage";
import PaymentPage from "./views/PaymentPage";
import PaymentPendingPage from "./views/PaymentPendingPage";
import ProfilePage from "./views/ProfilePage";

// ADMIN IMPORT
import TransactionPage from "./views/admin/TransactionPage";
import AddTripPage from "./views/admin/AddTripPage";
import IncomeTripPage from "./views/admin/IncomeTripPage";

// NAVBAR IMPORT
import NavBar from "./component/navbar/Navbar";
import Footer from "./component/Footer";

export default function App() {
  const [state, dispatch] = useContext(UserContext);
  
  if (localStorage.getItem("token")) {
    setAuthToken(localStorage.getItem("token"));
  }

  const checkUser = async () => {

    try {
      const response = await API.get('/check-auth');
      console.log(response)
      // FALSE TOKEN
      if (response.status === 401) {
        return dispatch({
          type: 'AUTH_ERROR',
        });
      }

      // GET USER DATA
      let payload = response.data.data;
      // GET TOKEN FROM LOCAL STORAGE
      payload.token = localStorage.getItem("token");

      // SEND DATA TO USECONTEXT
      dispatch({
        type: 'USER_SUCCESS',
        payload,
      })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkUser();
    }
  }, [])
  
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/detail/:id" element={<DetailPage />} />
          <Route exact path="/payment" element={<PaymentPage />} />
          <Route exact path="/paymentPending" element={<PaymentPendingPage />} />
          <Route exact path="/profile" element={<ProfilePage />} />

          
          {/* ADMIN */}
          <Route exact path="/listTransaction" element={<TransactionPage />} />
          <Route exact path="/incomeTrip" element={<IncomeTripPage />} />
          <Route exact path="/addTrip" element={<AddTripPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
