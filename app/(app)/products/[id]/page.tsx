/* eslint-disable @typescript-eslint/no-unused-vars */
import Container from "@/components/productDetails/container";
import { type Metadata, type ResolvingMetadata } from "next";

interface ProductDetailsProps {
  params: {
    id: string;
  };
}

export default function ProductDetails({ params }: ProductDetailsProps) {
  return (
    <div>
      <Container params={params} />
    </div>
  );
}
