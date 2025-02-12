import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { MessageSquare, Mail, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const contactOptions = [
  {
    title: "WhatsApp",
    icon: MessageSquare,
    action: () => window.open(`https://wa.me/918271677915`, '_blank'),
    description: "Message us on WhatsApp for quick responses"
  },
  {
    title: "Email",
    icon: Mail,
    action: () => window.open(`mailto:workmail.somesh@gmail.com`, '_blank'),
    description: "Send us an email for detailed inquiries"
  },
  {
    title: "Call Us",
    icon: Phone,
    action: () => window.open(`tel:+919122900792`, '_blank'),
    description: "Speak directly with our team"
  }
];

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-blue-400">Contact Us</h1>
          <p className="text-blue-200/80 max-w-2xl mx-auto">
            Choose your preferred way to reach us. We're here to help with any questions about our furniture collection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ 
                opacity: 0, 
                x: index === 0 ? -100 : index === 1 ? 0 : 100,
                y: 50 
              }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ 
                delay: index * 0.2,
                duration: 0.8,
                type: "spring",
                bounce: 0.4
              }}
            >
              <Card 
                className="h-full cursor-pointer bg-blue-900/20 border-blue-500/20 backdrop-blur-sm overflow-hidden"
                onClick={option.action}
              >
                <motion.div
                  className="p-8 text-center"
                  whileHover={{ scale: 1.05, rotateY: 10 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15
                  }}
                >
                  <motion.div 
                    className="mx-auto w-16 h-16 mb-6 text-blue-400"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.7 }}
                  >
                    <option.icon className="w-full h-full" />
                  </motion.div>
                  <h2 className="text-2xl font-bold mb-4 text-blue-300">
                    {option.title}
                  </h2>
                  <p className="text-blue-200/80 mb-6">
                    {option.description}
                  </p>
                  <motion.div
                    className="text-blue-400 font-medium"
                    whileHover={{ scale: 1.1 }}
                  >
                    Contact Now →
                  </motion.div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-blue-400">Contact Form</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea {...field} rows={6} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}