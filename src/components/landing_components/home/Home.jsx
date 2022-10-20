import React from "react";
import "./home.css";
import Navbar from "../../single_components/navbar/Navbar";
import NewsHeader from "../../single_components/news_header/NewsHeader";
import { Box, Container, Grid } from "@mui/material";
import CardNews from "../../single_components/card/CardNews";
import datas from "../../data/news.json";
import Footer from "../../single_components/footer/Footer";

const Home = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ minHeight: "100%" }}>
        <Box sx={{ display: "flex", marginTop: "100px" }}>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "block", sm: "block", md: "block" },
              margin: "10px 20px 0px 20px",
            }}
          >
            <Navbar />
            <h1 className="news_header">Hot Topics</h1>
            <NewsHeader />
            <h1
              className="news_header"
              style={{ marginTop: "50px", fontSize: "36px" }}
            >
              Latest News
            </h1>
            <Grid container direction="row" spacing={1}>
              {datas.map((data, index) => (
                <Grid item xs={6} sm={4} md={3}>
                  <CardNews key={index} data={data} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
