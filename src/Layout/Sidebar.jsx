// import React from "react";
// import { Menu } from "antd";
// import { Link} from "react-router-dom";

// function Sidebar() {
//     return (
//       <div>
//         <Menu
//           mode="vertical"
//           onClick={(item) => {
//             // Handle menu item click
//             console.log(`Clicked on ${item.key}`);
//           }}
//         >
//           <Link to="/admin" className="mb-2">
//             <Menu.Item key="/admin">Dashboard</Menu.Item>
//           </Link>
//           <Link to="/admin/product" className="mb-2">

//             <Menu.Item key="/admin/product">Product</Menu.Item>
//           </Link>
//           <Menu.Item key="/admin/category">Category</Menu.Item>
//         </Menu>
//       </div>
//     );
// }

// export default Sidebar;

/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { DASHBOARD_SIDEBAR_LINKS } from "./SidebarData";
// import LOGO from '../assets/Logos.png'

const linkClasses =
  "flex items-center gap-2 px-3 py-2 font-medium hover:no-underline h-14";

const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col col-span-1 md:col-span-2 md:px-4 font-quicksand overflow-hidden scrollbar-hide">
      <Link
        to="/main"
        className="flex flex-col justify-center items-center gap-2 py-2"
      >
        {/* <img src={LOGO} alt="Hulu Beje Logo" /> */}
      </Link>
      <div className="flex-1 py-3 flex-col gap-0.5 text-sm">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
};

function SidebarLink({ item }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={`/dashboard/${item.path}`}
      className={classNames(
        pathname.includes(item.path)
          ? "bg-navyBlue px-4 text-blueGreen font-extrabold"
          : "text-blueGrotto px-4 h-14",
        linkClasses
      )}
    >
      <span className="text-xl">{item.icon}</span>
      <span className=" hidden lg:inline-block font-quicksand font-normal">
        {item.label}
      </span>
    </Link>
  );
}

export default Sidebar;
