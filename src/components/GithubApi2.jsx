import React, { useState, useEffect } from "react";
import axios from "axios";

export default function GithubApi2() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios
      .get(
        "https://api.github.com/search/repositories?sort=stars&q=language:javascript",
        {
          cancelToken: source.token
        }
      )
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
        } else {
          console.log("An error happened", error);
        }
      });
    return () => {
      source.cancel("Component unmounted");
    };
  }, []);

  return (
    <div className="GithubApi">
      {!data && "Loading..."}
      {data && (
        <a href={data.items[0].html_url}>
          {data.items[0].name}
        </a>
      )}
    </div>
  );
}
