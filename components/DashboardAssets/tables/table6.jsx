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
import style from "../../../pages/dashboard/dashboard.module.css"

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

function createData(name,  carbs, protein,name2,name3) {
  return { name, carbs, protein ,name2,name3};
}

const rows = [
  createData("$GOLD Tables", "August 4 – August 31", "$GOLD ","Instant","Real-money players"),
  createData("Redeem for NFT Avatar", "August 4 – August 31", "NFT whitelist slot with the future in-game benefits ","Q4","ALL players"),
  createData("Redeem for USDT", "August 4 – August 31", "USDT to the source of funds wallet","72 hours","ALL players"),

 
//   createData("3", "50", "2"),
//   createData("4", "75", "3"),
//   createData("5", "100", "4"),
//   createData("6", "123", "5"),
//   createData("7", "200", "6"),
//   createData("8", "250", "7"),
//   createData("9", "300", "8"),
//   createData("10", "400", "10"),
//   createData("J", "1000", "20"),
//   createData("Q", "1000", "20"),
//   createData("K", "1000", "20"),
//   createData("A", "2500", "20"),
//   createData("Special", "5000", "40"),


];

export default function CustomizedTables6() {
  return (
    <TableContainer
    className={style.tableTransActions}
      sx={{ width: "100%", borderRadius: "10px",padding:"0",marginTop:"30px"}}
      component={Paper}
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <StyledTableHead>
          <TableRow>
            <StyledTableCell align="center">Action</StyledTableCell>
            <StyledTableCell align="center">Period</StyledTableCell>
            <StyledTableCell align="center">Player Receives</StyledTableCell>
            <StyledTableCell align="center">Delivery Window</StyledTableCell>
            <StyledTableCell align="center">Availability</StyledTableCell>
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
              <StyledTableCell align="center">{row.name2}</StyledTableCell>
              <StyledTableCell align="center">{row.name3}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
