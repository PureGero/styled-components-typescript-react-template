import React from 'react';
import logo from './logo.svg';
import './App.css';

interface AppProps {
  name: string;
}

class App extends React.Component<AppProps> {
  render() {  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>{this.props.name}</code> and save to reload!
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
}

export default App;
