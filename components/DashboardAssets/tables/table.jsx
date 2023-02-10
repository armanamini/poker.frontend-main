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
  borderRadius: "0px 0px 10px 10px"
}));

function createData(name, fat, carbs, protein) {
  return { name, fat, carbs, protein };
}

const rows = [
  createData("2 through 6",  "Common", "70%", "14000"),
  createData("7 through 10",  "Rare", "20%", "4000"),
  createData("Jack",  "Super Rare", "5%", "1000v"),
  createData("Queen",  "Super Rare", "3%", "600"),
  createData("King",  "Ultra Rare", "1.50%", "300"),
  createData("Ace",  "Ultra Rare", "0.50%", "100"),
  createData("Diamond in the Rough",  "1 of a kind", "0.0001", "2"),
];

export default function CustomizedTables() {
  return (
    <TableContainer sx={{ width: "70%",  borderRadius:'10px' }} component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <StyledTableHead>
          <TableRow>
            <StyledTableCell align="center">Cards</StyledTableCell>
            <StyledTableCell align="center">Tier</StyledTableCell>
            <StyledTableCell align="center">% of total</StyledTableCell>
            <StyledTableCell align="center">Amount</StyledTableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" align="center" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.fat}</StyledTableCell>
              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
              <StyledTableCell align="center">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
