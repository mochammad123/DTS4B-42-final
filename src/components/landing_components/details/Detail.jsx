import React from "react";
import "./details.css";
import Navbar from "../../single_components/navbar/Navbar";
import NewsHeader from "../../single_components/news_header/NewsHeader";
import { Box, Container, Grid } from "@mui/material";
// import CardNews from "../../single_components/card/CardNews";
import DetailNews from "../../single_components/detailNews/DetailNews";

import datas from "../../data/news.json";
import Footer from "../../single_components/footer/Footer";
// import { Link } from "react-router-dom";
const Details = () => {
  // var a = datas.map((data,index)=> {
  //   console.log(data)
  //   console.log(datas[1].title)
  // })
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
            <h1 className="news_header">{datas[1].title}</h1>
            {/* {datas.map((data, index) => (
              <DetailNews key={index} data={data} result={datas}/>
            ))} */}
            <DetailNews result={datas}/>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Details;
