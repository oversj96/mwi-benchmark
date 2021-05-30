import { Grid, Typography } from "@material-ui/core";
import React from "react";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "black", padding: 10, marginTop: 15 }}>
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <Typography style={{ color: "white", fontStyle: "italic" }}>
            {"Thanks for letting me apply to Midwestern Interactive! :)"}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
