export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-8 bg-white">
      
      {/* Hero Section */}
      <div
        className="
          w-full max-w-full
          rounded-2xl
          p-12
          h-[800px]
          bg-hero bg-cover bg-center
          flex flex-col justify-center
        "
      >
        <h1 className="text-6xl font-bold mb-4 text-white drop-shadow-lg  text-center">
          WELCOME TO
        </h1>

        <h1 className="text-6xl font-bold mb-4 text-red-600 drop-shadow-lg  text-center">
          PT. SARANA TATA INDORAYA
        </h1>

       <div className="flex justify-center mt-6">
  <button
    className="
      px-8 py-3 
      bg-blue-800 
      text-white 
      font-semibold 
      rounded-full 
      shadow-md 
      hover:bg-blue-700 
      transition
    "
  >
    Contact Us
  </button>
</div>


      </div>


 {/* Card Section */}
      <section className="w-full max-w-6xl mt-16">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
             <img
        src="/images/apartment.jpg"
        alt="Service 1"
        className="w-full h-50 object-cover rounded-xl mb-4"
      />
            <h3 className="text-2xl font-semibold mb-3 text-blue-800">
              Service One
            </h3>
            <p className="text-gray-600 mb-6">
              Description of the first service your company offers. 
              This can be detailed or short depending on your needs.
            </p>

           <div className="flex items-center gap-3 mt-auto">
    <button
      className="
        bg-blue-800 
        text-white 
        py-2 px-5 
        rounded-full 
        font-semibold 
        hover:bg-blue-700 
        transition
      "
    >
      Learn More
    </button>

    <span className="text-blue-800 font-medium cursor-pointer hover:underline">
      $800 - $1200
    </span>
  </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <img
        src="/images/apartment.jpg"
        alt="Service 1"
        className="w-full h-50 object-cover rounded-xl mb-4"
      />
            <h3 className="text-2xl font-semibold mb-3 text-blue-800">
              Service Two
            </h3>
            <p className="text-gray-600">
              Another service explanation goes here. Adjust freely.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <img
        src="/images/apartment.jpg"
        alt="Service 1"
        className="w-full h-50 object-cover rounded-xl mb-4"
      />
            <h3 className="text-2xl font-semibold mb-3 text-blue-800">
              Service Three
            </h3>
            <p className="text-gray-600">
              Add supporting details about what your business provides.
            </p>
          </div>


        </div>
      </section>
      
    </main>
  );
}
