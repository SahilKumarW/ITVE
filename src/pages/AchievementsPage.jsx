
    import React, { useState }
    from 'react';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
    import Section from '@/components/Section';
    import { motion } from 'framer-motion';
    import { Users, Award, DollarSign, HeartHandshake as Handshake, TrendingUp, Zap, Target } from 'lucide-react';

    const achievementsData = {
      stats: [
        { id: 1, title: 'Total Students Trained', value: '904,854', icon: <Users className="h-10 w-10 text-itve-blue" />, description: "Empowered through various programs" },
        { id: 2, title: 'Job Placement Rate', value: '85%', icon: <TrendingUp className="h-10 w-10 text-itve-blue" />, description: "Within 6 months of graduation" },
        { id: 3, title: 'Industry Certifications', value: '50,000+', icon: <Award className="h-10 w-10 text-itve-blue" />, description: "Awarded to our skilled graduates" },
      ],
      scholarships: [
        { id: 1, name: 'Kind Hearts Foundation Scholarship', amount: '$500,000', recipients: 250, criteria: 'Merit and Need-based', imageName: 'Students receiving scholarships from Kind Hearts Foundation' },
        { id: 2, name: 'Tech Innovators Grant', amount: '$200,000', recipients: 50, criteria: 'AI & Robotics projects', imageName: 'Students working on AI projects with scholarship banner' },
        { id: 3, name: 'Community Builder Award', amount: '$100,000', recipients: 100, criteria: 'Social impact initiatives', imageName: 'Community service event sponsored by ITVE' },
      ],
      partnerships: [
        { id: 1, name: 'Tech Solutions Inc.', type: 'Industry Collaboration', details: 'Joint R&D projects, internships, and guest lectures.', logoName: 'Tech Solutions Inc. company logo' },
        { id: 2, name: 'Global Skills Network', type: 'International Affiliation', details: 'Student exchange programs and global certification standards.', logoName: 'Global Skills Network organization logo' },
        { id: 3, name: 'Karachi University', type: 'Academic Alliance', details: 'Credit transfer programs and joint degree offerings.', logoName: 'Karachi University official logo' },
      ],
    };

    const AchievementStatCard = ({ title, value, icon, description, delay }) => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
      >
        <Card className="text-center p-6 bg-gradient-to-br from-itve-blue-light to-itve-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 rounded-lg">
          <div className="mx-auto mb-4">{icon}</div>
          <h3 className="text-3xl font-bold text-itve-blue-dark">{value}</h3>
          <p className="text-lg font-semibold text-itve-blue mt-1">{title}</p>
          <p className="text-sm text-itve-gray-dark mt-2">{description}</p>
        </Card>
      </motion.div>
    );

    const AchievementsPage = () => {
      const [activeTab, setActiveTab] = useState('statistics');

      const getIconForTab = (tabValue) => {
        switch(tabValue) {
          case 'statistics': return <TrendingUp className="mr-2 h-5 w-5" />;
          case 'scholarships': return <DollarSign className="mr-2 h-5 w-5" />;
          case 'partnerships': return <Handshake className="mr-2 h-5 w-5" />;
          default: return <Award className="mr-2 h-5 w-5" />;
        }
      }

      return (
        <Section title="Our Milestones & Impact" subtitle="Celebrating our successes in education, community engagement, and industry collaboration.">
          <Tabs defaultValue="statistics" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2 bg-itve-blue-light p-2 rounded-lg shadow-md">
              <TabsTrigger value="statistics" className={`flex items-center justify-center p-3 rounded-md text-sm font-medium transition-colors ${activeTab === 'statistics' ? 'bg-itve-blue text-white shadow-lg' : 'text-itve-blue-dark hover:bg-itve-blue/20'}`}>
                {getIconForTab('statistics')} Key Statistics
              </TabsTrigger>
              <TabsTrigger value="scholarships" className={`flex items-center justify-center p-3 rounded-md text-sm font-medium transition-colors ${activeTab === 'scholarships' ? 'bg-itve-blue text-white shadow-lg' : 'text-itve-blue-dark hover:bg-itve-blue/20'}`}>
                {getIconForTab('scholarships')} Scholarships
              </TabsTrigger>
              <TabsTrigger value="partnerships" className={`flex items-center justify-center p-3 rounded-md text-sm font-medium transition-colors ${activeTab === 'partnerships' ? 'bg-itve-blue text-white shadow-lg' : 'text-itve-blue-dark hover:bg-itve-blue/20'}`}>
                {getIconForTab('partnerships')} Partnerships
              </TabsTrigger>
            </TabsList>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <TabsContent value="statistics" className="mt-8">
                <div className="grid md:grid-cols-3 gap-8">
                  {achievementsData.stats.map((stat, index) => (
                    <AchievementStatCard key={stat.id} {...stat} delay={index * 0.15} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="scholarships" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {achievementsData.scholarships.map((scholarship, index) => (
                     <motion.div
                        key={scholarship.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg h-full flex flex-col transform hover:-translate-y-1">
                           <img  className="w-full h-40 object-cover" alt={scholarship.name} src="https://images.unsplash.com/photo-1583383541922-4f67fce00b09" />
                          <CardHeader>
                            <CardTitle className="text-xl text-itve-blue-dark">{scholarship.name}</CardTitle>
                            <CardDescription className="text-itve-gray-dark">Amount: {scholarship.amount} | Recipients: {scholarship.recipients}</CardDescription>
                          </CardHeader>
                          <CardContent className="flex-grow">
                            <p className="text-sm text-itve-gray-dark">Criteria: {scholarship.criteria}</p>
                          </CardContent>
                        </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="partnerships" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {achievementsData.partnerships.map((partner, index) => (
                     <motion.div
                        key={partner.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg h-full flex flex-col items-center text-center transform hover:-translate-y-1">
                          <img  className="w-24 h-24 object-contain mb-4 rounded-md" alt={`${partner.name} logo`} src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
                          <CardHeader className="p-0">
                            <CardTitle className="text-xl text-itve-blue-dark">{partner.name}</CardTitle>
                            <CardDescription className="text-itve-blue font-semibold">{partner.type}</CardDescription>
                          </CardHeader>
                          <CardContent className="flex-grow mt-2">
                            <p className="text-sm text-itve-gray-dark">{partner.details}</p>
                          </CardContent>
                        </Card>
                     </motion.div>
                  ))}
                </div>
              </TabsContent>
            </motion.div>
          </Tabs>
        </Section>
      );
    };

    export default AchievementsPage;
  