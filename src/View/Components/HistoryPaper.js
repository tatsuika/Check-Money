import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
  root: {
    width: "100vw",
    overflow: "auto",
    maxWidth: "700px",
    marginTop: "2vh",
    backgroundColor: theme.palette.background.paper
  },
  list_item_root: {
    width: "100vw",
    overflow: "auto",
    maxWidth: "700px",
    backgroundColor: theme.palette.background.paper,
  },
  list_item_title: {
    textAlign: "center",
  }
});

const makeScenes = (scene_list, openModal) =>{
  let list = scene_list.map((value, index) => {
    return (
      <ListItem button divider onClick={() => openModal(index + 4)}>
        <ListItemText primary={value} id = {index} />
      </ListItem>
    )
  })
  return (list)
}

const HistoryPaper = (props) => {
  const { classes } = props;
  const openModal = (s) => {props.openModal(s)}
  console.log(props.user_datas)
  const cp_user_datas = props.user_datas.slice(0, props.user_datas.length - 1);
  cp_user_datas.reverse();
  let results = cp_user_datas.map((value) =>{
    return `${value.date}の収入出: ${value.result}円`;
  });
  return (
    <div>
    <ListItem className={classes.root} divider>
      <ListItemText className = {classes.list_item_title} primary={"収入出履歴"} />
    </ListItem>
    <List component="nav" className={classes.list_item_root}　subheader={<li />}>
      {makeScenes(results, openModal)}
    </List>
    </div>
  );
}



export default withStyles(styles)(HistoryPaper);