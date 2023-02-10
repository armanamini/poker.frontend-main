import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, {
  tableCellClasses,
  TableHeadClasses,
} from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // background: 'linear-gradient(90.32deg, #32E4BF 0.04%, #21A1DE 100%)',
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  borderBottom: "0",
  color: "white",
}));

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  background: "linear-gradient(90.32deg, #32E4BF 0.04%, #21A1DE 100%)",

}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  background: "#45465B",
  borderRadius: "0px 0px 10px 10px",
  textAlign:'center'
}));

function createData(name,  carbs, protein) {
  return { name, carbs, protein };
}

const rows = [
  createData("2", "25", "1"),
  createData("3", "50", "2"),
  createData("4", "75", "3"),
  createData("5", "100", "4"),
  createData("6", "123", "5"),
  createData("7", "200", "6"),
  createData("8", "250", "7"),
  createData("9", "300", "8"),
  createData("10", "400", "10"),
  createData("J", "1000", "20"),
  createData("Q", "1000", "20"),
  createData("K", "1000", "20"),
  createData("A", "2500", "20"),
  createData("Special", "5000", "40"),


];

export default function CustomizedTables4() {
  return (
    <TableContainer
      sx={{ width: "70%", borderRadius: "10px" }}
      component={Paper}
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <StyledTableHead>
          <TableRow>
            <StyledTableCell align="center">Card</StyledTableCell>
            <StyledTableCell align="center">Chips</StyledTableCell>
            <StyledTableCell align="center">Tickets</StyledTableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" align="center" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
              <StyledTableCell align="center">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
