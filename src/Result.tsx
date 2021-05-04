import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";

import ListItem from "./ListItem";
import { asHeight } from "./heights";
import { Rideable } from "./rideable";

interface ResultProps {
  name: string;
  height: number;
  park: string;
  canRide: Rideable;
  diff: number;
}

const Result = (props: ResultProps) => {
  const { name, height, diff, park, canRide } = props;
  const displayHeight = asHeight(height);
  return (
    <ThemeProvider theme={getTheme(canRide)}>
      <ResultContainer>
        <Names>
          <h2>{name}</h2>
          <p>{park}</p>
        </Names>
        <Height>{displayHeight}</Height>
        <Status>
          {canRide === Rideable.Neutral ? (
            <>&ndash;</>
          ) : canRide === Rideable.Yes ? (
            "Yes!"
          ) : (
            <div>
              Not yet<Small>{asHeight(diff)} needed</Small>
            </div>
          )}
        </Status>
      </ResultContainer>
    </ThemeProvider>
  );
};

Result.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  diff: PropTypes.number.isRequired,
  park: PropTypes.string.isRequired,
  canRide: PropTypes.oneOf([Rideable.Neutral, Rideable.Yes, Rideable.No])
    .isRequired,
};

export default Result;

const ResultContainer = styled(ListItem)`
  display: grid;
  grid-template-columns: 8fr 2fr 2fr;
  column-gap: 1rem;

  border-top: 8px solid ${props => props.theme.color};

  justify-content: space-between;
  font-size: 1.25rem;
  & + & {
    margin-top: 1.5rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Names = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0.5rem 0;

  * {
    margin: 0;
  }

  @media (max-width: 768px) {
    p {
      font-size: 1.2rem;
    }
  }
`;

const neutralTheme = {
  color: "gainsboro",
};

const canRideTheme = {
  color: "mediumspringgreen",
};

const cantRideTheme = {
  color: "lightcoral",
};

const themes = {
  [Rideable.Neutral]: neutralTheme,
  [Rideable.Yes]: canRideTheme,
  [Rideable.No]: cantRideTheme,
};

const getTheme = (canRide: Rideable) => {
  return themes[canRide];
};

const Height = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${neutralTheme.color};
  border-radius: 0.25rem;
  padding: 0.5rem;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const Status = styled(Height)`
  background-color: ${props => props.theme.color};
`;

const Small = styled.div`
  font-size: 0.95rem;
  opacity: 0.75;
  font-style: italics;
`;
