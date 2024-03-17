
import { navigation } from "./NavData";
import { Fragment } from "react";
import { Menu } from "@headlessui/react";

import Dashboard from "./components/dashboard/DashboardItem";
import Teams from "./components/Team/TeamItems";
import { classNames } from "./Navbar";


// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }


function NavigateLink({open,list}) {
  
  return (
   
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">
        {navigation.map((item) => (
          
          <a 
            key={item.name}
            href={item.href}
            className={classNames(
              item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'rounded-md px-3 py-2 text-sm font-medium'
            )}
            aria-current={item.current ? 'page' : undefined}
            
          > 
          
          
           {item.name}
           {item.value==="dashboard" && <Dashboard/>}
           {item.value==="team" && <Teams/>}
           

          </a >

        )
        
        )}
       
       
      </div>
    </div>
  );
}
export default NavigateLink

