import React, { Component } from "react";

export class Second extends Component {
  render() {
    return (
      <>
        <div>
          <div>
            <img src={this.props.img1} alt={this.props.alt1} />
          </div>
          <div>
            <img src={this.props.img1} alt={this.props.alt2} />
          </div>
          <div>
            <img src={this.props.img1} alt={this.props.alt3} />
          </div>
          <div>
            <img src={this.props.img1} alt={this.props.alt4} />
          </div>
        </div>
      </>
    );
  }
}

export default Second;
