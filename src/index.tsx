import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Docs from "./Pages/Docs";
import NoPage from "./Pages/NoPage";
import './Styles/Main.scss';
import './Styles/index.scss';
import reportWebVitals from "./reportWebVitals";

import './Styles/spin.scss';


export default function App() {
    return (
        <div className="Main">
            <header className="Main-header">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route index element={<Home/>}/>
                            <Route path="docs" element={<Docs/>}/>
                            <Route path="*" element={<NoPage/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </header>
        </div>
    );
}


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
    <App/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
