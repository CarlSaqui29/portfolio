import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDribbble } from '@fortawesome/free-brands-svg-icons';
import bro from '../../assets/bro.jpg';

const navigation = [
  { name: 'About Me', href: '#', current: true },
  { name: 'Projects', href: '#', current: false },
  { name: 'Hobbies', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <>
    <Disclosure as="nav" className="sticky top-0 z-50 bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:flex shrink-0 items-center">
              <img
                alt="Carl Saqui"
                src={bro}
                className="size-8 rounded-full"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a
              href="https://github.com/CarlSaqui29"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="m-2"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-xl text-gray-400 hover:text-white"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/carlsaqui/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="m-2"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-xl text-gray-400 hover:text-white"
              />
            </a>
            <a
              href="https://dribbble.com/DevWil"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dribbble"
              className="m-2"
            >
              <FontAwesomeIcon
                icon={faDribbble}
                className="text-xl text-gray-400 hover:text-white"
              />
            </a>

          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  </>
  )
}
