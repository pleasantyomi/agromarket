import Image from "next/image";
import Line from "@/components/ui/line";
import { Button } from "@/components/ui/button";
import { cookies } from "next/headers";
import { createClient } from "@/lib/supabase/server";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, ShoppingCart } from "lucide-react";
import Link from "next/link";

interface ContainerProps {
  params: {
    id: string;
  };
}

export default async function Container({ params }: ContainerProps) {
  if (!params || !params.id) {
    return (
      <Alert variant="destructive" className="w-10/12 mx-auto lg:mt-8 mt-5">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Product ID not provided.</AlertDescription>
      </Alert>
    );
  }

  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", params.id)
    .single();

  if (error || !product) {
    return (
      <Alert variant="destructive" className="w-10/12 mx-auto lg:mt-8 mt-5">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Failed to load product.</AlertDescription>
      </Alert>
    );
  }

  return (
    <section className="lg:mt-8 mt-5">
      <Image
        src="/images/heroImae.jpg"
        alt={product.productName}
        width={1200}
        height={800}
        quality={100}
        className="w-11/12 lg:h-[60vh] h-[50vh] mx-auto rounded-2xl object-cover"
      />

      <Line className="w-11/12 mx-auto lg:my-8 my-5" />

      <div className="lg:w-9/12 w-11/12 mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold text-left">
            {product.productName}
          </h1>
          <p className="text-2xl font-semibold text-primary">
            &#8358; {product.productPrice}
          </p>
        </div>
        <p className="text-left text-gray-500 mb-6">
          {product.productDescription}
        </p>
      </div>

      <div className="py-10 flex gap-4 lg:w-9/12 w-11/12 mx-auto">
        <Button className="flex-1 text-lg font-semibold">
          <ShoppingCart className="mr-2 h-5 w-5" /> Buy Now
        </Button>
        <Link href="/products">
          <Button variant="outline" className="text-lg font-semibold">
            Back to Products
          </Button>
        </Link>
      </div>
    </section>
  );
}
