import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-black/80 border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-blue-400 tracking-wider uppercase">
              About Us
            </h3>
            <p className="mt-4 text-base text-blue-200/80">
              SRC Furniture crafts quality pieces that blend style and comfort for your home.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-blue-400 tracking-wider uppercase">
              Navigation
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/products">
                  <a className="text-base text-blue-200/80 hover:text-blue-400">
                    Products
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-base text-blue-200/80 hover:text-blue-400">
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-base text-blue-200/80 hover:text-blue-400">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-blue-400 tracking-wider uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="text-base text-blue-200/80">
                1234 Furniture Lane
              </li>
              <li className="text-base text-blue-200/80">
                Los Angeles, CA 90012
              </li>
              <li className="text-base text-blue-200/80">
                (555) 123-4567
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-blue-400 tracking-wider uppercase">
              Hours
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="text-base text-blue-200/80">
                Mon-Fri: 9am - 6pm
              </li>
              <li className="text-base text-blue-200/80">
                Saturday: 10am - 4pm
              </li>
              <li className="text-base text-blue-200/80">
                Sunday: Closed
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-blue-500/20 pt-8">
          <p className="text-base text-blue-200/60 text-center">
            © 2024 SRC Furniture. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}