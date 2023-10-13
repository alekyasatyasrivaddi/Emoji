import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "./searchInput.css";

export default class SearchInput extends PureComponent {
  static propTypes = {
    textChange: PropTypes.func
  };

  handleChange = event => {
    this.props.textChange(event);
  };

  render() {
    return (
      <div className="component-search-input">
        <div>
          <input onChanComponeentsge={this.handleChange} />
        </div>
      </div>
    );
  }
}
