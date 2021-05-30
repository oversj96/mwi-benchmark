import { createStyles, Divider, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import ContactForm from "./Body/ContactForm";
import HeadingsBody from "./Body/HeadingsBody";
import Puzzle from "./Body/Puzzle";
import Footer from "./Footer/Footer";
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
      <ContactForm />
      <Puzzle />
      <Footer />
    </>
  );
};

export default MwiBenchmarkView;
