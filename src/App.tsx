import React from 'react';
import { useSpring, animated } from 'react-spring'
import './Styles/App.scss';

function LoopTrue() {
  const styles = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 180 },

  })

  return (
      <animated.div
          style={{
            width: 80,
            height: 80,
            backgroundColor: '#46e891',
            borderRadius: 16,
            ...styles,
          }}
      />
  )
}

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
