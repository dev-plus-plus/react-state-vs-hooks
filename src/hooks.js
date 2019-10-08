import { useState, useEffect } from "react";
import axios from "axios";

export function useTimer() {
  const [timer, setTimer] = useState(new Date());
  useEffect(() => {
    // Triggered after the 1st render (and only the 1st because of the 2nd parameter `[]`)
    let intervalId = setInterval(() => {
      setTimer(new Date());
    }, 1000);
    return () => {
      // Triggered before unmounting the component
      clearInterval(intervalId);
    };
  }, []);
  return timer;
}

export function useAxiosGet(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios
      .get(url, {
        cancelToken: source.token
      })
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
        } else {
          throw error;
        }
      });
    return () => {
      source.cancel("Component unmounted");
    };
  }, [url]);

  return data;
}
