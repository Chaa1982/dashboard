import React from 'react';
import './App.css';
import {FlexColumn} from "./components/shared/Flex";
import {Auth} from "./components/static/auth/Auth";

function App() {
  return (
    <FlexColumn className="App">
      <Auth />

    </FlexColumn>
  );
}

export default App;
