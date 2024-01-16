import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WishlistProvider, { WishlistContext } from "../../context/WishlistContext";
import { Helmet } from "react-helmet-async";

const Detail = () => {
    const {handleWishlist} = useContext(WishlistContext)
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  async function GetFetch() {
    try {
      await fetch("http://localhost:3100/brands/" + id)
        .then((res) => res.json())
        .then((data) => setDetail(data));
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    GetFetch();
  }, []);
  return (
    <>
    <Helmet>
        <title>Detail</title>
      </Helmet>
      <div className="brands_card">
        <div className="card_img">
          <img src={detail.img} alt="" />
        </div>
        <div className="card_text">
          <h4>{detail.title}</h4>
          <p>{detail.category}</p>
        </div>
        <button onClick={() => handleWishlist(detail)}>add wishlist</button>
      </div>
    </>
  );
};

export default Detail;
