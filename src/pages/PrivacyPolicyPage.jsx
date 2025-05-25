import React from 'react';
    import Section from '@/components/Section';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { motion } from 'framer-motion';
    import { Shield, FileText, Database, UserCheck, MailWarning } from 'lucide-react';

    const PrivacyPolicyPage = () => {
      const lastUpdated = "May 24, 2025";

      return (
        <div className="animate-fade-in">
          <Section 
            title="Privacy Policy" 
            subtitle={`Our commitment to your privacy. Last Updated: ${lastUpdated}`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-6 md:p-8 shadow-xl rounded-lg bg-itve-white border border-itve-blue-light">
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center mb-2">
                    <Shield className="h-10 w-10 mr-4 text-itve-blue"/>
                    <CardTitle className="text-3xl text-itve-blue-dark">ITVE Privacy Policy</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0 space-y-6 text-itve-gray-dark leading-relaxed">
                  <p>
                    The Institute of Technical & Vocational Education ("ITVE", "we", "us", or "our") is committed to protecting the privacy of individuals who interact with our website, programs, and services. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information.
                  </p>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-itve-blue-dark flex items-center"><FileText className="h-6 w-6 mr-2 text-itve-blue"/>Information We Collect</h2>
                    <p>We may collect personal information from you in various ways, including:</p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                      <li><strong>Information you provide directly:</strong> This includes information you submit when you apply for courses, register for events, subscribe to our newsletter, contact us, or use our student portal (e.g., name, email address, phone number, date of birth, educational background, payment information).</li>
                      <li><strong>Information collected automatically:</strong> When you visit our website, we may collect certain information automatically from your device, such as your IP address, browser type, operating system, referring URLs, pages viewed, and access times. We may use cookies and similar tracking technologies for this purpose.</li>
                      <li><strong>Information from third parties:</strong> We may receive information about you from third-party sources, such as educational partners, payment processors, or public databases, in compliance with applicable laws.</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-itve-blue-dark flex items-center"><Database className="h-6 w-6 mr-2 text-itve-blue"/>How We Use Your Information</h2>
                    <p>We use the collected information for various purposes, including:</p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                      <li>To provide, operate, and maintain our educational programs and services.</li>
                      <li>To process applications, enrollments, and payments.</li>
                      <li>To communicate with you about your account, our services, updates, and promotional offers (with your consent where required).</li>
                      <li>To personalize and improve your experience on our website and services.</li>
                      <li>To respond to your inquiries, comments, and requests for support.</li>
                      <li>For research, analytics, and to improve our offerings and operations.</li>
                      <li>To comply with legal obligations and enforce our terms and policies.</li>
                      <li>To protect the security and integrity of our systems and users.</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-itve-blue-dark flex items-center"><UserCheck className="h-6 w-6 mr-2 text-itve-blue"/>Data Sharing and Disclosure</h2>
                    <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                      <li>With service providers and partners who assist us in operating our services (e.g., payment processors, IT support, marketing agencies), under confidentiality agreements.</li>
                      <li>With educational partners or accreditation bodies as necessary for program delivery and recognition.</li>
                      <li>If required by law, regulation, or legal process, or to respond to lawful requests from public authorities.</li>
                      <li>To protect our rights, privacy, safety, or property, and/or that of our affiliates, you, or others.</li>
                      <li>In connection with a merger, acquisition, financing, or sale of assets, where personal information may be transferred as part of the transaction (we will notify you of such changes).</li>
                      <li>With your consent or at your direction.</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-itve-blue-dark">Your Data Rights and Choices</h2>
                    <p>Depending on your jurisdiction, you may have certain rights regarding your personal information, such as:</p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                      <li>The right to access, correct, or update your personal information.</li>
                      <li>The right to request deletion of your personal information, subject to certain exceptions.</li>
                      <li>The right to object to or restrict certain processing of your information.</li>
                      <li>The right to withdraw consent (where processing is based on consent).</li>
                      <li>The right to data portability.</li>
                      <li>The right to opt-out of marketing communications.</li>
                    </ul>
                    <p>To exercise these rights, please contact us using the information provided below.</p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-itve-blue-dark">Data Security</h2>
                    <p>We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, use, alteration, or destruction. However, no internet-based site can be 100% secure, so we cannot guarantee absolute security.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-itve-blue-dark">Cookies and Tracking Technologies</h2>
                    <p>Our website uses cookies and similar technologies to enhance user experience, analyze site traffic, and for marketing purposes. You can control cookies through your browser settings. For more information, please see our Cookie Policy (if applicable, or integrate here).</p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-itve-blue-dark">Children's Privacy</h2>
                    <p>Our services are not directed to individuals under the age of 16 (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children without parental consent. If we become aware that we have collected personal information from a child without verification of parental consent, we will take steps to remove that information.</p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-itve-blue-dark">Changes to This Privacy Policy</h2>
                    <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new Privacy Policy on our website and updating the "Last Updated" date. We encourage you to review this policy periodically.</p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-itve-blue-dark flex items-center"><MailWarning className="h-6 w-6 mr-2 text-itve-blue"/>Contact Us</h2>
                    <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:</p>
                    <p>
                      Data Protection Officer<br />
                      Institute of Technical & Vocational Education (ITVE)<br />
                      123 Education Lane, Karachi, Pakistan 12345<br />
                      Email: <a href="mailto:privacy@itve.edu.pk" className="text-itve-blue hover:underline">privacy@itve.edu.pk</a><br />
                      Phone: <a href="tel:+922134567899" className="text-itve-blue hover:underline">+92 21 3456 7899</a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </Section>
        </div>
      );
    };

    export default PrivacyPolicyPage;