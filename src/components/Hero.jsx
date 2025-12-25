import bg from "../assets/images/japan-1.jpeg"

// loaded bg & title is {prop}

export default function Hero( {title = "Become a React Developer", subtitle = "Get Ready For Job"} ) {
  return (
    <section
      className="w-full h-screen flex justify-c enter items-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 text-center text-white p-8 rounded">
        <h1 className="text-4xl font-bold">
          {title}
        </h1>

        <p className="mt-4 text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  )
}

