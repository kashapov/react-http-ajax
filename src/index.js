import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.interceptors.request.use(config => {
  console.log(config);
  // edit request config
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  console.log(response);
  // edit response config
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
});


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
