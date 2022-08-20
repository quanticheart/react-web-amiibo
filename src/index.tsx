import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from "./Routes/Router";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import MuiThemes from "./Ui/Resources/MuiThemes";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <MuiThemes>
                <Router />
            </MuiThemes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();