import React from "react";

const apiUrl =
  "https://api.coinmarketcap.com/v2/ticker/?limit=10&sort=volume_24h";

export class DataFetcher extends React.Component {
  constructor(props) {
    super(props);
    this.loadData = this.loadData.bind(this);
    this.loadData();
  }

  loadData() {
    // TODO#2: Pick a datasource that you like, e.g. crypto market value
    fetch(apiUrl)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        // TODO#2: Add data to redux state
      });
  }

  render() {
    // Just fetching data no visualization
    return null;
  }
}
