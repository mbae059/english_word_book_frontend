import { useNavigate } from "react-router-dom";
import useFetchDay from "../hooks/useFetchDay";

export default function CreateDay() {
  //days : integer
  const days = useFetchDay();

  const navigate = useNavigate();
  function addDay() {
    fetch(`http://127.0.0.1:8001/day/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("생성이 완료 되었습니다");
        navigate("/");
      }
    });
  }
  return (
    <div>
      <h3>현재 일수 : {days.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  );
}
