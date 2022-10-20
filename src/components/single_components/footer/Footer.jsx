import { Box } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", bottom: 0 }}>
        <footer className="footer">
          <p
            style={{
              fontSize: "16px",
              fontWeight: 700,
              fontStyle: "normal",
              lineHeight: "21px",
              color: "#949494",
              padding: "30px",
            }}
          >
            Copyright 2022 News Portal
          </p>
        </footer>
      </Box>
    </>
  );
};

export default Footer;
