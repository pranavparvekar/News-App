import React, { useState, useEffect } from "react";

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setCurrentTime(new Date());
  };

  return (
    <div>
      <p style={{ fontSize: "0.5em", padding: "10px", marginTop: "10px" }}>
        {currentTime.toLocaleTimeString()}
      </p>
    </div>
  );
};

export default CurrentTime;
