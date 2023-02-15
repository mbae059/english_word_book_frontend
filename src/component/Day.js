import React from "react";
import { useParams } from "react-router-dom";
import Word from "./Word";
import { useState, useEffect } from "react";
// import useFetch from "../hooks/useFetch";
const Day = () => {
  //get json file of path parameters
  //key is day and value is integer(1,2...)
  const dayJson = useParams();

  const day = dayJson.day;

  const [word_list, setWordList] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8001/word/${day}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setWordList(data);
      });
  }, []);
  //word
  return (
    <h2>
      Day {day}
      <table>
        <tbody>
          {word_list.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </h2>
  );
};

export default Day;
