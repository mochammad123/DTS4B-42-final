import { Grid } from "@mui/material";
import React, { useState } from "react";
import ListItemNews from "./CategoryNewsItem";
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const categories = [
  ["Business", "Business"],
  ["Entertainment", "Entertainment"],
  ["Health", "Health"],
  ["Politics", "Politics"],
  ["ScienceAndTechnology", "Science and Technology"],
  ["Sports", "Sports"],
  ["UK", "UK"],
  ["World", "World"],
];

const CategoryNewsList = () => {
  const [open, setOpen] = useState(false);
  const handleClickCollapse = () => {
    setOpen(!open);
  };
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={1}
      >
        <Grid item>
          <List
            sx={{
              width: "100%",
              maxWidth: "100%",
              bgcolor: "background.paper",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              onClick={handleClickCollapse}
              sx={{ maxWidth: "100%" }}
            >
              <ListItemText primary="Chose Category" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              {categories.map((category, key) => (
                <ListItemNews key={key} primary={category} />
              ))}
            </Collapse>
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default CategoryNewsList;
