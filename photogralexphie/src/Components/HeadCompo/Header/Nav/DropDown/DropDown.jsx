import React from "react";
import { DropDownItems } from "./DropDownItems";
import { HashLink as Link } from "react-router-hash-link";

export const DropDown = () => {
  return (
    <ul className="dropdown-container">
      {DropDownItems.map((item, index) => {
        return (
          <li key={index}>
            <Link to={item.path} className="dropdown-link">
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
