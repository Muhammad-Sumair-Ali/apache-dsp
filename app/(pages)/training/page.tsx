"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Book,
  ChevronLeft,
  ChevronRight,
  Cloud,
  ExternalLink,
  GraduationCap,
  Play,
  Settings,
  Star,
  User,
  UserCog,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Clock,
  Users,
  Target,
  BookOpen,
  Award,
  CheckCircle,
  TrendingUp,
  Zap,
} from "lucide-react";

const TrainingPage = () => {
  const newsItems = [
    {
      title: "New Confluent Cloud Kafka Authentication course available",
      description:
        "Learn about Kafka authentication and security best practices in our latest course.",
      isNew: true,
    },
    {
      title: "Updated Apache Kafka fundamentals course",
      description:
        "Enhanced content with latest Kafka 3.5 features and real-world examples.",
      isNew: false,
    },
    {
      title: "New ksqlDB advanced operations guide released",
      description:
        "Deep dive into stream processing and real-time analytics with ksqlDB.",
      isNew: true,
    },
    {
      title: "Confluent Platform 7.5 administration training now available",
      description:
        "Master the latest platform features and deployment strategies.",
      isNew: false,
    },
  ];

  const learningPaths = [
    {
      icon: <Clock className="w-8 h-8 text-blue-400" />,
      title: "Accelerate Development Time",
      description:
        "Reduce time-to-market with hands-on training and real-world scenarios.",
      metric: "50% faster development",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
      title: "Improve Efficiency",
      description:
        "Optimize your Apache Kafka implementations with expert-led training.",
      metric: "3x performance improvement",
    },
    {
      icon: <Target className="w-8 h-8 text-blue-400" />,
      title: "Increase Impact & Reduce Time to Value",
      description:
        "Building real-time streaming solutions that deliver immediate business value.",
      metric: "90% faster time-to-value",
    },
  ];

  const courseTypes = [
    {
      title: "Instructor-Led Courses",
      description:
        "Live training sessions with expert instructors and hands-on labs.",
      features: [
        "Live interaction",
        "Q&A sessions",
        "Hands-on labs",
        "Certificate included",
      ],
      duration: "2-3 days",
      level: "All levels",
      icon: <Users className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Training Credits",
      description:
        "Flexible learning credits that can be used across our entire course catalog.",
      features: [
        "Flexible scheduling",
        "Self-paced learning",
        "Multiple courses",
        "1-year validity",
      ],
      duration: "Self-paced",
      level: "All levels",
      icon: <BookOpen className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Certifications",
      description:
        "Industry-recognized certifications to validate your Apache Kafka expertise.",
      features: [
        "Industry recognition",
        "Career advancement",
        "Skill validation",
        "Digital badges",
      ],
      duration: "2-4 hours",
      level: "Intermediate+",
      icon: <Award className="w-8 h-8 text-blue-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
            Confluent Education
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Learn about Confluent and Apache Kafka from Confluent experts! Find
            self-paced courses, instructor-led training, and certification
            guidance and exams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Start Learning
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-400 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 px-8 py-3 transition-all duration-200"
            >
              View Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* What's New Section */}
        <Card className="mb-16 bg-slate-800 border-slate-700 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white flex items-center">
              <Zap className="w-6 h-6 mr-2 text-blue-400" />
              Whats New
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {newsItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 border border-slate-700/50"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-900/50 rounded-lg flex items-center justify-center border border-blue-800">
                    <BookOpen className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-slate-300 text-sm">
                          {item.description}
                        </p>
                      </div>
                      {item.isNew && (
                        <Badge className="bg-blue-600 text-white hover:bg-blue-700 shadow-sm">
                          New
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Education Impact Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Education Drives Capability and Impact
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              By establishing a solid foundation for building and deploy
              scalable Event Streaming Applications, teams accelerate their
              time-to-deployment.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <Card
                key={index}
                className="bg-slate-800 border-slate-600 hover:bg-slate-700/70 hover:border-blue-600/50 transition-all duration-300 shadow-lg"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center">{path.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {path.title}
                  </h3>
                  <p className="text-slate-300 mb-4">{path.description}</p>
                  <div className="text-sm font-medium text-blue-400 bg-blue-900/30 border border-blue-800/50 px-3 py-1 rounded-full inline-block">
                    {path.metric}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Learning Styles Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Get Trained Based on Your Preferred Learning Style
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Whether you prefer instructor-led training, self-paced learning,
              or want to validate your expertise through certifications, we have
              the perfect learning path for you.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {courseTypes.map((course, index) => (
              <Card
                key={index}
                className="bg-slate-800 border-slate-600 hover:bg-slate-700/70 hover:border-blue-600/50 transition-all duration-300 overflow-hidden shadow-lg group"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent"></div>
                  <div className="relative z-10 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300">
                    {course.icon}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {course.title}
                  </h3>
                  <p className="text-slate-300 mb-4">{course.description}</p>
                  <div className="space-y-2 mb-4">
                    {course.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-slate-300"
                      >
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center text-sm text-slate-400 mb-4">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </span>
                    <span className="flex items-center">
                      <Target className="w-4 h-4 mr-1" />
                      {course.level}
                    </span>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all duration-200">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Learning Paths Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-slate-800">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-base font-semibold text-blue-400">
                Learning Paths
              </h2>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Designed to help you identify{" "}
                <br className="hidden md:inline" /> course needs based on your
                role, <br className="hidden md:inline" /> and skill level
              </h1>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center">
            <div className="grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
              {/* Confluent Platform */}
              <div className="rounded-lg border border-slate-600 bg-slate-750 text-card-foreground shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Confluent Platform
                </h3>
                <Tabs defaultValue="operator" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-slate-700 border-slate-600">
                    <TabsTrigger
                      value="operator"
                      className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-300"
                    >
                      Operator
                    </TabsTrigger>
                    <TabsTrigger
                      value="developer"
                      className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-300"
                    >
                      Developer
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="operator" className="mt-6">
                    <div className="flex items-center space-x-2 mb-6">
                      <UserCog className="h-6 w-6 text-blue-400" />
                      <span className="text-lg font-medium text-white">
                        Operator
                      </span>
                    </div>
                    <div className="grid gap-4">
                      <Card className="flex items-center justify-between p-4 bg-slate-700 border-slate-600 hover:bg-slate-600/70 transition-colors">
                        <div>
                          <p className="text-sm text-blue-400">LEVEL ONE</p>
                          <p className="font-medium text-white">
                            Fundamentals [Self Paced Training & Accreditation]
                          </p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-slate-300" />
                      </Card>
                      <Card className="flex items-center justify-between p-4 bg-slate-700 border-slate-600 hover:bg-slate-600/70 transition-colors">
                        <div>
                          <p className="text-sm text-blue-400">LEVEL TWO</p>
                          <p className="font-medium text-white">
                            Apache Kafka® Administration by Confluent
                          </p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-slate-300" />
                      </Card>
                      <Card className="flex items-center justify-between p-4 bg-slate-700 border-slate-600 hover:bg-slate-600/70 transition-colors">
                        <div>
                          <p className="text-sm text-blue-400">CERTIFICATION</p>
                          <p className="font-medium text-white">
                            Confluent Certified Administrator for Apache Kafka®
                          </p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-slate-300" />
                      </Card>
                    </div>
                  </TabsContent>
                  <TabsContent value="developer" className="mt-6">
                    <div className="flex items-center space-x-2 mb-6">
                      <User className="h-6 w-6 text-blue-400" />
                      <span className="text-lg font-medium text-white">
                        Developer
                      </span>
                    </div>
                    <p className="text-slate-300">
                      Developer content coming soon.
                    </p>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Confluent Cloud */}
              <div className="rounded-lg border border-slate-600 bg-slate-750 text-card-foreground shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Confluent Cloud
                </h3>
                <Tabs defaultValue="operator" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-slate-700 border-slate-600">
                    <TabsTrigger
                      value="operator"
                      className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-300"
                    >
                      Operator
                    </TabsTrigger>
                    <TabsTrigger
                      value="developer"
                      className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-300"
                    >
                      Developer
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="operator" className="mt-6">
                    <div className="flex items-center space-x-2 mb-6">
                      <UserCog className="h-6 w-6 text-blue-400" />
                      <span className="text-lg font-medium text-white">
                        Operator
                      </span>
                    </div>
                    <p className="text-slate-300">
                      Operator content for Confluent Cloud coming soon.
                    </p>
                  </TabsContent>
                  <TabsContent value="developer" className="mt-6">
                    <div className="flex items-center space-x-2 mb-6">
                      <User className="h-6 w-6 text-blue-400" />
                      <span className="text-lg font-medium text-white">
                        Developer
                      </span>
                    </div>
                    <p className="text-slate-300">
                      Developer content for Confluent Cloud coming soon.
                    </p>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="flex flex-col items-start justify-center space-y-4 text-left">
            <div className="space-y-2">
              <h2 className="text-base font-semibold text-blue-400">
                Certification
              </h2>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Validate your Apache Kafka <br className="hidden md:inline" />{" "}
                expertise
              </h1>
              <p className="max-w-[700px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Validate your Apache Kafka® expertise with a well-respected and
                highly recognized Confluent Certification. Confluent
                Certifications bring valuable, measurable rewards to technology
                professionals and to the organizations that employ them.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-200">
                Recommended
              </Button>
              <Button
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 px-6 py-3 rounded-md bg-transparent transition-all duration-200"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-slate-800 text-white border-slate-600 hover:bg-slate-700/70 hover:border-blue-600/50 transition-all duration-300">
              <CardHeader>
                <Settings className="h-8 w-8 text-blue-400 mb-2" />
                <CardTitle>Fundamentals Accreditation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">
                  Start building your career in event streaming with this
                  Accreditation, your first step toward a Confluent
                  Certification.
                </CardDescription>
                <Button
                  variant="link"
                  className="text-blue-400 hover:text-blue-300 p-0 h-auto mt-4"
                >
                  Get Accredited <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 text-white border-slate-600 hover:bg-slate-700/70 hover:border-blue-600/50 transition-all duration-300">
              <CardHeader>
                <GraduationCap className="h-8 w-8 text-blue-400 mb-2" />
                <CardTitle>
                  Confluent Certified Developer for Apache Kafka®
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">
                  [CCDK] is targeted to developers and solutions architects. It
                  covers Confluent and Apache Kafka® with a particular focus on
                  knowledge of the platform needed in order to develop
                  applications.
                </CardDescription>
                <Button
                  variant="link"
                  className="text-blue-400 hover:text-blue-300 p-0 h-auto mt-4"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 text-white border-slate-600 hover:bg-slate-700/70 hover:border-blue-600/50 transition-all duration-300">
              <CardHeader>
                <GraduationCap className="h-8 w-8 text-blue-400 mb-2" />
                <CardTitle>
                  Confluent Certified Administrator for Apache Kafka®
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">
                  [CCAK] is targeted to those who administer Kafka cluster
                  environments. It covers the most critical job activities that
                  an Apache Kafka® Administrator performs.
                </CardDescription>
                <Button
                  variant="link"
                  className="text-blue-400 hover:text-blue-300 p-0 h-auto mt-4"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 text-white border-slate-600 hover:bg-slate-700/70 hover:border-blue-600/50 transition-all duration-300">
              <CardHeader>
                <Cloud className="h-8 w-8 text-blue-400 mb-2" />
                <CardTitle>Confluent Certified Cloud Operator</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">
                  This certification is designed for individuals who can
                  confidently demonstrate a strong working knowledge of
                  Confluent Cloud.
                </CardDescription>
                <Button
                  variant="link"
                  className="text-blue-400 hover:text-blue-300 p-0 h-auto mt-4"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 text-white border-slate-600 hover:bg-slate-700/70 hover:border-blue-600/50 transition-all duration-300">
              <CardHeader>
                <Book className="h-8 w-8 text-blue-400 mb-2" />
                <CardTitle>Certification Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">
                  Resources available to help prepare for Confluent
                  certifications.
                </CardDescription>
                <Button
                  variant="link"
                  className="text-blue-400 hover:text-blue-300 p-0 h-auto mt-4"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Resources Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Featured Banner Section */}
          <Card className="relative overflow-hidden border border-slate-600 bg-gradient-to-br from-slate-800 to-slate-700 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent" />
            <CardContent className="relative p-8">
              <div className="flex items-center justify-between">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-400 hover:text-white hover:bg-slate-700"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>

                <div className="flex-1 text-center space-y-4">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                        <span className="text-white text-sm font-bold">R</span>
                      </div>
                      <span className="text-xl font-semibold text-white">
                        RODAN+FIELDS
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h1 className="text-2xl sm:text-3xl font-bold text-white">
                      Rodan + Fields Transforms its Enterprise Data Platform
                      with Confluent and Google Cloud
                    </h1>
                    <p className="text-slate-300 max-w-2xl mx-auto">
                      Discover how Rodan + Fields leveraged Apache data
                      streaming platform to build a modern, real-time data
                      infrastructure that powers their digital transformation
                      journey.
                    </p>
                  </div>

                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-200">
                    Learn More
                  </Button>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-400 hover:text-white hover:bg-slate-700"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Training Resources Section */}
          <div className="space-y-6">
            <div className="space-y-2">
              <Badge
                variant="outline"
                className="text-blue-400 border-blue-600 bg-blue-900/20"
              >
                Training Resources
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Confluent provides several tutorials, free courses, videos to
                help you get started
              </h2>
            </div>

            {/* First Row of Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-slate-800 border-slate-600 hover:bg-slate-700/70 hover:border-blue-600/50 transition-all duration-300 shadow-lg">
                <CardHeader className="space-y-3">
                  <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center border border-purple-800">
                    <Award className="h-6 w-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-lg text-white">
                    Confluent Developer Hub
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-slate-300">
                    Get hands-on with tutorials, code examples, and best
                    practices. Perfect for developers looking to build with
                    Confluent and Apache Kafka.
                  </CardDescription>
                  <Button
                    variant="outline"
                    className="w-full group border-slate-600 text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200"
                  >
                    Learn more
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Second Row of Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-slate-800 border-slate-600 hover:bg-slate-700/70 hover:border-blue-600/50 transition-all duration-300 shadow-lg">
                <CardHeader className="space-y-3">
                  <div className="w-12 h-12 bg-orange-900/50 rounded-lg flex items-center justify-center border border-orange-800">
                    <Users className="h-6 w-6 text-orange-400" />
                  </div>
                  <CardTitle className="text-lg text-white">
                    Get Started With Confluent Professional Services
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-slate-300">
                    Apache data streaming team helps you solve challenging data
                    problems through implementation, migration, and ongoing
                    support services to ensure your success.
                  </CardDescription>
                  <div className="flex items-center space-x-1 text-sm text-slate-300">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="ml-2">Professional Support</span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full group border-slate-600 text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200"
                  >
                    Learn more
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-600 hover:bg-slate-700/70 hover:border-blue-600/50 transition-all duration-300 shadow-lg">
                <CardHeader className="space-y-3">
                  <div className="w-12 h-12 bg-red-900/50 rounded-lg flex items-center justify-center border border-red-800">
                    <Play className="h-6 w-6 text-red-400" />
                  </div>
                  <CardTitle className="text-lg text-white">
                    Public Training
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-slate-300">
                    Join instructor-led training sessions with Apache Kafka and
                    Confluent experts. Learn from real-world use cases and get
                    hands-on experience.
                  </CardDescription>
                  <div className="flex items-center space-x-2 text-sm text-slate-300">
                    <Badge
                      variant="secondary"
                      className="text-xs bg-slate-700 text-slate-300 border-slate-600"
                    >
                      Instructor-Led
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="text-xs bg-slate-700 text-slate-300 border-slate-600"
                    >
                      Hands-On
                    </Badge>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full group border-slate-600 text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200"
                  >
                    Learn more
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-800 to-indigo-950 py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              It Free & Easy to Get Started
            </h2>
            <p className="text-blue-100 mb-6">
              Get a head start on your Kafka and data use cases. Create and
              activate your Confluent Cloud account today with $400 in free
              credits. Spark up your first 60 days.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
              <div className="flex gap-2 mb-6">
                <Button className="flex-1" variant="default">
                  Cloud
                </Button>
                <Button className="flex-1" variant="outline">
                  Self Managed
                </Button>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Confluent Cloud
                </h3>
                <p className="text-gray-500 text-sm mb-2">
                  A fully managed, cloud-native service for Apache Kafka®
                </p>
              </div>
              <Button className="w-full mb-4 bg-gray-900 text-white hover:bg-gray-800">
                <span className="flex items-center gap-2">
                  <svg width="20" height="20" fill="none">
                    <circle cx="10" cy="10" r="10" fill="#4285F4" />
                    <text
                      x="50%"
                      y="60%"
                      textAnchor="middle"
                      fill="#fff"
                      fontSize="12"
                      fontWeight="bold"
                      dy=".3em"
                    >
                      G
                    </text>
                  </svg>
                  Sign in with Google
                </span>
              </Button>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-xs text-gray-400">or</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  <option value="">Position</option>
                  <option value="developer">Developer</option>
                  <option value="architect">Architect</option>
                  <option value="manager">Manager</option>
                  <option value="other">Other</option>
                </select>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="rounded border-gray-300"
                  />
                  <label htmlFor="terms" className="text-xs text-gray-600">
                    I want to get product emails, events & news from Confluent
                  </label>
                </div>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                  Get Started
                </Button>
              </form>
              <div className="mt-4 text-xs text-gray-400">
                By clicking &quot;Get Started&quot;, you agree to the{" "}
                <a href="#" className="underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingPage;
