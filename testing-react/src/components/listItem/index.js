import React, { Component } from "react";
import PropTypes from "prop-types";

class ListItem extends Component {
  render() {

    const { title, desc } = this.props;

    return (
      <div data-test="listitem">
        <h1 data-test="title">{title}</h1>
        <p data-test="desc">{desc}</p>
      </div>
    )
  }
}

ListItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string
}

export default ListItem;