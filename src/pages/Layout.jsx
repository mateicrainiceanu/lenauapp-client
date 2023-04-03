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
        <div class="footer">
          <h6 class="footer footer-text">
            {anulCurent} © Liceu Teoretic "Nikolaus Lenau" |{" "}
            <a class="footer-text" href="/login">
              Login
            </a>
          </h6>
        </div>
      </footer>
    </>
  );
};

export default Layout;
