import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from 'react-router-dom';


const List = [
  {
    name: "Overview",
    href: "/dashboard/home",
  },
  {
    name: "Services",
    href: "/dashboard/services",
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
  },
  
];
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Dashboard = () => {
  
  return (
    <>
      <Menu
        as="div"
        className="relative ml-3   flex place-content-center items-center  "
      >
        <div>
          <Menu.Button
           >
            <span className="absolute -inset-1.5 " />
            <span className="sr-only">Open dashboard menu</span>
           
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute top-full z-10 mt-2 w-48 origin-top-right bg-white py-1 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {List.map((item) => (
              <Menu.Item>
                {({ active }) => (
                   <Link
                   to={item.href} // Use Link component with 'to' prop
                   className={classNames(
                     active ? "bg-gray-100" : "",
                     "block px-4 py-2 text-sm text-gray-700"
                   )}
                 >
                   {item.name}
                 </Link>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};
export default Dashboard;