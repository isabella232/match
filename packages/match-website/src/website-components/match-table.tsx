import * as React from "react";
import * as PropTypes from "prop-types";
import { styled } from "@twilio-labs/match-styling-library";

interface StyledTableProps {
  columns: number;
}

interface TableProps extends React.HTMLAttributes<"div"> {
  headerData: Array<string>;
}

const StyledTable = styled.div<StyledTableProps>`
  justify-content: center;
`;

const Table: React.FC<TableProps> = ({ headerData }) => (
  <StyledTable columns={headerData.length}>
    {/* <tr>
      {headerData.map((header) => (
        <th>{header}</th>
      ))}
    </tr> */}
  </StyledTable>
);

Table.propTypes = {
  headerData: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export { Table };

//   headerData: PropTypes.arrayOf(
//     PropTypes.shape({
//   name: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired
// })),
