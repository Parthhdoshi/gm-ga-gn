import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let curDate = new Date(2020,5,5,20);
curDate = curDate.getHours();

let greeting = "";
let cssStyle = {};

if(curDate >= 0 && curDate<12){
  greeting = "Good Moring";
  cssStyle.color = 'Green';
} else if(curDate >= 12 && curDate<19){
  greeting = "Good Afternoon";
  cssStyle.color = 'Red';
} else {
greeting = "Good Night";
cssStyle.color = 'blue';
}

ReactDOM.render(
  <>
  <h1>Hello sir, <span style={cssStyle}>{greeting}</span></h1>
  </>,
  document.getElementById('root')

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
