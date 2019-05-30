import React from 'react';
import { withStyles } from "@material-ui/core/styles";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  root: {
    margin: 0,
    width: "90vw",
    maxWidth: "700px",
    overflow: "auto",
    backgroundColor: theme.palette.background.paper
  },
});

const AddIncome = (props) => {
  const { classes } = props;
  const [values, setValues] = React.useState({
    value: 0,
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <div>
      <Dialog
        classes={{paper: classes.root}}
        open={props.modal_open}
        onClose={() => props.modalClose()} aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title">{props.modal_title}</DialogTitle>
        <DialogContent>
          <TextField
           autoFocus
           margin="dense"
           id="name"
           label="収入"
           fullWidth
           placeholder="数字のみ"
           className={classes.textField_left}
           helperText
           type="number"
           error={false}
           onChange={handleChange("value")}
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={() => props.modalClose()}>
            キャンセル
          </Button>
          <Button color="primary" onClick={() => {
            props.submitIncome(Number(values.value));
            props.modalClose();
          }}>
            送信
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );

}

export default withStyles(styles)(AddIncome);