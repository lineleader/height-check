import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ListItem from "./ListItem";
import { asHeight } from "./heights";

interface ResultProps {
  name: string;
  height: number;
  park: string;
  canRide: boolean;
}

const Result = (props: ResultProps) => {
  const { name, height, park, canRide } = props;
  return (
    <ResultContainer canRide={canRide}>
      <div>
        <h2>{name}</h2>
        <p>{park}</p>
      </div>
      <p>{asHeight(height)}</p>
    </ResultContainer>
  );
};

Result.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  park: PropTypes.string.isRequired,
  canRide: PropTypes.bool.isRequired,
};

export default Result;

const ResultContainer = styled(ListItem)<{ canRide: boolean }>`
  display: grid;
  grid-template-columns: 5fr 3fr;
  column-gap: 1rem;

  border-top: 8px solid
    ${props => (props.canRide ? "green" : "palevioletred")};

  justify-content: space-between;
  font-size: 1.5rem;
  & + & {
    margin-top: 1.5rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  h2 {
    margin-bottom: 0;
  }
  p {
    margin-top: 0;
  }
`;
