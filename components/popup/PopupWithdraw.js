import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialogWithdraw({
  cls,
  setAmount,
  type,
  handleWithdraw,
}) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className={cls ? cls : null} onClick={handleClickOpen}>
        Withdraw
      </button>
      <Dialog open={open} onClose={handleClose}>
        {/* <DialogTitle>Subscribe</DialogTitle> */}
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter Amount"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => setAmount(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              handleWithdraw();
              setOpen(false);
            }}
          >
            Withdraw
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
