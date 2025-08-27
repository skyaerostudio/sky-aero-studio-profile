export default function TermsPage() {
  return (
    <div className="container py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose prose-lg max-w-none space-y-8">
        <p className="text-foreground/80 text-lg">
          <strong>Last updated:</strong> August 27, 2025
        </p>

        <section>
          <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
          <p className="text-foreground/80">
            By accessing and using SkyAero Studio's services, you accept and agree to be 
            bound by the terms and provision of this agreement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Services Description</h2>
          <p className="text-foreground/80 mb-4">
            SkyAero Studio provides AI-first software development services including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80">
            <li>Rapid prototype development</li>
            <li>Full-stack application development</li>
            <li>AI integration and implementation</li>
            <li>Technical consulting and advisory services</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Project Terms</h2>
          <h3 className="text-xl font-semibold mb-3">Timeline and Delivery</h3>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
            <li>Project timelines are estimates based on provided requirements</li>
            <li>Changes to scope may affect timeline and cost</li>
            <li>We provide regular updates throughout development</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">Payment Terms</h3>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80">
            <li>50% deposit required to begin work</li>
            <li>Remaining balance due upon project completion</li>
            <li>Additional work outside original scope billed separately</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
          <p className="text-foreground/80 mb-4">
            Upon full payment, you will own the code and intellectual property created 
            specifically for your project, excluding:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80">
            <li>Third-party libraries and frameworks</li>
            <li>Our proprietary tools and methodologies</li>
            <li>General knowledge and techniques</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Confidentiality</h2>
          <p className="text-foreground/80">
            We treat all client information and project details as confidential. 
            We will not disclose your business information to third parties without 
            your explicit consent, except as required by law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Limitations of Liability</h2>
          <p className="text-foreground/80">
            Our liability is limited to the amount paid for services. We are not 
            liable for indirect, incidental, or consequential damages arising from 
            the use of our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Termination</h2>
          <p className="text-foreground/80">
            Either party may terminate the agreement with written notice. In case of 
            termination, payment is due for work completed up to the termination date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="text-foreground/80">
            For questions about these terms, please contact us:
          </p>
          <div className="bg-muted p-4 rounded-lg mt-4">
            <p className="text-foreground/80">
              <strong>Email:</strong> legal@skyaero.studio<br/>
              <strong>Address:</strong> SkyAero Studio, [Your Address]
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}