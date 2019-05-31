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
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from "@material-ui/core/Divider";

import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';


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
        break;
  }})
  return (list)
}

const makeTodayList = (alist, func) =>{
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
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="Comments" onClick={() => func(index)}>
                  <Delete />
                </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        )
      case 1:
        return(
          <ListItem style={{backgroundColor: 'yellow'}} button>
            <ListItemText primary={value[0]} id = {index}/>
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="Comments" onClick={() => func(index)}>
                  <Delete />
                </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        )
      case 2:
        return(
          <ListItem style={{backgroundColor: 'red'}} button>
            <ListItemText primary={value[0]} id = {index}/>
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="Comments" onClick={() => func(index)}>
                  <Delete />
                </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        )
      default:
        break;
  }})
  return (list)
}

const DisplayData = (props) => {
  const { classes } = props;
  let list_data = [];
  if(props.dialog_target >= 3){
    let data = props.user_datas[props.user_datas.length - (props.dialog_target - 3 + 1)];
    list_data.push([`収入: ${data.income}円`, -1]);
    for(let i = 0; i < data.spends.length; i = i + 3){
      let tag = data.spends[i + 1];
      let s = [`支出: 金額=${data.spends[i + 2]}円, 使ったもの=${data.spends[i]}`, tag]
      list_data.push(s);
    }
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
             {(props.dialog_target !== 3) ? makeList(list_data) : makeTodayList(list_data, props.deleteSpends)}
            </List>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );

}

export default withStyles(styles)(DisplayData);





