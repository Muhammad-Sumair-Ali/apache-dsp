"use client"
import {
  Database,
  Activity,
  ExternalLink,
  Shield,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Dashboard = () => {

  return (
    <div className="min-h-screen bg-gray-50">
        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Good evening, Muhammad
              </h1>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Getting Started Section */}
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Getting your data in motion is quick and easy
                    </h2>
                    <p className="text-gray-600 mb-8">
                      Start generating data and developing your first pipeline
                      by adding a cluster.
                    </p>

                    {/* Action Cards */}
                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                      <div className="flex flex-col items-center p-6 border-2 border-dashed border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                          <Database className="h-6 w-6 text-gray-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          Source Data
                        </span>
                      </div>

                      <div className="flex flex-col items-center p-6 bg-green-50 border-2 border-green-200 rounded-lg relative">
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                            Start here
                          </span>
                        </div>
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                          <Activity className="h-6 w-6 text-green-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          Add Cluster
                        </span>
                      </div>

                      <div className="flex flex-col items-center p-6 border-2 border-dashed border-gray-200 rounded-lg hover:border-gray-300 transition-colors opacity-50">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                          <Database className="h-6 w-6 text-gray-400" />
                        </div>
                        <span className="text-sm font-medium text-gray-400">
                          Sink Data
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Recommended Section */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Recommended
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                            <Shield className="h-5 w-5 text-indigo-600" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg">
                              Enforce MFA for all users
                            </CardTitle>
                            <CardDescription className="text-sm text-gray-600 mt-1">
                              Require all users of your organization who sign in
                              locally to enroll in multi-factor authentication.
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0 pb-6">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-blue-600 border-blue-200 hover:bg-blue-50"
                        >
                          Get started
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                            <BarChart3 className="h-5 w-5 text-teal-600" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg">
                              Produce sample data
                            </CardTitle>
                            <CardDescription className="text-sm text-gray-600 mt-1">
                              Set up the Datagen Connector to produce sample
                              events.
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0 pb-6">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-blue-600 border-blue-200 hover:bg-blue-50"
                        >
                          Get started
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="lg:col-span-1">
                <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
                  <CardContent className="p-6 relative">
                    <div className="relative z-10">
                      <h3 className="text-lg font-semibold mb-2">
                        Explore with an interactive demo
                      </h3>
                      <p className="text-sm text-gray-300 mb-4">
                        See how Confluent Cloud helps power a ride sharing app
                        in this 5-minute interactive demo!
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900"
                      >
                        Launch demo
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-teal-400 rounded-lg opacity-20 transform rotate-12"></div>
                    <div className="absolute bottom-4 right-8 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-400 rounded-lg opacity-30 transform -rotate-12"></div>
                    <div className="absolute bottom-8 right-4 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg opacity-25 transform rotate-45"></div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
  );
};

export default Dashboard;
