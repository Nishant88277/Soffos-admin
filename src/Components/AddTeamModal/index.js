import React, { Component } from "react";
import Dropzone from "react-dropzone";

// -- image --
import Upload from "../../img/upload.png";

// --style--
import AddteamModalStyle from "./AddteamModalStyle";

// To maintain progress bar.
var ProgStatus;

class Modal extends Component {
  constructor(props) {
    super(props);

    // Initial state render.
    this.state = {
      team: "",
      open: this.props.Open,
      values: [],
      files: [],
      SingleUpload: true,
      MassUpload: false,
      UploadList: false,
    };
  }

  // This function is to handle the drop functionality and progress bar
  onDrop = (files) => {
    var progress = 0, interval;
    this.setState({ files });
    document.getElementById("prog").style.display = 'none';
    interval = window.setInterval(function () {
      if(document.getElementById("prog") !== null){ document.getElementById("prog").style.display = 'block'; } else{
        document.getElementById("prog").style.display = 'none';
      }
      if(document.getElementById("prog") !== null){ document.getElementById("prog").style.width = progress + "%";}else{
        document.getElementById("prog").style.display = 'none';
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
    if(ProgStatus === undefined || ProgStatus === true){
      this.props.Close();
      this.setState({
        team: "",
        values: [],
        files: [],
        imgSrc: "https://i.stack.imgur.com/l60Hf.png",
        SingleUpload: true,
        MassUpload: false,
        UploadList: false,
      });
    }
  }

  // To show preview of selected image.
  showMyImage(fileInput) {
    // Assuming only image
    var file = this.refs.file.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      this.setState({
        imgSrc: [reader.result],
      });
    }.bind(this);
    console.log(url);
  }

  // To show drag and drop on upload button click.
  ShowDrag() {
    this.setState({ MassUpload: true, SingleUpload: false });
  }

   // To show list after upload.
  ShowList() {
    ProgStatus === undefined ? this.props.Close() : ProgStatus === true && this.setState({ MassUpload: false, SingleUpload: false, UploadList: true });
  }

  render() {

    // To get information about drpped CSV.
    const files = this.state.files.map((file) => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
    ));
    // console.log(files);
    return (
      <>
        {this.props.Open && (
          <div className="AddTeamModalWrap">
            <div className="modalOverlay"></div>
            <div className="modalPopup">
              {this.state.SingleUpload && (
                <div className="modalPopup-header">
                  Add Team member
                  <span
                    title="Mass Upload"
                    onClick={() => this.ShowDrag()}
                    className="close-btn-mass"
                  >
                    <img src={Upload} alt="profile" />
                  </span>
                </div>
              )}
              <div className="Modalpopup-content">
                <div className="mb-3">
                  {this.state.SingleUpload && (
                    <form className="singleUpload">
                      <div className="input-wrap">
                        <div className="text-center mb-3">
                          <input
                            ref="file"
                            id="file"
                            type="file"
                            name="user[image]"
                            multiple="true"
                            className="d-none"
                            onChange={() => this.showMyImage()}
                          />
                          <label for="file">
                            <img
                              src={
                                this.state.imgSrc
                                  ? this.state.imgSrc
                                  : "https://i.stack.imgur.com/l60Hf.png"
                              }
                              alt="profile"
                            />
                          </label>
                        </div>
                        <div className="position-relative">
                          <input
                            type="text"
                            placeholder="Enter your Full Name"
                            id="team-name"
                            name="Name"
                            className="mb-3"
                            value={this.state.team}
                            onChange={(e) => this.handleTeam(e)}
                          />
                        </div>
                        <div className="position-relative">
                          <div className="form-group">
                            <select className="form-control" id="designation">
                              <option selected disabled>
                                Designation
                              </option>
                              <option>Business developer</option>
                              <option>Project manager</option>
                              <option>Developer</option>
                              <option>Programmer</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6 pr-0">
                          <button
                            className="addButton"
                            onClick={() => this.close()}
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
                  )}
                  {this.state.MassUpload && (
                    <form className="MassUpload">
                      <div className="input-wrap">
                        <div className="position-relative">
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
                      </div>
                      <div className="row">
                        <div className="col-6 pr-0">
                          <button
                            className="addButton"
                            onClick={() => this.ShowList()}
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
                  )}
                  {this.state.UploadList && (
                    <div className="ModalListing">
                      <div className="modalPopup-header mb-4 pl-0">
                        Team imported
                        <span
                          onClick={() => this.close()}
                          className="close-btn"
                        >
                          X
                        </span>
                      </div>
                      <div className="listWrap">
                        <div className="d-flex align-items-center teamList">
                          <div className="w-75">
                            <p className="m-0">Carter Burwell</p>
                            <span>Head of Engineering</span>
                          </div>
                          <div className="w-25 text-right">
                            <img
                              src="https://media.gettyimages.com/photos/beautiful-woman-picture-id873678270?s=612x612"
                              alt="Teams"
                            />
                          </div>
                        </div>
                        <div className="d-flex align-items-center teamList mt-4">
                          <div className="w-75">
                            <p className="m-0">Carter Burwell</p>
                            <span>Head of Engineering</span>
                          </div>
                          <div className="w-25 text-right">
                            <img
                              src="https://media.gettyimages.com/photos/beautiful-woman-picture-id873678270?s=612x612"
                              alt="Teams"
                            />
                          </div>
                        </div>
                        <div className="d-flex align-items-center teamList mt-4">
                          <div className="w-75">
                            <p className="m-0">Carter Burwell</p>
                            <span>Head of Engineering</span>
                          </div>
                          <div className="w-25 text-right">
                            <img
                              src="https://media.gettyimages.com/photos/beautiful-woman-picture-id873678270?s=612x612"
                              alt="Teams"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <AddteamModalStyle />
          </div>
        )}
      </>
    );
  }
}

export default Modal;
