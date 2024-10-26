import React from 'react';
import './App.css';
import {FlexColumn} from "./components/shared/Flex";
import {RouterProvider} from "react-router-dom";
import {router} from "./router";

function App() {
  return (
    <FlexColumn className="App">
        <RouterProvider router={router} />
    </FlexColumn>
  );
}

export default App;
