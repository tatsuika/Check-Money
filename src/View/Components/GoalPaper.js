import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';


const styles = theme => ({
  root: {
    width: "100vw",
    overflow: "auto",
    maxWidth: "700px",
    backgroundColor: theme.palette.background.paper
  },
  list_item_title: {
    textAlign: "center",
  }
});

const GoalPaper = (props) => {
  const { classes } = props;
  return (
    <List component="nav" className={classes.root}>
      <ListItem divider>
        <ListItemText className = {classes.list_item_title} primary={"貯金状況"} />
      </ListItem>
      <ListItem divider>
        <ListItemText primary={`貯金目標: ${props.goal}円`} />
        <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="Comments" onClick={() => props.openModal(0)}>
              <Edit />
            </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem divider>
        <ListItemText primary={"現在の貯金" + ": " + props.current + "円"} />
      </ListItem>
    </List>
  );
}



export default withStyles(styles)(GoalPaper);












