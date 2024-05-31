import "../Css of Components/Cities.css";
function Cities(props) {
  let { cityName = "No city name", property, url } = props;
  return (
    <div className="city">
      <div className="aboutCity">
        <img src={url}></img>
      </div>
      <div className="props" >
        <div className="property">{property}</div>
        <div className="cityName">{cityName}</div>
      </div>
    </div>
  );
}
export default Cities;
