import Container from "@/components/productDetails/container";

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
