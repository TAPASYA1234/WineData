import React, { useEffect, useState } from "react";
import { wineData } from "../data";
import "./flavanoids.css";
import { getMeanAny, getMedianAny, getModeAny } from "../helper";

function Flavanoids() {
  const [flavanoidsClass1, setFlavanoidsClass1] = useState([]);
  const [flavanoidsClass2, setFlavanoidsClass2] = useState([]);
  const [flavanoidsClass3, setFlavanoidsClass3] = useState([]);

  const setData = () => {
    const flv1 = [];
    const flv2 = [];
    const flv3 = [];

    // Loop through the wineData array and separate Flavanoids based on alcohol class
    wineData.forEach((wine) => {
      const { Alcohol, Flavanoids } = wine;

      if (Alcohol === 1) {
        flv1.push(Flavanoids);
      } else if (Alcohol === 2) {
        flv2.push(Flavanoids);
      } else if (Alcohol === 3) {
        flv3.push(Flavanoids);
      }
    });
    setFlavanoidsClass1(flv1);
    setFlavanoidsClass2(flv2);
    setFlavanoidsClass3(flv3);
  };

  //   Using func from helper file for mean, median, mode
  //   and passing array to them for whatever array we want

  useEffect(() => {
    setData();
  }, []);

  //Table for displaying data based on different class of alcohol

  return (
    <div className="table-container">
      <div className="heading">
        <h2>Flavanoids Table</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            <th>Class 1</th>
            <th>Class 2</th>
            <th>Class 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Flavanoids Mean</td>
            <td> {getMeanAny(flavanoidsClass1)} </td>
            <td>{getMeanAny(flavanoidsClass2)}</td>
            <td>{getMeanAny(flavanoidsClass3)}</td>
          </tr>
          <tr>
            <td>Flavanoids Median</td>
            <td>{getMedianAny(flavanoidsClass1)} </td>
            <td> {getMedianAny(flavanoidsClass2)} </td>
            <td> {getMedianAny(flavanoidsClass3)} </td>
          </tr>
          <tr>
            <td>Flavanoids Mode</td>
            <td> {getModeAny(flavanoidsClass1)} </td>
            <td> {getModeAny(flavanoidsClass2)} </td>
            <td> {getModeAny(flavanoidsClass3)} </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Flavanoids;
