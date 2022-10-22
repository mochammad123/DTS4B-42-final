import React from "react";
import { Box, Card, CardContent, CardMedia, Grid } from "@mui/material";

const detailNews = ({ data,result}) => {
  return (
    <>
      <Card variant="contained" sx={{ borderRadius: "8px" }}>
        <Grid container direction="row" spacing={0}>
          <Grid item xs={12} md={12}>
             <CardMedia
              component="img"
              className="card_media"
              image={result[1].background}
              alt={result[1].title}
            />
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
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={12}>
            <CardContent sx={{flex: "1 0 auto",marginLeft: "1px",display: { xs: "none", md: "block" },}}>
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
                condimentum imperdiet scelerisque Lorem ipsum dolor sit amet c
                onsectetur adipisicing elit. Maiores quibusdam corporis repell
                at tempora tempore ex quo libero consectetur, cupiditate expedi
                ta, unde voluptate vero quia harum et nemo facilis id exercitati
                onem.xx ...{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    lineHeight: "33px",
                    color: "black",
                  }}
                >
                  {/* read more */}
                </span>
              </p>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default detailNews;
