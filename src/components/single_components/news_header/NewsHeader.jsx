import React from "react";
import { Box, Card, CardContent, CardMedia, Grid } from "@mui/material";

const NewsHeader = () => {
  return (
    <>
      <Card variant="contained" sx={{ borderRadius: "8px" }}>
        <Grid container direction="row" spacing={0}>
          <Grid item xs={12} md={9}>
            <CardMedia
              component="img"
              className="card_media"
              image="http://placekitten.com/500"
              alt="Image"
              aria-label="Test"
            />
            <h1 className="header_title">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h1>
            <Box
              sx={{
                display: "flex",
                position: "absolute",
                marginTop: "-70px",
              }}
            >
              <Box
                sx={{
                  display: { xs: "block", sm: "block", md: "block" },
                }}
              >
                <Grid container direction="row" spacing={0}>
                  <Grid item>
                    <p className="news_title">1 Hours Ago</p>
                  </Grid>
                  <Grid item>
                    <p className="news_title">CNN Indonesia</p>
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
              <p
                style={{
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "33px",
                  color: "#444444",
                }}
              >
                Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam
                ornare adipiscing. Pellentesque sed turpis nunc gravida
                pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi,
                elementum mattis mauris, magnis. Massa tortor nibh nulla
                condimentum imperdiet scelerisque...{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    lineHeight: "33px",
                    color: "black",
                  }}
                >
                  read more
                </span>
              </p>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default NewsHeader;
