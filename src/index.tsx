import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Routers } from './Components/routers';
/*import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCra1Xf0WeWYoVbku7Qg3dpIYNKi82hLp0",
  authDomain: "nerd-store-coderhouse.firebaseapp.com",
  projectId: "nerd-store-coderhouse",
  storageBucket: "nerd-store-coderhouse.appspot.com",
  messagingSenderId: "384900068279",
  appId: "1:384900068279:web:0aa433d9392b70ca596e32"
};

const app = initializeApp(firebaseConfig);
*/
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
  <>
  <Routers />
  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

