import React from "react";
import "./Home.css";
import { Button, Box, Grid } from "@material-ui/core";

class Home extends React.Component {
  render() {
    return (
      <Box textAlign="center" alignItems="center">
        <div className="window" color="primary">
          <h1 className="horn">Hot or Not</h1>
          <Grid container direction="column">
            <Button
              variant="contained"
              size="large"
              color="secondary"
              onClick={event => (window.location.href = "female")}
            >
              Male
            </Button>
            <Button
              className="button"
              size="large"
              variant="contained"
              color="secondary"
              onClick={event => (window.location.href = "male")}
            >
              Female
            </Button>
          </Grid>
        </div>
      </Box>
    );
  }
}
export default Home;