import React from "react";
import { Link } from "react-router-dom";

const SubService = (props) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="sub-service">
        <div className="icon">
          <img
            src={props.img}
            alt="DigiOrbite Services"
            title="DigiOrbite Services"
          />
        </div>
        <div className="border">
          <p>Optimize Your</p>
          <h3>Online Presence</h3>
          <ul>
            {props.data.map((e, k) => {
              return <li key={k}>{e}</li>;
            })}
          </ul>
          <div className="links">
            <Link className="butn" to={"/"}>
              <i className="fas fa-chevron-up"></i>
            </Link>
            <div className="hide-links">
              <Link className="btn btn-primary">GET STARTED</Link>
              <Link className="link">Learn more</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubService;
