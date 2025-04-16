import { cookies } from "next/headers";
import { createClient } from "@/lib/supabase/server";
import ProductCard from "@/components/cards/productCard";
import PaginationControls from "@/components/layout/paginationControls";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default async function ProductContainer({
  page = 1,
}: {
  page?: number;
}) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  // Calculate pagination range
  const PAGE_SIZE = 6;
  const from = (page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  // Fetch products with pagination and get total count
  const {
    data: products,
    error,
    count,
  } = await supabase
    .from("products")
    .select("*", { count: "exact" })
    .range(from, to);

  if (error) {
    console.error("Error fetching products:", error);
    return (
      <Alert variant="destructive" className="w-10/12 mx-auto lg:mt-8 mt-5">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Failed to load products. Please try again later.
        </AlertDescription>
      </Alert>
    );
  }

  if (!products || products.length === 0) {
    return (
      <Alert variant="destructive" className="w-10/12 mx-auto lg:mt-8 mt-5">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>No products found.</AlertDescription>
      </Alert>
    );
  }

  // Calculate total pages
  const totalPages = count ? Math.ceil(count / PAGE_SIZE) : 1;

  return (
    <>
      <section>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              productName={product.productName}
              productDescription={product.productDescription}
              productPrice={product.productPrice}
              productImage={product.productImageUrl}
            />
          ))}
        </div>
      </section>

      <div className="mt-8">
        <PaginationControls currentPage={page} totalPages={totalPages} />
      </div>
    </>
  );
}
