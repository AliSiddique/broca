import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Artificial Intelligence',
    description:
      'The latest artificial intelligence to power your code writing .',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Web UI',
    description:
      'The beautiful Web UI is a great way to interact with your code. It allows you to see the code in a visual way and to interact with it. It also allows you to see the code in a visual way and to interact with it.',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Code Generation',
    description:
      'Code generation can automatically generate source code from a model of the code. The model is usually a UML model, but it can also be a database schema, a form, or any other model that can be represented in a structured way.',
    href: '#',
    icon: ArrowPathIcon,
  },
]

export default function Second() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-sky-400">Debug faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to debug your app
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Debugging your code made easy. We have a lot of features to help you debug your code.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-400" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-sky-400">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
