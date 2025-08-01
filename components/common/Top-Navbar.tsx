import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const TopNavbar = () => {
  return (
    <div className="bg-blue-600 text-white py-2 px-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between text-sm">
        {/* Left side - Main message */}
        <div className="flex items-center space-x-2">
          <span className="text-white">
            Simplify & secure Kafka at scale—see what&apos;s new in Confluent Platform 6.0
          </span>
          <span className="text-blue-200">|</span>
          <a 
            href="/register" 
            className="text-white hover:text-blue-200 transition-colors duration-200 flex items-center space-x-1 underline font-medium"
          >
            <span>Register Now</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        {/* Right side - Login/Contact links */}
        <div className="flex items-center space-x-6 -ml-6">
          <Link
            href="/login" 
            className="text-white underline hover:text-blue-200 transition-colors duration-200 font-medium"
          >
            Login
          </Link>
          <Link
            href="/contact" 
            className="text-white underline hover:text-blue-200 transition-colors duration-200 font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;