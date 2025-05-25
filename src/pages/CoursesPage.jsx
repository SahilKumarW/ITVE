import React from 'react';
    import { Link } from 'react-router-dom';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import Section from '@/components/Section';
    import {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuGroup,
      DropdownMenuItem,
      DropdownMenuLabel,
      DropdownMenuSeparator,
      DropdownMenuTrigger,
    } from "@/components/ui/dropdown-menu";
    import { ChevronDown, Users, BarChart3, Palette, Gamepad2, Laptop, Bot, Code, Film, ShieldCheck } from 'lucide-react';
    import { motion } from 'framer-motion';

    const courseCategories = [
      {
        id: 'ai',
        name: 'Artificial Intelligence',
        icon: <Bot className="h-12 w-12 text-itve-blue" />,
        description: 'Master the future of technology with AI, Machine Learning, and Data Science. Develop intelligent systems and unlock data-driven insights.',
        enrollment: '1.2 million',
        imageName: 'AI course visual with neural networks or robots',
        subcategories: ['Machine Learning Fundamentals', 'Deep Learning Specialization', 'Natural Language Processing (NLP)', 'Computer Vision', 'AI Ethics and Governance'],
        detailsPageLink: '/courses/ai-details',
      },
      {
        id: 'digital-marketing',
        name: 'Digital Marketing',
        icon: <BarChart3 className="h-12 w-12 text-itve-blue" />,
        description: 'Learn cutting-edge strategies to promote brands, products, and services online effectively. Drive growth and engagement in the digital landscape.',
        enrollment: '3.1 million',
        imageName: 'Digital marketing course visual with graphs and social media icons',
        subcategories: ['SEO & SEM Mastery', 'Social Media Marketing Strategy', 'Content Marketing & Storytelling', 'Email Marketing Automation', 'Digital Analytics & Reporting'],
        detailsPageLink: '/courses/digital-marketing-details',
      },
      {
        id: 'graphic-design',
        name: 'Graphic Design & Visual Arts',
        icon: <Palette className="h-12 w-12 text-itve-blue" />,
        description: 'Unleash your creativity and design stunning visuals for print and digital media. Master industry-standard tools and design principles.',
        enrollment: '1.8 million',
        imageName: 'Graphic design course visual with color palettes and design tools',
        subcategories: ['UI/UX Design Principles', 'Advanced Illustration Techniques', 'Branding & Identity Design', 'Motion Graphics & Animation', 'Print Design & Typography'],
        detailsPageLink: '/courses/graphic-design-details',
      },
      {
        id: 'game-development',
        name: 'Game Development',
        icon: <Gamepad2 className="h-12 w-12 text-itve-blue" />,
        description: 'Create immersive worlds, engaging gameplay experiences, and interactive entertainment. Learn to develop games for various platforms.',
        enrollment: '2.5 million',
        imageName: 'Game development course visual with game characters or code',
        subcategories: ['Unity Development Bootcamp', 'Unreal Engine 5 Mastery', 'Game Design & Narrative', 'Mobile Game Development', 'VR/AR Game Experiences'],
        detailsPageLink: '/courses/game-development-details',
      },
      {
        id: 'web-development',
        name: 'Web Development',
        icon: <Laptop className="h-12 w-12 text-itve-blue" />,
        description: 'Build modern, responsive, and scalable websites and web applications. Master frontend and backend technologies for the digital age.',
        enrollment: '4.0 million',
        imageName: 'Web development course visual with code on a laptop screen',
        subcategories: ['Full-Stack Web Development (MERN)', 'Frontend Frameworks (React, Vue, Angular)', 'Backend Development (Node.js, Python/Django)', 'DevOps & Cloud Deployment', 'Web Accessibility & Performance'],
        detailsPageLink: '/courses/web-development-details',
      },
      {
        id: 'cybersecurity',
        name: 'Cybersecurity',
        icon: <ShieldCheck className="h-12 w-12 text-itve-blue" />,
        description: 'Protect digital assets and systems from cyber threats. Learn ethical hacking, network security, and incident response.',
        enrollment: '950,000',
        imageName: 'Cybersecurity course visual with locks and shields',
        subcategories: ['Ethical Hacking & Penetration Testing', 'Network Security & Defense', 'Cyber Forensics & Incident Response', 'Cloud Security', 'Cryptography'],
        detailsPageLink: '/courses/cybersecurity-details',
      },
    ];

    const CoursesPage = () => {
      return (
        <Section title="Explore Our Programs" subtitle="Find the perfect course to enhance your skills and career prospects. Each program is meticulously designed with current industry needs and future trends in mind, delivered by expert instructors.">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl transform hover:-translate-y-2 bg-itve-white">
                  <div className="relative h-52 bg-itve-blue-light flex items-center justify-center overflow-hidden">
                     <img  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" alt={category.imageName} src="https://images.unsplash.com/photo-1507131679781-70be42a343e7" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                        <div className="bg-itve-white/90 backdrop-blur-sm p-3 rounded-full shadow-md w-fit self-start mb-2">
                            {category.icon}
                        </div>
                        <h3 className="text-white text-2xl font-semibold">{category.name}</h3>
                     </div>
                  </div>
                  <CardHeader className="flex-grow p-6">
                    <CardDescription className="text-itve-gray-dark mt-1 h-20 overflow-hidden">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <div className="flex items-center text-sm text-itve-gray-dark">
                      <Users className="h-5 w-5 mr-2 text-itve-blue" />
                      <span>{category.enrollment} students enrolled</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col sm:flex-row justify-between items-center gap-3 p-6 border-t bg-itve-gray-light/50">
                    <Button asChild variant="default" className="w-full sm:w-auto bg-itve-blue hover:bg-itve-blue-dark text-white shadow-md hover:shadow-lg transition-all duration-300">
                      <Link to={category.detailsPageLink || `/courses/${category.id}`}>Learn More</Link>
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-full sm:w-auto border-itve-blue text-itve-blue hover:bg-itve-blue-light hover:border-itve-blue-dark shadow-sm hover:shadow-md transition-all duration-300">
                          Subcategories <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-64 bg-itve-white shadow-xl rounded-lg border-itve-gray-light">
                        <DropdownMenuLabel className="text-itve-blue-dark font-semibold px-3 py-2">Specializations in {category.name}</DropdownMenuLabel>
                        <DropdownMenuSeparator className="bg-itve-gray-light" />
                        <DropdownMenuGroup>
                          {category.subcategories.map(sub => (
                            <DropdownMenuItem key={sub} className="text-itve-gray-dark hover:bg-itve-blue-light hover:text-itve-blue px-3 py-2 text-sm cursor-pointer">
                              {sub}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="mt-16 text-center"
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            viewport={{once: true}}
            transition={{duration:0.5, delay:0.5}}
          >
            <h3 className="text-2xl font-semibold text-itve-blue-dark mb-3">Can't find what you're looking for?</h3>
            <p className="text-itve-gray-dark mb-6 max-w-xl mx-auto">We are constantly expanding our course offerings. Contact our admissions team for bespoke training solutions or to inquire about upcoming programs.</p>
            <Button asChild size="lg" className="bg-yellow-400 text-itve-blue-dark hover:bg-yellow-500 font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Link to="/contact">Contact Admissions</Link>
            </Button>
          </motion.div>
        </Section>
      );
    };

    export default CoursesPage;