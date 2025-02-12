import { Link } from "wouter";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const isMobile = useIsMobile();

  const NavLinks = () => (
    <>
      {navigation.map((item) => (
        <Link key={item.name} href={item.href}>
          <a className="text-blue-200/80 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
            {item.name}
          </a>
        </Link>
      ))}
    </>
  );

  return (
    <nav className="fixed w-full z-50 bg-black/80 border-b border-blue-500/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <a className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
                SRC Furniture
              </a>
            </Link>
          </div>

          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-blue-400">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-4 mt-4">
                  <NavLinks />
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <div className="hidden md:flex md:items-center md:space-x-4">
              <NavLinks />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}