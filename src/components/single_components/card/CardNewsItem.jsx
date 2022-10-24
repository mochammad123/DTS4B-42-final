import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import timesConverter from "../../../utils/timesConverter";
import imageNotFound from "../../../assets/images/images.jpg";

const CardNewsItem = (props) => {
  const navigate = useNavigate();
  const { image, title, date, published } = props;

  const handleClick = () => {
    navigate(`/${title}`);
  };
  return (
    <>
      <Card
        sx={{
          borderRadius: "8px",
          width: "100%",
          height: "100%",
          marginBottom: "20px",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        <CardMedia
          component="img"
          className="card_news_media"
          image={image || imageNotFound}
          alt={title}
        />
        <CardContent>
          <h2 className="card_content">{title}</h2>
        </CardContent>
        <CardActions>
          <Grid container direction="row" spacing={2}>
            <Grid item>
              <p className="card_action">{timesConverter(date)}</p>
            </Grid>
            <Grid item>
              <p className="card_action">{published}</p>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </>
  );
};

export default CardNewsItem;
