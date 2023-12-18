import React from "react";

import emotion from "./emotionsObject";

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

  console.log(activitiesIcons);

  return (
    <tr>
      <td>{`${formattedDay}.`}</td>
      <td>{formattedDate}</td>
      <td>
        <img src={emojiIcon.icon} alt="" height={"25px"} />
      </td>
      <td>{activitiesIcons.name}</td>
      <td>{props.moode.notes}</td>
    </tr>
  );
}
