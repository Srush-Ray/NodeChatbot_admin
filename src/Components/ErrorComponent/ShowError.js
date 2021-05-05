import React, { Component } from "react";

export default class ShowError extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorText: this.props.text || "",
    };
  }
  render() {
    return (
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{this.state.errorText}</strong>
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}
