import React, { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import { Helmet } from "react-helmet-async";

const Wishlist = () => {
  const { wishlist, handleWishlist } = useContext(WishlistContext);
  return (
    <>
    <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <div className="brands_cards">
        {wishlist &&
          wishlist.map((x) => (
            <div className="brands_card">
              <div className="card_img">
                <img src={x.img} alt="" />
              </div>
              <div className="card_text">
                <h4>{x.title}</h4>
                <p>{x.category}</p>
              </div>
              <button onClick={() => handleWishlist(x)}>delete wishlist</button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Wishlist;
