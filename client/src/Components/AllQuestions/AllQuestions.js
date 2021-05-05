import React, { Component } from "react";
import { getAllQuestions } from "../Dataservice/DataService";
import ShowError from "../ErrorComponent/ShowError";
import "./AllQuestion.css";
export default class AllQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allrows: [],
      loading: true,
      gotError: false,
      text: "",
    };
  }
  async componentDidMount() {
    await getAllQuestions()
      .then((result) => {
        if (result.message) {
          this.setState({
            text: result.message,
          });
          this.setState({
            gotError: true,
          });
        } else {
          console.log(result.data);
          this.setState({
            loading: false,
          });
          this.setState({
            allrows: result.data,
          });
        }
      })
      .catch((error) => {
        this.setState({
          text: "Nextwork Error",
        });
        this.setState({
          gotError: true,
        });
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        {" "}
        <div className="container">
          <div className="row">
            <div className="col-md-12 offset-md-0 mt-5">
              <div className="jumbotron">
                <h1 className="display-4 text-left">Admin</h1>
                <p className="lead font-italic text-left">
                  QUESTION - ANSWER TABLE
                </p>
                <hr className="my-4" />
                <div className="row d-flex align-items-center justify-content-center">
                  <div className="col-md-6">
                    <button type="button" className="btn btn-dark col-md-12">
                      <span className="mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-list"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                          />
                        </svg>
                      </span>
                      <span>List of unsatisfied questions</span>
                    </button>
                  </div>
                  <div className="col-md-3">
                    <a href="k" className="btn btn-outline-success">
                      <i className="fas fa-plus"></i> Add New Question
                    </a>
                  </div>
                </div>
              </div>

              {this.state.loading ? (
                <div>Loading</div>
              ) : (
                <table className="table table-borderless table-hover text-left">
                  <thead className="border-bottom font-weight-bold">
                    <tr>
                      <th>ID</th>
                      <th>Question</th>
                      <th>Answer</th>
                      <th>Viewed Count</th>
                      <th>Satisfied Count</th>
                      <th>Unsatisfied Count</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.allrows.map((item, index) => (
                      <tr key={`tr${index}`}>
                        <td>{item.id}</td>
                        <td>{item.question}</td>
                        <td>{item.answer}</td>
                        <td>{item.viewed}</td>
                        <td>{item.satisfied}</td>
                        <td>{item.unsatisfied}</td>
                        <td>
                          <button type="button" className="AllQuestion_button">
                            <i class="far fa-edit fa-lg"></i>
                          </button>
                        </td>
                        <td>
                          <button type="button" className="AllQuestion_button">
                            <i class="far fa-trash-alt fa-lg text-danger float-right"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
          {this.state.gotError && !this.state.loading && (
            <ShowError text={this.state.text} />
          )}
        </div>
      </div>
    );
  }
}
