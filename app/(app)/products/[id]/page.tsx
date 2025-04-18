import Container from "@/components/productDetails/container";

export default function ProductDetails({ params }: { params: { id: string } }) {
  return (
    <div>
      <Container params={params} />
    </div>
  );
}
