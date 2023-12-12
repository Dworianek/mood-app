import React from "react";

import "../css/emoticon.css";

import { Col } from "react-bootstrap";

export default function Emoticon(props) {
  return (
    <Col className="emoticon d-flex flex-column align-items-center">
      <img
        className={`${props.tempMood == props.name ? "active" : "notActive"}`}
        src={props.icon}
        alt=""
        onClick={() => props.setTempMoodName(props.name)}
      />
      <p>{props.name}</p>
    </Col>
  );
}
