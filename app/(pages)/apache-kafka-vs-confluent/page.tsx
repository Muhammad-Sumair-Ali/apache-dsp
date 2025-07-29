"use client"

import { CheckCircle, Clock, Users, Shield, Zap, Database, BarChart3, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";


export default function ApacheKafkaVsConfluent() {
  const comparisonFeatures = [
    {
      category: "Deployment",
      kafka: "Complex setup and configuration",
      confluent: "One-click deployment in the cloud",
      kafkaDetails: "Requires manual installation, configuration, and ongoing maintenance across multiple servers",
      confluentDetails: "Fully managed service with automated provisioning, scaling, and maintenance"
    },
    {
      category: "Monitoring",
      kafka: "Basic JMX metrics",
      confluent: "Advanced monitoring and alerting",
      kafkaDetails: "Limited built-in monitoring capabilities",
      confluentDetails: "Comprehensive dashboards, proactive alerts, and performance insights"
    },
    {
      category: "Security",
      kafka: "Manual security configuration",
      confluent: "Enterprise-grade security built-in",
      kafkaDetails: "Requires manual setup of SSL, SASL, and ACLs",
      confluentDetails: "Automated encryption, authentication, and role-based access control"
    },
    {
      category: "Scaling",
      kafka: "Manual cluster management",
      confluent: "Automatic scaling and load balancing",
      kafkaDetails: "Manual intervention required for scaling operations",
      confluentDetails: "Elastic scaling based on demand with zero downtime"
    },
    {
      category: "Connectors",
      kafka: "Limited connector ecosystem",
      confluent: "120+ pre-built connectors",
      kafkaDetails: "Basic connectors available through Kafka Connect",
      confluentDetails: "Extensive library of validated, production-ready connectors"
    },
    {
      category: "Stream Processing",
      kafka: "Kafka Streams only",
      confluent: "ksqlDB + Kafka Streams + Flink",
      kafkaDetails: "Limited to Kafka Streams API",
      confluentDetails: "Multiple stream processing options including SQL-based ksqlDB"
    },
    {
      category: "Support",
      kafka: "Community support only",
      confluent: "24/7 enterprise support",
      kafkaDetails: "Relies on community forums and documentation",
      confluentDetails: "Professional support with SLA guarantees"
    },
    {
      category: "Data Governance",
      kafka: "No built-in governance",
      confluent: "Complete data lineage and governance",
      kafkaDetails: "Requires third-party tools for data governance",
      confluentDetails: "Built-in schema registry, data lineage, and compliance tools"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
     

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                A Complete Comparison of Confluent vs. Apache Kafka®
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                While Kafka, like streaming data exists, Confluent adds 
                essential enterprise features that make it production-ready, 
                scalable, and secure. Compare the key differences and see 
                why thousands of companies choose Confluent.
              </p>
              <p className="text-lg mb-8 text-blue-100">
                Learn how they travel together: Confluent is built on Apache Kafka and adds enterprise-grade capabilities 
                that make it the complete data streaming platform your 
                organization needs.
              </p>
              <Button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg">
                Start Free Trial
              </Button>
            </div>
            
            {/* Diagram */}
            <div className="relative">
              <div className="flex items-center justify-center space-x-8">
                {/* Apache Kafka */}
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Database className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Apache Kafka®</h3>
                </div>
                
                {/* Plus Sign */}
                <div className="text-4xl font-bold text-white">+</div>
                
                {/* Confluent */}
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Zap className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Confluent</h3>
                </div>
              </div>
              
              {/* Arrow pointing down */}
              <div className="mt-8 text-center">
                <div className="text-2xl text-white mb-2">↓</div>
                <p className="text-sm text-blue-200">Complete Data Streaming Platform</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Comparison Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Confluent vs Kafka: What&apos;s in a <span className="text-blue-600">Data Streaming Platform</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Apache Kafka is the foundation, but Confluent provides the complete enterprise-grade platform 
              with additional security, management, monitoring, and integration capabilities that companies 
              need for production deployments.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-50 border-b">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Feature</h3>
              </div>
              <div className="p-6 border-l border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Apache Kafka®</h3>
              </div>
              <div className="p-6 border-l border-gray-200 bg-blue-50">
                <h3 className="text-lg font-semibold text-blue-900">Confluent Platform</h3>
              </div>
            </div>

            {comparisonFeatures.map((feature, index) => (
              <div key={index} className="grid grid-cols-3 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.category}</h4>
                </div>
                <div className="p-6 border-l border-gray-200">
                  <div className="mb-2">
                    <span className="text-gray-900 font-medium">{feature.kafka}</span>
                  </div>
                  <p className="text-sm text-gray-600">{feature.kafkaDetails}</p>
                </div>
                <div className="p-6 border-l border-gray-200 bg-blue-50/50">
                  <div className="mb-2 flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-gray-900 font-medium">{feature.confluent}</span>
                  </div>
                  <p className="text-sm text-gray-600">{feature.confluentDetails}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Confluent Over Apache Kafka®?
            </h2>
            <p className="text-xl text-gray-600">
              While Apache Kafka provides the core streaming engine, Confluent adds the enterprise features you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Faster Time to Market</h3>
              <p className="text-gray-600">
                Deploy in minutes instead of months. Pre-built connectors and managed infrastructure 
                let you focus on business logic, not operational overhead.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Security</h3>
              <p className="text-gray-600">
                Built-in encryption, authentication, and compliance features that meet enterprise 
                security requirements out of the box.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Support</h3>
              <p className="text-gray-600">
                24/7 support from the team that created Apache Kafka, with guaranteed SLAs 
                and proactive monitoring.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Analytics</h3>
              <p className="text-gray-600">
                Real-time monitoring, alerting, and analytics tools that provide deep insights 
                into your streaming data pipelines.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Scale</h3>
              <p className="text-gray-600">
                Multi-region deployment, automatic scaling, and disaster recovery capabilities 
                for mission-critical workloads.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Complete Ecosystem</h3>
              <p className="text-gray-600">
                ksqlDB, Schema Registry, Control Center, and 120+ connectors provide a 
                complete data streaming platform.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to See the Difference?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Start with a free trial of Confluent Cloud and experience the complete data streaming platform. 
            No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}