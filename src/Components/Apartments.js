import "../Css of Components/Apartments.css";
function Apartments(props) {
  let { uppinfo1, uppinfo2, text1, text2, icon1, icon2, icon3, img, price } =
    props;
  return (
    <div className="appartments">
      <div className="uppinfo">
        <div className="uppinfo1">{uppinfo1}</div>
        <div className="uppinfo2">{uppinfo2}</div>
      </div>
      <img src={img}></img>
      <div className="down">
        <h5 className="text1">{text1}</h5>
        <p className="text2">
          <i class="fa-solid fa-location-dot"></i> {text2}
        </p>
        <div className="downinfo">
          <span className="icon1">
            <i class="fa-solid fa-bed"></i> {icon1}
          </span>
          <span className="icon2">
            <i class="fa-solid fa-bath"></i>
            {icon2}
          </span>
          <span className="icon3">
            <i class="fa-regular fa-window-restore"></i> {icon3}
          </span>
          <p className="price">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Apartments;
