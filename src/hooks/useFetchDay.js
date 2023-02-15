import { useState, useEffect } from "react";

const useFetchDay = () => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/day/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDays(data);
      });
  }, []);
  return days;
};

export default useFetchDay;
