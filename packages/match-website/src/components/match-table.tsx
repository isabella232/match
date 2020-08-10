import * as React from "react";
import * as PropTypes from "prop-types";
import { styled } from "@twilio-labs/match-styling-library";

interface TableProps extends React.HTMLAttributes<"table"> {
  headerData: Array<string>;
  tableData: Array<Array<string>>;
}

const StyledTable = styled.table`
  width: 778px;
  border: solid;
  border-color: #e1e3ea;
  border-width: 1px;
  border-radius: 3px;
  border-collapse: collapse;

  > tr {
    border: solid;
    border-color: #e1e3ea;
    border-width: 1px 0;

    > th {
      padding: 0px 29px;
      text-align: left;
      text-transform: uppercase;
    }

    > td {
      padding: 0px 29px;
    }
  }
`;

const Table: React.FC<TableProps> = ({ headerData, tableData }) => (
  <StyledTable>
    <tr>
      {headerData.map((header) => (
        <th key={header}>{header}</th>
      ))}
    </tr>
    {tableData.map((rowData, i) => (
      <tr key={i}>
        {rowData.map((data) => (
          <td key={data}>{data}</td>
        ))}
      </tr>
    ))}
  </StyledTable>
);

Table.propTypes = {
  headerData: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};

export { Table };

//   headerData: PropTypes.arrayOf(
//     PropTypes.shape({
//   name: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired
// })),
