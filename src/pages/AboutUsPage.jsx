import React from 'react';
import Section from '@/components/Section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Lightbulb, ShieldCheck, TrendingUp, Target, Users, Award, Users2, CalendarDays, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const coreValues = [
  { title: "Empowerment", description: "Providing skills and knowledge that enable individuals to achieve their full potential and make informed choices about their future.", icon: <Lightbulb className="h-8 w-8 text-itve-blue" /> },
  { title: "Innovation", description: "Constantly adapting and introducing new methods, technologies, and curricula to stay ahead in education and industry demands.", icon: <TrendingUp className="h-8 w-8 text-itve-blue" /> },
  { title: "Excellence", description: "Striving for the highest standards in teaching, learning, student support, and operational management.", icon: <Award className="h-8 w-8 text-itve-blue" /> },
  { title: "Integrity", description: "Upholding ethical principles, honesty, and transparency in all our endeavors and interactions.", icon: <ShieldCheck className="h-8 w-8 text-itve-blue" /> },
  { title: "Community", description: "Fostering a supportive, inclusive, and collaborative environment for all students, staff, and partners.", icon: <Users className="h-8 w-8 text-itve-blue" /> },
  { title: "Accessibility", description: "Ensuring our programs are available to diverse learners, removing barriers to education and opportunity.", icon: <CheckCircle className="h-8 w-8 text-itve-blue" /> },
];

const futureGoals = [
  { goal: "Train 200,000+ students in AI and emerging technologies by 2028, equipping them for future job markets.", icon: <Target className="h-6 w-6 text-itve-white" /> },
  { goal: "Establish 5 new state-of-the-art vocational training centers in underserved regions nationwide.", icon: <Target className="h-6 w-6 text-itve-white" /> },
  { goal: "Achieve a 90%+ job placement rate for graduates through enhanced industry partnerships and career services.", icon: <Target className="h-6 w-6 text-itve-white" /> },
  { goal: "Launch a comprehensive global online learning platform, making ITVE education accessible to students worldwide.", icon: <Target className="h-6 w-6 text-itve-white" /> },
  { goal: "Become a leading research hub for vocational technology and pedagogical innovation.", icon: <Target className="h-6 w-6 text-itve-white" /> },
];

const teamMembers = [
  { name: "Muhammad Talha Nawaz", role: "President", imageName: "Talha, Founder of ITVE", fallback: "ER" },
  { name: "Sahil", role: "Chief Administrator", imageName: "Mr. Samuel Green, VP Academics", fallback: "SG" },
  { name: "Muhammad Osama", role: "Head of Academics", imageName: "Ms. Aisha Khan, Director of Operations", fallback: "AK" },
];

const AboutUsPage = () => {
  return (
    <div className="animate-fade-in">
      <Section title="About ITVE" subtitle="Dedicated to shaping futures through excellence in technical and vocational education. Discover our story, values, and commitment to student success.">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="shadow-xl rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img className="h-64 w-full object-cover md:h-full" alt="Founder of ITVE giving an inspiring speech at a conference" src="https://images.unsplash.com/photo-1581182394437-2a9876866966" />
              </div>
              <div className="md:w-1/2 p-8 bg-itve-white">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-3xl text-itve-blue-dark">Founder’s Message</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Avatar className="h-20 w-20 mb-4 shadow-md">
                    <AvatarImage src="https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe" alt="Photo of Dr. Evelyn Reed" />
                    <AvatarFallback>MTN</AvatarFallback>
                  </Avatar>
                  <p className="text-itve-gray-dark mb-4 leading-relaxed">
                    "Welcome to the Institute of Technical & Vocational Education (ITVE). Our journey began with a simple yet profound belief: that quality education in practical skills can transform lives and build stronger communities. We are committed to providing accessible, industry-relevant training that empowers individuals to achieve their dreams and contribute meaningfully to society. Our focus is on hands-on learning and real-world application."
                  </p>
                  <p className="text-itve-gray-dark leading-relaxed">
                    "At ITVE, we cultivate innovation, champion excellence, and foster an environment where every student can discover their potential and thrive. We are more than an institution; we are a community dedicated to lifelong learning and growth. We invite you to join us and discover the power within you to shape a brighter future."
                  </p>
                  <p className="mt-4 font-semibold text-itve-blue-dark">Muhammad Talha Nawaz, President</p>
                </CardContent>
              </div>
            </div>
          </Card>
        </motion.div>
      </Section>

      <Section title="Our Core Values" subtitle="The fundamental principles that guide our actions, decisions, and define our institutional culture." className="bg-itve-gray-light rounded-lg">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full text-center p-6 bg-itve-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg transform hover:-translate-y-1">
                <div className="inline-block p-3 bg-itve-blue-light rounded-full mb-4">
                  {value.icon}
                </div>
                <CardHeader className="p-0">
                  <CardTitle className="text-xl text-itve-blue-dark">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="text-itve-gray-dark text-sm">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Meet Our Team" subtitle="The dedicated professionals driving ITVE's mission forward.">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="text-center p-6 bg-itve-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg transform hover:-translate-y-1">
                <Avatar className="w-24 h-24 mx-auto mb-4 shadow-md">
                  <img className="aspect-square h-full w-full" alt={member.imageName} src="https://images.unsplash.com/photo-1585066039196-e30d097340be" />
                  <AvatarFallback>{member.fallback}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl text-itve-blue-dark">{member.name}</CardTitle>
                <CardDescription className="text-itve-blue">{member.role}</CardDescription>
              </Card>
            </motion.div>
          ))}
          <motion.div
            key="member-placeholder-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 3 * 0.15 }}
          >
            <Card className="text-center p-6 bg-itve-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg transform hover:-translate-y-1">
              <Avatar className="w-24 h-24 mx-auto mb-4 shadow-md">
                <img className="aspect-square h-full w-full" alt="John Doe, Head of Student Affairs" src="https://images.unsplash.com/photo-1665113361900-b9720957d41a" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <CardTitle className="text-xl text-itve-blue-dark">Ammar</CardTitle>
              <CardDescription className="text-itve-blue">IT Director</CardDescription>
            </Card>
          </motion.div>
          <motion.div
            key="member-placeholder-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 4 * 0.15 }}
          >
            <Card className="text-center p-6 bg-itve-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg transform hover:-translate-y-1">
              <Avatar className="w-24 h-24 mx-auto mb-4 shadow-md">
                <img className="aspect-square h-full w-full" alt="Jane Smith, Lead AI Instructor" src="https://images.unsplash.com/photo-1665113361900-b9720957d41a" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <CardTitle className="text-xl text-itve-blue-dark">Haashi</CardTitle>
              <CardDescription className="text-itve-blue">Chief Financial Officer</CardDescription>
            </Card>
          </motion.div>
          <motion.div
            key="member-placeholder-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 5 * 0.15 }}
          >
            <Card className="text-center p-6 bg-itve-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg transform hover:-translate-y-1">
              <Avatar className="w-24 h-24 mx-auto mb-4 shadow-md">
                <img className="aspect-square h-full w-full" alt="Robert Brown, Curriculum Developer" src="https://images.unsplash.com/photo-1665113361900-b9720957d41a" />
                <AvatarFallback>RB</AvatarFallback>
              </Avatar>
              <CardTitle className="text-xl text-itve-blue-dark">Ayesha</CardTitle>
              <CardDescription className="text-itve-blue">Human Resource Director</CardDescription>
            </Card>
          </motion.div>
        </div>
      </Section>

      <Section title="Our Future Goals" subtitle="Charting the course for ITVE's continued growth, innovation, and impact in the field of technical education.">
        <div className="bg-gradient-to-br from-itve-blue to-itve-blue-dark p-8 md:p-12 rounded-xl shadow-2xl">
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
            {futureGoals.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="flex-shrink-0 bg-itve-white/20 p-2 rounded-full mt-1">
                  {item.icon}
                </div>
                <p className="text-itve-white text-lg">{item.goal}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Our History" subtitle="A brief look at our journey, milestones, and evolution as a leading vocational institute." className="bg-itve-gray-light rounded-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-6 md:p-8 bg-itve-white shadow-lg rounded-lg">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-2xl text-itve-blue-dark">A Legacy of Empowerment & Skill Development</CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-4 text-itve-gray-dark">
              <p>ITVE has been at the forefront of vocational education in Pakistan, transforming lives through practical skills development and strategic partnerships.</p>

              <p className="font-semibold text-itve-blue-dark">Key Milestones:</p>
              <ul className="list-none space-y-3">
                <li className="flex items-start">
                  <CalendarDays className="h-5 w-5 mr-3 mt-1 text-itve-blue flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-itve-gray-dark">2013:</span> Launched our first major initiative in collaboration with the Department of BBSYDP, providing vocational training to over 1,000 underprivileged students, with special focus on empowering female students.
                  </div>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="h-5 w-5 mr-3 mt-1 text-itve-blue flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-itve-gray-dark">2015-2023:</span> Expanded our programs to include emerging technologies, reaching thousands more students across Karachi and establishing our reputation for quality vocational education.
                  </div>
                </li>
                <li className="flex items-start">
                  <Users2 className="h-5 w-5 mr-3 mt-1 text-itve-blue flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-itve-gray-dark">2024:</span> Under new leadership, we launched an ambitious plan to collaborate with universities and institutions across Karachi, utilizing existing infrastructure to improve technical and vocational literacy.
                  </div>
                </li>
              </ul>

              <p className="font-semibold text-itve-blue-dark">Future Vision:</p>
              <ul className="list-none space-y-3">
                <li className="flex items-start">
                  <Target className="h-5 w-5 mr-3 mt-1 text-itve-blue flex-shrink-0" />
                  <div>Expand to all major urban cities using university infrastructure partnerships</div>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 mr-3 mt-1 text-itve-blue flex-shrink-0" />
                  <div>Build new vocational training infrastructure in rural Pakistan</div>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 mr-3 mt-1 text-itve-blue flex-shrink-0" />
                  <div>Revolutionize Pakistan's technical education landscape, inspired by successful models like China's vocational training system</div>
                </li>
              </ul>

              <p className="mt-6">ITVE continues to evolve as a beacon of hope and opportunity, committed to shaping skilled professionals who will drive Pakistan's economic growth and technological advancement.</p>
            </CardContent>
          </Card>
        </motion.div>
      </Section>
    </div>
  );
};

export default AboutUsPage;