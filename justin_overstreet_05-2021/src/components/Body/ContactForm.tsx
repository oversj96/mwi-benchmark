import {
  createMuiTheme,
  createStyles,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  makeStyles,
  MuiThemeProvider,
  TextareaAutosize,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import MWIButton from "../Buttons/MWIButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    text: {
      color: "white",
    },
  })
);

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#FFFFFF",
      main: "#FFFFFF",
      dark: "#FFFFFF",
    },
  },
});

const ContactForm = (props: any) => {
  const classes = useStyles();
  const {
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
    control,
  } = useForm();

  // Or replace with whatever api post request code, fetch, axios, etc.
  const onSubmit = (data: any) => alert(JSON.stringify(data));

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ message: "", subject: "", email: "" });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div style={{ marginTop: 50, padding: 50, backgroundColor: "#cacaca" }}>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Grid className={classes.root} container direction="column" justify="center" alignItems="center" spacing={6}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography className={classes.text} style={{ color: "white" }} variant="h4">
              CONTACT
            </Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <FormControl variant="outlined">
              <Controller
                name="email"
                render={({ field }) => (
                  <MuiThemeProvider theme={theme}>
                    <TextField
                      {...field}
                      style={{ width: 400 }}
                      id="email"
                      helperText={errors.email ? errors.email.message : null}
                      label="Email"
                      placeholder="Any_Email@AwesomeMail.com"
                      error={errors.email}
                    />
                  </MuiThemeProvider>
                )}
                control={control}
                defaultValue=""
                rules={{
                  required: "An email address is required.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                }}
              ></Controller>
            </FormControl>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <FormControl variant="outlined">
              <Controller
                name="subject"
                render={({ field }) => (
                  <MuiThemeProvider theme={theme}>
                    <TextField
                      {...field}
                      style={{ width: 400 }}
                      id="subject"
                      helperText={errors.subject ? errors.subject.message : null}
                      label="Subject"
                      placeholder="I Have A Question!"
                      error={errors.subject}
                    />
                  </MuiThemeProvider>
                )}
                control={control}
                defaultValue=""
                rules={{
                  required: "Subject line cannot be empty.",
                  pattern: {
                    value: /(.|\s)*\S(.|\s)*/,
                    message: "Subject line cannot be empty.",
                  },
                }}
              ></Controller>
            </FormControl>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <FormControl variant="outlined">
              <Controller
                name="message"
                render={({ field }) => (
                  <MuiThemeProvider theme={theme}>
                    <TextField
                      {...field}
                      variant="outlined"
                      style={{ width: 400 }}
                      id="message"
                      multiline
                      rows={5}
                      label="Message"
                      error={errors.message}
                      helperText={errors.message ? errors.message.message : null}
                      placeholder={"Hi, \n\nI was wondering if..."}
                    />
                  </MuiThemeProvider>
                )}
                control={control}
                defaultValue=""
                rules={{
                  required: "The message cannot be blank.",
                  pattern: {
                    value: /(.|\s)*\S(.|\s)*/,
                    message: "Message cannot be empty",
                  },
                }}
              ></Controller>
            </FormControl>
          </Grid>
          <Grid container item spacing={3} lg={3} md={3} sm={3} xs={12} alignItems="flex-start" justify="flex-start">
            <MWIButton text={"Submit"} input />
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default ContactForm;
