import { useSelector } from 'react-redux';
import assets from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { getQueryUrl, useQuery } from "../../utils/helper";
const Search = () => {
  const query = useQuery();
  const { cartProducts } = useSelector((state) => state.carts);
  const category = query.get("category");
  const navigate = useNavigate();
  const handleKeyDown = async (event) => {
    if (event.target.value === "") return;
    if (event.key === "Enter") {
      if (category === null) {
        navigate(`/products?keyword=${event.target.value}`);
        return;
      } else {
        const queryUrl = getQueryUrl({
          keyword: event.target.value,
          category,
        });
        navigate(`/products?${queryUrl}`);
      }
    }
  };
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width ">
            <img src={assets?.images?.logo} alt="" />
          </div>
          <div className="search-box f_flex">
            <i className="fa fa-search" />
            <input
              type="text"
              placeholder="Search and hit enter..."
              onKeyDown={handleKeyDown}
            />
            <span>All Category</span>
          </div>
          <div className="icon f_flex width">
            <div className="cart">
              <Link to="/carts">
                <i className="fa fa-shopping-bag icon-circle" />
                <span>{cartProducts?.length ?? 0}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
