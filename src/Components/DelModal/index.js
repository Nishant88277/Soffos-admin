import React, { Component } from "react";

// --style--
import AddteamModalStyle from "./AddteamModalStyle";

class Modal extends Component {
  close() {

    // To share the state change of modal with parent component.
    this.props.Close();
    
    // Setstate to initial.
    this.setState({
      values: [],
      files: [],
      SingleUpload: true,
      MassUpload: false,
      UploadList: false,
    });
  }

  render() {
    return (
      <>
        {this.props.Open && (
          <div className="AddTeamModalWrap">
            <div className="modalOverlay"></div>
            <div className="modalPopup">
              <div className="Modalpopup-content text-white text-center mt-2">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 130.2 130.2"
                  style={{ width: "80px", marginBottom: "20px" }}
                >
                  <circle
                    className="path circle"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="6"
                    strokeMiterlimit="10"
                    cx="65.1"
                    cy="65.1"
                    r="62.1"
                  />
                  <line
                    className="path line"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    x1="34.4"
                    y1="37.9"
                    x2="95.8"
                    y2="92.3"
                  />
                  <line
                    className="path line"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    x1="95.8"
                    y1="38"
                    x2="34.4"
                    y2="92.2"
                  />
                </svg>
                <p className="m-0">
                  Are you sure you want to delete this member?
                </p>
                <div className="row mt-4">
                  <div className="col-6 pr-0">
                    <button
                      className="addButton"
                      onClick={() => this.close()}
                      type="button"
                    >
                      Confirm
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
