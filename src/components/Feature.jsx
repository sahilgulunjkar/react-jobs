export default function Feature() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <h2 className="text-2xl font-bold mb-8">
          Why Use Our Platform?
        </h2>

        <div className="grid gap-10 md:grid-cols-2">

          {/* Feature 1 */}
          <div className="p-15 border rounded-lg">
            <h3 className="text-lg font-bold mb-2">
              Easy Job Search
            </h3>
            <p className="text-gray-600">
              Find jobs quickly with simple and clean listings.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-15 border rounded-lg">
            <h3 className="text-lg font-bold mb-2">
              Verified Companies
            </h3>
            <p className="text-gray-600">
              All companies are verified for better trust.
            </p>
          </div>


        </div>

      </div>
    </section>
  )
}
