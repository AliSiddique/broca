import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Open source.',
    description:
      'Open source so the community can contribute and help us build the best product for programmers.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'OpenAi API integration.',
    description: 'Open AI API integration to provide the best programming experience for programmers.',
    icon: LockClosedIcon,
  },
  {
    name: 'Code editor',
    description: 'Code editor to help programmers write code faster and more efficiently.',
    icon: ServerIcon,
  },
]

export default function FirstProduct() {
  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black overflow-hidden bg-gray-900 py-24 sm:py-32">
                <h1 className='text-white text-center pb-8 font-bold text-4xl'>The <span className='font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-sky-400 to-blue-800'>Broca</span> product</h1>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-sky-600">Deploy faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">A better workflow</p>
              <p className="mt-6 text-lg leading-8 text-gray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-300">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-sky-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <img
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
