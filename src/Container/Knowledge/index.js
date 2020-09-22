import React, { Component } from "react";
import KnowledgeModal from "../../Components/KnowledgeModal";
import TeamModal from "../../Components/TeamModal";

// --style--
import KnowledgeStyle from "./KnowledgeStyle";

const numbers =
localStorage.getItem("team") && localStorage.getItem("team").split(",");

class Knowledge extends Component {
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

    // To clear localStorage.
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
    ul = document.getElementById("KnowledgeList");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("p")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  render() {
    return (
      <>
        <div className="teamSection">
          <div className="wrap">
            <div className="head text-center mb-4">
              <p className="m-0">Knowledge</p>
              <span>Accessible to teams</span>
            </div>
            <div className="listWrap">
              <ul id="KnowledgeList" className="pl-0">
                <li>
                  <label
                    onChange={() => this.handleChange("checked10")}
                    className="container"
                    title="Board Minutes 2020"
                  >
                    <p className="m-0">Board Minutes 2020</p>
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
                    onChange={() => this.handleChange("checked12")}
                    className="container"
                    title="Accounts - Sales 2020"
                  >
                    <p className="m-0">Accounts - Sales 2020</p>
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
                    onChange={() => this.handleChange("checked3")}
                    className="container"
                    title="Accounts - EoY 2020"
                  >
                    <p className="m-0">Accounts - EoY 2020</p>
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
                    onChange={() => this.handleChange("checked9")}
                    className="container"
                    title="Product Launch - 2020"
                  >
                    <p className="m-0">Product Launch - 2020</p>
                    <input
                      type="checkbox"
                      checked={this.state.checked9}
                      onChange={() => this.handleChange("checked9")}
                    />
                    <span className="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label
                    onChange={() => this.handleChange("checked6")}
                    className="container"
                    title="Manufacture R&D"
                  >
                    <p className="m-0">Manufacture R&D</p>
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
                    onChange={() => this.handleChange("checked5")}
                    className="container"
                    title="IT Inventory"
                  >
                    <p className="m-0">IT Inventory</p>
                    <input
                      type="checkbox"
                      checked={this.state.checked5}
                      onChange={() => this.handleChange("checked5")}
                    />
                    <span className="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label
                    onChange={() => this.handleChange("checked7")}
                    className="container"
                    title="Marketing Activity Monthly"
                  >
                    <p className="m-0">Marketing Activity Monthly</p>
                    <input
                      type="checkbox"
                      checked={this.state.checked7}
                      onChange={() => this.handleChange("checked7")}
                    />
                    <span className="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label
                    onChange={() => this.handleChange("checked8")}
                    className="container"
                    title="Social Media - Accounts"
                  >
                    <p className="m-0">Social Media - Accounts</p>
                    <input
                      type="checkbox"
                      checked={this.state.checked8}
                      onChange={() => this.handleChange("checked8")}
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
        <KnowledgeModal
          Close={() => this.openModal()}
          Open={this.state.modal}
        />
        <KnowledgeStyle />
      </>
    );
  }
}

export default Knowledge;
