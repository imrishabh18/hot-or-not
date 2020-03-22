import React from "react";
import { Button } from "@material-ui/core";
import axios from "axios";
import a1 from "../images/males/aman.jpg";
import a2 from "../images/males/amartya.jpg";
import a3 from "../images/males/aneesh.jpg";
import a5 from "../images/males/anish.jpg";
import a6 from "../images/males/ashray.jpg";
import a7 from "../images/males/ayush.jpg";
import a8 from "../images/males/bijoy.jpg";
import a9 from "../images/males/chandan.jpg";
import a10 from "../images/males/deepak.jpg";
import a11 from "../images/males/devansh.jpg";
import a12 from "../images/males/hitesh.jpg";
import a13 from "../images/males/joy.jpg";
import a14 from "../images/males/kushal.jpg";
import a15 from "../images/males/likhit.jpg";
import a16 from "../images/males/ranbir.jpg";
import a17 from "../images/males/rishabh.jpg";
import a18 from "../images/males/rudransh.jpg";
import a19 from "../images/males/saif.jpg";
import a20 from "../images/males/sparsh.jpg";
import a21 from "../images/males/sujay.jpg";
import a22 from "../images/males/varun.jpg";
import a23 from "../images/males/nikhil.jpg";
import a24 from "../images/males/bharat.jpg"

import { faFireAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
});

const axiosInstance = axios.create({
baseURL: "https://hot-or-not1.herokuapp.com"
});

class Male extends React.Component {
  constructor() {
    super();

    this.hot = this.hot.bind(this);
    this.not = this.not.bind(this);

    this.state = {
      index: 0,
      end: false,
      imgList: [
        {
          id: a1,
          gender: 1,
          hot: 0,
          not: 0
        },
        {
          id: a2,
          gender: 1,
          hot: 0,
          not: 0
        },
        {
          id: a3,
          gender: 1,
          hot: 0,
          not: 0
        },
        {
          id: a5,
          gender: 1,
          hot: 0,
          not: 0
        },
        {
          id: a6,
          gender: 1,
          hot: 0,
          not: 0
        },
        {
          id: a7,
          gender: 1,
          hot: 0,
          not: 0
        },
        {
          id: a8,
          gender: 1,
          hot: 0,
          not: 0
        },
        {
          id: a9,
          gender: 1,
          hot: 0,
          not: 0
        },
        {
          id: a10,
          gender: 1,
          hot: 0,
          not: 0
        },
        {
          id: a11,
          gender: 1,
          hot: 0,
          not: 0
        },
        {
          id: a12,
          gender: 1,
          hot: 0,
          not: 0
        },
        {
          id: a13,
          gender: 1,
          hot: 0,
          not: 0
        },
        {
          id: a14,
          gender: 1,
          hot: 0,
          not: 0
        },
        {
          id: a15,
          gender: 1,
          hot: 0,
          not: 0
        },
        {
          id: a16,
          gender: 1,
          hot: 0,
          not: 0
        },
        {
          id: a17,
          gender: 1,
          hot: 0,
          not: 0
        },
        {
          id: a18,
          gender: 1,
          hot: 0,
          not: 0
        },
        {
          id: a19,
          gender: 1,
          hot: 0,
          not: 0
        },
        {
          id: a20,
          gender: 1,
          hot: 0,
          not: 0
        },
        {
          id: a21,
          gender: 1,
          hot: 0,
          not: 0
        },
        {
          id: a22,
          gender: 1,
          hot: 0,
          not: 0
        },
        {
          id: a23,
          gender: 1,
          hot: 0,
          not: 0
        },{
          id: a24,
          gender: 1,
          hot: 0,
          not: 0
        }
      ]
    };
  }
  // componentDidMount(){
  //   this.getData();
  // }
  // getData(){
  //   axiosInstance.get('/horn')
  //     .then(res => {
  //       var len = res.data.length-1;
  //       while(res.data[len].arr[0].gender !== 1){
  //           len--;
  //       }
  //       this.setState({ imgList: res.data[len].arr})
  //       console.log(res.data[len].arr[0].gender)
  //     })
  //     .catch(err => console.error(err))
  // }
  hot() {
    //Changing it into json to setState for nested object
    let imageList = JSON.parse(JSON.stringify(this.state.imgList));
    imageList[this.state.index].hot = imageList[this.state.index].hot + 1;

    if (this.state.index + 1 === this.state.imgList.length) {
      this.setState({
        end: true,
        imgList: imageList
      });
    //   console.log(imageList);
      axiosInstance.post("/horn", imageList);
    } else {
      this.setState({
        imgList: imageList,
        index: this.state.index + 1
      });
    }
  }
  not() {
    //Changing it into json to setState for nested object
    let NOT = JSON.parse(JSON.stringify(this.state.imgList));
    NOT[this.state.index].not += 1;

    if (this.state.index + 1 === this.state.imgList.length) {
      this.setState({
        end: true,
        imgList: NOT
      });
      axiosInstance.post("/horn", NOT);
    } else {
      this.setState({
        imgList: NOT,
        index: this.state.index + 1
      });
    }
  }
  render() {
    const final = (
      <div>
        <h1 className="horn" style={{}}>🎊🎉 Thank You 🎊🎉</h1>
        <p style={{ fontWeight:'bold',fontSize:'30px',padding:'50px 20px',margin:'auto'}}>The result of the hottest guy and girl will be declared after eveyone votes. Until then sanitize your hands, don't go out and only ghar baithe chill karona 😝.</p>
        <br/>
        <p style={{fontSize:"40px",textAlign:'center'}}>📢 Go Corona !! Corona Go!!📢</p>
      </div>
    );
    const intial = (
      <div>
        <MuiThemeProvider theme={theme}>
          <h1 className="horn" style={{ textAlign:"center"}}>Male  🕺🏾 </h1>
          <img
            src={this.state.imgList[this.state.index].id}
            alt=""
            style={{ width: "100% ", height: "50%", paddingTop: "20px" }}
          />
          <div>
            <Button
              // className="button"
              size="large"
              variant="contained"
              color="secondary"
              onClick={this.hot}
              style={{
                fontSize: "30px",
                borderRadius: "100px",
                textTransform: "capitalize",
                position:'absolute',
                left:'8%',
                bottom:"10%",
                paddingLeft :'35px'
              }}
            >
              Hot 🔥
              {/* < FontAwesomeIcon icon={faFireAlt} /> */}
            </Button>
            {/* <div style={{ paddingLeft: "50%" }}> */}
              <Button
                // className="button"
                size="large"
                variant="contained"
                color="secondary"
                onClick={this.not}
                style={{
                  fontSize: "30px",
                  borderRadius: "100px",
                  textTransform: "capitalize",
                  paddingLeft: "30px",
                  position: 'absolute',
                  right:'8%',
                  bottom: '10%'
                }}
              >
                Not ❌{/* < FontAwesomeIcon icon={faTimes}/> */}
              </Button>
            {/* </div> */}
          </div>
        </MuiThemeProvider>
      </div>
    );
    return <div>{this.state.end? final : intial}</div>;
  }
}

export default Male;