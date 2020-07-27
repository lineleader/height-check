import React, { useState } from "react";
import styled from "styled-components";

import Input from "./Input";

function App() {
  const [height, setHeight] = useState("");
  return (
    <AppWrapper>
      <AppHeader>
        <h1>Walt Disney World Ride Height Calculator</h1>
      </AppHeader>
      <AppBody>
        <Input
          label="Enter your (child's) height:"
          name="height"
          value={height}
          onChange={setHeight}
          placeholder='42 or 3&amp; 6"'
        />
        <pre>{height}</pre>
      </AppBody>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  color: white;
`;

const AppHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

const AppBody = styled.div``;
