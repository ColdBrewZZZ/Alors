import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Login from './Login';
import OrderHistory from './OrderHistory';

function Account() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Login />} />
          <Route path="OrderHistory" element={<OrderHistory />} />
        </Route>
      </Routes>
    </>
  );
}

export default Account;
