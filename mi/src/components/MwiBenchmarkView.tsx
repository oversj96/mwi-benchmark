import { createStyles, Divider, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import HeadingsBody from "./Body/HeadingsBody";
import Header from "./Header/Header";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    thickLine: {
      background: "black",
      height: "3px",
    },
  })
);

const MwiBenchmarkView = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Divider className={classes.thickLine} />
      <HeadingsBody />
    </>
  );
};

export default MwiBenchmarkView;
