import { useEffect } from "react";
import { useHeader } from "../context/useHeaderContext";
import { Button } from "@/components/ui/button";
import { Clock, Users } from "lucide-react";
import ProgramsHero from "../assets/images/ProgramsHero.png";

import programsData from "../lib/data/programs.json";

function Programs() {
  const { setTitle, setDescription, setImage } = useHeader();
  const title = "Our Programs";
  const description =
    "Transform your body and mind with our specialized fitness program designed for all levels and goals.";

  useEffect(() => {
    setTitle(title);
    setDescription(description);
    setImage(ProgramsHero);
  }, [setImage, setTitle, setDescription]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
      {/* Programs Grid */}
      <p className="text-sm md:text-base text-gray-700 pb-4 md:pb-6">
        Browse our available fitness programs
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {programsData.map((program) => (
          <div
            key={program.id}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Image */}
            <div className="relative h-44 sm:h-48 md:h-52 bg-gray-200">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover"
              />
              {program.availableForprogrmas && (
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 right-2 sm:right-3">
                  <span className="inline-block bg-green-500 text-white text-xs font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-md">
                    ✓ Available for programs
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-3 sm:p-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {program.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {program.description}
              </p>

              {/* Info */}
              <div className="space-y-1.5 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>{program.duration} • Week</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>{program.participants}</span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-4">
                {program.price ? (
                  <div>
                    <span className="text-sm text-gray-500">Price: </span>
                    <span className="text-xl font-bold text-gray-900">
                      KES {program.price}
                    </span>
                  </div>
                ) : (
                  <div className="h-7 flex items-center">
                    <span className="text-sm text-gray-500">
                      Included in progrmas
                    </span>
                  </div>
                )}
              </div>

              {/* CTA */}
              <Button
                className="w-full bg-primary-75 hover:bg-orange-600 text-white"
                onClick={() => (window.location.href = "/contact")}
              >
                Contact Trainer
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;
