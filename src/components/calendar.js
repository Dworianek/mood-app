import React from "react";

export default function Calendar(props) {
  return (
    <tr>
      <td>{props.defaultDateTime && props.defaultDateTime.slice(8, 10)}</td>
      <td>{props.defaultDateTime}</td>
      <td>{props.name}</td>
      <td>{props.activities}</td>
      <td>{props.notes}</td>
    </tr>
  );
}
