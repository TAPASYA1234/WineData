import React, { useEffect, useState } from "react";
import { wineData } from "../data";
import { getMeanAny, getMedianAny, getModeAny } from "../helper";
import './gamma.css';

function Gamma() {
  const [gammaClass1, setGammaClass1] = useState([]);
  const [gammaClass2, setGammaClass2] = useState([]);
  const [gammaClass3, setGammaClass3] = useState([]);

  console.log("wine data", wineData);

  const setData = () => {
    const arr1 = [];
    const arr2 = [];
    const arr3 = [];

    // gamma = (Ash*Hue)/Magnesium;
    // Loop through the wineData array and calculate gamma values based on alcohol class
    wineData.forEach((item) => {
      const { Alcohol, Ash, Hue, Magnesium } = item;
      if (Alcohol === 1) {
        arr1.push((Ash * Hue) / Magnesium);
      } else if (Alcohol === 2) {
        arr2.push((Ash * Hue) / Magnesium);
      } else if (Alcohol === 3) {
        arr3.push((Ash * Hue) / Magnesium);
      }
    });

    setGammaClass1(arr1);
    setGammaClass2(arr2);
    setGammaClass3(arr3);
  };

  //   Using func from helper file for menubar, median, mode
  //   and passing array to them for whatever array we want

  useEffect(() => {
    setData();
  }, []);

  return (
    <div className="table-container">
      <div className="heading" >
            <h2>Gamma Table</h2>
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
            <td>Gamma Mean</td>
            <td> {getMeanAny(gammaClass1)} </td>
            <td>{getMeanAny(gammaClass2)}</td>
            <td>{getMeanAny(gammaClass3)}</td>
          </tr>
          <tr>
            <td>Gamma Median</td>
            <td>{getMedianAny(gammaClass1)} </td>
            <td> {getMedianAny(gammaClass2)} </td>
            <td> {getMedianAny(gammaClass3)} </td>
          </tr>
          <tr>
            <td>Gamma Mode</td>
            <td> {getModeAny(gammaClass1)} </td>
            <td> {getModeAny(gammaClass2)} </td>
            <td> {getModeAny(gammaClass3)} </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Gamma;
