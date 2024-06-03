import { image } from "../Images/Images";
import "../Css of Components/Info.css";
function Info() {
  return (
    <div className="info">
      <h1>Why You Should Work With Us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="icons">
        <div className="vector1">
          <img src={image.vector1}></img>
          <h5>Wide Range of Properties</h5>
          <p>
            We offer expert legal help for all related property items in Dubai.
          </p>
        </div>
        <div className="vector2">
          <img src={image.vector2}></img>
          <h5>Buy or Rent Homes</h5>
          <p>
            We sell your home at the best market price and very quickly as wel
          </p>
        </div>
        <div className="vector3">
          <img src={image.vector3}></img>
          <h5>Trusted by Thousands</h5>
          <p>We offer you free consultancy to get a loan for your new home</p>
        </div>
      </div>

      <div className="searchline2">
        <div className="searchleft">
        <h3>Sign in to streamline your search</h3>
        <p>
          Save properties, create alerts and keep track of the enquiries you
          send to agents.
        </p>
        </div>
        <div className="searchlinebtn">
          Sign in or create an account <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
}
export default Info;
