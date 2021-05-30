import {
  Button,
  createMuiTheme,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";
import MWIButton from "../../Buttons/MWIButton";

interface ArticlesProps {
  imageURI: string;
  headerText: string;
  bodyText: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    greyTextHeader: {
      color: "grey",
    },
    greyTextBody: {
      color: "grey",
      fontSize: "1.5rem",
    },
  })
);

const Article = (props: ArticlesProps) => {
  const classes = useStyles();
  return (
    <Grid container spacing={0} direction="column" justify="space-evenly" alignItems="stretch">
      <Grid item>
        <Skeleton animation={false} height={250} style={{ padding: 0 }} />
      </Grid>
      <Grid item>
        <Typography className={classes.greyTextHeader} variant="h2">
          {props.headerText}
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.greyTextBody} variant="body1">
          {props.bodyText}
        </Typography>
      </Grid>
      <Grid item>
        <div style={{ marginTop: 20 }}>
          <MWIButton text="Read More" />
        </div>
      </Grid>
    </Grid>
  );
};

export default Article;
