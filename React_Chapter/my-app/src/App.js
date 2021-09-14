import React from 'react';
import Comment from './Comment';
import logo from './logo.svg';
import './App.css';

const comments = [
    { name:'Inje Lee', content:'My comment!' },
    { name:'현빈', content:'이게 최선입니까? 확실해요?'},
    { name:'Tony Stark', content:'I am Iron man'}
];

function App() {
  return (
    <div className="App" style={{ padding: 16, backgroundColor: '#282c34' }}>
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <div style={{ display: 'flex', flexDirection: 'row' }}>
          {comments.map((comment, index) => {
              return (
                  <Comment
                      name={comment.name}
                      content={comment.content}
                  />
              )
          })}
      </div>
    </div>
  );
}

export default App;
