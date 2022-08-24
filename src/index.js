import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainNavbar from './components/MainNavbar/MainNavbar';
import App from './App';
import AllCharts from './components/Charts/AllCharts';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainNavbar />
    <App />
    <AllCharts />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
