import React, { useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { FaSearch, FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const user = { _id: "wdaw", role: "admin" };
function Header() {
  const [isOpen,setIsOpen]=useState(false);
  return (
    <nav className="header">
      <Link to={"/"}>Home</Link>
      <Link to={"/search"}>
        <FaSearch />
      </Link>
      <Link to={"/Cart"}>
        <BiShoppingBag />
      </Link>
      {user._id != "" ? (
        <>
          <button onClick={()=>{setIsOpen(!isOpen)}}>
            <FaUserAlt />
          </button>

          <dialog open={isOpen}>
            <div>
              {user.role == "admin" ? (
                <Link to={"/admin/dashboard"}>
                  Admin
                  <FaUserAlt />
                </Link>
              ) : (
                <Link to={"/user/dashboard"}>
                  <FaUserAlt />
                </Link>
              )}
            </div>
          </dialog>
        </>
      ) : (
        <>
          <FaSignInAlt />
        </>
      )}
    </nav>
  );
}

export default Header;
