
    import React from 'react';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
    import Section from '@/components/Section';
    import { Calendar, Award, Users, Tv } from 'lucide-react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';

    const updatesData = [
      {
        id: 1,
        type: 'Event',
        title: 'Annual Tech Symposium 2025',
        date: '2025-07-15',
        description: 'Join us for our annual Tech Symposium featuring keynote speakers, workshops, and networking opportunities. Discover the latest trends in technology.',
        icon: <Calendar className="h-6 w-6 text-itve-blue" />,
        imageName: "Tech symposium banner with diverse audience and speakers",
      },
      {
        id: 2,
        type: 'Award',
        title: 'ITVE Students Win Rajby Textiles Design Competition',
        date: '2025-06-28',
        description: 'Our talented graphic design students secured the top prize at the prestigious Rajby Textiles national design competition. Congratulations to the team!',
        icon: <Award className="h-6 w-6 text-itve-blue" />,
        imageName: "Students holding award at Rajby Textiles competition",
      },
      {
        id: 3,
        type: 'Announcement',
        title: 'New AI & Robotics Lab Inauguration',
        date: '2025-08-01',
        description: 'We are thrilled to announce the grand opening of our state-of-the-art AI and Robotics lab, equipped with the latest technology for our students.',
        icon: <Users className="h-6 w-6 text-itve-blue" />,
        imageName: "Modern AI and Robotics lab interior",
      },
      {
        id: 4,
        type: 'Team Event',
        title: 'Faculty Development Workshop on Project-Based Learning',
        date: '2025-07-05',
        description: 'A successful workshop was conducted for our faculty members focusing on implementing effective project-based learning methodologies in classrooms.',
        icon: <Users className="h-6 w-6 text-itve-blue" />,
        imageName: "Faculty members in a workshop setting",
      }
    ];

    const UpdatesPage = () => {
      return (
        <Section title="Latest News & Updates" subtitle="Stay informed about everything happening at ITVE, from groundbreaking achievements to upcoming events.">
          {/* Video Section */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y:20 }}
            whileInView={{ opacity: 1, y:0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden shadow-xl rounded-lg">
              <CardHeader className="bg-itve-blue text-itve-white p-4">
                <CardTitle className="flex items-center text-2xl">
                  <Tv className="h-8 w-8 mr-3"/> Monthly Update: May 2025 Highlights
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-w-16 aspect-h-9 bg-itve-gray-dark">
                  {/* Placeholder for embedded video */}
                  <div className="w-full h-full flex items-center justify-center text-itve-white">
                    <img  className="w-full h-full object-cover" alt="Video thumbnail for monthly updates" src="https://images.unsplash.com/photo-1567443024551-f3e3cc2be870" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 bg-itve-gray-light">
                <CardDescription>
                  Catch up on all the exciting developments from last month in our video update. 
                  Hear from faculty, students, and see our campus in action.
                </CardDescription>
              </CardFooter>
            </Card>
          </motion.div>

          {/* News Feed */}
          <div className="grid md:grid-cols-2 gap-8">
            {updatesData.map((update, index) => (
              <motion.div
                key={update.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden transform hover:-translate-y-1">
                  <div className="h-40 overflow-hidden">
                    <img  className="w-full h-full object-cover" alt={update.title} src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center mb-2 text-itve-blue">
                      {update.icon}
                      <span className="ml-2 text-sm font-semibold uppercase tracking-wider">{update.type}</span>
                    </div>
                    <CardTitle className="text-xl text-itve-blue-dark">{update.title}</CardTitle>
                    <p className="text-xs text-itve-gray-dark">{new Date(update.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-itve-gray-dark">{update.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="p-4 border-t">
                    <Button variant="link" className="text-itve-blue hover:text-itve-blue-dark p-0">Read More &rarr;</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>
      );
    };

    export default UpdatesPage;
  