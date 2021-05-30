import { Grid } from "@material-ui/core";
import React from "react";
import logo from "../../img/mwi-logo-horizontal.png";

const Header = (props: any) => {
  return (
    <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <img style={{marginBottom: 10, marginTop: 10}} height={75} src={logo} alt="Midwestern Interactive" />
      </Grid>
    </Grid>
  );
};

export default Header;
