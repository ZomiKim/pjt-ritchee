import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// 🔥 Toastify import
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* 🔥 ToastContainer는 여기 배치 */}
    <ToastContainer
      position="bottom-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={true}
      //   closeOnClick={false}
      //   rtl={false}
      //   pauseOnFocusLoss
      //   draggable
      pauseOnHover={false}
      theme="dark"
    />

    <App />
  </>
);
