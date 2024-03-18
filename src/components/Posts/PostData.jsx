import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

const teamData = [
  {
    id: 1,
    name: "Post",
    href: "/fetch/post",
  },
  {
    id: 2,
    name: "Comments",
    href: "/fetch/comment",
  },
  {
    id: 3,
    name: "Photos",
    href: "/fetch/photo",
  },
  {
    id: 4,
    name: "Videos",
    href: "/Team/activeteam",
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const PostData = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Menu
        as="div"
        className=" py-2   flex place-content-center items-center  "
      >
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <Menu.Button className="h-fit w-20  relative">
            <span className="absolute -inset-1.5 " />
            <span className="sr-only">Open dashboard menu</span>
            <button className="h-fit w-20 text-base font-medium ">Posts</button>
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
            className="absolute top-full z-10  w-28 origin-top-right bg-white py-1 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            {teamData.map((item) => (
              <div key={item.id}>
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
              </div>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};
export default PostData;
