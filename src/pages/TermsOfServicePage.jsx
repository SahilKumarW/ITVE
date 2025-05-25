import React from 'react';
    import Section from '@/components/Section';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { motion } from 'framer-motion';
    import { Gavel, FileCheck2, UserCog, Ban, ShieldAlert } from 'lucide-react';

    const TermsOfServicePage = () => {
      const lastUpdated = "May 24, 2025";

      return (
        <div className="animate-fade-in">
          <Section 
            title="Terms of Service" 
            subtitle={`Please read these terms carefully. Last Updated: ${lastUpdated}`}
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
                    <Gavel className="h-10 w-10 mr-4 text-itve-blue"/>
                    <CardTitle className="text-3xl text-itve-blue-dark">ITVE Terms of Service</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0 space-y-6 text-itve-gray-dark leading-relaxed">
                  <p>
                    Welcome to the Institute of Technical & Vocational Education ("ITVE", "we", "us", or "our"). These Terms of Service ("Terms") govern your access to and use of our website, courses, student portal, and any other services offered by ITVE (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
                  </p>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-itve-blue-dark flex items-center"><FileCheck2 className="h-6 w-6 mr-2 text-itve-blue"/>1. Acceptance of Terms</h2>
                    <p>By creating an account, enrolling in a course, or otherwise using our Services, you affirm that you are at least 18 years of age or have obtained parental/guardian consent to use the Services and agree to these Terms. If you do not agree to these Terms, you may not use our Services.</p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-itve-blue-dark flex items-center"><UserCog className="h-6 w-6 mr-2 text-itve-blue"/>2. User Accounts and Responsibilities</h2>
                    <p><strong>Account Creation:</strong> To access certain features of our Services, such as the student portal or course enrollment, you may need to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>
                    <p><strong>Account Security:</strong> You are responsible for safeguarding your account password and for any activities or actions under your account. You agree to notify ITVE immediately of any unauthorized use of your account.</p>
                    <p><strong>Student Conduct:</strong> You agree to abide by ITVE's student code of conduct, academic integrity policies, and any other applicable rules and regulations provided to you. Prohibited conduct includes, but is not limited to, cheating, plagiarism, harassment, and disruptive behavior.</p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-itve-blue-dark">3. Course Enrollment and Payments</h2>
                    <p><strong>Enrollment:</strong> Enrollment in ITVE courses is subject to availability and meeting any specified prerequisites. We reserve the right to accept or reject any application for enrollment.</p>
                    <p><strong>Fees and Payments:</strong> You agree to pay all applicable fees for courses and services you select, as described on our website or in other enrollment materials. All fees are non-refundable except as explicitly stated in our Refund Policy (if any) or as required by applicable law. Payment methods and terms will be specified at the time of purchase.</p>
                    <p><strong>Changes to Courses:</strong> ITVE reserves the right to modify, cancel, or reschedule courses or programs. We will provide reasonable notice of any such changes to enrolled students.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-itve-blue-dark">4. Intellectual Property</h2>
                    <p>All content provided through the Services, including but not limited to course materials, text, graphics, logos, images, software, and audiovisual content (collectively, "ITVE Content"), is the property of ITVE or its licensors and is protected by copyright, trademark, and other intellectual property laws.</p>
                    <p><strong>License:</strong> ITVE grants you a limited, non-exclusive, non-transferable, revocable license to access and use the ITVE Content solely for your personal, non-commercial educational purposes in connection with the Services. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the ITVE Content without our prior written consent, except as follows: your computer may temporarily store copies of such materials incidental to your accessing and viewing those materials.</p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-itve-blue-dark flex items-center"><Ban className="h-6 w-6 mr-2 text-itve-blue"/>5. Prohibited Uses</h2>
                    <p>You agree not to use the Services:</p>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                      <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
                      <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
                      <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent.</li>
                      <li>To impersonate or attempt to impersonate ITVE, an ITVE employee, another user, or any other person or entity.</li>
                      <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services, or which, as determined by us, may harm ITVE or users of the Services or expose them to liability.</li>
                      <li>To share your account credentials or allow others to access your account or enrolled courses.</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-itve-blue-dark">6. Disclaimer of Warranties</h2>
                    <p>THE SERVICES AND ALL ITVE CONTENT ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. ITVE DISCLAIMS ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE. ITVE DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-itve-blue-dark flex items-center"><ShieldAlert className="h-6 w-6 mr-2 text-itve-blue"/>7. Limitation of Liability</h2>
                    <p>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL ITVE, ITS AFFILIATES, LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SERVICES, ANY WEBSITES LINKED TO IT, ANY ITVE CONTENT OR OTHER CONTENT ON THE SERVICES OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE.</p>
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-itve-blue-dark">8. Indemnification</h2>
                    <p>You agree to defend, indemnify, and hold harmless ITVE, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Services.</p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-itve-blue-dark">9. Governing Law and Jurisdiction</h2>
                    <p>All matters relating to the Services and these Terms, and any dispute or claim arising therefrom or related thereto, shall be governed by and construed in accordance with the internal laws of Pakistan without giving effect to any choice or conflict of law provision or rule. Any legal suit, action, or proceeding arising out of, or related to, these Terms or the Services shall be instituted exclusively in the courts of Karachi, Pakistan.</p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-itve-blue-dark">10. Changes to Terms of Service</h2>
                    <p>We may revise and update these Terms from time to time in our sole discretion. All changes are effective immediately when we post them and apply to all access to and use of the Services thereafter. Your continued use of the Services following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you.</p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-itve-blue-dark">11. Contact Information</h2>
                    <p>If you have any questions about these Terms of Service, please contact us at:</p>
                    <p>
                      Legal Department<br />
                      Institute of Technical & Vocational Education (ITVE)<br />
                      123 Education Lane, Karachi, Pakistan 12345<br />
                      Email: <a href="mailto:legal@itve.edu.pk" className="text-itve-blue hover:underline">legal@itve.edu.pk</a><br />
                      Phone: <a href="tel:+922134567898" className="text-itve-blue hover:underline">+92 21 3456 7898</a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </Section>
        </div>
      );
    };

    export default TermsOfServicePage;