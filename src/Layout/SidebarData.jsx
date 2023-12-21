import { LuLayoutDashboard } from "react-icons/lu";
import { LuLayoutList } from "react-icons/lu";
import { MdOutlineManageAccounts } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { MdCategory } from "react-icons/md";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "furniture",
    label: "Dashboard",
    path: "admin",
    icon: <LuLayoutDashboard />,
  },
  {
    key: "user",
    label: "Users",
    path: "admin/user",
    icon: <MdOutlineManageAccounts />,
  },
  {
    key: "Products",
    label: "Products",
    path: "admin/product",
    icon: <LuLayoutList />,
  },
  {
    key: "Categories",
    label: "Categories",
    path: "admin/category",
    icon: <MdCategory />,
  },
  {
    key: "orders",
    label: "Orders",
    path: "admin/orders",
    icon: <AiOutlineShoppingCart />,
  }
];
