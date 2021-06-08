import React, {Component} from "react";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";
import coronaImage from "./images/image.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    console.log(this.state);
    return (
      <div className={{flex:1,flexDirection:"column", justifyContent: "center", alignContent:"center", margin:"20%"}}>
            <img src={coronaImage} alt="COVID-19" />
        <br />
        <br/>
        <text style={{flex:1, flexDirection:"row", justifyContent:"center",alignItems:"center"}}>
          <b>Global and country wise cases of Corona Virus</b>
        </text>
        <br />
        <br />
        <Cards data={data} country={country} />
        <br/>
        <br/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
