export default function PrivacyPage() {
  return (
    <div className="container py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg max-w-none space-y-8">
        <p className="text-foreground/80 text-lg">
          <strong>Last updated:</strong> August 27, 2025
        </p>

        <section>
          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          <p className="text-foreground/80 mb-4">
            We collect information you provide directly to us, such as when you fill out our contact form, 
            request a consultation, or communicate with us via email or other channels.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80">
            <li>Name and contact information (email, phone number)</li>
            <li>Company name and job title</li>
            <li>Project details and requirements</li>
            <li>Communication preferences</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
          <p className="text-foreground/80 mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80">
            <li>Respond to your inquiries and provide project proposals</li>
            <li>Communicate with you about your projects</li>
            <li>Send you updates about our services (with your consent)</li>
            <li>Improve our website and services</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
          <p className="text-foreground/80">
            We do not sell, trade, or rent your personal information to third parties. 
            We may share your information only in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80 mt-4">
            <li>With your explicit consent</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and safety</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Data Security</h2>
          <p className="text-foreground/80">
            We implement appropriate security measures to protect your personal information 
            against unauthorized access, alteration, disclosure, or destruction. However, 
            no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
          <p className="text-foreground/80 mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80">
            <li>Access and review your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt out of marketing communications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-foreground/80">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="bg-muted p-4 rounded-lg mt-4">
            <p className="text-foreground/80">
              <strong>Email:</strong> privacy@skyaero.studio<br/>
              <strong>Address:</strong> SkyAero Studio, [Your Address]
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}