import { Database, Zap, Shield, BarChart3, Globe, ArrowRight, Users, Settings, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";

export default function PlatformSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div>
            <div className="mb-4">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                The Confluent Data Streaming Platform
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              A Central Nervous System for Your Entire Organization
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Kafka is the de-facto standard for event streaming – and is the nerve center of the cloud stack. Confluent makes it accessible with a complete, fully managed, cloud-native platform. The result is increased agility, greater resilience, and constant innovation throughout the enterprise.
            </p>
            <p className="text-gray-600 mb-8">
              Whether you choose to run your workloads in the cloud, on premises, or in a hybrid deployment, the Confluent Platform sets data in motion and puts it to work across your organization.
            </p>
            <Button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold">
              Explore the Platform
            </Button>
          </div>

          {/* Right Side - Circular Diagram */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Central Circle - Confluent */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-white rounded-full shadow-lg border-4 border-blue-100 flex items-center justify-center z-10">
                  <div className="text-center">
                    <Database className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">CONFLUENT</div>
                  </div>
                </div>
              </div>

              {/* Surrounding Circles */}
              {/* Producers */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
                <div className="w-20 h-20 bg-white rounded-full shadow-lg border-2 border-purple-100 flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                    <div className="text-xs font-semibold text-gray-900">PRODUCERS</div>
                  </div>
                </div>
              </div>

              {/* Storage */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8">
                <div className="w-20 h-20 bg-white rounded-full shadow-lg border-2 border-green-100 flex items-center justify-center">
                  <div className="text-center">
                    <Database className="w-5 h-5 text-green-600 mx-auto mb-1" />
                    <div className="text-xs font-semibold text-gray-900">STORAGE</div>
                  </div>
                </div>
              </div>

              {/* Connect */}
              <div className="absolute top-1/2 right-0 transform translate-x-8 -translate-y-1/2">
                <div className="w-20 h-20 bg-white rounded-full shadow-lg border-2 border-blue-100 flex items-center justify-center">
                  <div className="text-center">
                    <Zap className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                    <div className="text-xs font-semibold text-gray-900">CONNECT</div>
                  </div>
                </div>
              </div>

              {/* Stream Processing */}
              <div className="absolute top-1/2 left-0 transform -translate-x-8 -translate-y-1/2">
                <div className="w-20 h-20 bg-white rounded-full shadow-lg border-2 border-orange-100 flex items-center justify-center">
                  <div className="text-center">
                    <Settings className="w-5 h-5 text-orange-600 mx-auto mb-1" />
                    <div className="text-xs font-semibold text-gray-900">STREAM</div>
                  </div>
                </div>
              </div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                {/* Top line */}
                <line 
                  x1="50%" y1="20%" 
                  x2="50%" y2="40%" 
                  stroke="#E5E7EB" 
                  strokeWidth="2" 
                  strokeDasharray="5,5"
                />
                {/* Bottom line */}
                <line 
                  x1="50%" y1="60%" 
                  x2="50%" y2="80%" 
                  stroke="#E5E7EB" 
                  strokeWidth="2" 
                  strokeDasharray="5,5"
                />
                {/* Right line */}
                <line 
                  x1="60%" y1="50%" 
                  x2="80%" y2="50%" 
                  stroke="#E5E7EB" 
                  strokeWidth="2" 
                  strokeDasharray="5,5"
                />
                {/* Left line */}
                <line 
                  x1="40%" y1="50%" 
                  x2="20%" y2="50%" 
                  stroke="#E5E7EB" 
                  strokeWidth="2" 
                  strokeDasharray="5,5"
                />
              </svg>

              {/* Floating dots for visual appeal */}
              <div className="absolute top-10 right-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-10 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-20 left-20 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-20 right-20 w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}