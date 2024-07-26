import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-black">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="flex justify-between h-20">
            <div className="mx-w-10 text-2xl font-bold capitalize text-white flex items-center">
              <Link to="/">NY Times</Link>
            </div>
            <div className="flex flex-row">
              <ul className="navbar  flex flex-row text-gray-400 text-sm items-center font-bold">
                <li className="active relative border-l border-gray-800 hover:bg-gray-900">
                  <Link
                    className="block py-3 px-6 border-b-2 border-transparent"
                    to="/"
                  >
                    Home Page
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
