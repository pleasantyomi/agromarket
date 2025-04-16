/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Line from "@/components/ui/line";
import Link from "next/link";

interface ProductCardProps {
  id: number;
  productName: string;
  productDescription: string;
  productImage: string;
  productPrice: string;
}

export default function ProductCard({
  id,
  productName,
  productDescription,
  productImage,
  productPrice,
}: ProductCardProps) {
  return (
    <div>
      <Card className="w-full rounded-xl bg-white shadow-md">
        <CardHeader>
          <Image
            src="/images/heroImage.jpg"
            alt={productName}
            width={600}
            height={600}
            quality={100}
            className="w-full h-[30vh] rounded-lg object-cover"
          />
        </CardHeader>

        <CardContent>
          <CardTitle className="font-semibold lg:text-2xl pb-2">
            {productName}
          </CardTitle>
          <CardDescription className="text-[14px] text-gray-400 pb-2">
            {productDescription}
          </CardDescription>
          <p className="font-semibold text-primary text-left">
            &#8358; {productPrice}{" "}
          </p>
        </CardContent>

        <div>
          <Line className="w-full" />
        </div>

        <CardFooter className="flex justify-between">
          <Link href={`/${id}`}>
            <Button variant="outline">View Details</Button>
          </Link>
          <Link href={`/checkout/${id}`}>
            <Button>Buy</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
