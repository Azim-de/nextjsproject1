export default function LoginPage() {
  return (
    <div className="h-screen flex">
      {/* Panel Kiri - Gambar */}
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/truck.png')" }}
      ></div>

      {/* Panel Kanan - Form Login */}
      <div className="w-1/2 flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-6 text-center text-black">Login</h1>
          
          <form className="flex flex-col gap-4 text-black">
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
