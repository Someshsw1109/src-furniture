import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import type { Product } from "@shared/schema";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Product() {
  const { id } = useParams();
  const { data: product } = useQuery<Product>({
    queryKey: [`/api/products/${id}`],
  });

  if (!product) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Carousel>
            <CarouselContent>
              {[product.image, ...product.gallery].map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-square">
                    <img
                      src={image}
                      alt={`${product.name} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-medium mb-6">${product.price}</p>
          <div className="prose max-w-none">
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}