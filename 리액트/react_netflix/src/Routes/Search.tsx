import { useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  console.log("자바스크립트", location.search.split("=")[1]);
  const keyword = new URLSearchParams(location.search).get("keyowrd");
  console.log(keyword);
  return (
    <div>
      
    </div>
  )
}

export default Search;
