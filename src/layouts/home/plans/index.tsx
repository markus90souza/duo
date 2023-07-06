import { Container } from '@/components/container'
import { Check } from 'lucide-react'

const pricing = {
  tiers: [
    {
      title: 'Freelancer',
      price: 10,
      frequency: '/mês',
      description: 'The essentials to provide your best work for clients.',
      features: [
        '5 products',
        'Up to 1,000 subscribers',
        'Basic analytics',
        '48-hour support response time',
      ],
      cta: 'Saiba mais',
      mostPopular: false,
    },
    {
      title: 'Startup',
      price: 32,
      frequency: '/mês',
      description: 'A plan that scales with your rapidly growing business.',
      features: [
        '25 products',
        'Up to 10,000 subscribers',
        'Advanced analytics',
        '24-hour support response time',
        'Marketing automations',
      ],
      cta: 'Saiba mais',
      mostPopular: true,
    },
    {
      title: 'Enterprise',
      price: 48,
      frequency: '/mês',
      description: 'Dedicated support and infrastructure for your company.',
      features: [
        'Unlimited products',
        'Unlimited subscribers',
        'Advanced analytics',
        '1-hour, dedicated support response time',
        'Marketing automations',
        'Custom integrations',
      ],
      cta: 'Saiba mais',
      mostPopular: false,
    },
  ],
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const Plans = () => {
  return (
    <section className="bg-[#22253f] py-24">
      <Container>
        {/* Tiers */}
        <div className="mt-24 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          {pricing.tiers.map((tier) => (
            <div
              key={tier.title}
              className="relative flex flex-col rounded-2xl border bg-white p-8 shadow-sm"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">
                  {tier.title}
                </h3>
                {tier.mostPopular ? (
                  <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-indigo-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
                    Mais Popular
                  </p>
                ) : null}
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">
                    R$ {tier.price}
                  </span>
                  <span className="ml-1 text-xl font-semibold">
                    {tier.frequency}
                  </span>
                </p>
                <p className="mt-6 text-gray-500">{tier.description}</p>

                {/* Feature list */}
                <ul role="list" className="mt-6 space-y-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check
                        className="h-6 w-6 flex-shrink-0 text-indigo-500"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#"
                className={classNames(
                  tier.mostPopular
                    ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                    : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100',
                  'mt-8 block w-full rounded-md border border-transparent px-6 py-3 text-center font-medium',
                )}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
