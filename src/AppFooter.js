import React from "react";
import styled from "styled-components";

import UnderlineLink from "./UnderlineLink";

const mailToHref = "mailto:chris@lineleader.io?subject=DVC%20Search";

const AppFooter = () => {
  return (
    <Footer>
      <HelpCallout>
        Need help? Hit a snag? Email me:{" "}
        <UnderlineLink href={mailToHref}>chris@lineleader.io</UnderlineLink>
      </HelpCallout>
      <p>&copy; {new Date().getFullYear()} LineLeader</p>
      <p>
        Crafted with care by{" "}
        <UnderlineLink href="https://codegoalie.com">CodeGoalie</UnderlineLink>
      </p>
      <p style={{ marginTop: "0.75rem" }}>
        LineLeader is in no way affiliated with the Walt Disney Company
      </p>
    </Footer>
  );
};

export default AppFooter;

const Footer = styled.div`
  padding: 10rem 3rem 3rem;
  color: lightgrey;
  font-size: 0.8rem;
  font-family: "Overpass", sans-serif;

  p {
    margin: 0.25rem;
  }
`;

const HelpCallout = styled.h3`
  margin-bottom: 2rem;
`;
