import React, { Component } from "react";

// --img--
import txt from "../../img/txt.svg";
import pdf from "../../img/pdf.svg";
import Delete from "../../img/delete.svg";

// --style--
import DocumentStyle from "./DocumentStyle";

class Teams extends Component {
  constructor(props) {
    super(props);
    // Initial state render. 
    this.state = {
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

  // Search functionality.
  search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("DocInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("DocList");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("label")[0];
      txtValue = a.textContent || a.innerText;
      console.log(txtValue.toUpperCase().indexOf(filter));
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
        <div className="AddteamSection">
          <div className="wrap">
            <div className="head text-center mb-4">
              <p className="m-0">DOCUMENTS</p>
              <span>within silo</span>
            </div>
            <div className="listWrap">
              <ul id="DocList" className="mb-4 pl-0">
                {this.props.State.check1 && (
                  <li className="listRow mr-1">
                    <div className="switch">
                      <input
                        type="checkbox"
                        checked={this.props.State.check1}
                      />
                      <span className="slider round">
                        <b>!</b>
                      </span>
                    </div>
                    <div className="document-icon-wrapper">
                      <img src={txt} alt="txt" />
                    </div>
                    <label className="document-name mb-0">Document 1.1</label>
                    <div className="remove-document">
                      <img src={Delete} alt="Remove" />
                    </div>
                  </li>
                )}
                {this.props.State.check4 && (
                  <li className="listRow mr-1">
                    <div className="switch">
                      <input
                        type="checkbox"
                        checked={this.props.State.check2}
                      />
                      <span className="slider round">
                        <b>!</b>
                      </span>
                    </div>
                    <div className="document-icon-wrapper">
                      <img src={pdf} alt="txt" />
                    </div>
                    <label className="document-name mb-0">Document 1.2</label>
                    <div className="remove-document">
                      <img src={Delete} alt="Remove" />
                    </div>
                  </li>
                )}
                <li className="listRow mr-1">
                  <div className="switch">
                    <input type="checkbox" checked={this.props.State.check3} />
                    <span className="slider round">
                      <b>!</b>
                    </span>
                  </div>
                  <div className="document-icon-wrapper">
                    <img src={txt} alt="txt" />
                  </div>
                  <label className="document-name inactive mb-0">
                    Document 1.3
                  </label>
                  <div className="remove-document">
                    <img src={Delete} alt="Remove" />
                  </div>
                </li>
                <li className="listRow mr-1">
                  <div className="switch">
                    <input type="checkbox" checked={this.props.State.check4} />
                    <span className="slider round">
                      <b>!</b>
                    </span>
                  </div>
                  <div className="document-icon-wrapper">
                    <img src={pdf} alt="txt" />
                  </div>
                  <label className="document-name mb-0">Document 1.4</label>
                  <div className="remove-document">
                    <img src={Delete} alt="Remove" />
                  </div>
                </li>
                {this.props.State.check10 && (
                  <li className="listRow mr-1">
                    <div className="switch">
                      <input
                        type="checkbox"
                        checked={this.props.State.check5}
                      />
                      <span className="slider round">
                        <b>!</b>
                      </span>
                    </div>
                    <div className="document-icon-wrapper">
                      <img src={pdf} alt="txt" />
                    </div>
                    <label className="document-name inactive mb-0">
                      Document 1.5
                    </label>
                    <div className="remove-document">
                      <img src={Delete} alt="Remove" />
                    </div>
                  </li>
                )}
                {this.props.State.check5 && (
                  <li className="listRow mr-1">
                    <div className="switch">
                      <input
                        type="checkbox"
                        checked={this.props.State.check6}
                      />
                      <span className="slider round">
                        <b>!</b>
                      </span>
                    </div>
                    <div className="document-icon-wrapper">
                      <img src={pdf} alt="txt" />
                    </div>
                    <label className="document-name inactive mb-0">
                      Document 1.6
                    </label>
                    <div className="remove-document">
                      <img src={Delete} alt="Remove" />
                    </div>
                  </li>
                )}
                {this.props.State.check2 && (
                  <li className="listRow mr-1">
                    <div className="switch">
                      <input
                        type="checkbox"
                        checked={this.props.State.check7}
                      />
                      <span className="slider round">
                        <b>!</b>
                      </span>
                    </div>
                    <div className="document-icon-wrapper">
                      <img src={txt} alt="txt" />
                    </div>
                    <label className="document-name inactive mb-0">
                      Document 1.7
                    </label>
                    <div className="remove-document">
                      <img src={Delete} alt="Remove" />
                    </div>
                  </li>
                )}
                <li className="listRow mr-1">
                  <div className="switch">
                    <input type="checkbox" checked={this.props.State.check8} />
                    <span className="slider round">
                      <b>!</b>
                    </span>
                  </div>
                  <div className="document-icon-wrapper">
                    <img src={pdf} alt="txt" />
                  </div>
                  <label className="document-name mb-0">Document 1.8</label>
                  <div className="remove-document">
                    <img src={Delete} alt="Remove" />
                  </div>
                </li>
                {this.props.State.check4 && (
                  <li className="listRow mr-1">
                    <div className="switch">
                      <input
                        type="checkbox"
                        checked={this.props.State.check9}
                      />
                      <span className="slider round">
                        <b>!</b>
                      </span>
                    </div>
                    <div className="document-icon-wrapper">
                      <img src={txt} alt="txt" />
                    </div>
                    <label className="document-name inactive mb-0">
                      Document 1.9
                    </label>
                    <div className="remove-document">
                      <img src={Delete} alt="Remove" />
                    </div>
                  </li>
                )}
              </ul>
            </div>
            <input
              onKeyUp={() => this.search()}
              id="DocInput"
              type="text"
              placeholder="search"
            />
          </div>
        </div>
        <DocumentStyle />
      </>
    );
  }
}

export default Teams;
