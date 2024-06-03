import { navLinks } from '@/lib/constants'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Nav = () => {
  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7 max-width">
      <nav className="relative w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-8 mx-auto" aria-label="Global">
        <div className="md:col-span-3">
        <Link className='flex flex-row justify-center' href="/">
      <h1 className="text-sm font-bold text-black md:text-base lg:text-xl">Marley </h1>
      <h1 className='text-sm font-bold md:text-base lg:text-xl text-lime-300 hover:text-eerie_black-500'>&lt;&#47;&amp;Me.&gt;</h1>
      </Link>
        </div>
    
        <div className="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
          <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl text-black hover:bg-lime-300 transition hover:text-seasalt focus:outline-none focus:bg-blue-600">
            Lets Connect
          </button>
    
          <div className="md:hidden">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-black shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
          Icon
        </MenuButton>
        <Transition
          enter="transition ease-out duration-75"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems
            anchor="bottom end"
            className="w-52 origin-top-right rounded-xl border border-seasalt bg-seasalt p-1 text-sm/6 text-black [--anchor-gap:var(--spacing-1)] focus:outline-none"
          >
            {
                navLinks.map(i => (
            <MenuItem key={i.title}>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
             {i.title}
                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘E</kbd>
              </button>
            </MenuItem>
                ))
            }

          </MenuItems>
        </Transition>
      </Menu>
          </div>
        </div>

        <div className="hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6">
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
            
            {
                navLinks.map(i => (
            <div key={i.title}>
              <Link className="relative inline-block text-eerie-black hover:border-b-4 hover:border-lime-300" href={i.url} aria-current="page">{i.title}</Link>
            </div>

                ))
            }

          </div>
        </div>
      </nav>
    </header>
  )
}

export default Nav