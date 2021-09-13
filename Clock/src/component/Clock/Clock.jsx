import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "./Clock.css";

export const Clock = () => {
  const [sec, setSec] = useState(55);
  const [min, setMin] = useState(59);
  const [hour, setHour] = useState(0);
  const [mHour, setmHour] = useState(23);
  setTimeout(() => {
    setSec(sec + 1);
    if (sec === 60) {
      setMin(min + 1);
      setSec(0);
    }
    if (min === 60) {
      setHour(hour + 1);
      setMin(0);
      setSec(0);
    }
    if (hour === 24) {
      setmHour(mHour + 1);
      setMin(0);
      setSec(0);
    }
  }, 1000);
  return (
    <Card className="Clock">
      <span>
        {mHour}:Hours {hour}:Min {min}:Sec {sec}
      </span>
    </Card>
  );
};

export default Clock;
