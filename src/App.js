import React, { PureComponent } from "react";
import Header from "./Componeents/Header";
import SearchInput from "./Componeents/searchinput";
import EmojiResults from "./Componeents/EmojiResult";
import filterEmoji from "./Componeents/filterEmoji";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20)
    };
  }

  handleSearchChange = event => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20)
    });
  };

  render() {
    return (
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResults emojiData={this.state.filteredEmoji} />
      </div>
    );
  }
}