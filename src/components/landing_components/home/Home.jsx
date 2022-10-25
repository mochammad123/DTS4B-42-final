import React from "react";
import "./home.css";
import Navbar from "../../single_components/navbar/Navbar";
import NewsHeader from "../../single_components/news_header/NewsHeader";
import { Box, Container, Grid } from "@mui/material";
import Footer from "../../single_components/footer/Footer";
import { useGetLastestNewsQuery } from "../../../services/newsApi";
import CardNewsList from "../../single_components/card/CardNewsList";
import { useSelector } from "react-redux";
import CategoryNewsList from "../../single_components/category/CategoryNewsList";

const Home = () => {
  const category = useSelector((state) => state.category.category);
  const { data } = useGetLastestNewsQuery({ category });
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

            <Grid container direction="row" spacing={2}>
              <Grid item xs={12} sm={12} md={2}>
                <h1 className="news_header" style={{ fontSize: "24px" }}>
                  Categories
                </h1>
                <CategoryNewsList />
              </Grid>
              <Grid item xs={12} sm={12} md={10}>
                {data && <CardNewsList data={data.value} />}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
