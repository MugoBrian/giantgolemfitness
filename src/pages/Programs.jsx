import { useEffect } from "react";
import { useHeader } from "../context/useHeaderContext";
import { Button } from "@/components/ui/button";
import { Clock, Users } from "lucide-react";
import ProgramsHero from "../assets/images/ProgramsHero.png";

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

  const programs = [
    {
      id: 1,
      title: "BODY BUILDING",
      description:
        "Structured training focused on muscle growth and strength development.",
      image: "/api/placeholder/400/300",
      duration: "3 Days",
      participants: "Individual",
      price: null,
      availableForMembership: true,
    },
    {
      id: 2,
      title: "FAT WEIGHT LOSS",
      description:
        "Focused training aimed to help clients achieve their weight-loss goals.",
      image: "/api/placeholder/400/300",
      duration: "5 Days",
      participants: "Individual",
      price: null,
      availableForMembership: true,
    },
    {
      id: 3,
      title: "POWERLIFTING",
      description: "Focused body lifting that build muscular strength.",
      image: "/api/placeholder/400/300",
      duration: "3 Days",
      participants: "Individual",
      price: 700,
      availableForMembership: false,
    },
    {
      id: 4,
      title: "CARDIO",
      description:
        "High-intensity cardio sessions that aid clients with endurance.",
      image: "/api/placeholder/400/300",
      duration: "6 Days",
      participants: "Individual",
      price: null,
      availableForMembership: true,
    },
    {
      id: 5,
      title: "STRENGTH TRAINING",
      description: "Build overall strength and muscle endurance.",
      image: "/api/placeholder/400/300",
      duration: "4 Days",
      participants: "Individual",
      price: 500,
      availableForMembership: false,
    },
    {
      id: 6,
      title: "FLEXIBILITY",
      description: "Improve range of motion and prevent injuries.",
      image: "/api/placeholder/400/300",
      duration: "2 Days",
      participants: "Individual",
      price: null,
      availableForMembership: true,
    },
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
      {/* Programs Grid */}
      <p className="text-sm md:text-base text-gray-700 pb-4 md:pb-6">
        Browse our available fitness programs
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols- gap-4 md:gap-6">
        {programs.map((program) => (
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
              {program.availableForMembership && (
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 right-2 sm:right-3">
                  <span className="inline-block bg-green-500 text-white text-xs font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-md">
                    ✓ Available for Membership
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
                      Included in membership
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
