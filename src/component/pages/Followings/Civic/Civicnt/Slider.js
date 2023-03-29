import React, { Component } from "react";
import ThreeSixty from "react-360-view";




export default class Images extends Component {
  state = {
    imgSrc: "../assets/civic/civic-red",
    id: 1,
    flag: 0,
    logID: ""
  };

 carList = [
   {
     id: 1,
     img: "../assets/civic/red-dot.png",
     srcImg: "/civic/civic-red/"
   },
    {
      id: 2,
      img: "../assets/civic/black-dot.png",
      srcImg: "/civic/civic-black/"
    },
    {
      id: 3,
      img: "../assets/civic/silver-dot.png",
      srcImg: "/civic/civic-silver/"
    },
    {
      id: 4,
      img: "../assets/civic/white-dot.png",

      srcImg: "/civic/civic-white/"
    },
    {
      id: 5,
      img: "../assets/civic/blue-dot.png",
      srcImg: "/civic/civic-blue/"
    },
    
   
  ];
  handleChangeColor = (cid) => {
    const { id, flag, logID } = this.state;
    this.setState({
      id: cid
    });
    document.getElementById("carDefault").style.display = "none";
    if (flag === 0) {
      this.setState({
        flag: 1,
        logID: cid
      });
    } else {
      document.getElementById(`c${logID}`).style.display = "none";
      this.setState({
        logID: cid
      });
    }
    document.getElementById(`c${cid}`).style.display = "block";
  };
  renderCar360 = () => {
    return this.carList.map((car) => {
      return (
        <div
          className="carContent pt-20"
          id={`c${car.id}`}
          style={{ display: "none" }}
        >
          <ThreeSixty
            amount={8}
            imagePath={`../assets/${car.srcImg}`}
            fileName="car-{index}.png"  
          />
        </div>
      );
    });
  };
  render() {
    const { id } = this.state;

    return (
      <div className="container-fluid pt-20">
        <div className="row">
          <div className="col-7">
            <div className="car">
              {this.renderCar360()}
              <div id="carDefault">
                <ThreeSixty
                  amount={8}
                  imagePath={`../assets/civic/civic-red`}
                  fileName="car-{index}.png"
                />
              </div>
            </div>
          </div>
          <div className="col-4 pt-20">
            <div className="card">
              <div className="card-header text-primary">MÀU XE</div>
              <ul className="list-group list-group-flush">
                <li
                  className="list-group-item"
                  onClick={() => this.handleChangeColor(2)}
                >
                  <div className="row">
                    <div className="col-2">
                      <img src="../assets/civic/black-dot.png" boderRadius="50%" width="60px" alt="" />
                    </div>
                    <div className="col-10 d-flex align-items-center">
                    ĐEN ÁNH ĐỘC TÔN
                    </div>
                  </div>
                </li>
                <li
                  className="list-group-item"
                  onClick={() => this.handleChangeColor(1)}
                >
                  <div className="row">
                    <div className="col-2">
                      <img src="../assets/civic/red-dot.png" boderRadius="50%"  width="60px" alt="" />
                    </div>
                    <div className="col-10 d-flex align-items-center">
                      ĐỎ CÁ TÍNH
                    </div>
                  </div>
                </li>
                <li
                  className="list-group-item"
                  onClick={() => this.handleChangeColor(3)}
                >
                  <div className="row">
                    <div className="col-2">
                      <img src="../assets/civic/silver-dot.png" boderRadius="50%"  width="60px" alt="" />
                    </div>
                    <div className="col-10 d-flex align-items-center">
                    XÁM PHONG CÁCH
                    </div>
                  </div>
                </li>
                <li
                  className="list-group-item"
                  onClick={() => this.handleChangeColor(4)}
                >
                  <div className="row">
                    <div className="col-2">
                      <img src="../assets/civic/white-dot.png" boderRadius="50%" width="60px" alt="" />
                    </div>
                    <div className="col-10 d-flex align-items-center">
                    TRẮNG NGỌC QUÝ PHÁI
                    </div>
                  </div>
                </li>
                <li
                  className="list-group-item"
                  onClick={() => this.handleChangeColor(5)}
                >
                  <div className="row">
                    <div className="col-2">
                      <img src="../assets/civic/blue-dot.png" boderRadius="50%"  width="60px" alt="" />
                    </div>
                    <div className="col-10 d-flex align-items-center">
                     XANH THỜI THƯỢNG
                    </div>
                  </div>
                </li>
              
               
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
