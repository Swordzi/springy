import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/Main.scss';
import './Styles/index.scss';
import reportWebVitals from "./reportWebVitals";
import LoopTrue from "./spin";



function App() {
    return (
        <div className="App">
            <header className="App-header">
                <LoopTrue />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
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

export default App;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
