import * as React from "react";
import * as PropTypes from "prop-types";
import { styled } from "@twilio-labs/match-styling-library";

interface StyledWombatProps {
  columns: number;
  color: string;
}

interface WombatProps extends React.HTMLAttributes<"div"> {
  droppings: Array<string>;
  color: string;
}

const StyledWombat = styled.div<StyledWombatProps>`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(${(props) => props.columns}, max-content);

  > div {
    background: ${(props) => props.color};
    width: 2rem;
    height: 2rem;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Wombat: React.FC<WombatProps> = ({ droppings, color }) => (
  <StyledWombat columns={droppings.length} color={color}>
    {droppings.map((dropping) => (
      <div key={dropping}>{dropping}</div>
    ))}
  </StyledWombat>
);

Wombat.propTypes = {
  droppings: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  color: PropTypes.string.isRequired,
};

export { Wombat };
