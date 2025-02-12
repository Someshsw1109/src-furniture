import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import type { Product } from "@shared/schema";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <motion.div
        whileHover={{ scale: 1.05, rotateY: 5 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
      >
        <Card className="cursor-pointer transform-gpu bg-blue-900/20 border-blue-500/20 overflow-hidden backdrop-blur-sm">
          <CardContent className="p-0">
            <motion.div 
              className="aspect-square overflow-hidden"
              whileHover={{ 
                rotateY: 10, 
                rotateX: 5,
                scale: 1.1
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300"
              />
            </motion.div>
            <div className="p-6 bg-gradient-to-b from-blue-900/40 to-black/60">
              <h3 className="text-xl font-semibold text-blue-200">{product.name}</h3>
              <p className="mt-2 text-sm text-blue-300/80">{product.category}</p>
              <motion.p 
                className="mt-3 text-2xl font-bold text-blue-400"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                ${product.price}
              </motion.p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}