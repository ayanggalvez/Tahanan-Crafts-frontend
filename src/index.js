import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ForgotPass from './ForgotPass';
import ForgotPass2 from './ForgotPass2';
import ChangePassword from './ChangePassword'; // <-- added

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/forgot-password" element={<ForgotPass />} />
      <Route path="/forgotpass2" element={<ForgotPass2 />} />
      <Route path="/change-password" element={<ChangePassword />} /> {/* <-- new route */}
    </Routes>
  </BrowserRouter>
);

