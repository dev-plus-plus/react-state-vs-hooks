import React from "react";
import { useAxiosGet } from "../hooks";

export default function GithubApi3() {
  const data = useAxiosGet(
    "https://api.github.com/search/repositories?sort=stars&q=language:javascript"
  );

  return (
    <div className="GithubApi">
      {!data && "Loading..."}
      {data && <a href={data.items[0].html_url}>{data.items[0].name}</a>}
    </div>
  );
}
