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
  textField: {
    width: "30vw",
    maxWidth: "210px",
  },
  textField_left: {
    marginLeft: "7vw",
    width: "40vw",
    maxWidth: "280px",
  },
});

const data = [
  {
    value: 0,
    label: "固定費",
  },
  {
    value: 1,
    label: "生活費",
  },
  {
    value: 2,
    label: "特別出費",
  },
];


const AddSpend = (props) => {
  const { classes } = props;
  const [values, setValues] = React.useState({
    title: '',
    tag: 0,
    sum: 0,
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  console.log(values);
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
            label="使ったもの"
            placeholder="数字を入力してください"
            fullWidth
            helperText
            error={false}
            onChange={handleChange('title')}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            className={classes.textField}
            select
            label="Select"
            autoFocus
            margin="dense"
            id="name"
            label="重要度"
            onChange={handleChange('tag')}
            value={values.tag} >
            {data.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="支出"
            placeholder="数字のみ"
            className={classes.textField_left}
            helperText
            type="number"
            error={false}
            onChange={handleChange('sum')}
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={() => props.modalClose()}>
            キャンセル
          </Button>
          <Button
            color="primary"
            onClick={() =>{
              props.modalClose();
              values.sum = Number(values.sum)
              props.submitSpend(values);
            }}>
            送信
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );

}

export default withStyles(styles)(AddSpend);