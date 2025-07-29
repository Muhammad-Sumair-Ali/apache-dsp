"use client"
import { useState } from "react";
import { Calculator, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CostEstimator() {
  const [workloadType, setWorkloadType] = useState("Typical");
  const [throughput, setThroughput] = useState(1000);
  const [storageRetention, setStorageRetention] = useState(7);
  const [region, setRegion] = useState("us-east-1");

  const workloadTypes = ["Light", "Typical", "Heavy", "Premium", "Enterprise"];
  
  const calculateSavings = () => {
    // Simple calculation for demo
    const baseCost = throughput * 0.05 + storageRetention * 10;
    const savings = Math.round((baseCost * 0.49) * 100) / 100;
    return { baseCost, savings, percentage: 49 };
  };

  const { baseCost, savings, percentage } = calculateSavings();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Confluent Cost Estimator
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Pricing is per cluster, with unlimited topics and partitions. 
            Get a personalized cost estimate and see the value Confluent delivers.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cost Estimator Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Estimate your costs</h2>
                
                {/* Workload Type Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-4">
                    Workload type/size
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {workloadTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => setWorkloadType(type)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          workloadType === type
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Throughput Slider */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Monthly throughput: {throughput}GB
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="10000"
                    step="100"
                    value={throughput}
                    onChange={(e) => setThroughput(Number(e.target.value))}
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>100GB</span>
                    <span>10TB</span>
                  </div>
                </div>

                {/* Storage Retention */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Storage retention: {storageRetention} days
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={storageRetention}
                    onChange={(e) => setStorageRetention(Number(e.target.value))}
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 day</span>
                    <span>30 days</span>
                  </div>
                </div>

                {/* Region Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Region
                  </label>
                  <select 
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="us-east-1">US East (N. Virginia)</option>
                    <option value="us-west-2">US West (Oregon)</option>
                    <option value="eu-west-1">Europe (Ireland)</option>
                    <option value="ap-southeast-1">Asia Pacific (Singapore)</option>
                  </select>
                </div>

                {/* Cost Display */}
                <div className="bg-green-50 rounded-2xl p-6 text-center">
                  <div className="text-sm text-gray-600 mb-2">Total estimated vs baseline pricing</div>
                  <div className="text-5xl font-bold text-green-600 mb-2">{percentage}%</div>
                  <div className="text-gray-700">
                    <span className="text-2xl font-bold">${savings}</span> estimated monthly savings
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Visual Elements */}
          <div className="space-y-6">
            {/* Network Visualization */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <div className="relative w-full h-48">
                  {/* Animated network visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Central node */}
                      <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center shadow-lg">
                        <Calculator className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Surrounding nodes */}
                      {[...Array(8)].map((_, index) => {
                        const angle = (index * 45) * (Math.PI / 180);
                        const radius = 80;
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;
                        
                        return (
                          <div
                            key={index}
                            className="absolute w-8 h-8 bg-white/20 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                            style={{
                              left: `calc(50% + ${x}px)`,
                              top: `calc(50% + ${y}px)`,
                            }}
                          >
                          </div>
                        );
                      })}
                      
                      {/* Connection lines */}
                      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                        {[...Array(8)].map((_, index) => {
                          const angle = (index * 45) * (Math.PI / 180);
                          const x1 = 50 + Math.cos(angle) * 8;
                          const y1 = 50 + Math.sin(angle) * 8;
                          const x2 = 50 + Math.cos(angle) * 32;
                          const y2 = 50 + Math.sin(angle) * 32;
                          
                          return (
                            <line
                              key={index}
                              x1={`${x1}%`} y1={`${y1}%`}
                              x2={`${x2}%`} y2={`${y2}%`}
                              stroke="rgba(255,255,255,0.3)"
                              strokeWidth="1"
                              strokeDasharray="2,2"
                            />
                          );
                        })}
                      </svg>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Why Choose Confluent?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-white/90">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm">Up to 10x better price/performance</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white/90">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm">Fully managed service</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white/90">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm">Enterprise-grade security</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white/90">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm">24/7 expert support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <Card className="mt-12 bg-white/10 backdrop-blur-sm border-white/20 rounded-3xl overflow-hidden">
          <CardContent className="p-8">
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-4">
                Based on your inputs, you&apos;re saving {percentage}%.
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                See additional discounts you&apos;re eligible for as you scale.
                Get a detailed cost breakdown and explore enterprise pricing options.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-sm text-blue-200 mb-1">Estimated Monthly Cost</div>
                  <div className="text-2xl font-bold">${(baseCost - savings).toFixed(2)}</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-sm text-blue-200 mb-1">Annual Savings</div>
                  <div className="text-2xl font-bold">${(savings * 12).toFixed(2)}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 font-semibold text-lg">
                  Get detailed pricing
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 font-semibold text-lg">
                  Contact sales team
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}