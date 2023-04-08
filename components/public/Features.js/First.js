import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
  } from '@heroicons/react/20/solid'
import Image from 'next/image'
  
  const features = [
    {
      name: 'OpenAI',
      description: 'Using OpenAI, we can help you get started with AI.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Code editor',
      description: 'Handy code editor with syntax highlighting and code completion',
      icon: LockClosedIcon,
    },
    {
      name: 'Beautiful UI',
      description: 'Beautiful UI to provide a great experience',
      icon: ArrowPathIcon,
    },
    {
      name: 'Intelligent Completion',
      description: 'Intelligent completion with context-aware suggestions',
      icon: FingerPrintIcon,
    },
    {
      name: 'Simple Pricing.',
      description: 'Simple pricing model for all your needs',
      icon: Cog6ToothIcon,
    },
    {
      name: 'Regular Updates',
      description: 'We are constantly updating our products to keep up to date',
      icon: ServerIcon,
    },
  ]
  
  export default function First() {
    return (
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-sky-400">Everything you need</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Don&apos;t know how to use AI? We can help!</p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Using a beautiful UI, we can help you get started with AI. We have a simple pricing model, and we&apos;re always adding new features.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image
              src="/code.png"
              alt="App screenshot"
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
              width={2432}
              height={1442}
            />
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
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
  