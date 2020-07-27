/* globals test expect */
import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Walt Disney World Ride Height Calculator/i);
  expect(linkElement).toBeInTheDocument();
});
