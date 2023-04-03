import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../small_components/Navbar";

const Layout = (props) => {

    const anulCurent = new Date().getFullYear()

  return (
    <>
      <Navbar user={props.user} />
      <Outlet />
      <footer>
        <div className="footer">
          <h6 className="footer footer-text">
            {anulCurent} © Liceu Teoretic "Nikolaus Lenau" |{" "}
            <a className="footer-text" href="/login">
              Login
            </a>
          </h6>
        </div>
      </footer>
    </>
  );
};

export default Layout;
