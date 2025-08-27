import Link from 'next/link'

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Ryan Razaan Gunawan',
      role: 'Founder & Lead Developer',
      bio: 'Full-stack developer with 8+ years of experience building scalable applications. Passionate about AI-first development and rapid prototyping.',
      skills: ['Next.js', 'TypeScript', 'AI Integration', 'System Architecture']
    },
    {
      name: 'AI Development Team',
      role: 'Claude & GPT-4 Assistants',
      bio: 'Our AI partners handle code generation, documentation, and repetitive tasks, allowing human expertise to focus on complex problem-solving and strategy.',
      skills: ['Code Generation', 'Documentation', 'Testing', 'Optimization']
    }
  ]

  const values = [
    {
      title: 'Speed Without Compromise',
      description: 'We deliver fast without sacrificing quality. Our AI-first approach accelerates development while maintaining high standards.'
    },
    {
      title: 'Transparent Communication',
      description: 'Clear timelines, honest estimates, and regular updates. You always know where your project stands.'
    },
    {
      title: 'Measurable Results',
      description: 'Every project includes success metrics and performance benchmarks. We prove our value with data.'
    },
    {
      title: 'Future-Proof Solutions',
      description: 'We build with modern technologies and best practices to ensure your solution scales and evolves.'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'We understand your goals, requirements, and timeline through a detailed consultation.',
      duration: '30-60 minutes'
    },
    {
      step: '02', 
      title: 'Proposal & Planning',
      description: 'Receive a detailed proposal with timeline, deliverables, and pricing within 24 hours.',
      duration: '1 business day'
    },
    {
      step: '03',
      title: 'Development',
      description: 'We build your solution using AI-first development with regular progress updates.',
      duration: '1-4 weeks'
    },
    {
      step: '04',
      title: 'Review & Deploy',
      description: 'Final review, testing, and deployment to production with handover documentation.',
      duration: '2-3 days'
    }
  ]

  return (
    <div className="container py-16 space-y-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About SkyAero Studio
        </h1>
        <p className="text-xl text-foreground/80 leading-relaxed">
          We&apos;re an AI-first development studio that helps startups and businesses 
          ship investor-ready prototypes in 2-4 weeks. Our unique approach combines 
          human expertise with AI acceleration to deliver exceptional results fast.
        </p>
      </div>

      {/* Mission */}
      <section className="bg-muted p-12 rounded-xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-foreground/80 leading-relaxed">
            To democratize high-quality software development by making it faster, 
            more affordable, and more accessible through AI-first methodologies. 
            We believe every great idea deserves a great execution, regardless of 
            technical complexity or timeline constraints.
          </p>
        </div>
      </section>

      {/* Values */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-xl text-foreground/80">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value) => (
            <div key={value.title} className="border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-foreground/80">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
          <p className="text-xl text-foreground/80">
            Human expertise enhanced by AI capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <div className="w-32 h-32 bg-accent/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-accent text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-accent font-medium mb-4">{member.role}</p>
              <p className="text-foreground/80 mb-6">{member.bio}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {member.skills.map((skill) => (
                  <span key={skill} className="bg-muted px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How We Work</h2>
          <p className="text-xl text-foreground/80">
            A proven process that delivers results consistently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((phase) => (
            <div key={phase.step} className="text-center">
              <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                {phase.step}
              </div>
              <h3 className="text-xl font-bold mb-4">{phase.title}</h3>
              <p className="text-foreground/80 mb-3">{phase.description}</p>
              <p className="text-sm text-accent font-medium">{phase.duration}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-12">By the Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-4xl font-bold text-accent mb-2">25+</div>
            <div className="text-foreground/70">Projects Delivered</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">100%</div>
            <div className="text-foreground/70">On-Time Delivery</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">$10M+</div>
            <div className="text-foreground/70">Client Funding Raised</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">2.8</div>
            <div className="text-foreground/70">Average Weeks</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-accent/5 border border-accent/20 p-12 rounded-xl">
        <h2 className="text-3xl font-bold mb-4">Ready to work with us?</h2>
        <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
          Let&apos;s discuss your project and see how our AI-first approach 
          can help you ship faster and achieve your goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Start Your Project
          </Link>
          <Link
            href="/case-studies"
            className="border border-border px-8 py-4 rounded-lg font-semibold text-lg hover:bg-muted transition-colors"
          >
            View Our Work
          </Link>
        </div>
      </section>
    </div>
  )
}