import React from 'react';
import { withStyles } from "@material-ui/core/styles";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
  root: {
    margin: 0,
    width: "90vw",
    maxWidth: "700px",
    overflow: "auto",
    backgroundColor: theme.palette.background.paper
  },
});


const ChangeGoalValue = (props) => {
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
            type="number"
            label="貯金目標"
            placeholder="数字のみ"
            fullWidth
            helperText
            error={false}
            onChange={handleChange("value")}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.modalClose()} color="primary">
            キャンセル
          </Button>
          <Button onClick={
            () => {
              props.submitGoal(Number(values.value));
              props.modalClose()}}
            color="primary">
            送信
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );

}

export default withStyles(styles)(ChangeGoalValue);

