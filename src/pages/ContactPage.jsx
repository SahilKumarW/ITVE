import React from 'react';
    import Section from '@/components/Section';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Textarea } from '@/components/ui/textarea';
    import { Phone, Mail, MapPin, UserCircle, Building, Briefcase, MessageSquare, Navigation } from 'lucide-react';
    import { motion } from 'framer-motion';
    import { cn } from '@/lib/utils';

    const campusLocations = [
      {
        name: "ITVE-NED Main Campus",
        address: "Main University Road, Adjacent to NED University, Karachi, Sindh 75270, Pakistan",
        phone: "+92 21 9926 1261",
        email: "nedcampus@itve.edu.pk",
        mapLink: "https://www.openstreetmap.org/?mlat=24.9382&mlon=67.1126#map=16/24.9382/67.1126",
        imageName: "ITVE NED Campus modern building exterior with students walking",
        description: "Our flagship campus, equipped with state-of-the-art labs and learning facilities for a wide range of technical programs."
      },
      {
        name: "ITVE-DAWOOD City Campus",
        address: "M. A. Jinnah Road, Near Dawood University, Karachi, Sindh 74800, Pakistan",
        phone: "+92 21 9923 0307",
        email: "dawoodcampus@itve.edu.pk",
        mapLink: "https://www.openstreetmap.org/?mlat=24.8668&mlon=67.0261#map=17/24.8668/67.0261",
        imageName: "ITVE Dawood Campus main entrance archway with garden",
        description: "Located in the heart of the city, this campus specializes in design, media, and business-related vocational courses."
      },
    ];

    const leadershipContacts = [
      { name: "Muhammad Talha Nawaz", role: "President", email: "president.office@itve.edu.pk", phone: "+92 21 3456 7890", icon: <UserCircle className="h-8 w-8 text-itve-blue" /> },
      { name: "Mr. Sahil", role: "Chief Administrator", email: "chief.administrator@itve.edu.pk", phone: "+92 21 3456 7891", icon: <Building className="h-8 w-8 text-itve-blue" /> },
      { name: "Mr. Muhammad Osama", role: "Head of Academics", email: "academics@itve.edu.pk", phone: "+92 21 3456 7892", icon: <Briefcase className="h-8 w-8 text-itve-blue" /> },
      { name: "Ms. Haashi", role: "Chief Financial Officer", email: "cfo@itve.edu.pk", phone: "+92 21 3456 7893", icon: <UserCircle className="h-8 w-8 text-itve-blue" /> },
    ];
    

    const ContactPage = () => {
      const handleSubmit = (e) => {
        e.preventDefault();
        // For a real application, you would handle form submission here (e.g., send data to a backend API)
        // For this example, we'll just use a browser alert.
        alert("Thank you for your message! We will get back to you as soon as possible.");
        e.target.reset(); // Reset form fields
      };

      return (
        <div className="animate-fade-in">
          <Section 
            title="Get In Touch With ITVE" 
            subtitle="We're here to help and answer any question you might have. Whether you're a prospective student, partner, or just curious, we look forward to hearing from you."
          >
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Form - takes more space */}
              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-6 md:p-8 shadow-xl rounded-lg bg-itve-white border border-itve-blue-light">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center mb-2">
                        <MessageSquare className="h-8 w-8 mr-3 text-itve-blue"/>
                        <CardTitle className="text-3xl text-itve-blue-dark">Send Us a Message</CardTitle>
                    </div>
                    <CardDescription className="text-itve-gray-dark">Fill out the form below, and our team will get back to you promptly.</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name" className="text-itve-gray-dark font-semibold">Full Name</Label>
                          <Input id="name" type="text" placeholder="e.g., John Doe" required className="mt-1 border-itve-gray focus:border-itve-blue focus:ring-itve-blue rounded-md" />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-itve-gray-dark font-semibold">Email Address</Label>
                          <Input id="email" type="email" placeholder="e.g., john.doe@example.com" required className="mt-1 border-itve-gray focus:border-itve-blue focus:ring-itve-blue rounded-md" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-itve-gray-dark font-semibold">Phone Number (Optional)</Label>
                        <Input id="phone" type="tel" placeholder="e.g., +92 300 1234567" className="mt-1 border-itve-gray focus:border-itve-blue focus:ring-itve-blue rounded-md" />
                      </div>
                      <div>
                        <Label htmlFor="subject" className="text-itve-gray-dark font-semibold">Subject</Label>
                        <Input id="subject" type="text" placeholder="e.g., Inquiry about AI Course" required className="mt-1 border-itve-gray focus:border-itve-blue focus:ring-itve-blue rounded-md" />
                      </div>
                      <div>
                        <Label htmlFor="message" className="text-itve-gray-dark font-semibold">Your Message</Label>
                        <Textarea id="message" placeholder="Please type your detailed message here..." rows={6} required className="mt-1 border-itve-gray focus:border-itve-blue focus:ring-itve-blue rounded-md" />
                      </div>
                      <Button type="submit" size="lg" className="w-full bg-itve-blue hover:bg-itve-blue-dark text-itve-white text-lg py-3 rounded-md transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                        Send Message <Navigation className="ml-2 h-5 w-5"/>
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information - takes less space */}
              <motion.div 
                className="lg:col-span-2 space-y-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="p-6 shadow-lg rounded-lg bg-gradient-to-br from-itve-blue to-itve-blue-dark text-itve-white transform hover:scale-105 transition-transform duration-300">
                  <CardHeader className="p-0 mb-3">
                    <CardTitle className="text-xl flex items-center">
                      <Phone className="h-6 w-6 mr-3" /> General Inquiries
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 opacity-90">
                    <p><span className="font-semibold">Phone:</span> <a href="tel:+9221111488338" className="hover:underline">+92 21 111 ITVE (4883)</a></p>
                    <p><span className="font-semibold">Email:</span> <a href="mailto:info@itve.edu.pk" className="hover:underline">info@itve.edu.pk</a></p>
                    <p className="mt-2"><span className="font-semibold">Operating Hours:</span> Mon - Fri, 9:00 AM - 5:00 PM (PKT)</p>
                  </CardContent>
                </Card>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-itve-blue-dark">Key Contacts</h3>
                  <div className="space-y-4">
                    {leadershipContacts.map((contact, index) => (
                      <Card key={index} className="p-4 shadow-md rounded-lg bg-itve-white hover:shadow-lg transition-shadow border border-itve-blue-light">
                        <div className="flex items-start space-x-3">
                          <div className="p-2 bg-itve-blue-light rounded-full mt-1">{contact.icon}</div>
                          <div>
                            <p className="font-semibold text-itve-blue-dark">{contact.name}</p>
                            <p className="text-sm text-itve-blue font-medium">{contact.role}</p>
                            <a href={`mailto:${contact.email}`} className="text-xs text-itve-gray-dark hover:text-itve-blue hover:underline block">{contact.email}</a>
                            <a href={`tel:${contact.phone}`} className="text-xs text-itve-gray-dark hover:text-itve-blue hover:underline block">{contact.phone}</a>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </Section>
          
          <Section title="Our Campus Locations" subtitle="Visit us at any of our state-of-the-art campus locations. We welcome visitors and prospective students for tours." className="bg-itve-gray-light rounded-lg">
            <div className="grid md:grid-cols-2 gap-8">
              {campusLocations.map((campus, index) => (
                <motion.div
                  key={campus.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <Card className="overflow-hidden shadow-xl rounded-lg h-full flex flex-col transform hover:-translate-y-1 transition-transform duration-300 bg-itve-white border border-itve-blue-light">
                     <img  className="w-full h-56 object-cover" alt={campus.imageName} src="https://images.unsplash.com/photo-1677730277400-097e5da58a56" />
                    <CardHeader className="p-6">
                      <CardTitle className="text-2xl text-itve-blue-dark">{campus.name}</CardTitle>
                      <CardDescription className="text-itve-gray-dark pt-1">{campus.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 pt-0 flex-grow">
                      <div className="space-y-2 text-itve-gray-dark">
                        <p className="flex items-start"><MapPin className="h-5 w-5 mr-2 mt-1 text-itve-blue flex-shrink-0" /> {campus.address}</p>
                        <p className="flex items-center"><Phone className="h-5 w-5 mr-2 text-itve-blue" /> <a href={`tel:${campus.phone}`} className="hover:text-itve-blue hover:underline">{campus.phone}</a></p>
                        <p className="flex items-center"><Mail className="h-5 w-5 mr-2 text-itve-blue" /> <a href={`mailto:${campus.email}`} className="hover:text-itve-blue hover:underline">{campus.email}</a></p>
                      </div>
                    </CardContent>
                    <CardContent className="p-6 pt-0 border-t border-itve-gray-light mt-auto">
                       <Button asChild variant="outline" className="w-full mt-4 border-itve-blue text-itve-blue hover:bg-itve-blue hover:text-white transition-colors duration-300">
                         <a href={campus.mapLink} target="_blank" rel="noopener noreferrer">View on Map <Navigation className="ml-2 h-4 w-4"/></a>
                       </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{once: true}}
              transition={{duration:0.5, delay:0.3}}
            >
              <h3 className="text-2xl font-semibold text-itve-blue-dark mb-3">Interested in a Campus Tour?</h3>
              <p className="text-itve-gray-dark mb-6 max-w-xl mx-auto">We'd love to show you around! Experience ITVE firsthand and see our facilities, meet faculty, and learn more about our programs. Schedule your personalized tour today.</p>
              <Button size="lg" className="bg-itve-blue hover:bg-itve-blue-dark text-itve-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Schedule a Campus Tour
              </Button>
            </motion.div>
          </Section>
        </div>
      );
    };

    export default ContactPage;