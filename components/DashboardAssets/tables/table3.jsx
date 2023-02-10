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
}));

function createData(name,  carbs, protein) {
  return { name, carbs, protein };
}

const rows = [
  createData("Straight", "50 USDT", "2-6"),
  createData("Straight", "100 USDT", "7-10"),
  createData("Full House", "250 USDT", "TBD"),
  createData("4 of a kind", "500 USDT", "TBD"),
  createData("Straight Flush", "1000 USDT", "TBD"),
  createData("Royal Flush", "5000 USDT", "TBD"),

];

export default function CustomizedTables3() {
  return (
    <TableContainer
      sx={{ width: "70%", borderRadius: "10px" }}
      component={Paper}
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <StyledTableHead>
          <TableRow>
            <StyledTableCell align="center">Hand</StyledTableCell>
            <StyledTableCell align="center">Bonus</StyledTableCell>
            <StyledTableCell align="center">Maximum Possible Amount</StyledTableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" align='center' scope="row">
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
