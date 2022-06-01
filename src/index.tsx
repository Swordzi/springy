import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/Main.scss';
import './Styles/index.scss';
import reportWebVitals from "./reportWebVitals";
import Spin from "./spin";



function Main() {
    return (
        <div className="Main">
            <header className="Main-header">
                <Spin />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="Main-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default Main;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
