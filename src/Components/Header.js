import { image } from "../Images/Images";
import "../Css of Components/Header.css";
function Header() {
  return (
    <div>
      <nav>
        <a>
          <img className="logo" src={image.logo}></img>
        </a>
        <div className="navcenter">
          <a>Home<i class="fa-solid fa-caret-down"></i></a>
          <a>Listings<i class="fa-solid fa-caret-down"></i></a>
          <a>Members<i class="fa-solid fa-caret-down"></i></a>
          <a>Blog<i class="fa-solid fa-caret-down"></i></a>
          <a>Pages<i class="fa-solid fa-caret-down"></i></a>
          <a>Contact<i class="fa-solid fa-caret-down"></i></a>
        </div>
        <div className="navend">
          <a> <i class="fa-solid fa-phone"></i> +68 685 88666</a>
          <a className="contact">
            <i class="fa-regular fa-user"></i>
          </a>
          <a className="add">Add Property</a>
        </div>
      </nav>
      <img src={image.headerImage} alt="404"></img>
    </div>
  );
}
export default Header;
