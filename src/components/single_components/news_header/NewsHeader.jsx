import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Skeleton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useGetSearchNewsQuery } from "../../../services/newsApi";
import timesConverter from "../../../utils/timesConverter";
import imageNotFound from "../../../assets/images/images.jpg";

const NewsHeader = () => {
  const navigate = useNavigate();
  const { data } = useGetSearchNewsQuery({
    keyword: "big news",
    single: true,
  });

  const hotTopicsData = data && data.value[0];
  const image = hotTopicsData && hotTopicsData.image.thumbnail.contentUrl;
  const title = hotTopicsData && hotTopicsData.name;
  const date = hotTopicsData && hotTopicsData.datePublished;
  const description = hotTopicsData && hotTopicsData.description;
  const publisher = hotTopicsData && hotTopicsData.provider[0].name;

  const handleClick = () => {
    navigate(`/${title}`);
  };

  return (
    <>
      <Card
        variant="contained"
        sx={{ borderRadius: "8px", cursor: "pointer" }}
        onClick={handleClick}
      >
        <Grid container direction="row" spacing={0}>
          <Grid item xs={12} md={9}>
            <CardMedia
              component="img"
              className="card_media"
              image={image || imageNotFound}
              alt={title}
              aria-label="Test"
            />
            {title ? (
              <h1 className="header_title" sx={{ minHeight: "100%" }}>
                {title}
              </h1>
            ) : (
              <Skeleton />
            )}

            <Box
              sx={{
                display: "flex",
                position: "absolute",
                marginTop: "-40px",
              }}
            >
              <Box
                sx={{
                  display: { xs: "block", sm: "block", md: "block" },
                }}
              >
                <Grid container direction="row" spacing={0}>
                  <Grid item>
                    <p className="news_title">
                      {date ? timesConverter(date) : `We can't found`}
                    </p>
                  </Grid>
                  <Grid item>
                    <p className="news_title">
                      {publisher ? publisher : `We can't found`}
                    </p>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <CardContent
              sx={{
                flex: "1 0 auto",
                marginLeft: "10px",
                display: { xs: "none", md: "block" },
              }}
            >
              {description ? (
                <p
                  style={{
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "33px",
                    color: "#444444",
                  }}
                >
                  {description}
                </p>
              ) : (
                <Skeleton />
              )}
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default NewsHeader;
