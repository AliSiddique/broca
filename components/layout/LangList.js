/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'
import Image from 'next/image'
const people = [
  {
    id: 1,
    name: 'java',
    imageUrl:
    'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/800px-Java_programming_language_logo.svg.png',
    extension: 'java',
},
  {
    id: 2,
    name: 'go',
    imageUrl:
    'https://plugins.jetbrains.com/files/12875/130789/icon/pluginIcon.png',
    extension: 'go',
},
  {
    id: 3,
    name: 'python',
    imageUrl:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/230px-Python-logo-notext.svg.png?20220821155029',
    extension: 'py',
},
{
    id: 4,
    name: 'rust',
    imageUrl:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/2048px-Rust_programming_language_black_logo.svg.png',
    extension: 'rs',
},
{
    id: 5,
    name: 'javascript',
    imageUrl:
    'https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png',
    extension: 'js',
},
{
    id: 6,
    name: 'c++',
    imageUrl:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png',
    extension: 'cpp',
},
  // More users...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function LangList({selectedPerson,setSelectedPerson}) {
  const [query, setQuery] = useState('')
  // const [selectedPerson, setSelectedPerson] = useState(null)

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Combobox as="div" value={selectedPerson} onChange={setSelectedPerson}>
      <div className="relative mt-2">
        <Combobox.Input

          className="w-full rounded-md border-0 bg-gray-800 py-1.5 pl-3 pr-12 text-white shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(person) => person?.name?.charAt(0).toUpperCase() + person?.name?.slice(1).toLowerCase() || 'Java'}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        {filteredPeople.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-gray-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredPeople.map((person) => (
              <Combobox.Option
                key={person.id}
                value={person}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-white text-black' : 'text-white'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <div className="flex items-center">
                      <Image src={person.imageUrl} alt="" className="h-6 w-6 flex-shrink-0 rounded-full" />
                      <span className={classNames('ml-3 truncate', selected && 'font-semibold')}>{person?.name?.charAt(0).toUpperCase() + person?.name?.slice(1).toLowerCase()}</span>
                    </div>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-sky-400' : 'text-sky-200'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  )
}
