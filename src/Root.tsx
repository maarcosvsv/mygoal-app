import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import './styles/global.css';
import AlertProvider from "./components/Alert";

let root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <AlertProvider>
            <App />
        </AlertProvider>
    </React.StrictMode>,
);