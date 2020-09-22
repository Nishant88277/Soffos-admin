import React, { Component } from "react";

// --Components--
import Knowledge from "../../Container/Knowledge";
import Silo from "../../Container/siloTeam";
import AddTeam from "../../Container/AddTeam";

class TeamWrap extends Component {
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
  passTeamData = (ID) => {
    if (ID === 0) {
      this.setState({
        check1: true,
        check2: true,
        check3: true,
        check4: true,
        check5: false,
        check6: false,
        check7: false,
        check8: false,
        check9: false,
        check10: false,
        check11: false,
        check12: false,
        count: ID,
      });
    } else if (ID === 1) {
      this.setState({
        check1: false,
        check2: false,
        check3: false,
        check4: false,
        check5: true,
        check6: true,
        check7: true,
        check8: true,
        check9: false,
        check10: false,
        check11: false,
        check12: false,
        count: ID,
      });
    } else if (ID === 2) {
      this.setState({
        check1: false,
        check2: false,
        check3: false,
        check4: false,
        check5: false,
        check6: false,
        check7: false,
        check8: false,
        check9: true,
        check10: true,
        check11: true,
        check12: true,
        count: ID,
      });
    } else{
      this.setState({ count: ID,})
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-3 col-lg-3 col-xl-2 pr-0">
          <Knowledge State={this.state} />
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-7 pr-0 pl-0">
          <Silo sendData={this.passTeamData} />
        </div>
        <div className="col-12 col-md-3 col-lg-3 col-xl-2 pl-0 pr-xl-0 pl-xl-3">
          <AddTeam State={this.state} />
        </div>
      </div>
    );
  }
}

export default TeamWrap;
