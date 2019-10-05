import { useState, useEffect } from "react";

export function useTimer() {
  const [timer, setTimer] = useState(new Date());
  useEffect(() => {
    // Triggered after the 1st render (and only the 1st because of the 2nd parameter `[]`)
    let intervalId = setInterval(() => {
      setTimer(new Date());
    });
    return () => {
      // Triggered before unmounting the component
      clearInterval(intervalId);
    };
  }, []);
  return timer;
}
