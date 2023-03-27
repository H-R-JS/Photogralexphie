import React from "react";
import { DropDownItems } from "./DropDownItems";
import { Link } from "react-router-dom";

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
