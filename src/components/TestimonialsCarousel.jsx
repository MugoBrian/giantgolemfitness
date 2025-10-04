import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function TestimonialsCarousel() {
  // Mock avatar - replace with your actual avatar import
  const Avatar =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='16' fill='%23e5e7eb'/%3E%3Cpath d='M16 16c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' fill='%239ca3af'/%3E%3C/svg%3E";

  const testimonials = [
    {
      id: 1,
      text: "Professional and disciplined trainers available through out. I like the fact that they help you track your progress overtime.",
      name: "Rachel Waithaka",
      rating: 5,
    },
    {
      id: 2,
      text: "Good services with very friendly staff🤗also it's super clean.",
      name: "Joan Wachira",
      rating: 5,
    },
    {
      id: 3,
      text: "I recently embarked on a remarkable fitness journey at Giant Golem strength and fitness , and I can't help but share my extraordinary experience ...",
      name: "Kelvin Kilonzo",
      rating: 5,
    },
    {
      id: 4,
      text: "It's where all your fitness goals can be achieved!!Make an effort to visit 💪🏽✊🏽.",
      name: "Joseph Masingo",
      rating: 5,
    },
  ];
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-full flex justify-center"
    >
      <CarouselContent>
        {testimonials.map(({ id, text, name, rating }) => (
          <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3">
            <Card className="bg-primary-75 p-6 gap-6 rounded-lg flex border-none flex-col md:w-auto flex-shrink">
              <CardTitle className="flex flex-row gap-2 w-full">
                {Array.from({ length: rating }).map((_, index) => (
                  <BsStarFill
                    key={index}
                    className="h-5 w-4"
                    strokeWidth="1.5"
                    stroke="black"
                    color="white"
                  />
                ))}
              </CardTitle>

              <CardContent className="font-family-body italic text-left text-lg p-0 line-clamp-2">
                {text}
              </CardContent>

              <CardFooter className="w-full flex flex-row gap-6 justify-between items-center p-0">
                <div className="flex flex-row items-center gap-2">
                  <img
                    src={Avatar}
                    alt="User Empty Profile image"
                    className="h-8 w-8"
                  />
                  <p className="text-gray-300 line-clamp-1">{name}</p>
                </div>
                <Link to="#" className="underline text-gray-300">
                  Read Review
                </Link>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="cursor-pointer" />
      <CarouselNext className="hidden md:flex cursor-pointer" />
    </Carousel>
  );
}
