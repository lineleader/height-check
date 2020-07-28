import React, { useState } from "react";
import styled from "styled-components";

import Input from "./Input";
import Result from "./Result";
import { heights, parse, asHeight } from "./heights";

function App() {
  const [height, setHeight] = useState("");

  const parsedHeight = parse(height);

  const canRide = heights
    .filter(attraction => attraction.height <= parsedHeight)
    .map(attraction => (
      <Result key={attraction.name} canRide={true} {...attraction} />
    ));

  const cantRide = heights
    .filter(attraction => attraction.height > parsedHeight)
    .map(attraction => (
      <Result key={attraction.name} canRide={false} {...attraction} />
    ));

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
          placeholder={`42 or 3' 6"`}
        />
        {parsedHeight > -1 && (
          <>
            <pre>{asHeight(parsedHeight)}</pre>
            {canRide}
            {cantRide}
          </>
        )}
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

const AppBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
