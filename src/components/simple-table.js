import React from "react";
import PropTypes from "prop-types";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@material-ui/core";
import { css } from "@emotion/core";

const SimpleTable = ({ columns, data }) => {
  const [firstColumn, ...otherColumns] = columns;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              css={css`
                text-transform: capitalize;
              `}
            >
              {firstColumn}
            </TableCell>
            {otherColumns.map((column) => (
              <TableCell
                css={css`
                  text-transform: capitalize;
                `}
                key={column}
                align="right"
              >
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={`${rowIndex}_0`}>
              <TableCell component="th" scope="row">
                {row[firstColumn]}
              </TableCell>
              {otherColumns.map((column, columnIndex) => (
                <TableCell key={`${rowIndex}_${columnIndex}`} align="right">{row[column].toString()}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

SimpleTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};

SimpleTable.defaultProps = {
  columns: [],
  data: [],
};

export default SimpleTable;
