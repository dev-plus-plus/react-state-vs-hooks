import React, { useState, useEffect } from "react";

// Example of a Clock with a state hook
export default function Clock2() {
  const [timer, setTimer] = useState(new Date());
  useEffect(() => { // Triggered after the 1st render (and only the 1st because of the 2nd parameter `[]`)
    let intervalId = setInterval(() => {
      setTimer(new Date());
    });
    return () => { // Triggered before unmounting the component
      clearInterval(intervalId);
    };
  }, []);
  return <div className="Clock">{timer.toLocaleTimeString()}</div>;
}
