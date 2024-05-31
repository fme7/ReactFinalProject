import "./App.css";
import Header from "./Components/Header.js";
import Search from "./Components/Search.js";
import Cities from "./Components/Cities.js";
import HeadOfCities from "./Components/HeadOfCities.js";
import { image } from "../src/Images/Images.js";

function App() {
  return (
    <>
      <Header></Header>
      <Search></Search>
      <HeadOfCities></HeadOfCities>
     <div className="appCity" >
      <Cities
        cityName="NewYork"
        url={image.newYork}
        property="8 properties"
      ></Cities>
      <Cities
        cityName="Chicago"
        url={image.chicago}
        property="2 properties"
      ></Cities>
      <Cities
        cityName="Los Angeles"
        url={image.losAngeles}
        property="1 properties"
      ></Cities>
      <Cities
        cityName="Miami"
        url={image.miami}
        property="2 properties"
      ></Cities>
      <Cities
        cityName="Florida"
        url={image.florida}
        property="3 properties"
      ></Cities>
      </div>
    </>

  );
}
export default App;
