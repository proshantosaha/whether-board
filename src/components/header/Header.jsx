import React from "react";
import Logo from "./logo";
import Search from "./Search";
import Favorite from "./Favorite";
import FavoriteModal from "./FavoriteModal";
const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">
        <Logo />
        <div className="flex items-center gap-4 relative">
          {/* search */}
          <Search />
          <Favorite />

          {/* <!-- Modal --> */}
          <FavoriteModal />
        </div>
      </nav>
    </header>
  );
};

export default Header;
