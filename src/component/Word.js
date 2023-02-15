import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
const Word = ({ word: w }) => {
  const [word, setWord] = useState(w);
  const [isDone, setIsDone] = useState(word.isDone);
  const [isShow, setIsShow] = useState(false);
  function toggleShow() {
    setIsShow(!isShow);
  }

  function toggleDone() {
    //in put method word/{id}, id is the unique id of the element
    fetch(`http://localhost:8001/word/${word.id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  }

  function del() {
    if (window.confirm("really?")) {
      fetch(`http://localhost:8001/word/${word.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setWord({ id: 0 });
        }
      });
    }
  }
  if (word.id === 0) return null;
  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <Form.Check type="switch" id="custom-switch" defaultChecked={isDone} onChange={toggleDone} />
      </td>

      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <Button onClick={toggleShow} variant="primary">
          뜻 {isShow ? "숨기기" : "보기"}
        </Button>{" "}
        <Button variant="danger" onClick={del}>
          삭제
        </Button>
      </td>
    </tr>
  );
};

export default Word;
