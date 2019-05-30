import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';

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

const TodayPaper = (props) => {
  const { classes } = props;
  return (
    <List component="nav" className={classes.root}>
      <ListItem divider>
        <ListItemText className = {classes.list_item_title} primary={"今日の収入出"} />
      </ListItem>
      <ListItem button divider onClick={() => props.openModal(3)}>
        <ListItemText primary={`今日の収入出: ${props.today_data.result}円`} />
        <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="Comments" onClick={() => props.openModal(1)}>
              <Add />
            </IconButton>
            <IconButton edge="end" aria-label="Comments" onClick={() => props.openModal(2)}>
              <Remove />
            </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}



export default withStyles(styles)(TodayPaper);
