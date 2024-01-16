import React from "react";
import SearchProvider from "./SearchContext";
import WishlistProvider from "./WishlistContext";
import BasketProvider from "./BasketContext";

const MainProvider = ({ children }) => {
  return (
    <WishlistProvider>
      <BasketProvider>
        <SearchProvider>{children}</SearchProvider>
      </BasketProvider>
    </WishlistProvider>
  );
};

export default MainProvider;
