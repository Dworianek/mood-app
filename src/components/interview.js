import React from "react";

import { Row } from "react-bootstrap";

import "../css/interview.css";

import Emoticon from "./emoticon";
import Activities from "./activities";

export default function Interview(props) {
  const emotionType = props.emotion.map((emot) => (
    <Emoticon
      id={emot.id}
      name={emot.name}
      icon={emot.icon}
      setTempMoodName={props.setTempMoodName}
      tempMood={props.tempMood}
    />
  ));
  const activitiesType = props.activities.map((activity) => (
    <Activities
      activity={activity}
      id={activity.id}
      name={activity.name}
      icon={activity.icon}
      status={activity.status}
      hangleChangeActivityStatus={props.hangleChangeActivityStatus}
    />
  ));

  return (
    <div>
      <Row>
        <h2>Cześć, jak sie dziś masz?</h2>
      </Row>
      <Row className="my-2">
        <input type="datetime-local" value={props.currentDate} name="" id="" />
      </Row>
      <Row className="d-flex justify-content-center align-items-center my-3">
        {emotionType}
      </Row>
      <Row className="mt-3">
        <h4>A co dziś robiłeś?</h4>
      </Row>
      <Row className="d-flex justify-content-center align-items-center my-3">
        {activitiesType}
      </Row>
      <Row className="d-flex justify-content-center align-items-center my-3">
        <input
          onChange={props.hanldeInputChange}
          className="noteInput"
          type="textarea"
          name=""
          value={props.noteValue}
          placeholder="Dodaj notatkę z całego dnia..."
        />
      </Row>
      <Row>
        <button
          onClick={() =>
            props.handleClickMoodAdd(props.tempMood, props.noteValue)
          }
        >
          Dodaj raport
        </button>
      </Row>
    </div>
  );
}
