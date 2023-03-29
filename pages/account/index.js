import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { Monaco } from '@monaco-editor/react'
import React from 'react'
import { getSession } from '@auth0/nextjs-auth0'
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
    function setEditorTheme(monaco) {
      monaco.editor.defineTheme('onedark', {
        base: 'vs-dark',
        inherit: true,
        rules: [
          {
            token: 'comment',
            foreground: '#5d7988',
            fontStyle: 'italic'
          },
          { token: 'constant', foreground: '#e06c75' }
        ],
        colors: {
          'editor.background': '#21252b'
        }
      });
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
                      <img
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
            <img
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
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4  bg-gray-900 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">

            {/* Separator */}
     
        </div>
        
        </div>
        <div className='grid grid-cols-2 h-screen lg:pl-20'>
            <h1>hel</h1>
            <h1>wswwwww</h1>

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