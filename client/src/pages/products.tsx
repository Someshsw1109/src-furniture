import { useQuery } from "@tanstack/react-query";
import ProductGrid from "@/components/products/product-grid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Product } from "@shared/schema";

const categories = ["All", "Living Room", "Bedroom", "Dining", "Office"];

export default function Products() {
  const { data: products } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>

      <Tabs defaultValue="All" className="mb-8">
        <TabsList>
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            {products && (
              <ProductGrid
                products={
                  category === "All"
                    ? products
                    : products.filter((p: Product) => p.category === category)
                }
              />
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}