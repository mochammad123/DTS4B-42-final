import { List, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryActions } from "../../../services/categorySlice";

const ListItemNews = (props) => {
  const dispatch = useDispatch();
  const categorySelected = useSelector((state) => state.category.category);
  const [key, categoryName] = props.primary;

  const handleClick = () => {
    dispatch(categoryActions.setCategory(key));
  };

  return (
    <>
      <List component="div" disablePadding>
        <ListItemButton
          sx={
            categorySelected === key
              ? { background: "grey", borderRadius: "16px" }
              : ""
          }
        >
          <ListItemText primary={categoryName} onClick={handleClick} />
        </ListItemButton>
      </List>
    </>
  );
};

export default ListItemNews;
