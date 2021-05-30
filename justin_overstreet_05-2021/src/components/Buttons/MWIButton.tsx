import { createMuiTheme, ThemeProvider, Button, withStyles } from "@material-ui/core";
import React from "react";

interface MWIButtonProps {
  text: string;
  input?: boolean;
  onClick?: Function;
}

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#000000",
      main: "#000000",
      dark: "#333333",
    },
  },
});

const MWIStyledButton = withStyles({
  root: {
    textTransform: "capitalize",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
})(Button);

const MWIButton = (props: MWIButtonProps) => {

  const click = () => {
    if (props.onClick) {
      props.onClick();
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <MWIStyledButton
        color="primary"
        disableRipple
        variant="contained"
        type={props.input ? "submit" : undefined}
        onClick={click}
      >
        {props.text}
      </MWIStyledButton>
    </ThemeProvider>
  );
};

export default MWIButton;
