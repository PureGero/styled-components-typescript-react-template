import React from 'react';
import logo from './logo.svg';
import styled, { keyframes } from 'styled-components';

const AppContainer = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const appLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${appLogoSpin} infinite 20s linear;
  }
`;

const AppLink = styled.a`
  color: #61dafb;
`;

interface AppProps {
  name: string;
}

class App extends React.Component<AppProps> {
  render() {  
    return (
      <AppContainer>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <p>
            Edit <code>{this.props.name}</code> and save to reload!
          </p>
          <AppLink
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </AppLink>
        </AppHeader>
      </AppContainer>
    );
  }
}

export default App;
