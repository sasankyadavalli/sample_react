import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login/login';
import "./Login/login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Router, BrowserRouter} from 'react-router';
import routes from './routes';
import {Provider} from 'react-redux';
import { createStore } from 'redux'; 
import TodoReducers from './reducers';
import Order from './Order/order';

let store = createStore(TodoReducers); 

const app = document.getElementById("root");

ReactDOM.render( 
  <Order></Order>, app
);