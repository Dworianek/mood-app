import React from "react";

import emotion from "./emotionsObject";

import "../css/calendar.css";

export default function Calendar(props) {
  //Take emojiIcon
  const emojiIcon = emotion.find(
    (emotionIcon) => emotionIcon.name === props.moode.name
  );

  // Date Format
  const formattedDate = new Date(props.moode.date).toLocaleString();
  const formattedDay = new Date(props.moode.date).getDate();

  //Activities table
  const activitiesTable = props.moode.activities.split(", ");

  //Take activities
  const activitiesIcons = activitiesTable.map((activityName) => {
    return props.activities.find((activity) => activity.name === activityName);
  });

  const showAllIcon = activitiesIcons.map((activity) => (
    <img src={activity.icon} alt="" />
  ));

  console.log(activitiesIcons);

  return (
    <tr>
      <td>{`${formattedDay}.`}</td>
      <td>{formattedDate}</td>
      <td className="emojiClass text-center">
        <img src={emojiIcon.icon} alt="" />
      </td>
      <td className="activitiesClass text-center">{showAllIcon}</td>
      <td style={{ maxWidth: "600px", wordWrap: "break-word" }}>
        {props.moode.notes}
      </td>
    </tr>
  );
}
