import React, { useState } from "react";
import styled from "styled-components";

import GlobalStyles from "./globalStyles";

import Input from "./Input";
import Result from "./Result";
import { heights, parse, asHeight } from "./heights";
import { isRideable } from "./rideable";
import AppFooter from "./AppFooter";

function App() {
  const [height, setHeight] = useState("");

  const parsedHeight = parse(height);

  const results = heights.map(attraction => (
    <Result
      key={attraction.name}
      canRide={isRideable(parsedHeight, attraction.height)}
      {...attraction}
      diff={attraction.height - parsedHeight}
    />
  ));

  return (
    <>
      <GlobalStyles />
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
            <ResultsWrapper>
              <p>
                {parsedHeight > 0 ? (
                  <>At {asHeight(parsedHeight)}, you can ride...</>
                ) : (
                  <>&nbsp;</>
                )}
              </p>
              {results}
            </ResultsWrapper>
          )}
        </AppBody>
        <AppFooter />
      </AppWrapper>
    </>
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

const ResultsWrapper = styled.div`
  margin-top: 1rem;
  max-width: 800px;
  text-align: left;
`;
