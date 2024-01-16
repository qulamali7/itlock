import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { SearchContext } from "../../context/SearchContext";
import { WishlistContext } from "../../context/WishlistContext";
import { Link } from "react-router-dom";
import { BasketContext } from "../../context/BasketContext";
const BrandsCards = () => {
  const {addBasket} = useContext(BasketContext)
  const { handleWishlist } = useContext(WishlistContext);
  const { search, handleSearch } = useContext(SearchContext);
  const [sortproperty, setSortproperty] = useState(null);
  const [data, setData] = useState([]);
  async function GetFetch() {
    try {
      await fetch("http://localhost:3100/brands")
        .then((res) => res.json())
        .then((data) => setData(data));
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    GetFetch();
  }, []);

  return (
    <>
      <div>
        <input type="text" onChange={handleSearch} />
        <button
          onClick={() => setSortproperty({ property: "title", asc: true })}
        >
          A-Z
        </button>
        <button
          onClick={() => setSortproperty({ property: "title", asc: false })}
        >
          A-Z
        </button>
        <button onClick={() => setSortproperty(null)}>default</button>
      </div>
      <div className="brands_cards">
        {data &&
          data
            .filter((x) => x.title.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) => {
              if (sortproperty && sortproperty.asc) {
                return a[sortproperty.property] > b[sortproperty.property]
                  ? 1
                  : b[sortproperty.property] > a[sortproperty.property]
                  ? -1
                  : 0;
              } else if (sortproperty && sortproperty.asc === false) {
                return a[sortproperty.property] < b[sortproperty.property]
                  ? 1
                  : b[sortproperty.property] < a[sortproperty.property]
                  ? -1
                  : 0;
              } else {
                return 0;
              }
            })
            .map((x) => (
              <div className="brands_card">
                <div className="card_img">
                  <img src={x.img} alt="" />
                </div>
                <div className="card_text">
                  <h4>{x.title}</h4>
                  <p>{x.category}</p>
                </div>
                <button onClick={() => addBasket(x)}>add basket</button>
                <button onClick={() => handleWishlist(x)}>add wishlist</button>
                <button>
                  <Link to={"/detail/" + x._id}>detail</Link>
                </button>
              </div>
            ))}
      </div>
    </>
  );
};

export default BrandsCards;
