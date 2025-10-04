import { Asterisk } from "lucide-react";
import MpesaImage from "../../assets/images/MpesaImage.png";

function PaymentSection() {
  return (
    <div>
      <div className="flex flex-col gap-8 text-left">
        <div className="flex flex-col gap-3">
          <p className="font-bold text-2xl font-family-heading">
            Pay For Membership
          </p>
          <p>
            Pay via MPESA or visit our
            <a
              className="pl-1 pr-0.5 underline font-normal"
              href=" https://www.google.com/maps/place/GIANT+GOLEM+STRENGTH+%26+FITNESS+CENTRE/@-1.1356285,36.9776726,774m/data=!3m2!1e3!4b1!4m6!3m5!1s0x182f47e77eaaf001:0xf08680bd72ddf3a1!8m2!3d-1.1356285!4d36.9776726!16s%2Fg%2F11rck5n_w8?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
            >
              location
            </a>{" "}
            and pay in cash
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full h-full">
          <img
            src={MpesaImage}
            alt="Mpesa Image Logo"
            className="h-30 w-30 md:h-60 md:w-60"
          />
          <div className="flex flex-col justify-around text-left gap-4 md:gap-2">
            <p className="text-lg font-semibold">Buy Goods & Services</p>
            <p>
              Till Number: <span className="font-bold">9979827</span>
            </p>
            <p>
              Amount: <span className="font-bold">Membership Amount</span>
            </p>
            <p className="font-bold">GIANT GOLEM STRENGTH & FITNESS CENTRE</p>
            <p className="flex text-sm font-light">
              <span>
                <Asterisk className="w-3 h-3 text-red-800" />
              </span>
              That is the available options at the moment, more payment
              methods will be added.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentSection;
