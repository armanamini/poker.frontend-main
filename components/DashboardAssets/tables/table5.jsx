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
import { ThemeContext } from "../../../contexts/theme-context";



const StyledTableHead = styled(TableHead)(({ theme }) => ({
  background: "linear-gradient(90.32deg, #32E4BF 0.04%, #21A1DE 100%)",

}));



function createData(name,  carbs, protein,name2,name3) {
  return { name, carbs, protein ,name2,name3};
}



export default function CustomizedTables5({gettransaction}) {
  console.log(gettransaction.data.transactions,'table')
   // FOR LIGHT THEME

   const { theme, setTheme } = React.useContext(ThemeContext);
   const [viewMode, setViewMode] = React.useState(theme);
   React.useEffect(() => {
     const getLocalTheme = localStorage.getItem("theme");
     setViewMode(getLocalTheme === "dark" ? true : false);
   }, [viewMode, theme]);

   const StyledTableRow = styled(TableRow)(({ theme }) => ({
    background: viewMode?"#45465B":"#E1E1E1",
    borderRadius: "0px 0px 10px 10px",
    textAlign:'center'
  }));

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      // background: 'linear-gradient(90.32deg, #32E4BF 0.04%, #21A1DE 100%)',
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
    borderBottom: "0",
    color: viewMode?"white":"black",
  }));
 
   //
  return (
    <TableContainer
    className={style.tableTransActions}
      sx={{ width: "750px", borderRadius: "10px",padding:"0" }}
      component={Paper}
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <StyledTableHead>
          <TableRow>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="center">Kind</StyledTableCell>
            <StyledTableCell align="center">Amount</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {gettransaction.data.transactions.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" align="center" scope="row">
                {row.address}
              </StyledTableCell>
              <StyledTableCell align="center">{row.description}</StyledTableCell>
              <StyledTableCell align="center">{row.kind}</StyledTableCell>
              <StyledTableCell align="center">{row.amount}</StyledTableCell>
              <StyledTableCell align="center">{row.createdAt}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
