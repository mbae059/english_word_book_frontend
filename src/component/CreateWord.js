import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useRef } from "react";
import useFetchDay from "../hooks/useFetchDay";
import { useNavigate } from "react-router-dom";
const CreateWord = () => {
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:8001/word/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: dayRef.current.value,
        eng: engRef.current.value,
        kor: korRef.current.value,
        isDone: false,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("생성완료");
        navigate(`/day/${dayRef.current.value}`);
      }
    });
  }

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);
  const days = useFetchDay();

  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Eng</Form.Label>
      <Form.Control type="text" placeholder="english" ref={engRef} />

      <Form.Label>Kor</Form.Label>
      <Form.Control type="text" placeholder="한국어" ref={korRef} />

      <Form.Label>Day</Form.Label>
      <Form.Select ref={dayRef}>
        {days.map((day) => (
          <option key={day.id} value={day.day}>
            {day.day}
          </option>
        ))}
      </Form.Select>

      <Button variant="primary" type="submit" onClick={onSubmit}>
        Submit
      </Button>
    </Form.Group>
  );
};

export default CreateWord;
