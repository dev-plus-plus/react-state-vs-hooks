import React, { Component } from "react";
import axios from "axios";

export default class GithubApi1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
    this.source = axios.CancelToken.source();
  }
  render() {
    return (
      <div className="GithubApi">
        {!this.state.data && "Loading..."}
        {this.state.data && (
          <a href={this.state.data.items[0].html_url}>
            {this.state.data.items[0].name}
          </a>
        )}
      </div>
    );
  }
  componentDidMount() {
    axios
      .get(
        "https://api.github.com/search/repositories?sort=stars&q=language:javascript",
        {
          cancelToken: this.source.token
        }
      )
      .then(response => {
        this.setState({
          data: response.data
        });
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
        } else {
          console.log("An error happened", error);
        }
      });
  }
  componentWillUnmount() {
    this.source.cancel('Component unmounted')
  }
}
