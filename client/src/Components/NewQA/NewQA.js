import React, { Component } from "react";
import ShowError from "../ErrorComponent/ShowError";
import "./NewQA.css";
export default class NewQA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allrows: [],
      loading: true,
      gotError: false,
      text: "",
      questypes: [],
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 offset-md-0 mt-5">
            <div className="jumbotron pb-4  ">
              <h1 className="display-4 text-left">Admin</h1>
              <p className="lead font-italic text-left">
                QUESTION - ANSWER TABLE
              </p>
              <hr className="my-4" />
              <h4>Add new question answer</h4>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center text-left ">
          <div className="col-md-11 col-12 NewQA_Row">
            <form>
              <div class="form-group">
                <label className="" for="question">
                  Question*
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="question"
                  aria-describedby="question"
                  placeholder="Enter Question"
                />
              </div>
              <div class="form-group">
                <label className="" for="question">
                  Answer*
                </label>
                <textarea
                  type="text"
                  class="form-control"
                  id="answer"
                  aria-describedby="answer"
                  placeholder="Enter Answer"
                />
              </div>
              <div class="form-group">
                <label className="" for="question">
                  Viewed Count (default zero)
                </label>
                <input
                  type="number"
                  min="0"
                  class="form-control"
                  id="view"
                  aria-describedby="view"
                  defaultValue="0"
                  placeholder="Enter Viewed Count"
                />
              </div>

              <div class="form-group">
                <label className="" for="question">
                  Unsatisfied Count (default zero)
                </label>
                <input
                  type="number"
                  min="0"
                  class="form-control"
                  id="unsatisfied"
                  defaultValue="0"
                  aria-describedby="unsatisfied"
                  placeholder="Enter Unsatisfied Count"
                />
              </div>

              <div class="form-group">
                <label className="" for="question">
                  Satisfied Count (default zero)
                </label>
                <input
                  type="number"
                  min="0"
                  defaultValue="0"
                  class="form-control"
                  id="satisfied"
                  aria-describedby="satisfied"
                  placeholder="Enter Satisfied Count"
                />
              </div>
              <div class="form-group">
                <label for="queType">Example select</label>
                <select class="form-control" id="queType">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
        {this.state.gotError && !this.state.loading && (
          <ShowError text={this.state.text} />
        )}
      </div>
    );
  }
}
