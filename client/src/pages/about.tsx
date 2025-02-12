export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1 className="text-4xl font-bold mb-6">About SRC Furniture</h1>
          <div className="prose max-w-none">
            <p>
              Since our founding, SRC Furniture has been dedicated to creating
              exceptional furniture that combines modern design with timeless
              craftsmanship. Our pieces are thoughtfully designed and expertly
              crafted to enhance your living spaces.
            </p>
            <p>
              We believe that furniture should not only be beautiful but also
              functional and durable. That's why we use only the highest quality
              materials and work with skilled artisans who share our passion for
              excellence.
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            alt="Our workshop"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="text-center">
          <img
            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
            alt="Our values"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Our Values</h3>
          <p className="text-gray-600">
            Quality, innovation, and customer satisfaction drive everything we do.
          </p>
        </div>
        <div className="text-center">
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
            alt="Our process"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Our Process</h3>
          <p className="text-gray-600">
            Each piece is carefully designed and crafted in our workshop.
          </p>
        </div>
        <div className="text-center">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
            alt="Our commitment"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Our Commitment</h3>
          <p className="text-gray-600">
            We're dedicated to creating furniture that lasts for generations.
          </p>
        </div>
      </div>
    </div>
  );
}