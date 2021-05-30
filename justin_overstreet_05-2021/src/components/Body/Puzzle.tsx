import { createStyles, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { objectOne, objectTwo } from "../../data/data";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    underline: {
      textDecoration: "underline",
    },
  })
);

const Puzzle = (props: any) => {
  const lastListEl = useRef<HTMLLIElement>(null);
  const [namesList, setNamesList] = useState<string[]>([]);
  const classes = useStyles();

  let solvedPuzzle = undefined;
  if (namesList.length) {
    // ref sets every time, but will finally reference
    // the last item added to the list. Used to scroll item into view.
    solvedPuzzle = (
      <Grid item>
        <div style={{ marginLeft: 20 }}>
          <ul>
            {React.Children.toArray(
              namesList.map((name: string) => (
                <li ref={lastListEl}>
                  <Typography>{name}</Typography>
                </li>
              ))
            )}
          </ul>
        </div>
      </Grid>
    );
  }

  useEffect(() => {
    if (namesList.length && lastListEl.current) {
      lastListEl.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [namesList]);

  const solvePuzzle = () => {
    if (namesList.length) {
      // Simpler than using a snackbar or a toast, though a snackbar/toast would've been more fun
      alert("The puzzle has already been solved!");
    } else {
      // What the requirements seem to want is a unionizing of the two lists of names
      // Therefore we want a set. However we want the functionality an array provides,
      // so we use Array.from() to convert it back into one.
      // This might be less performant than simply looping and comparing but its less code
      // and more maintainable I think.
      let namesUnionList = Array.from(new Set([...objectOne, ...objectTwo]));
      setNamesList(namesUnionList);
    }
  };

  return (
    <div style={{ marginLeft: "4em", marginRight: "4em", marginTop: "2em" }}>
      <Grid container direction="column" justify="flex-start" alignItems="flex-start" spacing={2}>
        <Grid item>
          <Typography className={classes.underline} variant="h1">
            HEADING ONE
          </Typography>
        </Grid>
        <Grid item>
          <Typography style={{ marginTop: 20 }}>
            Remove the duplicates in 2 Javascript objects and output the list of distinct names in an unordered list
            when this{" "}
            <span onClick={solvePuzzle} style={{ fontWeight: "bold", color: "red", cursor: "pointer" }}>
              link is clicked
            </span>
            , if the operation has been completed already notify the user that this has already been done.
          </Typography>
        </Grid>
        {solvedPuzzle}
      </Grid>
    </div>
  );
};

export default Puzzle;
