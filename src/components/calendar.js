import React from "react";

import emotion from "../components/emotions";

export default function Calendar(props) {
  const icon = emotion.find(
    (emotionIcon) => emotionIcon.name === props.moode.name
  );

  const formattedDate = new Date(props.moode.date).toLocaleString();
  const formattedDay = new Date(props.moode.date).getDate();

  return (
    <tr>
      <td>{`${formattedDay}.`}</td>
      <td>{formattedDate}</td>
      <td>
        <img src={icon.icon} alt="" height={"25px"} />
      </td>
      <td>{props.moode.activities}</td>
      <td>{props.moode.notes}</td>
    </tr>
  );
}
