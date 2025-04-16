import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-11/12 mx-auto h-[35vh] lg:h-[40vh] bg-black/50 bg-blend-darken rounded-3xl lg:mt-8 mt-5 shadow-sm overflow-x-hidden">
      <Image
        src="/images/heroImage.jpg"
        alt="Image"
        fill
        quality={100}
        className="absolute object-center object-cover z-[-1]"
      />
      <div className="absolute inset-0 bg-green-600/40 rounded-3xl z-0"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-4 px-4">
        <h1 className="text-white font-semibold lg:text-2xl text-md w-fit">
          What are you looking for?
        </h1>
        <div className="flex items-center space-x-2 w-full max-w-md">
          <Input
            placeholder="I'm looking for..."
            className="text-white placeholder-white flex-1"
          />
          <Button className="shrink-0">
            <Search className="text-white" />
          </Button>
        </div>
      </div>
    </section>
  );
}
