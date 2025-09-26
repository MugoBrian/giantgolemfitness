import { BiCheck } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Link } from "react-router-dom";

function MembershipCard({ frequency, price, features, bold, save }) {
  return (
    <Card
      className={`bg-white p-8 rounded-2xl flex flex-col gap-4 relative hover:shadow-lg transition-shadow ${
        frequency == "Weekly" ? "border-2 border-primary-75" : "border-none"
      }`}
    >
      {frequency == "Weekly" && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <CardTitle className="flex flex-row justify-center gap-2 w-full">
        <h4 className="font-semibold text-2xl font-family-heading text-center">
          {frequency}
        </h4>
      </CardTitle>
      <CardDescription className="flex justify-center font-family-body">
        <div className="flex flex-col justify-center items-center">
          {save !== "0" && (
            <div className="text-sm text-gray-500 line-through mb-1">
              {save}
            </div>
          )}
          <div className="text-3xl flex flex-row justify-center">
            <p className="align-super text-sm font-family-body font-bold">
              KES
            </p>
            <p className="text-4xl font-family-body font-semibold">{price}</p>
          </div>
          {bold && (
            <p className="text-green-600 text-sm font-semibold mt-1">{bold}</p>
          )}
        </div>
      </CardDescription>
      <CardContent className="flex flex-col gap-3  pl-0 h-2/3">
        <div className="flex flex-col gap-3 justify-center h-full">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-2">
              <BiCheck className="h-6 w-6 text-green-500" />
              <p
                className={`font-family-body ${
                  feature.startsWith("Save")
                    ? "text-green-600 font-bold"
                    : "text-gray-700"
                }`}
              >
                {feature}
              </p>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="w-full flex gap-4 justify-between items-center p-0">
        <Link
          to="/membership"
          className="text-gray-600 hover:text-primary-75 underline transition-colors cursor-pointer"
        >
          Learn More
        </Link>
        <Button className="px-6 py-3 cursor-pointer rounded-full text-white bg-black hover:bg-primary transition-colors">
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
}

export default MembershipCard;
