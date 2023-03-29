import { people } from "./servicesData"

export default function Services({search, setSearch}) {
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10 h-screen bg-gray-900">
      {people.map((person) => (
        <li key={person.email} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
          <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="flex-1 ">
              <div className='flex justify-between py-2'>
              <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src={person.imageUrl} alt="" />
              <person.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>

              <div className="flex items-center space-x-3">
                <h3 className=" text-lg font-bold text-gray-900">{person.name}</h3>
                <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                  {person.category}
                </span>
              </div>
              <p className="mt-1  text-sm text-gray-500">{person.description}</p>
            </div>
          </div>
          <div>
     
          </div>
        </li>
      ))}
    </ul>
  )
}
