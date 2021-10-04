import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';


const MobileNavbar = () => {
    return (
      <nav className='flex flex-grow justify-end items-center pr-3'>
        <Menu as="div" className='mr-5'>
          <div>
            <Menu.Button className=" flex items-center bg-yellow-400 w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
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

            <Menu.Items className="z-50 absolute right-0 w-32 mr-5 mt-1 mt-0 origin-center border-yellow-400 border-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div>
                <Link href='/About'>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-yellow-400 text-white' : 'text-gray-900'
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        {active ? (
                          <AboutActive
                            className="w-5 h-5 mr-2"
                            aria-hidden="true"
                          />
                          ) : (
                          <AboutInactive
                              className="w-5 h-5 mr-2"
                              aria-hidden="true"
                          />
                        )}
                        About
                      </button>
                    )}
                  </Menu.Item>
                </Link>

                <Link href="/SearchCountries">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-yellow-400 text-white' : 'text-gray-900'
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        {active ? (
                          <CountriesActive
                            className="w-5 h-5 mr-2"
                            aria-hidden="true"
                          />
                          ) : (
                          <CountriesInactive
                            className="w-5 h-5 mr-2"
                            aria-hidden="true"
                          />
                        )}
                        Countries
                      </button>
                    )}
                  </Menu.Item>
                </Link>

                <Link href="/Contact">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-yellow-400 text-white' : 'text-gray-900'
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        {active ? (
                          <ContactActive
                            className="w-5 h-5 mr-2"
                            aria-hidden="true"
                          />
                          ) : (
                          <ContactInactive
                            className="w-5 h-5 mr-2"
                            aria-hidden="true"
                          />
                        )}
                        Contact
                      </button>
                    )}
                  </Menu.Item>
                </Link>
              </div>
            </Menu.Items>

          </Transition>
        </Menu>
      </nav>
    )
}

<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
</svg>

function AboutInactive(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
          fill="#FEF3C7"
          stroke="#FBBF24"
          strokeWidth="2"
        />
      </svg>
    )
  }
  
function AboutActive(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
          fill="#FBBF24"
          stroke="#F9FAFB"
          strokeWidth="2"
          />
        </svg>
    )
}

function CountriesActive(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          fill="#FBBF24"
          stroke="#F9FAFB"
          strokeWidth="2"
          />
        </svg>
    )
}

function CountriesInactive(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          fill="#FEF3C7"
          stroke="#FBBF24"
          strokeWidth="2"
          />
        </svg>
    )
}

function ContactActive(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          fill="#FBBF24"
          stroke="#F9FAFB"
          strokeWidth="2"
          />
        </svg>
    )
}

function ContactInactive(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          fill="#FEF3C7"
          stroke="#FBBF24"
          strokeWidth="2"
          />
        </svg>
    )
}

export default MobileNavbar