export function CarePlans() {
  const plans = [
    {
      name: 'Basic',
      price: 'Rp 3.5M',
      sla: '3 business days',
      hours: '10 hours',
      features: [
        '10 hours monthly support',
        '3 business day SLA',
        'Bug fixes & updates',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Growth',
      price: 'Rp 7.5M',
      sla: 'Next business day',
      hours: '24 hours',
      features: [
        '24 hours monthly support',
        'Next business day SLA',
        'Priority bug fixes',
        'Feature enhancements',
        'Phone + email support'
      ],
      popular: true
    },
    {
      name: 'Scale',
      price: 'Rp 15M',
      sla: 'Same day',
      hours: '60 hours',
      features: [
        '60 hours monthly support',
        'Same day SLA',
        'Critical issue escalation',
        'Performance monitoring',
        'Dedicated support channel',
        'Monthly strategy calls'
      ],
      popular: false
    }
  ]

  return (
    <section className="bg-foreground/5">
      <div className="container px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Ongoing Care Plans
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Keep your application running smoothly with monthly support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`border border-border rounded-xl p-6 lg:p-8 bg-background hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 relative ${
                plan.popular ? 'ring-2 ring-accent scale-105 md:scale-100 lg:scale-105' : 'hover:scale-105'
              }`}
            >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
            )}
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-accent mb-1">{plan.price}</div>
              <div className="text-sm text-foreground/60 mb-2">/month</div>
              <div className="text-foreground/70 text-sm mb-1">SLA: {plan.sla}</div>
              <div className="text-foreground/70 text-sm">{plan.hours} included</div>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-foreground/80 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Choose Plan
            </button>
          </div>
        ))}
      </div>

        <div className="text-center mt-16">
          <p className="text-foreground/60 text-sm md:text-base">
            Care plans are optional and can be started after project delivery • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}