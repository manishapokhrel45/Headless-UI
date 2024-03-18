import { navigation } from "./NavData";

import Dashboard from "../components/dashboard/DashboardItem";
import Teams from "../components/Team/TeamItems";
import { classNames } from "./Navbar";
import { Link } from "react-router-dom";
import Projects from "../components/Projects/Projects";
import PostData from "../components/Posts/PostData";

function NavigateLink({ open, list }) {
  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={classNames(
              item.current ? " text-white" : "text-gray-300  hover:text-white",
              "rounded-md  text-sm font-medium"
            )}
            aria-current={item.current ? "page" : undefined}
          >
            {item.value === "dashboard" && <Dashboard />}
            {item.value === "team" && <Teams />}
            {item.value === "projects" && <Projects />}
            {item.value === "posts" && <PostData />}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default NavigateLink;
