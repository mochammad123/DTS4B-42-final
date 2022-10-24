import { List, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { categoryActions } from "../../../services/categorySlice";

const ListItemNews = (props) => {
  const dispatch = useDispatch();
  const [key, categoryName] = props.primary;

  const handleClick = () => {
    dispatch(categoryActions.setCategory(key));
  };

  return (
    <>
      <List component="div" disablePadding>
        <ListItemButton>
          <ListItemText primary={categoryName} onClick={handleClick} />
        </ListItemButton>
      </List>
    </>
  );
};

export default ListItemNews;
