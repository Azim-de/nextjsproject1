export default function AboutPage() {
  return (
    <div
      className="
       h-[900px]
        px-8 py-10  
        bg-cover bg-center bg-no-repeat
        flex flex-col
      "
      style={{ backgroundImage: "url('/images/truck.png')" }}
    >
      <h1 className="text-3xl font-bold mb-4 text-white drop-shadow-lg">
        About Us
      </h1>

      <p className="text-gray-100 text-lg leading-relaxed max-w-2xl drop-shadow">
        Welcome to the About page. You can describe your website, your mission,
        or anything about yourself here.
      </p>
    </div>
  );
}
