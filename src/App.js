import React from 'react';
import logo from './logo.svg';
import './App.css';

const fetchData = () => {
  fetch('./public/contracts.json')
  .then(res => res.json())
  .then(data => {
    console.log(data)
})
}


const App = () => {
  return (
  <h1>hi
    {fetchData()}
  </h1>
  )
}

export default App;
