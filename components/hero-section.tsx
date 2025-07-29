import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-blue-600 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-6xl my-8 mx-auto px-4 sm:px-5 lg:px-8 text-center">
          {/* Main content card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-4 md:p-12 text-gray-900 shadow-2xl">
            <h1 className="text-3xl md:text-6xl font-bold mb-5">
              The <span className="text-blue-600">Data Streaming</span> Platform
            </h1>
            
            <p className="text-md md:text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stream, connect, process, and <span className="font-semibold">govern</span> your data with an all-in-one, real-time platform 
              from the pioneers in data streaming. Build faster, scale smarter, and turn data chaos into 
              instantly accessible and usable data products with the market leading Data Streaming 
              Platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-5">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-full font-semibold text-lg">
                Start for Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-4 rounded-full font-semibold text-lg"
              >
                Explore the Platform <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 mb-8">
              Or get started through a cloud marketplace for $1,000 in free credit.
            </p>
            
            {/* Cloud provider logos */}
            <div className="flex items-center justify-center gap-8 mb-12">
              <span className="text-sm font-medium text-gray-500">AWS</span>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded"></div>
                <span className="text-sm font-medium text-gray-500">Amazon Web Services</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-green-500 rounded"></div>
                <span className="text-sm font-medium text-gray-500">Google Cloud</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-400 rounded"></div>
                <span className="text-sm font-medium text-gray-500">Microsoft Azure</span>
              </div>
            </div>
            
            {/* Stats section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-gray-50 rounded-2xl">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">50K+</h3>
                <p className="text-sm text-gray-600">Founded by the original co-creators of Apache Kafka®</p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-2xl">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">3 Trillion</h3>
                <p className="text-sm text-gray-600">Messages written per day</p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-2xl">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">&gt;1 Exabyte</h3>
                <p className="text-sm text-gray-600">Data processed per year</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
