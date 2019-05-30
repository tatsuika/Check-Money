import React from 'react';
import { withStyles } from "@material-ui/core/styles";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from "@material-ui/core/Divider";


import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  paper_root: {
    margin: 0,
    pading: 0,
    width: "90vw",
    maxWidth: "700px",
    overflow: "auto",
    backgroundColor: theme.palette.background.paper
  },

  list_root: {
    width: "90vw",
    maxWidth: "700px",
    height: "30vh",
    overflow: "auto",
    backgroundColor: theme.palette.background.paper
  },
  content_root: {
    padding: 0,
    backgroundColor: theme.palette.background.paper
  },
});

const makeList = (alist) =>{
  let list = alist.map((value, index) => {
    let x = value[1];
    switch (x) {
      case -1:
        return(
          <ListItem style={{backgroundColor: 'green'}} button>
            <ListItemText primary={value[0]} id = {index}/>
          </ListItem>
        )
      case 0:
        return(
          <ListItem style={{backgroundColor: 'white'}} button>
            <ListItemText primary={value[0]} id = {index}/>
          </ListItem>
        )
      case 1:
        return(
          <ListItem style={{backgroundColor: 'yellow'}} button>
            <ListItemText primary={value[0]} id = {index}/>
          </ListItem>
        )
      case 2:
        return(
          <ListItem style={{backgroundColor: 'red'}} button>
            <ListItemText primary={value[0]} id = {index}/>
          </ListItem>
        )
      default:
        return 0
  }})
  return (list)
}

const DisplayData = (props) => {
  const { classes } = props;
  console.log(props.user_datas);
  let data = (props.dialog_target >= 3) ? props.user_datas[props.user_datas.length - (props.dialog_target - 3 + 1)] :
    props.user_datas[0];
  let list_data = [[`収入: ${data.income}円`, -1]];
  for(let i = 0; i < data.spends.length; i = i + 3){
    let tag = data.spends[i + 1];
    let s = [`支出: 金額=${data.spends[i + 2]}円, 使ったもの=${data.spends[i]}`, tag]
    list_data.push(s);
  }
  return (
    <div>
      <Dialog
        classes={{paper: classes.paper_root}}
        open={props.modal_open}
        onClose={() => props.modalClose()} aria-labelledby="form-dialog-title" >
        <DialogContent className={classes.content_root}>
          <div>
            <List component="nav" className={classes.list_root}　subheader={<li />}>
             {makeList(list_data)}
            </List>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );

}

export default withStyles(styles)(DisplayData);





