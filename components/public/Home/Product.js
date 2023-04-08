import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'OpenAI API.',
    description:
      'Using the OpenAI API, you can get the best out of your work. You can get the best out of your work. You can get the best out of your work.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Code generation',
    description: 'Generate code for your projects using the OpenAI API. Generate code for your projects using the OpenAI API.',
    icon: LockClosedIcon,
  },
  {
    name: 'Beautiful UI.',
    description: 'A beautiful UI that makes your work easier. A beautiful UI that makes your work easier.',
    icon: ServerIcon,
  },
]

export default function Product() {
  return (
    <div className="overflow-hidden bg-gradient-to-r from-gray-700 via-gray-900 to-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-sky-400">Deploy faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">A better workflow</p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-sky-500" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
