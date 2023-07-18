import React from "react";


export default function Banner() {
  return (
    <div id="container">
        <div id="image">
            <img src="/dist/img/banner/service.png" alt="football player png"/>
        </div>


        <div id="content">
            <h2>STR SPORT</h2>
            <h4>TRAINER</h4>
        </div>

        <div id="icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
        </div>

        <div id="pagination">
            <a href="#"><i className="fas fa-angle-left"></i></a>
            <a href="#"><i className="fas fa-angle-right"></i></a>
        </div>

        <div id="line1"></div>
        <div id="line2"></div>
    </div>
  );
}
