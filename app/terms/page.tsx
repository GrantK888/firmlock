import Nav from "../components/Nav";
import Footer from "../sections/Footer";

export const metadata = {
  title: "Terms of Service — FirmLock",
  description: "The terms governing your use of FirmLock.",
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="container-x py-24 md:py-[96px] max-w-[760px]">
        <span className="inline-block mb-3 text-overline font-semibold uppercase text-action">
          Legal
        </span>
        <h1 className="font-serif font-bold text-h1 text-navy-900 mb-3 tracking-tight leading-[1.15]">
          Terms of Service
        </h1>
        <p className="text-slate-500 mb-12 text-sm">
          Effective Date: May 6, 2026 · Last Updated: May 6, 2026
        </p>

        <div className="prose-firmlock">
          <p>
            These Terms of Service (Terms) govern your access to and use of FirmLock (the Service), provided by Step Brands LLC (Step Brands, we, us, or our), a Nevada limited liability company located at 8635 W Sahara Ave., Suite 3223, Las Vegas, NV 89117.
          </p>

          <div className="my-8 p-5 border-l-4 border-action bg-action-soft rounded-r-[8px]">
            <p className="!mb-0 !text-navy-900 font-semibold">
              PLEASE READ THESE TERMS CAREFULLY. THEY INCLUDE A BINDING ARBITRATION CLAUSE AND CLASS ACTION WAIVER (SECTION 15) THAT AFFECT YOUR LEGAL RIGHTS.
            </p>
          </div>

          <p>
            By creating an account, accessing, or using FirmLock, you agree to be bound by these Terms. If you do not agree, do not use the Service.
          </p>

          <h2>1. Eligibility</h2>
          <p>
            You must be at least 18 years old (or the age of majority in your jurisdiction) and capable of entering into a binding contract to use the Service. By using FirmLock, you represent that you meet these requirements. If you are using the Service on behalf of a company or other entity, you represent that you have authority to bind that entity to these Terms, and you refers to that entity.
          </p>

          <h2>2. Accounts</h2>
          <p>To access most features, you must create an account. You agree to:</p>
          <ul>
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain the security and confidentiality of your login credentials</li>
            <li>Notify us promptly of any unauthorized access or security breach</li>
            <li>Accept responsibility for all activity that occurs under your account</li>
          </ul>
          <p>
            We may suspend or terminate accounts that violate these Terms or applicable law.
          </p>

          <h2>3. Free and Paid Plans</h2>
          <p>
            FirmLock offers a free tier and one or more paid subscription tiers. The features available at each tier are described on our website or within the Service and may change from time to time.
          </p>

          <h3>Free Trial</h3>
          <p>
            We may offer a free trial of paid features. Unless otherwise stated, your trial will automatically convert to a paid subscription at the end of the trial period, and your payment method will be charged at the then-current rate. You may cancel before the trial ends to avoid being charged.
          </p>

          <h3>Subscriptions and Auto-Renewal</h3>
          <p>
            Paid subscriptions are billed in advance on a monthly or annual basis, depending on the plan you select. Subscriptions automatically renew at the end of each billing period at the then-current rate, charged to your payment method on file, unless you cancel before the renewal date. You authorize us (and our payment processor) to charge your payment method for all applicable fees.
          </p>

          <h3>Cancellation</h3>
          <p>
            You may cancel your subscription at any time through your account settings. Cancellation takes effect at the end of the current billing period. You will continue to have access to paid features until then. We do not provide refunds or credits for partial billing periods, unused time, or downgrades, except as required by law.
          </p>

          <h3>Price Changes</h3>
          <p>
            We may change subscription prices. If we do, we will give you reasonable advance notice (typically at least 30 days) before the change applies to you. Continued use of the Service after the change takes effect constitutes acceptance of the new price.
          </p>

          <h3>Taxes</h3>
          <p>
            Fees do not include taxes. You are responsible for any applicable sales, use, VAT, or similar taxes, except for taxes based on our net income.
          </p>

          <h2>4. User Content</h2>
          <p>
            The Service allows you to create, upload, store, or share content (User Content). This may include text, files, images, data, and other materials.
          </p>

          <h3>Ownership</h3>
          <p>You retain all rights in your User Content. We do not claim ownership of it.</p>

          <h3>License to Us</h3>
          <p>
            By submitting User Content, you grant Step Brands a worldwide, non-exclusive, royalty-free license to host, store, reproduce, modify (for technical purposes such as formatting or compression), display, and transmit your User Content solely as necessary to operate, provide, and improve the Service. This license ends when you delete your User Content or your account, except to the extent retention is required by law or for backup purposes.
          </p>

          <h3>Your Responsibility</h3>
          <p>You are solely responsible for your User Content and represent that:</p>
          <ul>
            <li>You own it or have all necessary rights and permissions to submit it</li>
            <li>It does not violate any law or infringe any third party&apos;s rights</li>
            <li>It does not contain malware, viruses, or harmful code</li>
          </ul>
          <p>
            We are not obligated to monitor User Content but reserve the right to review, refuse, or remove content that violates these Terms or that we believe is otherwise objectionable.
          </p>

          <h3>Backups</h3>
          <p>
            While we take reasonable measures to back up data, you are responsible for maintaining your own backups of any User Content important to you. We are not liable for lost or corrupted data.
          </p>

          <h2>5. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Service for any unlawful purpose or in violation of any applicable law</li>
            <li>Infringe any patent, trademark, copyright, trade secret, or other intellectual property right</li>
            <li>Upload or transmit harmful code, viruses, malware, or any disruptive material</li>
            <li>Attempt to gain unauthorized access to the Service, other accounts, or our systems</li>
            <li>Reverse engineer, decompile, or disassemble any part of the Service, except as expressly permitted by law</li>
            <li>Scrape, crawl, or use automated tools to access the Service except via approved APIs</li>
            <li>Resell, sublicense, or commercially exploit the Service without our written permission</li>
            <li>Use the Service to harass, threaten, defame, or harm others</li>
            <li>Impersonate any person or entity or misrepresent your affiliation</li>
            <li>Interfere with or disrupt the Service or networks connected to it</li>
            <li>Circumvent any usage limits, rate limits, or technical restrictions</li>
          </ul>
          <p>We may suspend or terminate access for violations of this section.</p>

          <h2>6. Intellectual Property</h2>
          <p>
            The Service, including all software, designs, text, graphics, logos, and other materials (excluding User Content), is owned by Step Brands LLC or its licensors and protected by intellectual property laws. We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service in accordance with these Terms. No other rights are granted.
          </p>
          <p>
            FirmLock and the FirmLock logo are trademarks of Step Brands LLC. You may not use them without our prior written consent.
          </p>

          <h2>7. Feedback</h2>
          <p>
            If you provide suggestions, ideas, or feedback about the Service, we may use them without restriction or compensation to you. You grant us a perpetual, irrevocable, worldwide, royalty-free license to use, modify, and incorporate such feedback into the Service.
          </p>

          <h2>8. Third-Party Services</h2>
          <p>
            The Service may integrate with or contain links to third-party services. We are not responsible for third-party services and do not endorse them. Your use of third-party services is governed by their own terms and privacy policies.
          </p>

          <h2>9. Privacy</h2>
          <p>
            Your use of the Service is also governed by our{" "}
            <a href="/privacy">Privacy Policy</a>, which describes how we collect, use, and share your information.
          </p>

          <h2>10. Termination</h2>

          <h3>By You</h3>
          <p>
            You may terminate your account at any time by canceling through your account settings or contacting us.
          </p>

          <h3>By Us</h3>
          <p>We may suspend or terminate your access at any time, with or without notice, if:</p>
          <ul>
            <li>You breach these Terms</li>
            <li>We are required to do so by law</li>
            <li>Continuing to provide the Service to you creates risk to us or other users</li>
            <li>We discontinue the Service or any portion of it</li>
          </ul>

          <h3>Effect of Termination</h3>
          <p>
            Upon termination, your right to access the Service ends immediately. We may delete your User Content after termination, subject to any legal retention obligations. Sections that by their nature should survive (including ownership, disclaimers, limitations of liability, indemnification, and dispute resolution) will survive termination.
          </p>

          <h2>11. Disclaimers</h2>
          <p className="uppercase text-[13px] !leading-[1.7]">
            THE SERVICE IS PROVIDED AS IS AND AS AVAILABLE, WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING FROM COURSE OF DEALING OR USAGE OF TRADE.
          </p>
          <p className="uppercase text-[13px] !leading-[1.7]">
            WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR THAT ANY DEFECTS WILL BE CORRECTED. YOU USE THE SERVICE AT YOUR OWN RISK.
          </p>
          <p>
            Some jurisdictions do not allow the exclusion of certain warranties, so some of the above may not apply to you.
          </p>

          <h2>12. Limitation of Liability</h2>
          <p className="uppercase text-[13px] !leading-[1.7]">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL STEP BRANDS LLC, ITS AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOST DATA, OR LOSS OF GOODWILL, ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>
          <p className="uppercase text-[13px] !leading-[1.7]">
            OUR TOTAL CUMULATIVE LIABILITY ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICE WILL NOT EXCEED THE GREATER OF (A) THE AMOUNTS PAID BY YOU TO US FOR THE SERVICE IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY, OR (B) ONE HUNDRED U.S. DOLLARS ($100).
          </p>
          <p>
            These limitations apply regardless of the legal theory (contract, tort, statute, or otherwise) and even if a remedy fails of its essential purpose. Some jurisdictions do not allow these limitations, so they may not apply to you.
          </p>

          <h2>13. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Step Brands LLC and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys&apos; fees) arising out of or related to: (a) your use of the Service; (b) your User Content; (c) your violation of these Terms; or (d) your violation of any law or third-party right.
          </p>

          <h2>14. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of Nevada, without regard to its conflict-of-laws principles. Subject to the arbitration provisions below, the state and federal courts located in Clark County, Nevada have exclusive jurisdiction over any dispute not subject to arbitration.
          </p>

          <h2>15. Binding Arbitration and Class Action Waiver</h2>

          <div className="my-6 p-5 border-l-4 border-action bg-action-soft rounded-r-[8px]">
            <p className="!mb-0 !text-navy-900 font-semibold">
              PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT AND TO HAVE A JURY HEAR YOUR CLAIMS.
            </p>
          </div>

          <h3>Agreement to Arbitrate</h3>
          <p>
            You and Step Brands LLC agree that any dispute, claim, or controversy arising out of or relating to these Terms or the Service (Dispute) will be resolved by binding individual arbitration, rather than in court, except that you may bring claims in small claims court if your claims qualify.
          </p>

          <h3>Arbitration Rules</h3>
          <p>
            The arbitration will be administered by JAMS under its Streamlined Arbitration Rules and Procedures, then in effect. The arbitration will be conducted in Clark County, Nevada, or by video conference at the arbitrator&apos;s discretion. The arbitrator will have authority to award any relief that a court could award, but only on an individual basis.
          </p>

          <h3>Class Action Waiver</h3>
          <p className="uppercase text-[13px] !leading-[1.7]">
            YOU AND STEP BRANDS LLC AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN AN INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS, COLLECTIVE, OR REPRESENTATIVE ACTION.
          </p>
          <p>
            The arbitrator may not consolidate more than one person&apos;s claims and may not preside over any form of class proceeding. If this waiver is found unenforceable, then the entirety of this Section 15 is null and void.
          </p>

          <h3>30-Day Right to Opt Out</h3>
          <p>
            You may opt out of this arbitration agreement by sending a written notice to{" "}
            <a href="mailto:legal@firmlock.app">legal@firmlock.app</a> within 30 days of first accepting these Terms. The notice must include your name, account email, and a clear statement that you wish to opt out. Opting out will not affect any other provisions of these Terms.
          </p>

          <h3>Exceptions</h3>
          <p>
            Nothing in this section prevents either party from seeking injunctive or other equitable relief in court to protect intellectual property rights or to address unauthorized access to the Service.
          </p>

          <h3>Federal Arbitration Act</h3>
          <p>This arbitration agreement is governed by the Federal Arbitration Act.</p>

          <h2>16. Changes to These Terms</h2>
          <p>
            We may modify these Terms from time to time. If we make material changes, we will notify you by email or through a prominent notice in the Service at least 30 days before the changes take effect. Your continued use of the Service after the effective date constitutes acceptance of the updated Terms. If you do not agree, you must stop using the Service.
          </p>

          <h2>17. Miscellaneous</h2>
          <ul>
            <li><strong>Entire Agreement.</strong> These Terms, together with the Privacy Policy and any other documents incorporated by reference, constitute the entire agreement between you and Step Brands LLC regarding the Service.</li>
            <li><strong>Severability.</strong> If any provision is held unenforceable, the remaining provisions will continue in full force.</li>
            <li><strong>No Waiver.</strong> Our failure to enforce any provision is not a waiver of that provision.</li>
            <li><strong>Assignment.</strong> You may not assign these Terms without our written consent. We may assign these Terms freely.</li>
            <li><strong>Force Majeure.</strong> We are not liable for failures or delays caused by events beyond our reasonable control.</li>
            <li><strong>Notices.</strong> We may provide notices to you by email, through the Service, or by posting on our website. You may send notices to us at the address below.</li>
            <li><strong>Relationship.</strong> Nothing in these Terms creates an agency, partnership, or joint venture between you and Step Brands LLC.</li>
          </ul>

          <h2>18. Contact Us</h2>
          <p>
            If you have questions about these Terms, please contact us at:
          </p>
          <p>
            <strong>Step Brands LLC</strong><br />
            Attn: Legal<br />
            8635 W Sahara Ave., Suite 3223<br />
            Las Vegas, NV 89117<br />
            Email: <a href="mailto:legal@firmlock.app">legal@firmlock.app</a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}