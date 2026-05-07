import Nav from "../components/Nav";
import Footer from "../sections/Footer";

export const metadata = {
  title: "Privacy Policy — FirmLock",
  description: "How FirmLock collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="container-x py-24 md:py-[96px] max-w-[760px]">
        <span className="inline-block mb-3 text-overline font-semibold uppercase text-action">
          Legal
        </span>
        <h1 className="font-serif font-bold text-h1 text-navy-900 mb-3 tracking-tight leading-[1.15]">
          Privacy Policy
        </h1>
        <p className="text-slate-500 mb-12 text-sm">
          Effective Date: May 6, 2026 · Last Updated: May 6, 2026
        </p>

        <div className="prose-firmlock">
          <p>
            This Privacy Policy describes how Step Brands LLC (Step Brands, we, us, or our) collects, uses, and shares information about you when you use FirmLock (the Service), our website, and related services.
          </p>
          <p>
            If you have any questions or concerns about this Policy, please contact us at the address listed at the end.
          </p>

          <h2>1. Who We Are</h2>
          <p>
            FirmLock is operated by Step Brands LLC, a Nevada limited liability company located at 8635 W Sahara Ave., Suite 3223, Las Vegas, NV 89117. Step Brands LLC is the data controller for personal information collected through the Service.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We collect information in the following ways:</p>

          <h3>Information You Provide to Us</h3>
          <ul>
            <li><strong>Account Information.</strong> When you register for FirmLock, we collect your name, email address, password, company name, and other details necessary to create and maintain your account.</li>
            <li><strong>Billing Information.</strong> When you subscribe to a paid plan, we collect billing details such as your name, billing address, and payment card information. Payment card details are processed by our third-party payment processor (e.g., Stripe) and are not stored on our servers.</li>
            <li><strong>Communications.</strong> If you contact us for support or other inquiries, we retain a record of your message and our response.</li>
            <li><strong>Marketing Preferences.</strong> If you opt in to marketing communications, we collect your email address and any preferences you indicate.</li>
          </ul>

          <h3>Information We Collect Automatically</h3>
          <ul>
            <li><strong>Usage Data.</strong> We collect information about how you interact with the Service, including pages visited, features used, time spent, and click patterns.</li>
            <li><strong>Device and Log Data.</strong> We collect IP address, browser type, operating system, device identifiers, referring URLs, and timestamps.</li>
            <li><strong>Cookies and Similar Technologies.</strong> We use cookies, web beacons, and similar technologies to operate the Service, remember your preferences, and analyze usage. See Section 7 for details.</li>
          </ul>

          <h3>Information from Third Parties</h3>
          <p>
            We may receive information about you from third parties such as analytics providers (e.g., Google Analytics), payment processors, and authentication services if you sign in via a third-party account.
          </p>

          <h2>3. How We Use Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, operate, maintain, and improve the Service</li>
            <li>Process payments and manage subscriptions</li>
            <li>Authenticate users and protect against fraud, abuse, and security risks</li>
            <li>Communicate with you about your account, transactions, and customer support</li>
            <li>Send marketing emails and product updates (where you have opted in or as otherwise permitted by law)</li>
            <li>Analyze usage trends and develop new features</li>
            <li>Comply with legal obligations and enforce our terms</li>
          </ul>

          <h2>4. How We Share Information</h2>
          <p>
            We do not sell your personal information. We share information only as described below:
          </p>
          <ul>
            <li><strong>Service Providers.</strong> We share information with vendors who help us operate the Service, including hosting providers, payment processors (e.g., Stripe), email service providers, customer support platforms, and analytics providers (e.g., Google Analytics). These providers are contractually required to protect your information.</li>
            <li><strong>Legal and Safety.</strong> We may disclose information if required by law, subpoena, or court order, or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others.</li>
            <li><strong>Business Transfers.</strong> If Step Brands LLC is involved in a merger, acquisition, financing, or sale of assets, your information may be transferred as part of that transaction.</li>
            <li><strong>With Your Consent.</strong> We may share information with third parties when you direct us to.</li>
          </ul>

          <h2>5. Your Privacy Rights</h2>
          <p>
            Depending on where you live, you may have certain rights regarding your personal information.
          </p>

          <h3>For California Residents (CCPA/CPRA)</h3>
          <p>If you are a California resident, you have the right to:</p>
          <ul>
            <li><strong>Know</strong> what personal information we collect, use, disclose, and sell or share</li>
            <li><strong>Access</strong> a copy of the personal information we have collected about you</li>
            <li><strong>Delete</strong> personal information we have collected, subject to certain exceptions</li>
            <li><strong>Correct</strong> inaccurate personal information</li>
            <li><strong>Opt out</strong> of the sale or sharing of your personal information (we do not sell personal information, but some analytics and advertising cookies may qualify as sharing under California law)</li>
            <li><strong>Limit</strong> the use of sensitive personal information</li>
            <li><strong>Non-discrimination</strong> for exercising your rights</li>
          </ul>
          <p>
            To exercise these rights, contact us at the address below. We will verify your identity before processing your request. You may also designate an authorized agent to make a request on your behalf.
          </p>
          <p>
            <strong>Categories of personal information collected in the past 12 months:</strong> identifiers (name, email, IP address), commercial information (subscription details), internet activity (usage data), and inferences drawn from the above.
          </p>

          <h3>For Residents of the European Economic Area, United Kingdom, and Switzerland (GDPR/UK GDPR)</h3>
          <p>If you are located in the EEA, UK, or Switzerland, you have the right to:</p>
          <ul>
            <li><strong>Access</strong> your personal data</li>
            <li><strong>Rectify</strong> inaccurate or incomplete data</li>
            <li><strong>Erase</strong> your data (the right to be forgotten)</li>
            <li><strong>Restrict</strong> or <strong>object to</strong> processing</li>
            <li><strong>Data portability</strong> (receive your data in a machine-readable format)</li>
            <li><strong>Withdraw consent</strong> at any time, where processing is based on consent</li>
            <li><strong>Lodge a complaint</strong> with your local data protection authority</li>
          </ul>
          <p>
            <strong>Legal bases for processing.</strong> We rely on the following legal bases under the GDPR: (a) performance of a contract (to provide the Service); (b) legitimate interests (to operate, secure, and improve the Service); (c) consent (for marketing and certain cookies); and (d) compliance with legal obligations.
          </p>
          <p>
            <strong>International transfers.</strong> Personal data may be transferred to and processed in the United States and other countries that may have different data protection laws than your country. Where required, we use appropriate safeguards such as Standard Contractual Clauses approved by the European Commission.
          </p>
          <p>To exercise any of these rights, contact us using the details below.</p>

          <h2>6. Data Retention</h2>
          <p>
            We retain personal information for as long as necessary to provide the Service, comply with legal obligations, resolve disputes, and enforce our agreements. When information is no longer needed, we will delete or anonymize it. Specific retention periods vary by data type and purpose.
          </p>

          <h2>7. Cookies and Tracking</h2>
          <p>We use cookies and similar technologies for the following purposes:</p>
          <ul>
            <li><strong>Essential cookies:</strong> required for the Service to function (e.g., authentication, security)</li>
            <li><strong>Analytics cookies:</strong> help us understand how the Service is used (e.g., Google Analytics)</li>
            <li><strong>Preference cookies:</strong> remember your settings and preferences</li>
          </ul>
          <p>
            You can control cookies through your browser settings or, where available, through our cookie consent tool. Disabling certain cookies may limit functionality. To opt out of Google Analytics, you can install the Google Analytics Opt-Out Browser Add-on at{" "}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
              tools.google.com/dlpage/gaoptout
            </a>.
          </p>
          <p>
            We do not currently respond to Do Not Track browser signals, but we honor opt-out requests submitted through our consent tool or by contacting us directly.
          </p>

          <h2>8. Marketing Communications</h2>
          <p>
            If you have opted in to marketing emails, we will send you product updates, promotions, and other communications. You can unsubscribe at any time by clicking the unsubscribe link in any marketing email or by contacting us. Even if you opt out of marketing, we will still send you transactional and account-related messages.
          </p>

          <h2>9. Data Security</h2>
          <p>
            We implement reasonable administrative, technical, and physical safeguards designed to protect your information against unauthorized access, disclosure, alteration, and destruction. However, no system is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>10. Children&apos;s Privacy</h2>
          <p>
            FirmLock is not directed to children under 16, and we do not knowingly collect personal information from children under 16. If we learn we have collected such information, we will delete it. If you believe a child has provided us with personal information, please contact us.
          </p>

          <h2>11. Third-Party Links and Services</h2>
          <p>
            The Service may contain links to third-party websites or integrate with third-party services. This Policy does not apply to those third parties. We encourage you to review their privacy policies before sharing information with them.
          </p>

          <h2>12. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email or through a prominent notice on the Service prior to the change taking effect. The Last Updated date at the top reflects the most recent revision.
          </p>

          <h2>13. Contact Us</h2>
          <p>
            If you have questions, concerns, or requests regarding this Policy or your personal information, please contact us at:
          </p>
          <p>
            <strong>Step Brands LLC</strong><br />
            Attn: Privacy<br />
            8635 W Sahara Ave., Suite 3223<br />
            Las Vegas, NV 89117<br />
            Email: <a href="mailto:privacy@firmlock.app">privacy@firmlock.app</a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}