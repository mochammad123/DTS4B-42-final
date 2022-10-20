import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";

const CardNews = ({ data }) => {
  return (
    <>
      <Card sx={{ borderRadius: "8px", width: "100%", marginBottom: "20px" }}>
        <CardMedia
          component="img"
          className="card_news_media"
          image={data.background}
          alt={data.title}
        />
        <CardContent>
          <h2 className="card_content">{data.title}</h2>
        </CardContent>
        <CardActions>
          <Grid container direction="row" spacing={2}>
            <Grid item>
              <p className="card_action">{data.date}</p>
            </Grid>
            <Grid item>
              <p className="card_action">{data.by}</p>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </>
  );
};

export default CardNews;
