import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './views/Home';
import DetailPage from './views/DetailPage';
import PaymentPage from './views/PaymentPage';
import PaymentPendingPage from './views/PaymentPendingPage';
import ProfilePage from './views/ProfilePage';

// ADMIN IMPORT
import TransactionPage from './views/admin/TransactionPage';
import AddTripPage from './views/admin/AddTripPage';
import IncomeTripPage from './views/admin/IncomeTripPage';
import ApprovePage from './views/admin/ApprovePage';

// NAVBAR IMPORT
import NavBar from './component/navbar/Navbar';
import Footer from './component/Footer';
import NavIn from './component/navbar/NavbarIn';

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/detail/:index" element={<DetailPage />} />
        <Route exact path="/payment/:index" element={<PaymentPage />} />
        <Route exact path="/paymentPending/:index" element={<PaymentPendingPage />} />
        <Route exact path="/profile" element={<ProfilePage />} />

        {/* ADMIN */}
        <Route exact path="/listTransaction" element={<TransactionPage />} />
        <Route exact path="/incomeTrip" element={<IncomeTripPage />} />
        <Route exact path="/addTrip" element={<AddTripPage />} />
      </Routes>
      <Footer />
    </>
  );
}
