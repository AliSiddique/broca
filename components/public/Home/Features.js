import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
  } from '@heroicons/react/20/solid'
  
  const features = [
    {
      name: 'Efficiency checker.',
      description: 'Efficiency checker is a tool that helps you to check the efficiency of your code.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'OpenAI reports.',
      description: 'Get the latest OpenAI reports in your inbox',
      icon: LockClosedIcon,
    },
    {
      name: 'Unlimited products.',
      description: 'Unlimited products for your projects with our Basic plan and above.',
      icon: ArrowPathIcon,
    },
    {
      name: 'Premium access to new OpenAI APIs.',
      description: 'Get access to new OpenAI APIs before anyone else',
      icon: FingerPrintIcon,
    },
    {
      name: 'Beautifull UI.',
      description: 'A beautiful UI that makes your work easier.',
      icon: Cog6ToothIcon,
    },
    {
      name: 'Export your code',
      description: 'Export your code to your local machine',
      icon: ServerIcon,
    },
  ]
  
  export default function Features() {
    return (
      <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-base font-semibold leading-7 text-sky-400">Everything you need</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Need to be more productive</p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Using the API&apns;s in Broca is a great way to get your app up and running quickly.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
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
    )
  }
  