import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import NavMenu from "./NavMenu";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



const ProfileDropDown = () => {
  return (
       <div>
      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
        <span className="absolute -inset-1.5" />
        <span className="sr-only">Open user menu</span>
        <img
          className="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />


      </Menu.Button>
      <NavMenu />


    </div>
  )
}
export default ProfileDropDown;