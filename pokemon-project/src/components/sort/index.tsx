import { FC } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface SortDropdownProps {
  setSortOption: (value: string) => void;
}

const SortDropdown: FC<SortDropdownProps> = ({  setSortOption }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="w-44 flex justify-between items-center bg-[#3D4466] text-[#97A0CC] py-2 px-3 rounded-2xl focus:outline-none">
         Sort by
        <ChevronDownIcon className="w-5 h-5 text-[#97A0CC]" aria-hidden="true" />
      </MenuButton>
      
      <MenuItems className="absolute mt-1 w-44 bg-white border border-gray-300 rounded shadow-lg focus:outline-none">
        <MenuItem>
          {({ active }) => (
            <button
              className={`block w-full px-4 py-2 text-left text-sm ${active ? "bg-gray-100" : "text-gray-700"}`}
              onClick={() => setSortOption("Sort by Name")}
            >
              Sort by Name
            </button>
          )}
        </MenuItem>
        <MenuItem>
          {({ active }) => (
            <button
              className={`block w-full px-4 py-2 text-left text-sm ${active ? "bg-gray-100" : "text-gray-700"}`}
              onClick={() => setSortOption("Sort by ID")}
            >
              Sort by ID
            </button>
          )}
        </MenuItem>
        
      </MenuItems>
    </Menu>
  );
};

export default SortDropdown;