"use client"

import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function PaginationControls({
  currentPage,
  totalPages = 5, // You'll need to calculate this based on total count
}: {
  currentPage: number
  totalPages?: number
}) {
  const router = useRouter()
  const pathname = usePathname()

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return
    router.push(`${pathname}?page=${newPage}`)
  }

  return (
    <div className="flex justify-center gap-2">
      <Button variant="outline" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage <= 1}>
        Previous
      </Button>

      <div className="flex items-center gap-1 mx-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            size="sm"
            onClick={() => handlePageChange(page)}
            className="w-8 h-8"
          >
            {page}
          </Button>
        ))}
      </div>

      <Button variant="outline" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage >= totalPages}>
        Next
      </Button>
    </div>
  )
}
