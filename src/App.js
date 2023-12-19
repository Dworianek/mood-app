import React from "react";

import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.css";

import Interview from "./components/interview";
import Calendar from "./components/calendar";

import MoodAddInfo from "./components/moodAddInfo";

import emotion from "./components/emotionsObject";

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
      date: "2023-12-01T05:53",
      name: "wspaniale",
      activities: "Pobudka, Prysznic",
      notes: "Super dzień, pobudzający prysznic po pobudce dużo mi dał",
    },
    {
      date: "2023-12-02T05:53",
      name: "dobrze",
      activities: "Śniadanie, Sprzątanie, Spacer",
      notes: "Dobrze się czuję po śniadaniu, sprzątaniu i spacerze",
    },
    {
      date: "2023-12-03T05:53",
      name: "średnio",
      activities: "Obiad",
      notes: "Średni dzień, ale obiad był smaczny",
    },
    {
      date: "2023-12-04T05:53",
      name: "źle",
      activities: "Pobudka, Spacer",
      notes: "Mam zły dzień, pomógł trochę poranny spacer",
    },
    {
      date: "2023-12-05T05:53",
      name: "tragicznie",
      activities: "Śniadanie, Prysznic, Sprzątanie",
      notes:
        "Tragiczny dzień, chociaż śniadanie, prysznic i sprzątanie były ok",
    },
    {
      date: "2023-12-06T05:53",
      name: "wspaniale",
      activities: "Pobudka, Obiad, Spacer",
      notes: "Super dzień, zwłaszcza po porannej pobudce, obiedzie i spacerze",
    },
    {
      date: "2023-12-07T06:53",
      name: "dobrze",
      activities: "Prysznic, Obiad",
      notes: "Dobry dzień, zwłaszcza po prysznicu i obiedzie",
    },
    {
      date: "2023-12-08T05:53",
      name: "średnio",
      activities: "Sprzątanie",
      notes: "Dzień średni, ale przynajmniej sprzątanie zrobione",
    },
    {
      date: "2023-12-09T05:53",
      name: "źle",
      activities: "Pobudka, Śniadanie",
      notes: "Zły dzień, ale śniadanie i poranna pobudka pomogły trochę",
    },
    {
      date: "2023-12-10T05:53",
      name: "tragicznie",
      activities: "Obiad, Spacer",
      notes: "Tragiczny dzień, ale obiad i spacer poprawiły nieco nastrój",
    },
    {
      date: "2023-12-11T05:53",
      name: "wspaniale",
      activities: "Prysznic, Spacer",
      notes: "Wspaniały dzień po prysznicu i spacerze",
    },
    {
      date: "2023-12-12T05:53",
      name: "dobrze",
      activities: "Śniadanie, Sprzątanie, Obiad",
      notes: "Dobrze się czuję po śniadaniu, sprzątaniu i obiedzie",
    },
  ]);

  const [noteValue, setNoteValue] = useState("");
  const [tempMood, setTempMood] = useState("");

  const [validationValue, setValidationValue] = useState({
    button: false,
    mood: false,
    activities: false,
    note: false,
  });

  const message = {
    messageMood: "Musiz wybrać chociaż jedną emocję...",
    messageActivities: "Musisz wybrać minimum 1 aktywności...",
    messageNote: "Twoja notata musi mieć minimum 20 znaków...",
  };

  useEffect(() => {
    const currentDateTime = new Date();
    const formattedDate = currentDateTime.toISOString().slice(0, 16);

    setDefaultDateTime(formattedDate);
  }, []);

  //Activities
  const [activities, setActivities] = useState([
    { id: 1, name: "Pobudka", icon: wakeup, status: false },
    { id: 2, name: "Śniadanie", icon: breakfast, status: false },
    { id: 3, name: "Prysznic", icon: shower, status: false },
    { id: 4, name: "Sprzątanie", icon: cleanup, status: false },
    { id: 5, name: "Obiad", icon: dinner, status: false },
    { id: 6, name: "Spacer", icon: walk, status: false },
  ]);

  const showTable = tableMood.map((mood, index) => (
    <Calendar
      key={index}
      moode={mood}
      defaultDateTime={defaultDateTime}
      activities={activities}
    />
  ));

  const handleClickMoodAdd = (name, notes) => {
    // Walidacja aktywności

    setValidationValue({ ...validationValue, button: true });

    const filteredActivities = activities
      .filter((activity) => activity.status === true)
      .map((activity) => activity.name);

    const joinegString = filteredActivities.join(", ");

    if (
      validationValue.button &&
      validationValue.mood &&
      validationValue.activities &&
      validationValue.note
    ) {
      setTableMood([
        ...tableMood,
        {
          date: defaultDateTime,
          name: name,
          activities: joinegString,
          notes: notes,
        },
      ]);

      //Czyszczenie formularza
      alert("Sukces, udało się dodać nowy formularz.");
      setNoteValue("");
      setTempMood("");

      const tempActivities = activities.map((activity) => {
        return { ...activity, status: false };
      });
      setActivities(tempActivities);
    } else alert("Nie udało się wysłać formularza. Popraw błędy.");
  };
  const setTempMoodName = (name) => {
    setTempMood(name);
    const isNameValid = name.length > 0;
    setValidationValue({
      ...validationValue,
      mood: isNameValid,
    });
  };

  const hanldeInputChange = (e) => {
    setNoteValue(e.target.value);
    const isNoteValid = e.target.value.length >= 20;

    setValidationValue({
      ...validationValue,
      note: isNoteValid,
    });
  };

  const handleChangeDate = (e) => {
    setDefaultDateTime(e.target.value);
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

    const isActivityValid = updateActivities.some(
      (activity) => activity.status === true
    );

    setValidationValue({ ...validationValue, activities: isActivityValid });
  };

  const checkTodayEmotion = tableMood.find(
    (mood) =>
      new Date(mood.date).getDate() === new Date(defaultDateTime).getDate()
  );

  return (
    <>
      <Container className="d-flex flex-column justify-content-center align-items-center mt-5">
        <Row style={{ width: "700px" }}>
          {checkTodayEmotion ? (
            <MoodAddInfo />
          ) : (
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
              handleChangeDate={handleChangeDate}
              validationValue={validationValue}
              message={message}
            />
          )}
        </Row>
        <Row className="mt-5 mb-1">
          <h3>Grudzień 2023</h3>
        </Row>
        <Row style={{ width: "700px" }}></Row>
        <Row>
          <Table striped hover>
            <thead>
              <tr>
                <th>Dzień</th>
                <th>Data/Godzina</th>
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
