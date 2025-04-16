import ProductContainer from "@/components/landing_page/productContainer";
import ProductSkeleton from "@/components/layout/productSkeleton";
import { Suspense } from "react";

interface ProductsProps {
  searchParams?: { page?: string };
}

export default function Products({ searchParams = {} }: ProductsProps) {
  const currentPage = Number(searchParams.page) || 1;

  return (
    <section className="lg:w-9/12 w-11/12 mx-auto lg:py-10 py-6">
      <h1 className="text-center font-semibold text-primary lg:text-4xl lg:pb-10 pb-6">
        Featured Products
      </h1>

      <Suspense fallback={<ProductSkeleton />}>
        <ProductContainer page={currentPage} />
      </Suspense>
    </section>
  );
}
