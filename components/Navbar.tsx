"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar ">
      <div className="nav-container">



        <nav className={open ? "nav-links mobile-open" : "nav-links"}>
         

          <a href="#services" onClick={() => setOpen(false)}>
            Services
          </a>

          <a href="#work" onClick={() => setOpen(false)}>
            Work
          </a>
        </nav>

        <a href="#" className="logo ">
          M
        </a>


      </div>
    </header>
  );
}
