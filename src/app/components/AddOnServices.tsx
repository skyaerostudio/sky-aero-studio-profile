export function AddOnServices() {
  const addOns = [
    {
      name: 'Payments Integration',
      price: 'Rp 12M – 25M',
      description: 'Stripe/Midtrans payment processing',
      icon: '💳'
    },
    {
      name: 'Admin Dashboard Pro',
      price: 'Rp 15M – 30M',
      description: 'Advanced admin panel with analytics',
      icon: '📊'
    },
    {
      name: 'AI Features',
      price: 'Rp 15M – 40M',
      description: 'OpenAI/watsonx integration + API usage',
      icon: '🤖'
    },
    {
      name: 'DevOps & Monitoring',
      price: 'Rp 8M – 18M',
      description: 'Vercel deployment + Sentry monitoring',
      icon: '🔧'
    },
    {
      name: 'Test Suite',
      price: 'Rp 10M – 22M',
      description: 'Playwright + Vitest testing framework',
      icon: '🧪'
    },
    {
      name: 'Documentation Pack',
      price: 'Rp 5M – 12M',
      description: 'Runbook + API documentation',
      icon: '📚'
    },
    {
      name: 'Design Polish',
      price: 'Rp 6M – 15M',
      description: 'Brand kit + design tokens',
      icon: '🎨'
    }
  ]

  return (
    <section className="bg-background">
      <div className="container px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Add-On Services
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Enhance your project with specialized features
          </p>
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 inline-block">
            <span className="text-sm font-medium text-accent">💡 Bundle 2+ add-ons and save 10%</span>
          </div>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {addOns.map((addOn) => (
          <div 
            key={addOn.name}
            className="border border-border rounded-lg p-6 hover:shadow-lg hover:shadow-accent/5 hover:border-accent/20 transition-all duration-300 hover:scale-105"
          >
            <div className="text-3xl mb-4">{addOn.icon}</div>
            <h3 className="text-xl font-bold mb-2">{addOn.name}</h3>
            <div className="text-2xl font-bold text-accent mb-3">{addOn.price}</div>
            <p className="text-foreground/80 text-sm">{addOn.description}</p>
          </div>
        ))}
      </div>

        <div className="text-center mt-16">
          <p className="text-foreground/60 text-sm md:text-base">
            Add-ons can be included during project planning or added mid-development
          </p>
        </div>
      </div>
    </section>
  )
}