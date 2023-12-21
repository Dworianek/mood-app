import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
} from "recharts";

import Table from "react-bootstrap/Table";

import { Col, Row } from "react-bootstrap";

import emotion from "./emotionsObject";

export default function MoodChart(props) {
  const nowaTablica = props.tableMood.map((element) => {
    // Rozdzielanie daty i godziny
    const [dataBezGodziny] = element.date.split("T");

    // Tworzenie nowego obiektu z datą bez godziny i resztą danych
    return {
      ...element,
      date: dataBezGodziny,
    };
  });

  const moodCountDay = emotion.map((emoticon) => {
    // Filtruj elementy z props.tableMood, które mają takie samo name jak emoticon
    const filteredMoods = props.tableMood.filter(
      (mood) => mood.name === emoticon.name
    );

    return (
      <tr>
        <td>
          <img src={emoticon.icon} alt="" height={"30px"} /> {emoticon.name}
        </td>
        <td className="text-center">
          <strong>{filteredMoods.length}</strong>
        </td>
      </tr>
    );
  });

  return (
    <>
      <Col>
        <LineChart
          width={1000}
          height={300}
          data={nowaTablica}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={[0, 7]} />
          <Tooltip
            formatter={(value, name, props) => [
              `${props.payload.name}`,
              "Samopoczucie",
            ]}
          />
          <Legend />
          <Line type="linear" dataKey="moodValue" stroke="#82ca9d" />
        </LineChart>
      </Col>
      <Col>
        <Table striped hover responsive>
          <thead>
            <tr>
              <th>Samopoczucie</th>
              <th>Liczba dni</th>
            </tr>
          </thead>
          <tbody>{moodCountDay}</tbody>
        </Table>
      </Col>
    </>
  );
}
