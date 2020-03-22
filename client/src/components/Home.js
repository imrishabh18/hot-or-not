import React from "react";
import "./Home.css";
import { Button, Box, Grid } from "@material-ui/core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
// import { spacing } from '@material-ui/system';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: "#ff4d39"
    }
  }
});;

class Home extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Box textAlign="center" alignItems="center" style={{ overflowX: 'hidden'}}>
          <div className="window" color="primary">
            <h1 className="horn" style={{ fontSize: "40px",fontStyle: 'bold', textTransform:'uppercase' }}>
              🔥 Hot or Not ❌
            </h1>
            {/* <Grid container direction="column" className="buttons" > */}
            <div className="block">
              <div style={{ padding: "10px 100px", alignItems:'center'}}>
              <Button
                className="button"
                variant="outlined"
                size="large"
                color="secondary"
                onClick={event => (window.location.href = "female")}
                style={{ fontSize: "30px", borderRadius: "120px", textTransform:'capitalize' }}
              >
                Male 
                {/* <FontAwesomeIcon className="icons" icon={faMars} /> */}
                <p style={{ paddingLeft: '50px'}}> 👦🏾 </p>
              </Button>
              </div>
              <Button
                className="button"
                size="large"
                variant="contained"
                color="secondary"
                onClick={event => (window.location.href = "male")}
                style={{ fontSize: "30px", borderRadius: "100px", textTransform:'capitalize'}}
              >
                Female
                {/* <FontAwesomeIcon className="icons" icon={faVenus} /> */}
                <p style={{ paddingLeft: '35px'}}> 👩🏾</p>
              </Button>
            {/* </Grid> */}
            <p style={{paddingTop: '170px'}}>© Copyright by Rishabh Gupta 😎</p>
            </div>
          </div>
        </Box>
      </MuiThemeProvider>
    );
  }
}
export default Home;
