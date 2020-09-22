import React, { Component } from "react";
import Dropzone from "react-dropzone";
import Knowledge from "../../Container/Knowledge";

// -- image --
import Upload from "../../img/upload.png";

// --style--
import ModalStyle from "./modalStyle";

// To maintain progress bar.
var ProgStatus;

class Modal extends Component {
  constructor(props) {
    super(props);

    // Initial state render.
    this.state = {
      team: "",
      files: [],
      reload: true,
      open: this.props.Open,
      values: [],
      showTeam: true,
      upload: false,
    };
  }

  // This function is to handle the drop functionality and progress bar
  onDrop = (files) => {
    var progress = 0,
      interval;
    this.setState({ files });
    document.getElementById("prog").style.display = "none";
    interval = window.setInterval(function () {
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

  // This function is to append the inputs.
  handleChange(i, event) {
    let values = [...this.state.values];
    values[i] = event.target.value;
    this.setState({ values });
  }

  // To close modal from child component using props and empty all state.
  close() {
    if (ProgStatus === undefined || ProgStatus === true) {
      this.props.Close();
      this.setState({
        team: "",
        values: [],
        showTeam: true,
        upload: false,
        files: [],
      });
    } else if (ProgStatus === false) {
      this.setState({
        team: "",
        values: [],
        showTeam: true,
        upload: false,
        files: [],
      });
    }
  }

  //Append add functionality
  addClick() {
    this.setState((prevState) => ({ values: [...prevState.values, ""] }));
  }

  //To remove appended functionality
  removeClick(i) {
    let values = [...this.state.values];
    values.splice(i, 1);
    this.setState({ values });
  }

  // To share state with parent upon diffrent URL conditions.
  handleSubmit(event) {
    event.preventDefault();
    if (window.location.href.split("/")[3] === "") {
      var combine = this.state.values.concat(this.state.team);
      combine && this.props.Create(combine);
      if (ProgStatus === false) {
        this.setState({
          team: "",
          values: [],
          showTeam: true,
          upload: false,
        });
      } else if (ProgStatus === true || ProgStatus === undefined) {
        this.state.team && this.props.Close();
        this.setState({
          team: "",
          values: [],
          showTeam: true,
          upload: false,
          files: [],
        });
      }
    } else {
      if (ProgStatus === false) {
        this.setState({
          team: "",
          values: [],
          showTeam: true,
          upload: false,
        });
      } else if (ProgStatus === true || ProgStatus === undefined) {
        this.state.team && this.props.Close();
        localStorage.setItem("Inditeam", this.state.team);
        localStorage.setItem("team", this.state.values);
        this.setState({
          team: "",
          values: [],
          showTeam: true,
          upload: false,
          files: [],
        });
      }
    }
  }

  // Create Appended UI items.
  createUI() {
    return this.state.values.map((el, i) => (
      <div className="position-relative" key={i}>
        <input
          type="text"
          value={el || ""}
          placeholder="Enter team name"
          id="team-name"
          name="team-name"
          className="mb-3"
          onChange={this.handleChange.bind(this, i)}
        />
        <input
          type="button"
          value="-"
          className="actionBtn"
          onClick={this.removeClick.bind(this, i)}
        />
      </div>
    ));
  }

  // To show drag and drop on upload button click.
  showDrag() {
    this.setState({ upload: true, showTeam: false, files: [] });
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
              <div className="modalPopup-header d-flex">
                New Team
                {this.state.showTeam && (
                  <img
                    className="pointer"
                    onClick={() => this.showDrag()}
                    src={Upload}
                    alt="Upload icon"
                  />
                )}
                <span onClick={() => this.close()} className="close-btn">
                  X
                </span>
              </div>
              <div className="Modalpopup-content">
                <div className="mb-3">
                  <form onSubmit={(event) => this.handleSubmit(event)}>
                    <div
                      className={
                        this.state.upload
                          ? "input-wrap overflow-unset"
                          : "input-wrap"
                      }
                    >
                      {this.state.upload && (
                        <div>
                          <Dropzone onDrop={this.onDrop}>
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
                                    Drag 'n' drop CSV files here
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
                      )}
                      {this.state.showTeam && (
                        <div className="position-relative">
                          <input
                            type="text"
                            placeholder="Enter team name"
                            id="team-name"
                            name="team-name"
                            className="mb-3"
                            value={this.state.team}
                            onChange={(e) => this.handleTeam(e)}
                          />
                          <input
                            type="button"
                            value="+"
                            className="actionBtn"
                            onClick={this.addClick.bind(this)}
                          />
                          {this.createUI()}
                        </div>
                      )}
                    </div>
                    <div className="row">
                      <div className="col-6 pr-0">
                        <button
                          className="addButton"
                          onClick={(event) => this.handleSubmit(event)}
                          type="button"
                        >
                          Add
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
            <ModalStyle />
          </div>
        )}
      </>
    );
  }
}

export default Modal;
