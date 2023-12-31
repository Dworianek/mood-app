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
    <div className="interviewClass">
      <Row>
        <h2>Cześć, jak sie dziś masz?</h2>
      </Row>
      <Row className="d-flex justify-content-center my-3">
        <input
          className="dateInput"
          onChange={props.handleChangeDate}
          type="datetime-local"
          value={props.currentDate}
          name=""
          id=""
        />
      </Row>
      <Row>
        <Row className="d-flex justify-content-center align-items-center mt-4">
          {emotionType}
        </Row>
        <Row>
          {props.validationValue.button &&
          props.validationValue.mood === false ? (
            <span>{props.message.messageMood}</span>
          ) : null}
        </Row>
      </Row>
      <Row className="mt-3">
        <h4>A co dziś robiłeś?</h4>
      </Row>
      <Row>
        <Row className="d-flex justify-content-center align-items-center mt-3">
          {activitiesType}
        </Row>
        <Row>
          {" "}
          {props.validationValue.button &&
          props.validationValue.activities === false ? (
            <span>{props.message.messageActivities}</span>
          ) : null}
        </Row>
      </Row>
      <Row>
        <Row className="d-flex justify-content-center align-items-center mt-3">
          {" "}
          <input
            onChange={props.hanldeInputChange}
            className="noteInput"
            type="textarea"
            name=""
            value={props.noteValue}
            placeholder="Dodaj notatkę z całego dnia..."
          />
        </Row>

        <Row className="my-2">
          {" "}
          {props.validationValue.button &&
          props.validationValue.note === false ? (
            <span>{props.message.messageNote}</span>
          ) : null}
        </Row>
      </Row>
      <Row className="d-flex justify-content-center">
        <button
          className="addMoodBtn"
          onClick={() =>
            props.handleClickMoodAdd(props.tempMood, props.noteValue)
          }
        >
          RAPORT SAMOPOCZUCIA
        </button>
      </Row>
    </div>
  );
}
