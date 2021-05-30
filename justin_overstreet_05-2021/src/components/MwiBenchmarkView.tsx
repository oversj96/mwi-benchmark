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

// The main view is broken down into sectioned components for easier management and
// potential reuse, such as with the header and footer.
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
