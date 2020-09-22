import React, { Component } from "react";

// --components--
import TeamModal from "../../Components/TeamModal";

// --style--
import TeamsStyle from "./TeamsStyle";

class Teams extends Component {
  constructor(props) {
    super(props);

    // Initial state render. 
    this.state = {
      checked1: true,
      checked2: true,
      checked3: false,
      checked4: false,
      checked5: true,
      checked6: true,
      checked7: false,
      checked8: true,
      checked9: true,
      checked10: false,
      checked11: true,
      checked12: false,
      modal: false,
    };
    localStorage.clear();
  }

  // Set state for all inputs. 
  handleChange(field) {
    this.setState({ [field]: !this.state[field] });
  }

  // To change state of modal.
  openModal() {
    this.setState({ modal: !this.state.modal });
  }

  // Search functionality.
  search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("label")[0];
      txtValue = a.textContent || a.innerText;
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
        <div className="teamSection">
          <div className="wrap">
            <div className="head text-center mb-4">
              <p className="m-0">teams</p>
              <span>with access</span>
            </div>
            <div className="listWrap">
              <ul id="myUL" className="pl-0">
                <li>
                  <label
                    onChange={() => this.handleChange("checked10")}
                    className="container"
                    title="Board"
                  >
                    Board
                    <input
                      type="checkbox"
                      checked={this.state.checked10}
                      onChange={() => this.handleChange("checked10")}
                    />
                    <span className="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label
                    onChange={() => this.handleChange("checked2")}
                    className="container"
                    title="Accounts"
                  >
                    Accounts
                    <input
                      type="checkbox"
                      checked={this.state.checked2}
                      onChange={() => this.handleChange("checked2")}
                    />
                    <span className="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label
                    onChange={() => this.handleChange("checked4")}
                    className="container"
                    title="Senior"
                  >
                    Senior
                    <input
                      type="checkbox"
                      checked={this.state.checked4}
                      onChange={() => this.handleChange("checked4")}
                    />
                    <span className="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label
                    onChange={() => this.handleChange("checked3")}
                    className="container"
                    title="Engineering"
                  >
                    Engineering
                    <input
                      type="checkbox"
                      checked={this.state.checked3}
                      onChange={() => this.handleChange("checked3")}
                    />
                    <span className="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label
                    onChange={() => this.handleChange("checked6")}
                    className="container"
                    title="Manufacture"
                  >
                    Manufacture
                    <input
                      type="checkbox"
                      checked={this.state.checked6}
                      onChange={() => this.handleChange("checked6")}
                    />
                    <span className="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label
                    onChange={() => this.handleChange("checked8")}
                    className="container"
                    title="IT"
                  >
                    IT
                    <input
                      type="checkbox"
                      checked={this.state.checked8}
                      onChange={() => this.handleChange("checked8")}
                    />
                    <span className="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label
                    onChange={() => this.handleChange("checked12")}
                    className="container"
                    title="Marketing"
                  >
                    Marketing
                    <input
                      type="checkbox"
                      checked={this.state.checked12}
                      onChange={() => this.handleChange("checked12")}
                    />
                    <span className="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label
                    className="container"
                    title="Logistics"
                    onChange={() => this.handleChange("checked7")}
                  >
                    Logistics
                    <input
                      type="checkbox"
                      checked={this.state.checked7}
                      onChange={() => this.handleChange("checked7")}
                    />
                    <span className="checkmark"></span>
                  </label>
                </li>
                {localStorage.getItem("Inditeam") && (
                  <li>
                    <label className="container" title="Logistics">
                      {localStorage.getItem("Inditeam") &&
                        localStorage.getItem("Inditeam")}
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                )}
                {numbers &&
                  numbers.map((numbers) => (
                    <li>
                      <label className="container" title="Logistics">
                        {numbers}
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="add-team mt-4">
              <span className="pointer" onClick={() => this.openModal()}>
                + Add new
              </span>
            </div>
            <input
              onKeyUp={() => this.search()}
              type="text"
              placeholder="search"
              id="myInput"
            />
          </div>
        </div>
        <TeamModal Close={() => this.openModal()} Open={this.state.modal} />
        <TeamsStyle />
      </>
    );
  }
}

export default Teams;
