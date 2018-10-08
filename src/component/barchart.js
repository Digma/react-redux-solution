import React from "react";
import { connect } from "react-redux";
import { BarChart } from "react-easy-chart";
import { ColorEnum } from "../App";

// TODO#1: Make ClickBarChart get its input data from redux state
export class ClickBarChart extends React.Component {
  render() {
    // Local data
    const localData = [
      {
        x: ColorEnum.BLUE,
        y: this.props.colorCounter[ColorEnum.BLUE],
        color: ColorEnum.BLUE
      },
      {
        x: ColorEnum.RED,
        y: this.props.colorCounter[ColorEnum.RED],
        color: ColorEnum.RED
      },
      {
        x: ColorEnum.GREEN,
        y: this.props.colorCounter[ColorEnum.GREEN],
        color: ColorEnum.GREEN
      }
    ];

    // Documentation: https://www.npmjs.com/package/react-easy-chart
    return <BarChart axes data={localData} />;
  }
}

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({
  colorCounter: state.pageContent.colorCounter
});

const ClickBarChartContainer = connect(mapStateToProps)(ClickBarChart);

export default ClickBarChartContainer;
