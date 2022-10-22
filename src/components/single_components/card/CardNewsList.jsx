import { Grid } from "@mui/material";
import React from "react";
import CardNewsItem from "./CardNewsItem";

const CardNewsList = (props) => {
  return (
    <>
      <Grid container direction="row" spacing={1}>
        {props.data.map((item, index) => (
          <Grid item xs={6} sm={4} md={3}>
            <CardNewsItem
              key={index}
              image={item.image && item.image.thumbnail.contentUrl}
              title={item.name}
              date={item.datePublished}
              published={item.provider[0].name}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CardNewsList;
