import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";
  import ContainedButton from "../../buttons/ContainedButton";
  import DashboardContent from "../DashboardContent";
  import Paper from "../Paper";
  
  const cellStyle = {
    maxWidth: "250px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };
  
  function createData(index, from, to, amount, date) {
    return { index, from, to, amount, date };
  }
  
  const rows = [
    createData(
      "0",
      "Sample From Address",
      "Sample To Address",
      24,
      Date.now(),
    ),
  ];
  
  export default function DashboardPendingTransaction() {
    return (
      <DashboardContent>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="left">From</TableCell>
                <TableCell align="left">To</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow
                  key={row.index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.index}
                  </TableCell>
                  <TableCell sx={cellStyle} align="right">
                    {row.from}
                  </TableCell>
                  <TableCell sx={cellStyle} align="right">
                    {row.to}
                  </TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box marginTop={3}>
          <ContainedButton>Start mining</ContainedButton>
        </Box>
      </DashboardContent>
    );
  }