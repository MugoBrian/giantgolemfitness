import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Dumbbell,
  DumbbellIcon,
  Images,
  Smartphone,
  Users,
} from "lucide-react";

function NotFound() {
  return (
    <div className="min-h-screen pt-8 bg-white-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="text-9xl font-bold text-gray-300">4</span>
            <Dumbbell className="w-24 h-24 text-primary animate-bounce" />
            <span className="text-9xl font-bold text-gray-300">4</span>
          </div>
        </div>

        {/* Main Message */}
        <h1 className="font-family-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>

        <p className="text-xl text-gray-600 mb-2">
          Looks like you've wandered off the workout floor!
        </p>

        <p className="text-gray-500 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center mb-0">
          <Link to="/">
            <Button
              size="lg"
              className="bg-primary-75 hover:bg-primary text-white cursor-pointer px-8 py-6 rounded-full font-semibold flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="bg- rounded-2xl shado p-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Looking for something specific?
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              to="/programs"
              className="p-4 rounded-lg border border-gray-200 hover:border-primary-75 hover:bg-orange-50 transition-all group"
            >
              <div className="flex justify-center text-2xl mb-2 group-hover:scale-110 transition-transform">
                <DumbbellIcon />
              </div>
              <p className="text-sm font-medium text-gray-700">Programs</p>
            </Link>

            <Link
              to="/membership"
              className="p-4 rounded-lg border border-gray-200 hover:border-primary-75 hover:bg-orange-50 transition-all group"
            >
              <div className="flex justify-center text-2xl mb-2 group-hover:scale-110 transition-transform">
                <Users />
              </div>
              <p className="text-sm font-medium text-gray-700">Membership</p>
            </Link>

            <Link
              to="/gallery"
              className="p-4 rounded-lg border border-gray-200 hover:border-primary-75 hover:bg-orange-50 transition-all group"
            >
              <div className="flex justify-center text-2xl mb-2 group-hover:scale-110 transition-transform">
                <Images />
              </div>
              <p className="text-sm font-medium text-gray-700">Gallery</p>
            </Link>

            <Link
              to="/contact"
              className="p-4 rounded-lg border border-gray-200 hover:border-primary-75 hover:bg-orange-50 transition-all group"
            >
              <div className="flex justify-center text-2xl mb-2 group-hover:scale-110 transition-transform">
                <Smartphone />
              </div>
              <p className="text-sm font-medium text-gray-700">Contact</p>
            </Link>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-500 mt-8 mb-2">
          Error Code: 404 | Page Not Found
        </p>
      </div>
    </div>
  );
}

export default NotFound;
