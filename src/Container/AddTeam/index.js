import React, { Component } from "react";
import AddTeamModal from "../../Components/AddTeamModal";
import ConfirmModal from "../../Components/DelModal";

// --style--
import AddTeamStyle from "./AddTeamStyle";

// --image--
import Delete from "../../img/delete.png";

class Teams extends Component {
  constructor(props) {
    super(props);

    // Initial state render.    
    this.state = {
      check1: true,
      check2: false,
      check3: true,
      check4: true,
      check5: false,
      check6: true,
      check7: false,
      check8: false,
      check9: false,
      check10: false,
      check11: false,
      check12: false,
      teammodal: false,
      confirmmodal: false,
    };

    // To clear localStorage.
    localStorage.clear();
  }

  // Set state for all inputs.  
  handleChange(field) {
    this.setState({ [field]: !this.state[field] });
  }

  // To change state of team modal.
  openTeamModal() {
    this.setState({ teammodal: !this.state.teammodal });
  }

    // To change state of Del Modal.
  DelModal() {
    this.setState({ confirmmodal: !this.state.confirmmodal });
  }

  // Search functionality.
  search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("AddInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("AddTeamList");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("p")[0];
      txtValue = a.textContent || a.innerText;
      console.log(input.value);
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  render() {
    const numbers =
      localStorage.getItem("team") && localStorage.getItem("team").split(",");
    return (
      <>
        <div className="AddteamSection">
          <div className="wrap">
            <div className="head text-center mb-4">
              <p className="m-0">teams</p>
              <span>Add / remove members</span>
            </div>
            <div className="listWrap">
              <ul id="AddTeamList" className="pl-0">
                {this.props.State.check5 && (
                  <li>
                    <div
                      onClick={() => this.handleChange("check1")}
                      className="container"
                      title="Carter Burwell"
                    >
                      <div className="d-flex align-items-center teamList">
                        <div className="w-75">
                          <p className="m-0">Carter Burwell</p>
                          <span>Head of Engineering</span>
                        </div>
                        <div className="w-50px text-right position-relative">
                          <div
                            className="deleteWrap align-items-center justify-content-center"
                            onClick={() => this.DelModal()}
                          >
                            <span className="p-0">
                              <img src={Delete} alt="Delete" />
                            </span>
                          </div>
                          <img
                            src="https://media.gettyimages.com/photos/beautiful-woman-picture-id873678270?s=612x612"
                            alt="Teams"
                          />
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={this.state.check1}
                        onClick={() => this.handleChange("check1")}
                      />
                      <span className="checkmark"></span>
                    </div>
                  </li>
                )}
                {this.props.State.check4 && (
                  <li>
                    <div
                      onClick={() => this.handleChange("check2")}
                      className="container"
                      title="Mary Hutchen"
                    >
                      <div className="d-flex align-items-center teamList">
                        <div className="w-75">
                          <p className="m-0">Mary Hutchen</p>
                          <span>Welding Superviser</span>
                        </div>
                        <div className="w-50px text-right position-relative">
                          <div
                            className="deleteWrap align-items-center justify-content-center"
                            onClick={() => this.DelModal()}
                          >
                            <span className="p-0">
                              <img src={Delete} alt="Delete" />
                            </span>
                          </div>
                          <img
                            src="https://media.gettyimages.com/photos/beautiful-woman-picture-id873678270?s=612x612"
                            alt="Teams"
                          />
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={this.state.check2}
                        onClick={() => this.handleChange("check2")}
                      />
                      <span className="checkmark"></span>
                    </div>
                  </li>
                )}
                {this.props.State.check10 && (
                  <li>
                    <div
                      onClick={() => this.handleChange("check3")}
                      className="container"
                      title="Matt Hooper"
                    >
                      <div className="d-flex align-items-center teamList">
                        <div className="w-75">
                          <p className="m-0">Matt Hooper</p>
                          <span>Electrician</span>
                        </div>
                        <div className="w-50px text-right position-relative">
                          <div
                            className="deleteWrap align-items-center justify-content-center"
                            onClick={() => this.DelModal()}
                          >
                            <span className="p-0">
                              <img src={Delete} alt="Delete" />
                            </span>
                          </div>
                          <img
                            src="https://media.gettyimages.com/photos/beautiful-woman-picture-id873678270?s=612x612"
                            alt="Teams"
                          />
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={this.state.check3}
                        onClick={() => this.handleChange("check3")}
                      />
                      <span className="checkmark"></span>
                    </div>
                  </li>
                )}
                {this.props.State.check6 && (
                  <li>
                    <div
                      onClick={() => this.handleChange("check4")}
                      className="container"
                      title="Constance Washington"
                    >
                      <div className="d-flex align-items-center teamList">
                        <div className="w-75">
                          <p className="m-0">Constance Washington</p>
                          <span>Mouldings Supervisor</span>
                        </div>
                        <div className="w-50px text-right position-relative">
                          <div
                            className="deleteWrap align-items-center justify-content-center"
                            onClick={() => this.DelModal()}
                          >
                            <span className="p-0">
                              <img src={Delete} alt="Delete" />
                            </span>
                          </div>
                          <img
                            src="https://media.gettyimages.com/photos/beautiful-woman-picture-id873678270?s=612x612"
                            alt="Teams"
                          />
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={this.state.check4}
                        onClick={() => this.handleChange("check4")}
                      />
                      <span className="checkmark"></span>
                    </div>
                  </li>
                )}
                {this.props.State.check12 && (
                  <li>
                    <div
                      onClick={() => this.handleChange("check5")}
                      className="container"
                      title="Liuzi Wei"
                    >
                      <div className="d-flex align-items-center teamList">
                        <div className="w-75">
                          <p className="m-0">Liuzi Wei</p>
                          <span>Assembly Technician</span>
                        </div>
                        <div className="w-50px text-right position-relative">
                          <div
                            className="deleteWrap align-items-center justify-content-center"
                            onClick={() => this.DelModal()}
                          >
                            <span className="p-0">
                              <img src={Delete} alt="Delete" />
                            </span>
                          </div>
                          <img
                            src="https://media.gettyimages.com/photos/beautiful-woman-picture-id873678270?s=612x612"
                            alt="Teams"
                          />
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={this.state.check5}
                        onClick={() => this.handleChange("check5")}
                      />
                      <span className="checkmark"></span>
                    </div>
                  </li>
                )}
              </ul>
            </div>
            <div className="add-team mt-4 d-flex align-items-center">
              <div id="teamCount">
                {this.props.State.count === undefined && <span>
                  {this.props.State.count === undefined && (this.state.check2 && this.state.check4) ? "2" : this.state.check4 || this.state.check2 ? "1" : '0'}/
                  {this.props.State.count === undefined
                    ? "2"
                    : this.props.State.count}
                </span>}
                {this.props.State.count === 1 && <span>
                  {this.props.State.count === 1 && (this.state.check1 && this.state.check4) ? "2" : this.state.check4 || this.state.check1 ? "1" : '0'}/2
                </span>}
                {this.props.State.count === 2 && <span>
                  {this.props.State.count === 2 && (this.state.check3 && this.state.check5) ? "2" : this.state.check5 || this.state.check3 ? "1" : '0'}/2
                </span>}
                {this.props.State.count === 0 && <span>
                  {this.props.State.count === 0 && this.state.check2 ? "1" : '0'}/1
                </span>}
                {this.props.State.count > 2 && <span>
                  0/0
                </span>}
                {this.props.State.count === null && <span>
                  0/0
                </span>}
              </div>
              <span
                className="ml-auto pointer"
                onClick={() => this.openTeamModal()}
              >
                + Add new
              </span>
            </div>
            <input
              id="AddInput"
              type="text"
              placeholder="search"
              onKeyUp={() => this.search()}
            />
          </div>
        </div>
        <ConfirmModal
          Close={() => this.DelModal()}
          Open={this.state.confirmmodal}
        />
        <AddTeamModal
          Close={() => this.openTeamModal()}
          Open={this.state.teammodal}
        />
        <AddTeamStyle />
      </>
    );
  }
}

export default Teams;
