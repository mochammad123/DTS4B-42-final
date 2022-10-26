import React from "react";
import "./details.css";
import Navbar from "../../single_components/navbar/Navbar";
import { Box, Container } from "@mui/material";

import datas from "../../data/news.json";
import Footer from "../../single_components/footer/Footer";
import DetailNews from "../../single_components/detail_news/DetailNews";
const Details = () => {
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
            <h1 className="news_header">Detail Topics</h1>
            <DetailNews sx={{ margin: "0px" }} result={datas} />
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Details;
