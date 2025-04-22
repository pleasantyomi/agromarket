"use client";

import Logo from "@/components/layout/logo";
import Line from "@/components/ui/line";
import { Button } from "@/components/ui/button";
// import { useState, useEffect } from "react";
// import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const router = useRouter();
  const handleSellClick = () => {
    router.push("/login");
  };
  return (
    <section
      className={`w-11/12 mx-auto 
      `}
    >
      <div className="flex justify-between lg:py-5 py-2">
        <Logo className="" />
        <Button
          onClick={handleSellClick}
          className="font-semibold uppercase lg:text-base text-[14px]"
        >
          sell
        </Button>
      </div>
      <Line className="w-full" />
    </section>
  );
}
