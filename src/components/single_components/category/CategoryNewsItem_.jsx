import { Chip } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryActions } from "../../../services/categorySlice";

const CategoryNewsItem = (props) => {
  const dispatch = useDispatch();
  const categorySelected = useSelector((state) => state.category.category);
  const [key, categoryName] = props.label;

  const handleClick = () => {
    dispatch(categoryActions.setCategory(key));
  };
  return (
    <>
      <div style={{ padding: "0px 3px" }}>
        <Chip
          label={categoryName}
          variant={categorySelected === key ? "filled" : "outlined"}
          onClick={handleClick}
          fullWidth
          sx={{ color: "black" }}
        />
      </div>
    </>
  );
};

export default CategoryNewsItem;
