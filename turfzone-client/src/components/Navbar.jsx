// import React from "react";
import { Logo } from "../assets/images";

// const Navbar = () => {
//   return (
//     <div className="w-full mt-4">
//       <div className="flex items-center justify-between py-4 w-11/12">
//         <div className="flex items-center justify-center">
//           <img src={Logo} alt="TurfZone Logo" className="w-16 h-16" />
//           <h1 className="text-3xl font-bold text-white">TurfZone</h1>
//         </div>
//         <div className="flex items-center justify-center">
//           <a href="#" className="px-4 py-2 text-lg font-bold text-black ">
//             Home
//           </a>
//           <a href="#" className="px-4 py-2 text-lg font-bold text-black">
//             Featured Playgrounds
//           </a>
//           <a href="#" className="px-4 py-2 text-lg font-bold text-black">
//             Why TurfZone
//           </a>
//           <a href="#" className="px-4 py-2 text-lg font-bold text-black">
//             Testimonials
//           </a>
//         </div>
        // <div className="flex items-center justify-center">
        //   <a
        //     href="#"
        //     className="px-4 py-2 text-lg font-bold text-white bg-pink-500 rounded-md hover:bg-pink-600"
        //   >
        //     Customer Login
        //   </a>
        //   <a
        //     href="#"
        //     className="px-4 py-2 text-lg font-bold text-black bg-white-500 rounded-md hover:bg-pink-300"
        //   >
        //     Admin Login
        //   </a>
        // </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;




/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src={Logo}
                    alt="TurfZone"
                  />
                  <img
                    className="hidden lg:block h-12 w-auto mx-4"
                    src={Logo}
                    alt="TurfZone"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="#"
                    className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Dashboard
                  </a>
                  <a
                    href="#"
                    className="border-transparent text-gray-300 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover:duration-500"
                  >
                    Featured Playgrounds
                  </a>
                  <a
                    href="#"
                    className="border-transparent text-gray-300 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover:duration-500"
                  >
                    Why TurfZone
                  </a>
                  <a
                    href="#"
                    className="border-transparent text-gray-300 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover:duration-500"
                  >
                    Testimonials
                  </a>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                {/* <button
                  type="button"
                  className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">View notifications</span>
                </button> */}

                {/* Profile dropdown
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu> */}
                        <div className="flex items-center justify-center">
          <a
            href="#"
            className="px-4 py-2 text-md font-bold text-white pink-button rounded-md hover:bg-pink-600 hover:animate-pulse"
          >
            Customer Login
          </a>
          <a
            href="#"
            className="px-4 py-2 text-md font-bold text-black bg-white rounded-md hover:bg-pink-300 hover:animate-pulse"
          >
            Admin Login
          </a>
        </div>

              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-300 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Featured Playgrounds
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-300 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Why TurfZone
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-300 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Testimonials
              </Disclosure.Button>
            </div>
            {/* <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">Tom Cook</div>
                  <div className="text-sm font-medium text-gray-500">tom@example.com</div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div> */}
                    <div className="flex items-center justify-center">
          <a
            href="#"
            className="px-4 py-2 text-lg font-bold text-white bg-pink-500 rounded-md hover:bg-pink-600"
          >
            Customer Login
          </a>
          <a
            href="#"
            className="px-4 py-2 text-lg font-bold text-black bg-white-500 rounded-md hover:bg-pink-300"
          >
            Admin Login
          </a>
        </div>

          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
