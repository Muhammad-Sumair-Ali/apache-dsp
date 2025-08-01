/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SuccessPage() {
  const [sessionData, setSessionData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (sessionId) {
      fetchSessionData();
    } else {
      setError("No session ID found");
      setLoading(false);
    }
  }, [sessionId]);

  const fetchSessionData = async () => {
    try {
      const response = await fetch(`/api/checkout-session?session_id=${sessionId}`);
      if (response.ok) {
        const data = await response.json();
        setSessionData(data);
      } else {
        setError("Failed to fetch session data");
      }
    } catch {
      setError("An error occurred while fetching session data");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600">Processing your subscription...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-red-600 text-2xl">⚠️</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link href="/confluent-pricing">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full">
              Back to Pricing
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Subscription Successful!
        </h1>
        
        <p className="text-gray-600 mb-6">
          Thank you for subscribing! Your payment has been processed successfully.
        </p>

        {sessionData && (
          <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
            <h3 className="font-semibold text-gray-900 mb-2">Subscription Details:</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p><span className="font-medium">Plan:</span> {sessionData.planName}</p>
              <p><span className="font-medium">Amount:</span> ${(sessionData.amount / 100).toFixed(2)}</p>
              <p><span className="font-medium">Email:</span> {sessionData.customerEmail}</p>
            </div>
          </div>
        )}

        <div className="space-y-3">
          <Link href="/admin" className="block">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full w-full">
              Go to Dashboard
            </Button>
          </Link>
          
          <Link href="/pricing" className="block">
            <Button 
              variant="outline" 
              className="border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-6 py-3 rounded-full w-full"
            >
              Back to Pricing
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}