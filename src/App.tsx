import React from 'react';
import './App.css';
import {FlexColumn} from "./components/shared/Flex";
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import {DashboardContextProvider} from "./contexts/DashboardContext";

function App() {
  return (
    <FlexColumn className="App">
        <DashboardContextProvider>
            <RouterProvider router={router} />

        </DashboardContextProvider>
    </FlexColumn>
  );
}

export default App;
