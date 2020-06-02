import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Box,
  Button,
  Card,
  LinearProgress,
  Typography,
} from "@material-ui/core";

//TODO catch if url is not base64 encoded
const Shortener = (props) => {
  const [address, setAddress] = useState("");
  const [secondsLeft, setSecondsLeft] = useState(1000);
  const redirect = () => {
    if (address !== "#") window.location.assign("https://" + address);
    clearInterval(window.shortenerTimer);
  };

  useEffect(() => {
    let SearchParameter = atob(window.location.pathname.substring(7));
    setAddress(SearchParameter);
    window.shortenerTimer = setInterval(() => {
      setSecondsLeft((prevSeconds) => prevSeconds - 10);
    }, 100);
  }, []);
  return (
    <Box mt={10}>
      <Card>
        <Box fontSize="h2.fontSize" component="h1" textAlign="center">
          You are being redirected to <a href={address}>{address}</a>
        </Box>
        <Box fontSize="h4.fontSize" component="h2" textAlign="center">
          This is to ensure that you clicked my link.
        </Box>
        <Box fontSize="h5.fontSize" component="h3" p={3}>
          What is this?
        </Box>
        <Box p={3}>
          I am logging if and when you clicked my link. I will get an e-mail
          notification about it.
        </Box>
        {secondsLeft === 0 ? (
          redirect()
        ) : (
          <Box fontSize="h4.fontSize" textAlign="center">
            In {secondsLeft / 100} seconds{" "}
          </Box>
        )}
        <Box px={25} pt={5}>
          <LinearProgress
            variant="determinate"
            value={100 - secondsLeft / 10}
          />
        </Box>
        <Box mt={5} textAlign="center">
          <Button
            variant="contained"
            color="primary"
            onClick={redirect}
            size="large"
          >
            Redirect now!
          </Button>
        </Box>
        <Box textAlign="center" mt={10} pb={3}>
          <Typography>You are logged, Your info:</Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default styled(Shortener)`
  &.MuiButtonBase-root {
    margin-top: 500px;
  }
`;
