import ProductCard from "./product-card";
import type { Product } from "@shared/schema";
import { motion } from "framer-motion";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = (index: number) => ({
    hidden: { 
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100 
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.2
      }
    }
  });

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          variants={itemVariants(index)}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </motion.div>
  );
}