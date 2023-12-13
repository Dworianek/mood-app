import React from "react";

import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.css";

import Interview from "./components/interview";
import Calendar from "./components/calendar";

import excelentIcon from "./images/1.png";
import goodIcon from "./images/2.png";
import averageIcon from "./images/3.png";
import badIcon from "./images/4.png";
import terribleIcon from "./images/5.png";

import wakeup from "./images/activities/alarm.png";
import breakfast from "./images/activities/breakfast.png";
import shower from "./images/activities/shower.png";
import cleanup from "./images/activities/cleanup.png";
import dinner from "./images/activities/dinner.png";
import walk from "./images/activities/walk.png";

export default function App() {
  //Input time + Effect to take current date/time
  const [defaultDateTime, setDefaultDateTime] = useState("");

  const [tableMood, setTableMood] = useState([
    {
      name: "wspaniale",
      activities: "Pobudka, Prysznic",
      notes: "Super dzień, pobudzający prysznic po pobudce dużo mi dał",
    },
    {
      name: "dobrze",
      activities: "Śniadanie, Sprzątanie, Spacer",
      notes: "Dobrze się czuję po śniadaniu, sprzątaniu i spacerze",
    },
    {
      name: "średnio",
      activities: "Obiad",
      notes: "Średni dzień, ale obiad był smaczny",
    },
    {
      name: "źle",
      activities: "Pobudka, Spacer",
      notes: "Mam zły dzień, pomógł trochę poranny spacer",
    },
    {
      name: "tragicznie",
      activities: "Śniadanie, Prysznic, Sprzątanie",
      notes:
        "Tragiczny dzień, chociaż śniadanie, prysznic i sprzątanie były ok",
    },
    {
      name: "wspaniale",
      activities: "Pobudka, Obiad, Spacer",
      notes: "Super dzień, zwłaszcza po porannej pobudce, obiedzie i spacerze",
    },
    {
      name: "dobrze",
      activities: "Prysznic, Obiad",
      notes: "Dobry dzień, zwłaszcza po prysznicu i obiedzie",
    },
    {
      name: "średnio",
      activities: "Sprzątanie",
      notes: "Dzień średni, ale przynajmniej sprzątanie zrobione",
    },
    {
      name: "źle",
      activities: "Pobudka, Śniadanie",
      notes: "Zły dzień, ale śniadanie i poranna pobudka pomogły trochę",
    },
    {
      name: "tragicznie",
      activities: "Obiad, Spacer",
      notes: "Tragiczny dzień, ale obiad i spacer poprawiły nieco nastrój",
    },
    {
      name: "wspaniale",
      activities: "Prysznic, Spacer",
      notes: "Wspaniały dzień po prysznicu i spacerze",
    },
    {
      name: "dobrze",
      activities: "Śniadanie, Sprzątanie, Obiad",
      notes: "Dobrze się czuję po śniadaniu, sprzątaniu i obiedzie",
    },
  ]);

  const [noteValue, setNoteValue] = useState("");
  const [tempMood, setTempMood] = useState("");

  useEffect(() => {
    const currentDateTime = new Date();
    const formattedDate = currentDateTime.toISOString().slice(0, 16);

    setDefaultDateTime(formattedDate);
  }, []);

  //Emotion
  const emotion = [
    { id: 1, name: "Wspaniale", icon: excelentIcon },
    { id: 2, name: "Dobrze", icon: goodIcon },
    { id: 3, name: "Średnio", icon: averageIcon },
    { id: 4, name: "Źle", icon: badIcon },
    { id: 5, name: "Tragicznie", icon: terribleIcon },
  ];
  //Activities
  const [activities, setActivities] = useState([
    { id: 1, name: "Pobudka", icon: wakeup, status: false },
    { id: 2, name: "Śniadanie", icon: breakfast, status: false },
    { id: 3, name: "Prysznic", icon: shower, status: false },
    { id: 4, name: "Sprzątanie", icon: cleanup, status: false },
    { id: 5, name: "Obiad", icon: dinner, status: false },
    { id: 6, name: "Spacer", icon: walk, status: false },
  ]);

  const showTable = tableMood.map((moode) => (
    <>
      <Calendar {...moode} defaultDateTime={defaultDateTime} />
    </>
  ));

  const handleClickMoodAdd = (name, notes) => {
    const filteredActivities = activities
      .filter((activity) => activity.status === true)
      .map((activity) => activity.name);

    const joinegString = filteredActivities.join(", ");

    setTableMood([
      ...tableMood,
      { name: name, activities: joinegString, notes: notes },
    ]);
  };
  const setTempMoodName = (name) => {
    setTempMood(name);
  };

  const hanldeInputChange = (e) => {
    setNoteValue(e.target.value);
  };

  const hangleChangeActivityStatus = (clickActivities) => {
    const updateActivities = activities.map((activity) => {
      if (activity.id === clickActivities.id)
        return { ...activity, status: !activity.status };
      else {
        return activity;
      }
    });
    setActivities(updateActivities);
  };

  return (
    <>
      <Container className="d-flex flex-column justify-content-center align-items-center mt-5">
        <Row style={{ width: "700px" }}>
          <Interview
            currentDate={defaultDateTime}
            emotion={emotion}
            activities={activities}
            tempMood={tempMood}
            noteValue={noteValue}
            setTempMoodName={setTempMoodName}
            hanldeInputChange={hanldeInputChange}
            handleClickMoodAdd={handleClickMoodAdd}
            hangleChangeActivityStatus={hangleChangeActivityStatus}
          />
        </Row>
        <Row className="my-5">Grudzień 2023</Row>
        <Row style={{ width: "700px" }}>
          <Calendar />
        </Row>
        <Row>
          <Table striped hover>
            <thead>
              <tr>
                <th>Dzień</th>
                <th>Dokładna data</th>
                <th>Humor</th>
                <th>Aktywności</th>
                <th>Notatka</th>
              </tr>
            </thead>
            <tbody>{showTable}</tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
}
