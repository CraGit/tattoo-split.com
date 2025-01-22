//template

import React from "react";
// nav data
import { navData } from "../data";
// components
import Socials from "./Socials";

const NavMobile = () => {
  // destructure nav data
  const { items } = navData;

  return (
    <nav className="flex flex-col w-full h-full overflow-hidden justify-evenly">
      <ul className="flex flex-col items-center justify-center py-6 mb-8 gap-y-6">
        {items.map((item, i) => {
          return (
            <li key={i}>
              <a className="text-2xl uppercase font-primary" href={item.href}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="text-2xl">
        <Socials />
      </div>
    </nav>
  );
};

export default NavMobile;
