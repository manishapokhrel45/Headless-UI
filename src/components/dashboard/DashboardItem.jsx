import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

const List = [
  {
    id: 1,
    name: "Overview",
    href: "/dashboard/home",
  },
  {
    id: 2,
    name: "Data",
    href: "/dashboard/services",
  },
  {
    id: 3,
    name: "Analytic",
    href: "/dashboard/settings",
  },
  {
    id: 4,
    name: "Trends",
    href: "/dashboard/trends",
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Menu
        as="div"
        className="  py-2   flex place-content-center items-center  "
      >
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <Menu.Button className="h-fit w-20  relative ">
            <span className="absolute -inset-1.5 " />
            <span className="sr-only">Open dashboard menu</span>
            <button className="h-fit w-20 font-medium text-base ">
              Dashboard
            </button>
          </Menu.Button>
        </div>
        <Transition
          show={isOpen}
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className="absolute top-full z-10  w-fit origin-top-right bg-white  rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            {List.map((item) => (
              <div key={item.id}>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to={item.href}
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </Menu.Item>
              </div>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};
export default Dashboard;
