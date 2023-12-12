import React from "react";

import { Col } from "react-bootstrap";

import "../css/activities.css";

export default function Activities(props) {
  return (
    <Col
      className="activities d-flex flex-column align-items-center"
      onClick={() => props.hangleChangeActivityStatus(props.activity)}
    >
      <img
        src={props.icon}
        className={`${props.status == true ? "activeStatus" : "notActive"}`}
        alt=""
      />
      <p>{props.name}</p>
    </Col>
  );
}
