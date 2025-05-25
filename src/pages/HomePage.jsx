
    import React from 'react';
    import { Link } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import Section from '@/components/Section';
    import { motion } from 'framer-motion';
    import { Users, TrendingUp, Lightbulb, CheckCircle, Users2 } from 'lucide-react';

    const StatCard = ({ icon, title, value, description, delay }) => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
      >
        <Card className="text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-itve-white transform hover:-translate-y-1">
          <CardHeader>
            <div className="mx-auto bg-itve-blue-light p-3 rounded-full w-fit text-itve-blue">
              {icon}
            </div>
            <CardTitle className="mt-2 text-itve-blue-dark">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-itve-blue">{value}</p>
            <p className="text-sm text-itve-gray-dark mt-1">{description}</p>
          </CardContent>
        </Card>
      </motion.div>
    );


    const HomePage = () => {
      const features = [
        { title: "Our Mission", description: "To provide accessible, high-quality technical and vocational education that empowers individuals with practical skills for sustainable careers and personal growth.", icon: <Lightbulb className="h-10 w-10 text-itve-blue" /> },
        { title: "Our Vision", description: "To be a leading institution in technical and vocational training, recognized for innovation, excellence, and its contribution to societal development and economic prosperity.", icon: <TrendingUp className="h-10 w-10 text-itve-blue" /> },
      ];

      const stats = [
        { icon: <Users className="h-10 w-10" />, title: 'Students Enrolled', value: '900K+', description: 'Across all programs', delay: 0.2 },
        { icon: <CheckCircle className="h-10 w-10" />, title: 'Courses Offered', value: '150+', description: 'In diverse fields', delay: 0.4 },
        { icon: <Users2 className="h-10 w-10" />, title: 'Expert Instructors', value: '500+', description: 'Industry professionals', delay: 0.6 },
      ];

      return (
        <div className="animate-fade-in">
          {/* Hero Section */}
          <motion.section 
            className="py-20 md:py-32 bg-gradient-to-br from-itve-blue to-itve-blue-dark text-itve-white text-center rounded-xl shadow-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="container mx-auto px-4">
              <motion.h1 
                className="text-4xl md:text-6xl font-extrabold mb-6"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 100 }}
              >
                Discover the <span className="text-yellow-300">Power</span> Within You
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-90"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                ITVE provides industry-relevant skills to kickstart your career and transform your future. Explore our diverse range of courses and find your path to success.
              </motion.p>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button asChild size="lg" className="bg-yellow-400 text-itve-blue-dark hover:bg-yellow-500 text-lg font-semibold px-10 py-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <Link to="/courses">JOIN Now – A Better Life Begins with the Right Skill</Link>
                </Button>
              </motion.div>
            </div>
          </motion.section>

          {/* Mission & Vision Section */}
          <Section title="Our Core Purpose" subtitle="Guiding principles that shape our educational approach and community impact.">
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card className="h-full flex flex-col items-center text-center p-6 bg-itve-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
                    <div className="p-4 bg-itve-blue-light rounded-full mb-4 text-itve-blue">
                      {feature.icon}
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl text-itve-blue-dark">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-itve-gray-dark">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Section>

           {/* Stats Section */}
          <Section className="bg-itve-gray-light" title="ITVE By The Numbers" subtitle="Our impact and reach in empowering individuals.">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat) => (
                <StatCard key={stat.title} {...stat} />
              ))}
            </div>
          </Section>

          {/* Call to Action Section */}
          <Section className="bg-itve-blue text-itve-white rounded-lg my-10">
             <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                  Join thousands of successful graduates. Your new career is just a click away.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild size="lg" variant="secondary" className="bg-itve-white text-itve-blue hover:bg-itve-gray-light font-semibold px-8 py-3">
                    <Link to="/courses">Explore All Courses</Link>
                  </Button>
                </motion.div>
             </div>
          </Section>
          
          {/* Testimonial Placeholder Section */}
          <Section title="What Our Partners Say" subtitle="Building strong collaborations for a brighter future.">
            <Card className="bg-itve-white p-8 shadow-xl rounded-lg">
              <CardContent className="text-center">
                <img  className="w-32 h-auto mx-auto mb-6 rounded-full" alt="Karachi University Logo" src="https://images.unsplash.com/photo-1595134561159-11a5fbf6b3f4" />
                <blockquote className="text-xl italic text-itve-gray-dark">
                  "Partnering with ITVE has been instrumental in providing our students with valuable vocational skills. Their commitment to quality education is commendable."
                </blockquote>
                <p className="mt-4 font-semibold text-itve-blue-dark">Vice Chancellor, Karachi University</p>
              </CardContent>
            </Card>
          </Section>
        </div>
      );
    };

    export default HomePage;
  