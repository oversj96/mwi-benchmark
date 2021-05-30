import { makeStyles, Theme, createStyles, Grid, Typography } from "@material-ui/core";
import React from "react";
import Article from "./Articles/Article";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    underline: {
      textDecoration: "underline",
    },
  })
);

const HeadingsBody = (props: any) => {
  const articleBodyText =
    "This is a paragraph text that is meant to flex and wrap to a new line based on the number of characters in this container. Please make sure this is looking pretty based on the amount of characters this is taking up.";

  const classes = useStyles();
  // We can map header, image, and body data as components using const articles = data.map((item) => <Article ...etc/>)
  // and then loading that array with {React.Children.toArray(articles)}
  // alternatively we must provide a key prop manually so the react renderer can differentiate the items in the array

  // Adjusting the number in Array(#) will change the number of article components rendered
  const articles = Array(3).fill(
    <Grid item lg={4} md={6} sm={12} xs={12}>
      <Article imageURI={""} headerText={"Heading 2"} bodyText={articleBodyText} />
    </Grid>
  );

  return (
    <div style={{ marginLeft: "4em", marginRight: "4em", marginTop: "2em" }}>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
        <Grid item>
          <Typography className={classes.underline} variant="h1">
            HEADING ONE
          </Typography>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={6}>
        {React.Children.toArray(articles)}
      </Grid>
    </div>
  );
};

export default HeadingsBody;
