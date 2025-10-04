import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, ShoppingBag, CheckCircle } from "lucide-react";

function ShopComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNotifyMe = async () => {
    if (!email) return;
    setLoading(true);

    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Shop Interest",
          email: email,
          message: `New shop notification signup: ${email}`,
          type: "Shop Launch Notification",
        }),
      });

      setSubmitted(true);
      setEmail("");
    } catch (error) {
      console.error("Failed to submit:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full text-center">
        {/* Icon */}
        <div className="mb-8">
          <ShoppingBag className="w-20 h-20 text-primary-75 mx-auto mb-4" />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Shop Coming Soon
        </h1>

        <p className="text-lg text-gray-600 mb-12">
          We're working on bringing you gym merchandise, supplements, and fitness gear.
        </p>

        {/* Email Notification */}
        {!submitted ? (
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-75 focus:border-transparent"
              />
              <Button
                onClick={handleNotifyMe}
                disabled={loading || !email}
                className="bg-primary-75 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium"
              >
                {loading ? "Sending..." : "Notify Me"}
              </Button>
            </div>
          </div>
        ) : (
          <div className="mb-12 bg-green-50 border border-green-200 rounded-lg p-6 max-w-md mx-auto">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
            <p className="text-green-800 font-medium">
              Thanks! We'll notify you when the shop launches.
            </p>
          </div>
        )}

        {/* Quick Links Section */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-gray-600 mb-6">
            Looking for something specific?
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <a 
              href="/programs"
              className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg hover:border-primary-75 hover:shadow-md transition-all"
            >
              <svg className="w-8 h-8 text-gray-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Programs</span>
            </a>

            <a 
              href="/membership"
              className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg hover:border-primary-75 hover:shadow-md transition-all"
            >
              <svg className="w-8 h-8 text-gray-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Membership</span>
            </a>

            <a 
              href="/gallery"
              className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg hover:border-primary-75 hover:shadow-md transition-all"
            >
              <svg className="w-8 h-8 text-gray-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Gallery</span>
            </a>

            <a 
              href="/contact"
              className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg hover:border-primary-75 hover:shadow-md transition-all"
            >
              <svg className="w-8 h-8 text-gray-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Contact</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopComingSoon;