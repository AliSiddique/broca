import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { Monaco } from '@monaco-editor/react'
import React from 'react'
import Prompts from '../../components/layout/Prompts'
import { getSession } from '@auth0/nextjs-auth0'
import Image from 'next/image'
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  XMarkIcon,
  CodeBracketIcon,
  Cog6ToothIcon,
  GlobeAltIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { ArrowDownIcon } from '@heroicons/react/20/solid'
import { toast } from 'react-hot-toast'
import Stats from '../../components/app/stats'
import Services from '../../components/app/services'
import Header from '../../components/account/header'
import SettingsForm from '../../components/app/settings/form'
import Subscription from '../../components/app/settings/Subscription'
import Link from 'next/link'
import axios from 'axios'


const navigation = [
  { name: 'Dashboard', href: '/app', icon: CodeBracketIcon, current: true },
  { name: 'Settings', href: '/app/settings', icon: Cog6ToothIcon, current: false },
  { name: 'Files', href: '/app/files', icon: FolderIcon, current: false },
  { name: 'Browse', href: '/app/browse', icon: GlobeAltIcon, current: false },
  { name: 'Prompts', href: '/app/prompts', icon: BookOpenIcon, current: false },
  { name: 'Reports', href: '/app/reports', icon: ChartPieIcon, current: false },
]
const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '/api/auth/logout' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Layout({user}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [largeMenu, setLargeMenu] = useState(false)
    const [selectedPerson, setSelectedPerson] = useState("java")
    const [search, setSearch] = useState("")
    const [code, setCode] = React.useState('');
    const handleEmail = async (e) => {
      e.preventDefault()
      console.log('Email Clicked')
      const response = await axios.post('/api/code/send')
      console.log(response)

    }
 
  const toastPrompt = () => {
    return toast('Saved!',
    {
      icon: '👏',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    }
  );
    }


  // export code with the extension and code
  function exportCode() {
    const change = code.replace("\n", '');
    const fileData = JSON.stringify(code);
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = `exports.${selectedPerson.extension}`;
    link.href = url;
    link.click();
  }

  return (
    <>
      <div className='bg-gray-900'>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-full flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>

                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                    <div className="flex h-16 shrink-0 items-center">
                      <Image
                        className="h-12 w-auto rounded-full"
                        src="/logo.png"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="-mx-2 flex-1 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-gray-800 text-white'
                                  : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                              )}
                            >
                              <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div onMouseLeave={() => setLargeMenu(false)} onMouseEnter={() => setLargeMenu(true)} className={largeMenu ? "hidden p-4 duration-200  lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-60 lg:overflow-y-auto lg:bg-gray-900 lg:pb-4": "hidden lg:fixed p-4 lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-20 duration-700  lg:overflow-y-auto lg:bg-gray-900 lg:pb-4"}>
          <div className={largeMenu ? "flex h-16 shrink-0 items-center justify-start" : "flex h-16 shrink-0 items-center justify-center"}>
            <Image
              className="h-12 w-auto rounded-full"
              src="/logo.png"
              alt="Your Company"
            />
            <span className={largeMenu ? 'text-white pl-6 font-bold' : "" }>{largeMenu ? "Broca" : ""}</span>
          </div>
          <nav className="mt-8">
            <ul role="list" className={largeMenu ? "flex flex-col items-left space-y-1" : "flex flex-col items-center space-y-1"}>
              {navigation.map((item) => (
                <li key={item.name}  >
                  <a
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800',
                      'group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold'
                    )}
                  >
                    <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                    <span className={largeMenu ? "w-20 duration-700" : "duration-700"}>{largeMenu ? item.name : ""}</span>
                    <span className="sr-only">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="lg:pl-20 ">
        <Header user={user}/>
          <div className="sticky  top-0 z-40 flex h-16 shrink-0 items-center gap-x-4  bg-gray-900 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">

            {/* Separator */}
     
        </div>
        
        </div>
        <div className='grid grid-cols-3 h-screen lg:pl-20 justify-items-center gap-2 p-8	'>
            <div className='h-screen col-span-2  '>
                    
      <div className="pb-8">
       

        <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
          <div className="px-4 py-6 sm:p-8">
            <div className="grid max-w-2xl grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    disabled
                    value={user.name.split(' ')[0]}
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    disabled
                    name="last-name"
                    id="last-name"
                    value={user.name.split(' ')[1]}
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    disabled
                    name="email"
                    type="email"
                    value={user.email}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

           
              <div className="col-span-full">
                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                  Locale
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    disabled
                    name="street-address"
                    value={user.locale}
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                  Nickname
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    disabled
                    name="street-address"
                    value={user.nickname}
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>


            </div>
            <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900"> Notifications</legend>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  
                </p>
                <div className="mt-6 space-y-6">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-everything"
                      name="push-notifications"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                      SMS
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-email"
                      name="push-notifications"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                      Email
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-nothing"
                      name="push-notifications"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                      No  notifications
                    </label>
                  </div>
                  <button onClick={handleEmail} >
                Send email
              </button>
                </div>
              </fieldset>
              
          </div>
    
        </form>
      </div>

              <Subscription/>
             
            </div>
            <div className='h-screen w-full p-3'>
              <Prompts/>
            </div>

        </div>

       
      </div>
    </>
  )
}

export const getServerSideProps = async (context) => {
    const {user} = await getSession(context.req, context.res);
  
    return {
        props: { user },
    };
    }