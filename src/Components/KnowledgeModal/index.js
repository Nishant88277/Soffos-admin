import React, { Component } from "react";
import Dropzone from "react-dropzone";

// --style--
import KnowledgeModalStyle from "./KnowledgeModalStyle";

// To maintain progress bar.
var ProgStatus;


// Functionality of newly created Silos and active state maintainence.
function silo(elem) {
  var pos = document.querySelectorAll(".pos");
  for (var i = 0; i < pos.length; i++) {
    pos[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
    });
  }
  document.getElementById("myUL").setAttribute("class", "d-none");
  document.getElementById("DocList").setAttribute("class", "d-none");
}

class KnowledgeModal extends Component {
  constructor() {
    super();

    // Initial state render.
    this.state = {
      files: [],
      values: [],
      team: "",
    };
  }

  // This function is to handle the drop functionality and progress bar
  onDrop = (files) => {
    var progress = 0,
      interval;
    this.setState({ files });
    document.getElementById("prog").style.display = "none";
    interval =
      files.length !== 0 &&
      window.setInterval(function () {
        if (document.getElementById("prog") !== null) {
          document.getElementById("prog").style.display = "block";
        } else {
          document.getElementById("prog").style.display = "none";
        }
        if (document.getElementById("prog") !== null) {
          document.getElementById("prog").style.width = progress + "%";
        } else {
          document.getElementById("prog").style.display = "none";
        }
        progress++;
        ProgStatus = false;
        if (progress >= 100) {
          ProgStatus = true;
          window.clearInterval(interval);
        }
      }, Math.random() * 5);
  };

  // This function is to make team input a controlled component. At initial stage we will set state as empty then onChange the state will get changed up in here.
  handleTeam(e) {
    this.setState({ team: e.target.value });
  }

  // To share state with parent upon diffrent URL conditions.
  handleSubmit(e) {
    e.preventDefault();
    if (window.location.href.split("/")[3] === "knowledge") {
      if (ProgStatus === undefined || ProgStatus === true) {
        this.state.team && this.props.Close();
        this.props.Create(this.state.team);
      }
    } else {
      if (ProgStatus === undefined || ProgStatus === true) {
        localStorage.setItem("Inditeam", this.state.team);
        this.props.Close();
      }
    }
    ProgStatus === true && this.setState({ files: [], team: "" });
  }

  // To share the state change of modal with parent component and Setstate to initial.
  close() {
    if (ProgStatus === undefined || ProgStatus === true) {
      this.props.Close();
      this.setState({ files: [], team: "" });
    }
  }

  render() {

    // To get information about drpped CSV.
    const files = this.state.files.map((file) => (
      <li key={file.name}>
        {/* {file.name} - {file.size} bytes */}
        {file.name}
      </li>
    ));
    return (
      <>
        {this.props.Open && (
          <div className="modalWrap">
            <div className="modalOverlay"></div>
            <div className="modalPopup">
              <div className="modalPopup-header">
                New Silo
                <span onClick={() => this.close()} className="close-btn">
                  X
                </span>
              </div>
              <div className="Modalpopup-content">
                <div className="mb-3">
                  <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="input-wrap overflow-unset">
                      <div className="position-relative">
                        <input
                          type="text"
                          placeholder="Enter silo name"
                          id="team-name"
                          name="team-name"
                          className="mb-3"
                          onChange={(e) => this.handleTeam(e)}
                        />
                      </div>
                      <div className="position-relative">
                        <Dropzone
                          onDrop={this.onDrop}
                          accept=".csv, application/vnd.ms-excel, text/csv"
                        >
                          {({ getRootProps, getInputProps }) => (
                            <section className="text-center outline">
                              <div
                                {...getRootProps({
                                  className: "dropzone",
                                })}
                              >
                                <input {...getInputProps()} />
                                <svg
                                  className="box__icon mb-3"
                                  style={{ fill: "#92b0b3" }}
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="50"
                                  height="43"
                                  viewBox="0 0 50 43"
                                >
                                  <path d="M48.4 26.5c-.9 0-1.7.7-1.7 1.7v11.6h-43.3v-11.6c0-.9-.7-1.7-1.7-1.7s-1.7.7-1.7 1.7v13.2c0 .9.7 1.7 1.7 1.7h46.7c.9 0 1.7-.7 1.7-1.7v-13.2c0-1-.7-1.7-1.7-1.7zm-24.5 6.1c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l10-11.6c.7-.7.7-1.7 0-2.4s-1.7-.7-2.4 0l-7.1 8.3v-25.3c0-.9-.7-1.7-1.7-1.7s-1.7.7-1.7 1.7v25.3l-7.1-8.3c-.7-.7-1.7-.7-2.4 0s-.7 1.7 0 2.4l10 11.6z"></path>
                                </svg>
                                <p className="text-white mb-0">
                                  Drag 'n' drop some files here
                                </p>
                              </div>
                            </section>
                          )}
                        </Dropzone>
                        <div className="progress-bar" align="left">
                          <span id="prog"></span>
                        </div>
                        <ul className="pl-0">{files}</ul>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-6 pr-0">
                        <button
                          onClick={(e) => this.handleSubmit(e)}
                          className="addButton"
                          type="button"
                        >
                          Upload
                        </button>
                      </div>
                      <div className="col-6">
                        <button
                          className="closeButton"
                          onClick={() => this.close()}
                          type="button"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <KnowledgeModalStyle />
          </div>
        )}
      </>
    );
  }
}

export default KnowledgeModal;
