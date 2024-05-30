import "../Css of Components/Search.css";
function Search() {
  return (
    <div className="searchline" >
      <div className="keyword">
        <p className="upp">Keyword</p>
        <p className="down">Enter Keyword</p>
      </div>
      <div className="status">
        <p className="upp ">Status</p>
        <p className="down">All Status <i class="fa-solid fa-caret-down"></i> </p>
      </div>
      <div className="type">
        <p className="upp">Type </p>
        <p className="down">All Type <i class="fa-solid fa-caret-down"></i> </p>
      </div>
      <a className="filterbtn"> <i class="fa-solid fa-sliders"></i> Filter</a>
      <a className="searchbtn">Search</a>
    </div>
  );
}
export default Search;
