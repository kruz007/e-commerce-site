import React, { useContext } from "react";
import Marque from "./Marque";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import { BsCart4 } from "react-icons/bs";
import CartContext from "../Hooks/CartContext";

const Navbar = () => {
  const { cartItem } = useContext(CartContext);
  return (
    <div className="sticky-top">
      <Marque />
      <div className="navbar-content">
        <header className="container d-flex justify-content-between align-items-center">
          <ul>
            <li className="list-unstyled">
              <Link className="text-decoration-none" to="/">
                <h1 className="fst-italic text-light">Kruz</h1>
              </Link>
            </li>
          </ul>
          <nav className="w-50 d-flex flex-row-reverse justify-content-between">
            <ul className="d-sm-none d-md-flex justify-content-between w-75">
              <li className="list-unstyled d-none-x-sm">
                <Link
                  to="/Account"
                  className="text-decoration-none text-light fs-4"
                >
                  Account
                </Link>
              </li>
              <li className="list-unstyled d-none-x-sm">
                <Link
                  to="/Help"
                  className="text-decoration-none text-light fs-3"
                >
                  Help
                </Link>
              </li>
              <li className="list-unstyled ">
                <Link
                  to="/cart"
                  className="text-decoration-none text-light fs-3"
                >
                  <BsCart4 />
                  Cart ({cartItem.length})
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
