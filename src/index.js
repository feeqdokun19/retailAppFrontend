import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Onreact from './Onreact';
// import Login from './Login';
//import Header from './Header';
//import Home from './Home';
//import Fblogin from './Fblogin';
//import Cards from './Cards';
//import Products from './LoadData/Products';
//import Transaction from './transactiondashboard/Transactions';
//import Transactionsaving from './transactiondashboard/Transactionsaving';
//import Transactions from './components/Transaction'
//import Data from './components/Data'
//import Transactiondata from './components/Transactiondata';
//import Welcome from './classwork/Welcome';
//import Feeq from './newcomponent/Feeq';
//import Transactiondetails from './components/Transactiondetails';
//import Homepage from './schoolproject/Homepage'
//import Login from "./cloneblusalt/Login"
//import Facebook from './facebookComponent/Facebook';
//import RetailHome from './retailmanagement/RetailHome';
//import Createadmin from './retailmanagement/adminSignup/Createadmin';
import AdminLogin from './retailmanagement/adminSignup/AdminLogin';
//import Displaypage from './retailmanagement/adminSignup/Displaypage'
 import reportWebVitals from './reportWebVitals';
 
ReactDOM.render(
  <React.StrictMode>
    <AdminLogin />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
