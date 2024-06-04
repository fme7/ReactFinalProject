import "./App.css";
import Header from "./Components/Header.js";
import Search from "./Components/Search.js";
import Cities from "./Components/Cities.js";
import Info from "./Components/Info.js";
import Apartments from "./Components/Apartments.js";
import HeadOfCities from "./Components/HeadOfCities.js";
import { image } from "../src/Images/Images.js";

function App() {
  return (
    <>
      <Header></Header>
      <Search></Search>
      <HeadOfCities></HeadOfCities>
      <div className="appCity">
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
      <Info></Info>
      <div className="line">
        <div className="line1">
          <Apartments
            uppinfo1="FOR SALE"
            uppinfo2="FOR RENT"
            img={image.apartment1}
            text1="Luxury Family Home"
            text2="1800-1818 79th St"
            icon1="4"
            icon2="1"
            icon3="400"
            price="$395,000"
          ></Apartments>
          <Apartments
            uppinfo1="FOR SALE"
            img={image.apartment2}
            text1="Skyper Pool Apartment"
            text2="1020 Bloomingdale Ave"
            icon1="4"
            icon2="2"
            icon3="450"
            price="$280,000"
          ></Apartments>
          <Apartments
            uppinfo1="FOR RENT"
            img={image.apartment3}
            text1="North Dillard Street"
            text2="4330 Bell Shoals Rd"
            icon1="4"
            icon2="2"
            icon3="400"
            price="$250/month"
          ></Apartments>
        </div>
        <div className="line2">
          <Apartments
            uppinfo1="FOR SALE"
            uppinfo2="FEATURED"
            img={image.apartment4}
            text1="Eaton Garth Penthouse"
            text2="7722 18th Ave, Brooklyn"
            icon1="4"
            icon2="2"
            icon3="450"
            price="$180.000"
          ></Apartments>
          <Apartments
            uppinfo1="FOR RENT"
            uppinfo2="FEATURED"
            img={image.apartment5}
            text1="New Apartment Nice Wiew"
            text2="42 Avenue O, Brooklyn"
            icon1="4"
            icon2="1"
            icon3="460"
            price="$850/month"
          ></Apartments>
          <Apartments
            uppinfo1="FOR SALE"
            uppinfo2="FEATURED"
            img={image.apartment6}
            text1="Diamond Manor Apartment"
            text2="7802 20th Ave, Brooklyn"
            icon1="4"
            icon2="2"
            icon3="500"
            price="$259,000"
          ></Apartments>
        </div>
      </div>
    </>
  );
}
export default App;
