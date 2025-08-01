
"use client"

import type React from "react"
import { ArrowRight, User, Mail, Building, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useAuthentication } from "@/hooks/useAuthentication"

export default function Register() {
  const {
    registerFormData,
    handleRegister,
    handleRegisterChange,
    isLoading,
    getFieldError,
    getGeneralErrors
  } = useAuthentication();

  const generalErrors = getGeneralErrors();

  return (
    <div className="min-h-screen flex items-center bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-800 justify-center py-12 px-4">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row rounded-xl overflow-hidden shadow-2xl backdrop-blur-3xl bg-white/10">
        {/* Left Side - Content */}
        <div className="flex-1 p-6 md:p-12 text-white">
          <div className="max-w-2xl">
            {/* Header */}
            <div className="mb-8">
              <p className="text-blue-200 text-sm mb-2">ONLINE TALK</p>
              <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Apache Platform: How to Achieve Enterprise-Grade Security and Automate Kafka Operations
              </h1>
              <p className="text-blue-100 text-base md:text-lg mb-8">
                In this session we&apos;ll share practical advice on how to overcome the challenges of managing a
                self-managed, improving sensitive data, and orchestrating cross-organizational processes by sharing
                examples and best practices to help you translate multiple benefits of state data architecture for your
                platform teams.
              </p>
            </div>
            {/* What you'll learn */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">What you&apos;ll learn:</h3>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>
                    Get infrastructure costs by streaming Kafka&apos;s ZooKeeper dependency, simplifying architecture,
                    and reducing operational complexity
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>
                    Secure your most sensitive data with Client-Side Field Level Encryption (CSFLE), enforcing that the
                    right client-side components can access your data
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>
                    Monitor essential and lease with two new open-source Confluent Control Center features, Balancing
                    and Optimization capabilities, and BI platform integrations
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Right Side - Registration Form */}
        <div className="w-full lg:w-[450px] p-6 md:p-8 bg-white">
          <Card className="border-0 shadow-none">
            <CardContent className="p-0">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Register Now</h2>
              </div>

              {/* Display general errors */}
              {generalErrors.length > 0 && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
                  {generalErrors.map((error, index) => (
                    <p key={index} className="text-red-600 text-sm">{error}</p>
                  ))}
                </div>
              )}

              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Email
                  </Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-4 w-4 text-gray-400" />
                    </div>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={registerFormData.email}
                      onChange={handleRegisterChange}
                      className={`w-full pl-10 pr-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm ${
                        getFieldError('email') ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="you@company.com"
                    />
                  </div>
                  {getFieldError('email') && (
                    <p className="mt-1 text-sm text-red-600">{getFieldError('email')}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-4 w-4 text-gray-400" />
                    </div>
                    <Input
                      id="password"
                      type="password"
                      name="password"
                      required
                      value={registerFormData.password}
                      onChange={handleRegisterChange}
                      className={`w-full pl-10 pr-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm ${
                        getFieldError('password') ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="********"
                    />
                  </div>
                  {getFieldError('password') && (
                    <p className="mt-1 text-sm text-red-600">{getFieldError('password')}</p>
                  )}
                </div>
           

                <div>
                  <Label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-4 w-4 text-gray-400" />
                    </div>
                    <Input
                      id="firstName"
                      type="text"
                      name="firstName"
                      required
                      value={registerFormData.firstName}
                      onChange={handleRegisterChange}
                      className={`w-full pl-10 pr-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm ${
                        getFieldError('firstName') ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="John"
                    />
                  </div>
                  {getFieldError('firstName') && (
                    <p className="mt-1 text-sm text-red-600">{getFieldError('firstName')}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    name="lastName"
                    required
                    value={registerFormData.lastName}
                    onChange={handleRegisterChange}
                    className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm ${
                      getFieldError('lastName') ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Doe"
                  />
                  {getFieldError('lastName') && (
                    <p className="mt-1 text-sm text-red-600">{getFieldError('lastName')}</p>
                  )}
                </div>

                {/* Additional fields for company info - these would need to be added to the hook's form data */}
                <div>
                  <Label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building className="h-4 w-4 text-gray-400" />
                    </div>
                    <Input
                      required
                      value={registerFormData.companyName}
                      onChange={handleRegisterChange}
                      id="companyName"
                      type="text"
                      name="companyName"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
                    Job Title
                  </Label>
                  <Input
                   required
                      value={registerFormData.jobTitle}
                      onChange={handleRegisterChange}
                    id="jobTitle"
                    type="text"
                    name="jobTitle"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Software Engineer"
                  />
                </div>

                {/* Terms acceptance checkbox */}
                <div className="flex items-start">
                  <input
                    id="acceptTerms"
                    name="acceptTerms"
                    type="checkbox"
                    checked={registerFormData.acceptTerms}
                    onChange={handleRegisterChange}
                    className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <Label htmlFor="acceptTerms" className="ml-2 text-sm text-gray-700">
                    I agree to the{" "}
                    <Link href="#" className="text-blue-600 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>
                {getFieldError('acceptTerms') && (
                  <p className="text-sm text-red-600">{getFieldError('acceptTerms')}</p>
                )}

                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-2.5 rounded-md font-medium flex items-center justify-center"
                  >
                    {isLoading ? 'Registering...' : 'Register for Free'}
                    {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </div>
              </form>

              <div className="mt-6 text-xs text-gray-500">
                <p>
                  Already have an account?{" "}
                  <Link href="/login" className="text-blue-600 hover:underline">
                    Sign in here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}