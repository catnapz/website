import Image from 'next/image'
import { Disclosure, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from "next/link";
import { useRouter } from "next/router";
import { classNames } from '../utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Team', href: '/team' },
  { name: 'Projects', href: '/projects' },
]

const active = "bg-primary-container dark:bg-primary-container-dark text-on-primary-container dark:text-on-primary-container-dark";
const inactive = "text-on-surface dark:text-on-surface-dark hover:bg-secondary-container hover:dark:bg-secondary-container-dark hover:text-on-secondary-container hover:dark:text-on-secondary-container-dark";

export const Header = () => {

  const router = useRouter();

  return (
    <Disclosure as="nav" className="bg-surface dark:bg-surface-dark md:rounded-t-lg border-b border-surface-variant dark:border-surface-variant-dark ">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="
                  inline-flex items-center justify-center p-2 rounded-md
                  bg-surface dark:bg-surface-dark text-on-surface dark:text-on-surface-dark
                  hover:bg-surface-variant hover:dark:bg-surface-variant-dark hover:text-on-surface-variant hover:dark:text-on-surface-variant-dark 
                  focus:outline-none focus:ring-2 focus:ring-inset 
                  focus:ring-outline-dark focus:dark:ring-outline-dark">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Image
                    className="rounded-lg block h-8 w-auto"
                    src="/logo-512x512.png"
                    alt="catnaps logo"
                    height={36}
                    width={36}
                  />
                </div>
                <h1 className='absolute right-0 text-lg sm:text-2xl text-primary dark:text-primary-dark'>catnapz</h1>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link href={item.href} key={item.name}>
                        <a
                          className={classNames(
                            router.route === item.href ? active : inactive,
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={router.route === item.href ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}

                  href={item.href}>
                  <Disclosure.Button

                    as="a"
                    className={classNames(
                      router.route === item.href ? active : inactive,
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={router.route === item.href ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
