import React from "react";
import { useTimer } from '../hooks'

// Example of a Clock with a custom hook
export default function Clock3() {
  const timer = useTimer()
  return <div className="Clock">{timer.toLocaleTimeString()}</div>;
}
