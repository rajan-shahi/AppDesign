import React from "react";
import "./homebar.css";

export default function Homebar() {
  return (
    <div>
      <div className="TopBar-Containner">
        <div className="Navbar">
          <div className="ListIteam">
            <h2>Rajan.</h2>
            <div className="alist">
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Portfolio</a>
              <a href="#">Code</a>
            </div>
          </div>
        </div>
        <div className="leftRight">
          <div className="Left">
            <div className="LeftbarIteam">
              <h3>Hello.</h3>
              <h2>
                
                <span>I am Rajan Shahi.</span> <br />
                Frontend Web Developer.. <br />
                &Designer
              </h2>
            </div>
           <a href="#"><button className="btn">more</button></a>
          </div>
          <div className="right">
            <img className="Img" src="./image/rajan.png" alt="" />
          </div>
        </div>
      </div>

      <div className="HomeBar-Containner">
        <div className="Navbar1">
          <h3>
            About Me... <br />
            "programmer"
          </h3>
        </div>
        <div className="leftRight1">
          <div className="left1">
            <img src="./image/rajan.png" alt="" />
          </div>
          <div className="right1">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />{" "}
              Sed repudiandae exercitationem, <br /> officiis ullam inventore
              impedit assumenda magni <br />
              veniam vel architecto vitae ea molestiae accusamus eaque enim
              iusto qui. Rerum, tenetur!
            </p>
            <div className="rightbarContainer">
              <div className="rightbar1">
                <div>Name :</div> <br />
                <div>Email :</div>  <br />
                <div>Contact :</div> <br />
                <div>GitHub :</div> <br />
                <div>Address :</div> <br />
              </div>
              <div className="leftbar1">
                <div>Rajan Bahadur Shahi</div> <br />
                <div>rajanshahi1267@gmaiil.com</div>
                <br />
                <div>9866448106</div>
                <br />
                <div>rajan-shahi</div>
                <br />
                <div>Achham Nepal</div>
                <br />
              </div>
            </div>

            <div className="btnlast">
              <button className="send">Send Me</button>
              <button className="send2">More</button>
            </div>
          </div>
        </div>
      </div>

      <div className="LastBar-Containner">
        <div className="navbar2">
          <h2>Services."FlowHere"</h2>
        </div>
        <div className="rightLeft2">
          <div className="left2"></div>
          <div className="right2">
            <div className="AllContainer">
              <div className="container1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                facilis. Provident reprehenderit{" "}
              </div>
              <div className="container2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                facilis. Provident reprehenderi
              </div>
              <div className="container3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                facilis. Provident reprehenderi
              </div>
              <div className="container4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                facilis. Provident reprehenderi
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
