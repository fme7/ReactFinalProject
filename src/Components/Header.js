import { image } from "../Images/Images";
import "../Css of Components/Header.css";
function Header() {
  return (
    <div className="header">
      <nav>
        <a>
          <img className="logo" src={image.logo}></img>
        </a>
        <div className="navcenter">
          <a>
            Home<i class="fa-solid fa-caret-down"></i>
          </a>
          <a>
            Listings<i class="fa-solid fa-caret-down"></i>
          </a>
          <a>
            Members<i class="fa-solid fa-caret-down"></i>
          </a>
          <a>
            Blog<i class="fa-solid fa-caret-down"></i>
          </a>
          <a>
            Pages<i class="fa-solid fa-caret-down"></i>
          </a>
          <a>
            Contact<i class="fa-solid fa-caret-down"></i>
          </a>
        </div>
        <div className="navend">
          <a>
            <i class="fa-solid fa-phone"></i> +68 685 88666
          </a>
          <a className="contact">
            <i class="fa-regular fa-user"></i>
          </a>
          <a className="add">Add Property</a>
        </div>
      </nav>
      <img src={image.headerImage} alt="404"></img>

      <div className="center">
        <div className="info0">
          <p>5 Beds</p>
          <p>2 Baths</p>
          <p>180 sqft</p>
        </div>
        <div className="info2">
          <p>Office Space at</p>
          <p> Northwest</p>
        </div>
        <p className="price">
          <b>$250</b>/month
        </p>
      </div>
        <div className="btn" >
        <div className="button">
          <b> View Details</b> <i class="fa-solid fa-arrow-right"></i>
      </div>
      </div>
    </div>
  );
}
export default Header;
