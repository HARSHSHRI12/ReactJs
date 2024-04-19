import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Landing_page from './Mini_project/Landing_page';
//import Login_page from './Team_project/Login_page';


//import Incremant_num from './Incremant_num';
//import Navigatorbar from './Navigatorbar';
//import Header from './Header';
//import Footer from './Footer';
//import Left from './Left';
//import Right from './Right';
//import Content from './Content';
//import First_react from './First_react';
//import Routecon from './Routecon';
//import reportWebVitals from './reportWebVitals';
//import Api_call from './Api_call';
//import Create_api from './Create_api';
import Front_page from './Mini_project/Front_page';
import Mainpage from './Mini_project/Mainpage';
import CrimeIn from './Mini_project/CrimeIn';
/*import Tnavbar from './Team_project/Tnavbar';
import Home_page from './Team_project/Home_page';
//import React_prject from './React_prject';*/ 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     
   
   <Front_page />
  <Mainpage/>
{/* <Tnavbar/>
<Tnavbar/>
<Home_page/>
<Landing_page/>
<CrimeIn/>*/}
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

