import React, { useState } from "react";
import Containt from "./dashbordsCss";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import {
  Album,
  Group,
  Home,
  Photo,
  LowPriority,
  InboxIcon,
} from "@material-ui/icons";

const Dashbords = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [color, setColor] = useState(true);
  function openClose() {
    setOpen(!open);
  }
  function colorWD() {
    setColor(!color);
  }
  return (
    <Containt>
      <div
        className={`top_bar ${open ? "h100" : "h0"} ${color ? "topW" : "topD"}`}
      >
        <Link href="/">
          <a className="Back">
            <h3>Home</h3>
          </a>
        </Link>
        <Link href="/posts">
          <a className="Back">
            <h3>Posts</h3>
          </a>
        </Link>
        <Link href="/albums">
          <a className="Back">
            <h3>Albums</h3>
          </a>
        </Link>
        <Link href="/users">
          <a className="Back">
            <h3>Users</h3>
          </a>
        </Link>
      </div>
      <button onClick={openClose} className="btn w-50 btn-dark">
        Open Close
      </button>
      <button onClick={colorWD} className="btn w-50 btn-dark">
        Color
      </button>
      <div>{children}</div>
    </Containt>
  );
};

export default Dashbords;
