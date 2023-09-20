import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import App from './App.tsx';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <ToastContainer position="top-center" autoClose={3000} limit={1} />
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
