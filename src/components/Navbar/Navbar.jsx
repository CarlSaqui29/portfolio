import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { BeakerIcon } from '@heroicons/react/24/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDribbble } from '@fortawesome/free-brands-svg-icons';
import bro from '../../assets/bro.jpg';

const navigation = [
  { name: 'About Me', href: '#', current: true },
  { name: 'Projects', href: '#', current: false },
  { name: 'Lab', href: '#', current: false, rainbow: true},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <>
    <Disclosure as="nav" className="sticky top-0 z-50 bg-transparent">
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
                      item.rainbow ? 'text-base hover:scale-105 rainbow-glow' : 'text-gray-300 hover:text-white',
                      'rounded-md px-3 py-2 text-base',
                    )}
                  >
                    {
                      item.name === 'Lab' ? (
                        <span className="flex items-center gap-2">
                          <span className="bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent">
                            {item.name}
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="h-5 w-5"
                          >
                            <defs>
                              <linearGradient id="labGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#ef4444" /> {/* red-500 */}
                                <stop offset="50%" stopColor="#facc15" /> {/* yellow-500 */}
                                <stop offset="100%" stopColor="#3b82f6" /> {/* blue-500 */}
                              </linearGradient>
                            </defs>
                            <path
                              fill="url(#labGradient)"
                              fillRule="evenodd"
                              d="M10.5 3.798v5.02a3 3 0 0 1-.879 2.121l-2.377 2.377a9.845 9.845 0 0 1 5.091 1.013 8.315 8.315 0 0 0 5.713.636l.285-.071-3.954-3.955a3 3 0 0 1-.879-2.121v-5.02a23.614 23.614 0 0 0-3 0Zm4.5.138a.75.75 0 0 0 .093-1.495A24.837 24.837 0 0 0 12 2.25a25.048 25.048 0 0 0-3.093.191A.75.75 0 0 0 9 3.936v4.882a1.5 1.5 0 0 1-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0 1 15 8.818V3.936Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      ) : (
                        <span>{item.name}</span>
                      )
                    }
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
                'block rounded-md px-3 py-2 text-base',
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
