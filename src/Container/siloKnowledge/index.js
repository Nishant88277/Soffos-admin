import React, { Component } from "react";

// --components--
import KnowledgeModal from "../../Components/KnowledgeModal";

// --style--
import SiloStyle from "./siloStyle";

class Silo extends Component {
  constructor(props) {
    super(props);
     // Initial state render. 
    this.state = {
      modal: false,
      active: true,
      isButtonActive: "",

       // Initial array values. 
      values: [
        {
          id: 0,
          name: "BOARD MINUTES 2020",
          type: 1,
          top: "60%",
          left: "10%",
        },
        {
          id: 1,
          name: "ACCOUNTS-SALES 2020",
          type: 1,
          top: "30%",
          left: "30%",
        },
        {
          id: 2,
          name: "MARKETING ACTIVITY MONTHLY",
          type: 1,
          top: "20%",
          left: "10%",
        },
      ],
    };

    // Recursive function check.
    this.fillPlace = [
      {
        top: "60%",
        left: "10%",
      },
      {
        top: "30%",
        left: "30%",
      },
      {
        top: "20%",
        left: "10%",
      },
      {
        left: "60%",
        top: "70%",
      },
    ];
    this.addActiveClass = this.addActiveClass.bind(this);
  }

  // Bind active class.
  addActiveClass(ID) {
    this.setState({
      isButtonActive: ID,
    });
    if(this.state.isButtonActive === ID){
      this.setState({active: !this.state.active})
      this.state.active === true ? document.getElementById("myUL").setAttribute("class", "d-none") : document.getElementById("myUL").setAttribute("class", "d-block pl-0");
      this.state.active === true ? document.getElementById("DocList").setAttribute("class", "d-none") : document.getElementById("DocList").setAttribute("class", "d-block pl-0");
    } else{
      this.setState({active: true})
      document.getElementById("myUL").setAttribute("class", "d-block pl-0");
      document.getElementById("DocList").setAttribute("class", "d-block pl-0");
      this.props.sendData(ID);
    }    
  }


 // Recursive function check position of existing silo.
  recorsiveCheckPalces() {
    let top = Math.floor(Math.random() * 10) * 9 + "%";
    let left = Math.floor(Math.random() * 11) * 9 + "%";
    if (
      parseInt(left) <= 80 &&
      this.fillPlace.filter(
        (place) =>
          Math.abs(parseInt(place.top) - parseInt(top)) <= 7 &&
          Math.abs(parseInt(place.left) - parseInt(left)) <= 20
      ).length === 0
    ) {
      this.fillPlace.push({ left, top });
      return { left, top };
    } else {
      return this.recorsiveCheckPalces();
    }
  }

  // Silo creation function.
  addClick(team) {
    let { left, top } = this.recorsiveCheckPalces();
    let array = this.state.values;
    let ID = 2;
    team[0] && array.push({
      id: this.setState({ ID: ID + 1 }),
      name: team,
      type: 0,
      top: top,
      left: left,
      active: false,
    });
    this.setState({ values: array });
  }

  // Newly created Silo.
  silo(ID) {
    this.setState({
      isButtonActive: ID,
    });
    if(this.state.isButtonActive === ID){
      this.setState({active: !this.state.active})
      this.state.active && document.getElementById("myUL").setAttribute("class", "d-none");
      this.state.active && document.getElementById("DocList").setAttribute("class", "d-none");
    } else{
      this.setState({active: true})
      document.getElementById("myUL").setAttribute("class", "d-none pl-0");
      document.getElementById("DocList").setAttribute("class", "d-none pl-0");
      this.props.sendData();
    }
  }

  // Inital Silo nodes.
  createUI() {
    return this.state.values.map((el, i) => (
      <div
        id={el.id ? el.id : i}
        className={
          el.id 
            ? this.state.isButtonActive === el.id
              ? this.state.active ? "point pos active" : "point pos"
              : "point pos"
            : this.state.isButtonActive === i
            ? this.state.active ? "point pos active" : "point pos"
            : "point pos"
        }
        style={{
          position: "absolute",
          top: el.top,
          left: el.left,
        }}
        onClick={() => {
          el.type ? this.addActiveClass(el.id) : this.silo(i);
        }}
        key={i}
      >
        <div className="d-flex align-items-center">
          <div className="silo-icon">
            <div className="inner" />
          </div>
          <div className="silo-text">{el.name}</div>
        </div>
      </div>
    ));
  }

    // To change state of modal.
  openModal() {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    return (
      <>
        <div
          id="silo"
          className="position-relative w-100 h-100 overflow-md-hidden"
        >
          {this.createUI()}
          <div className="point pos4" onClick={() => this.openModal()}>
            <div className="d-flex align-items-center">
              <div className="silo-icon">
                <div className="inner" />
              </div>
              <div className="silo-text">+add new</div>
            </div>
          </div>
        </div>
        <KnowledgeModal
          Close={() => this.openModal()}
          Create={(team) => this.addClick(team)}
          Open={this.state.modal}
        />
        <SiloStyle />
      </>
    );
  }
}

export default Silo;
