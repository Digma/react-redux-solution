import React from "react";
import { connect } from "react-redux";

import {
  changePageTitle,
  incrementPageCounter,
  incrementColorCounter
} from "./redux";
import ClickBarChart from "./component/barchart";
import { DataFetcher } from "./data/data";

export const ColorEnum = {
  RED: "red",
  GREEN: "green",
  BLUE: "blue"
};

// App.js
export class App extends React.Component {
  buttonClick = color => {
    this.props.incrementPageCounter();
    this.props.changePageTitle(
      "You clicked: " + this.props.pageContent.clickCounter + " times"
    );
    this.props.incrementColorCounter(color);
  };

  getButton = color => {
    return (
      <button
        style={{ color: "white", backgroundColor: color }}
        onClick={() => this.buttonClick(color)}
      >
        {color}
      </button>
    );
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.pageContent.title}</h1>
        {this.getButton(ColorEnum.BLUE)}
        {this.getButton(ColorEnum.RED)}
        {this.getButton(ColorEnum.GREEN)}

        <h2>Click Counters</h2>
        {/* TODO#1: Link the barchart to the number of click for each color */}
        <ClickBarChart />

        {/* TODO#2: 
            Instead of using only static data, 
            create a new React component and 
            visualize another dataset obtained 
            from some URL. You can pick some visualization from:
            https://rma-consulting.github.io/react-easy-chart/ */}
        {/*<DataFetcher />*/}
      </div>
    );
  }
}

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({
  pageContent: state.pageContent
});

const mapDispatchToProps = {
  changePageTitle,
  incrementPageCounter,
  incrementColorCounter
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
