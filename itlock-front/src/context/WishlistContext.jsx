import React, { createContext, useState } from "react";
export const WishlistContext = createContext();
const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  function handleWishlist(item) {
    if (wishlist.find((x) => x._id === item._id)) {
      setWishlist(wishlist.filter((x) => x._id !== item._id));
    } else {
      setWishlist([...wishlist, item]);
    }
  }
  return (
    <WishlistContext.Provider value={{ wishlist, handleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
