import { useQuery } from "@tanstack/react-query";
import type { Product } from "@shared/schema";
import ProductGrid from "@/components/products/product-grid";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Box, Sparkles, Shield } from "lucide-react";

export default function Home() {
  const { data: products } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  return (
    <div className="bg-black text-white">
      <motion.section 
        className="relative h-[80vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.img
          src="https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4"
          alt="Hero"
          className="w-full h-full object-cover opacity-50"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.7, type: "spring" }}
            >
              Modern Furniture for
              <br />
              <span className="text-blue-400">Modern Living</span>
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-blue-200"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.9 }}
            >
              Discover our curated collection
            </motion.p>
            <Link href="/products">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  Shop Now
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-blue-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Products
        </motion.h2>
        {products && <ProductGrid products={products.slice(0, 6)} />}
      </section>

      <section className="bg-gradient-to-b from-blue-900/20 to-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Quality Design",
                description: "Carefully crafted furniture that lasts",
                icon: Box, 
              },
              {
                title: "Modern Style",
                description: "Contemporary pieces for every home",
                icon: Sparkles,
              },
              {
                title: "Expert Craftsmanship",
                description: "Built by skilled artisans",
                icon: Shield,
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center p-8 rounded-xl bg-blue-900/20 backdrop-blur-sm border border-blue-500/20"
                initial={{ 
                  opacity: 0, 
                  x: index === 0 ? -100 : index === 1 ? 0 : 100,
                  y: 50 
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  y: 0 
                }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.2,
                  duration: 0.8,
                  type: "spring"
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 10,
                  boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.1)",
                }}
              >
                <motion.div
                  className="mx-auto w-16 h-16 mb-6 text-blue-400"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.7 }}
                >
                  <feature.icon className="w-full h-full" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-blue-300">{feature.title}</h3>
                <p className="text-blue-200/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}