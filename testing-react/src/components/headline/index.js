import React, { Component } from "react";
import PropTypes from 'prop-types';

class HeadLine extends Component {
  render() {
    const { header, desc } = this.props;
    if(!header) {
      return null;
    }
    return (
      <div data-test="headline">
        <h1 data-test="header">{header}</h1>
        <p data-test="desc">{desc}</p>
      </div>
    );
  }
}

HeadLine.propTypes ={
  header: PropTypes.string,
  desc: PropTypes.string,
  tempArray: PropTypes.arrayOf(PropTypes.shape({
    fName: PropTypes.string,
    lName: PropTypes.lName
  }))
};


export default HeadLine;
