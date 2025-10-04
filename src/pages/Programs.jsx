import { useEffect } from "react";
import { useHeader } from "../context/useHeaderContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, Users } from "lucide-react";
import ProgramsHero from "../assets/images/ProgramsHero.png";

import programsData from "../lib/data/programs.json";
import { useNavigate } from "react-router-dom";
import ContactDialog from "../components/contact/ContactDialog";

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

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact#contact-form");
  };

  return (
    <div className="bg-white-50 px-4 sm:px-6 py-6 md:py-8 lg:px-28 md:px-6 xl:px-32 2xl:px-30 w-full">
      {/* Programs Grid */}
      <p className="text-sm md:text-base text-gray-700 pb-4 md:pb-6">
        Browse our available fitness programs.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {programsData.map(
          ({
            id,
            title,
            description,
            image: { url, alt },
            date,
            participants,
            price,
            duration,
          }) => (
            <div
              key={id}
              className=" bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105"
            >
              {/* Image */}
              <div className="relative h-44 sm:h-48 md:h-52 bg-gray-200 overflow-visible">
                <img
                  src={url}
                  alt={alt}
                  className="w-full h-full object-cover"
                />

                {/* Free Membership Badge */}
                {(id === 5 || id === 6) && (
                  <div className="absolute top-0 -right-3.5 transform translate-y-1/3">
                    <Badge className="bg-primary">Free: Monthly+ members</Badge>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {description}
                </p>

                {/* Program Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex gap-4 items-center">
                    <CalendarDays className="w-5 h-5 text-gray-600" />
                    <span className="text-sm text-gray-700">{date}</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Clock className="w-5 h-5 text-gray-600" />
                    <span className="text-sm text-gray-700">{duration}</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Users className="w-5 h-5 text-gray-600" />
                    <span className="text-sm text-gray-700">
                      {participants}
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4">
                  {price ? (
                    <div>
                      <span className="text-sm text-gray-500">Price: </span>
                      <span className="text-xl font-bold text-gray-900">
                        KES {price}
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

                {/* CTA Button */}
                <ContactDialog programName={title}>
                  <Button className="w-full cursor-pointer bg-primary-75 hover:bg-primary text-white py-2 px-4 rounded-lg">
                    Contact Trainer
                  </Button>
                </ContactDialog>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Programs;
