import React, { Component } from "react";

// --Components--
import Teams from "../../Container/Teams";
import Silo from "../../Container/siloKnowledge";
import Document from "../../Container/Documents";

class KnowledgeWrap extends Component {
  constructor(props) {
    super(props);

    // Initial state render.
    this.state = {
      check1: true,
      check2: true,
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
    };
  }

  // Initial state render.
  passKnowledgeData = (ID) => {
    if(ID === 0){
      this.setState({
        check1: false,
        check2: true,
        check3: false,
        check4: true,
        check5: false,
        check6: true,
        check7: true,
        check8: true,
        check9: false,
        check10: true,
        check11: false,
        check12: true,
      });
    } else if(ID === 1){
      this.setState({
        check1: false,
        check2: true,
        check3: false,
        check4: true,
        check5: false,
        check6: false,
        check7: false,
        check8: false,
        check9: false,
        check10: false,
        check11: false,
        check12: false,
      });
    } else if(ID === 2){
      this.setState({
        check1: false,
        check2: true,
        check3: false,
        check4: true,
        check5: false,
        check6: false,
        check7: true,
        check8: false,
        check9: true,
        check10: false,
        check11: true,
        check12: true,
      });
    }

  };

  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-3 col-lg-3 col-xl-2 pr-0">
          <Teams State={this.state} />
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-7 pr-0 pl-0">
          <Silo sendData={this.passKnowledgeData} />
        </div>
        <div className="col-12 col-md-3 col-lg-3 col-xl-2 pl-md-1 pl-lg-3">
          <Document State={this.state} />
        </div>
      </div>
    );
  }
}

export default KnowledgeWrap;
