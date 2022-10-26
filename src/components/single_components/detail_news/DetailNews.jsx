import React from "react";
import { Button, Card, CardMedia, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetSearchNewsQuery } from "../../../services/newsApi";
import imageNotFound from "../../../assets/images/images.jpg";
import timesConverter from "../../../utils/timesConverter";

const DetailNews = () => {
  const params = useParams();
  const id = params.idDetailNews;

  const { data } = useGetSearchNewsQuery({ keyword: id, single: true });

  const newsData = data && data.value[0];
  const image = newsData?.image && newsData.image.thumbnail.contentUrl;
  const title = newsData && newsData.name;
  const date = newsData && newsData.datePublished;
  const description = newsData && newsData.description;
  const publisher = newsData && newsData.provider[0].name;
  const url = newsData && newsData.url;
  return (
    <>
      <Card variant="contained" sx={{ borderRadius: "8px" }}>
        <Grid container direction="row" spacing={0}>
          <Grid item xs={12} md={12}>
            <CardMedia
              component="img"
              className="card_media"
              image={image || imageNotFound}
              alt={title}
              loading="lazy"
            />
          </Grid>
          <Grid item>
            <h2 className="card_content_detail">{title}</h2>
            <Grid container direction="row" spacing={2}>
              <Grid item>
                <p className="card_action_detail">{timesConverter(date)}</p>
              </Grid>
              <Grid item>
                <p className="card_action_detail">{publisher}</p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <p className="card_description_detail">{description}</p>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          sx={{
            background: "black",
            float: "right",
            marginTop: "50px",
            borderRadius: "12px",
            "&:hover": {
              background: "#444444",
            },
          }}
          href={url}
        >
          Go To News Link
        </Button>
      </Card>
    </>
  );
};

export default DetailNews;
