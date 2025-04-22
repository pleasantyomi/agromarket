/* eslint-disable @typescript-eslint/no-unused-vars */
import Container from "@/components/productDetails/container";
import { type Metadata, type ResolvingMetadata } from "next";

interface ProductDetailsProps {
  params: Promise<{id: string}>;
}

export default async function ProductDetails({ params }: ProductDetailsProps) {
  const id = await params;

  return (
    <div>
      <Container params={id} />
    </div>
  );
}
