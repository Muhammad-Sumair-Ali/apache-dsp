"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Filter, Search } from "lucide-react";

// Types
interface UseCase {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  technologies: string[];
  image: string;
  features: string[];
  learnMoreUrl: string;
}

// Data object for all use cases
const useCasesData: UseCase[] = [
  {
    id: "artificial-intelligence-ml",
    title: "Artificial Intelligence ML",
    description:
      "Build intelligent applications with machine learning capabilities for real-time data processing and predictive analytics.",
    category: "AI/ML",
    difficulty: "Advanced",
    technologies: ["TensorFlow", "PyTorch", "Apache Kafka", "Python"],
    image: "/images/ai-ml-architecture.jpg",
    features: [
      "Real-time model inference",
      "Automated data pipelines",
      "Scalable ML workflows",
      "Model monitoring",
    ],
    learnMoreUrl: "/use-cases/ai-ml",
  },
  {
    id: "microservices-event-driven",
    title: "Microservices Event-Driven Systems",
    description:
      "Design resilient microservices architectures with event-driven communication patterns for better scalability.",
    category: "Architecture",
    difficulty: "Intermediate",
    technologies: ["Apache Kafka", "Docker", "Kubernetes", "REST APIs"],
    image: "/images/microservices-architecture.jpg",
    features: [
      "Event sourcing patterns",
      "Service mesh integration",
      "Async communication",
      "Fault tolerance",
    ],
    learnMoreUrl: "/use-cases/microservices",
  },
  {
    id: "video-streaming",
    title: "AI Video Streaming",
    description:
      "Stream and process video content with AI-powered analytics for content recognition and real-time insights.",
    category: "Streaming",
    difficulty: "Advanced",
    technologies: ["FFmpeg", "WebRTC", "Computer Vision", "CDN"],
    image: "/images/video-streaming-architecture.jpg",
    features: [
      "Low-latency streaming",
      "Content recognition",
      "Adaptive bitrate",
      "Global distribution",
    ],
    learnMoreUrl: "/use-cases/video-streaming",
  },
  {
    id: "multi-agent-data",
    title: "Multi-Agent Data Development Infrastructure",
    description:
      "Implement collaborative multi-agent systems for distributed data processing and development workflows.",
    category: "Infrastructure",
    difficulty: "Advanced",
    technologies: ["Apache Spark", "Redis", "GraphQL", "Multi-Agent Systems"],
    image: "/images/multi-agent-architecture.jpg",
    features: [
      "Agent coordination",
      "Distributed processing",
      "Data consistency",
      "Workflow automation",
    ],
    learnMoreUrl: "/use-cases/multi-agent",
  },
  {
    id: "meal-planning-agent",
    title: "Meal Planning Agent",
    description:
      "Create intelligent meal planning systems with nutritional analysis and personalized recommendations.",
    category: "Consumer Apps",
    difficulty: "Intermediate",
    technologies: ["React", "Node.js", "MongoDB", "Nutrition APIs"],
    image: "/images/meal-planning-architecture.jpg",
    features: [
      "Nutritional tracking",
      "Personalized plans",
      "Recipe suggestions",
      "Shopping lists",
    ],
    learnMoreUrl: "/use-cases/meal-planning",
  },
  {
    id: "fraud-detection",
    title: "Fraud Detection System",
    description:
      "Build real-time fraud detection systems with machine learning algorithms and anomaly detection.",
    category: "Security",
    difficulty: "Advanced",
    technologies: ["Apache Kafka", "TensorFlow", "ElasticSearch", "Redis"],
    image: "/images/fraud-detection-architecture.jpg",
    features: [
      "Real-time monitoring",
      "Anomaly detection",
      "Risk scoring",
      "Alert management",
    ],
    learnMoreUrl: "/use-cases/fraud-detection",
  },
];

// Filter options
const categories = [
  "All",
  "AI/ML",
  "Architecture",
  "Streaming",
  "Infrastructure",
  "Consumer Apps",
  "Security",
];
const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

export default function StreamingArchitecturesPage() {
  const [filteredUseCases, setFilteredUseCases] =
    useState<UseCase[]>(useCasesData);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");

  // Apply filters when selections change
  const onCategoryChange = (value: string) => {
    setSelectedCategory(value);
    let filtered = useCasesData;

    if (value !== "All") {
      filtered = filtered.filter((useCase) => useCase.category === value);
    }

    if (selectedDifficulty !== "All") {
      filtered = filtered.filter(
        (useCase) => useCase.difficulty === selectedDifficulty
      );
    }

    setFilteredUseCases(filtered);
  };

  const onDifficultyChange = (value: string) => {
    setSelectedDifficulty(value);
    let filtered = useCasesData;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (useCase) => useCase.category === selectedCategory
      );
    }

    if (value !== "All") {
      filtered = filtered.filter((useCase) => useCase.difficulty === value);
    }

    setFilteredUseCases(filtered);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
      case "Advanced":
        return "bg-red-100 text-red-800 hover:bg-red-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Streaming Use Case Architectures
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Explore how companies and partners are using apache dsp data
              streaming platform to transform and accelerate business outcomes.
              To learn more, let s have a conversation.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2 text-white">
              <Filter className="h-5 w-5" />
              <span className="font-medium">Filters:</span>
            </div>

            <Select value={selectedCategory} onValueChange={onCategoryChange}>
              <SelectTrigger className="w-48 bg-white/20 border-white/30 text-white">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={selectedDifficulty}
              onValueChange={onDifficultyChange}
            >
              <SelectTrigger className="w-48 bg-white/20 border-white/30 text-white">
                <SelectValue placeholder="Select Difficulty" />
              </SelectTrigger>
              <SelectContent>
                {difficulties.map((difficulty) => (
                  <SelectItem key={difficulty} value={difficulty}>
                    {difficulty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="ml-auto text-sm text-blue-200">
              Showing {filteredUseCases.length} of {useCasesData.length} use
              cases
            </div>
          </div>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredUseCases.map((useCase) => (
            <Card
              key={useCase.id}
              className="group bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <CardHeader className="pb-4">
                {/* Difficulty Badge (moved outside image) */}
                <Badge
                  className={`mb-3 ${getDifficultyColor(useCase.difficulty)}`}
                >
                  {useCase.difficulty}
                </Badge>

                <CardTitle className="text-white text-xl mb-2 group-hover:text-blue-300 transition-colors">
                  {useCase.title}
                </CardTitle>

                <Badge
                  variant="outline"
                  className="w-fit mb-3 border-blue-400 text-blue-300"
                >
                  {useCase.category}
                </Badge>

                <CardDescription className="text-blue-100 leading-relaxed">
                  {useCase.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4">
                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {useCase.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-blue-600/30 text-blue-200 hover:bg-blue-600/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">
                      Key Features:
                    </h4>
                    <ul className="text-sm text-blue-100 space-y-1">
                      {useCase.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Learn More Button */}
                  <Button
                    className="w-full bg-blue-600/20 hover:bg-blue-600/40 text-blue-200 border border-blue-400/30 transition-all duration-300"
                    variant="outline"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredUseCases.length === 0 && (
          <div className="text-center py-16">
            <Search className="h-16 w-16 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">
              No use cases found
            </h3>
            <p className="text-blue-200 mb-6">
              Try adjusting your filters to see more results.
            </p>
            <Button
              onClick={() => {
                setSelectedCategory("All");
                setSelectedDifficulty("All");
                setFilteredUseCases(useCasesData);
              }}
              variant="outline"
              className="border-blue-400 text-blue-300 hover:bg-blue-600/20"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 text-center backdrop-blur-md border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your Streaming Architecture?
          </h2>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            Get started with our comprehensive guides and expert support to
            implement these architectures in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-400 text-blue-300 hover:bg-blue-600/20"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
