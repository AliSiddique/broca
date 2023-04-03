import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import axios from 'axios'
import { ClipLoader } from 'react-spinners'
import Link from 'next/link'

const frequencies = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Annually', priceSuffix: '/year' },
]
const tiers = [
  {
    name: 'Starter',
    id: 'starter',
    href: '#',
    price: { monthly: '7.99', annually: '79.99' },
    description: 'The essentials to provide your best work for programmers.',
    features: ['5,000 credits', 'Efficiency checker', 'OpenAI reports', '10 products'],
    mostPopular: false,
    priceId: {monthly:'price_1Mpv15LopXe2CPMsp1q7WdCz',annually:'price_1MpvFrLopXe2CPMsyqKfPZZ1'},
    tokens:{monthly:5000,annually:60000}
  },
  {
    name: 'Basic',
    id: 'basic',
    href: '#',
    price: { monthly: '14.99', annually: '149.99' },
    description: 'A plan for programmers to get level up their skills.',
    features: [
      '50,000 credits',
      'Efficiency checker',
      'OpenAI reports',
      'Unlimited products',
      'Premium access to new OpenAI APIs',
    ],
    mostPopular: true,
    priceId: {monthly:'price_1Mpv1VLopXe2CPMsWLjXO3wW',annually:'price_1MpvKxLopXe2CPMsDRIdzu34'},
    tokens:{monthly:50000,annually:600000}

  },
  {
    name: 'Pro',
    id: 'tier-enterprise',
    href: '#',
    price: { monthly: '29.99', annually: '289.99' },
    description: 'The ultimate tool for porgrammers to get the best out of their work.',
    features: [
      'Unlimited credits',
      'Unlimited products',
      'Premium access to new OpenAI APIs',
      'Efficiency checker',
      'OpenAI reports',
      'Other programming features',
    ],
    mostPopular: false,
    priceId: {monthly:'price_1MsQbjLopXe2CPMsCInTOT72',annually:'price_1MsQbzLopXe2CPMs7zN0fT5X'},
    tokens:{monthly:10000000000,annually:10000000}
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing({allowed}) {

  const [frequency, setFrequency] = useState(frequencies[0])
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (name,id,tokens) => {
    setLoading(true)
    const response = await axios.post(`/api/payment/checkout`,{
      name,
      id,
      tokens
    })
    const data = await response.data
    setLoading(false)
    window.location.href = data.session.url
  }
  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-sky-400">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Pricing plans for programmers of&nbsp;all&nbsp;capabilities
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
          Choose an affordable plan that’s packed with the best features for debugging your work, creating efficient
          code, and getting the best out of your work.
        </p>
        <div className="mt-16 flex justify-center">
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white"
          >
            <RadioGroup.Label className="sr-only">Payment frequency</RadioGroup.Label>
            {frequencies.map((option) => (
              <RadioGroup.Option
                key={option.value}
                value={option}
                className={({ checked }) =>
                  classNames(checked ? 'bg-sky-500' : '', 'cursor-pointer rounded-full py-1 px-2.5')
                }
              >
                <span>{option.label}</span>
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'bg-white/5 ring-2 ring-sky-500 shadow-xl shadow-sky-500' : 'ring-1 ring-white/10',
                'rounded-3xl p-8 xl:p-10'
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 id={tier.id} className="text-lg font-semibold leading-8 text-white">
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-sky-500 py-1 px-2.5 text-xs font-semibold leading-5 text-white">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">£{tier.price[frequency.value]}</span>
                <span className="text-sm font-semibold leading-6 text-gray-300">{frequency.priceSuffix}</span>
              </p>
              {allowed ? (
                <button
                disabled={loading}
                  onClick={() => handleSubmit(tier.name,tier.priceId[frequency.value],tier.tokens[frequency.value])}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? 'bg-sky-500 text-white shadow-sm hover:bg-sky-400  focus-visible:outline-sky-500'
                      : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                    'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                  )}
                >
                  {loading ? <ClipLoader color="#FFFFFF" size={15} />: "Buy"}
                </button>
              ): (
                <Link href="/api/auth/login">
                  Buy
                </Link>
              )}
         
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-green-400" aria-hidden="true" />
                    {feature.includes('credits') && tier.name != "Pro" ? tier.tokens[frequency.value].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " credits" : feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const {user} = await getSession(context)
  let allowed;
  if (user) {
      allowed = true
  }
  else  {
      allowed = false
  }
  return {
    props: {
      allowed
    },
  }
}