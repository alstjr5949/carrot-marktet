export default function Home() {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center sm:bg-red-100 md:bg-green-100 lg:bg-blue-100 xl:bg-yellow-100 2xl:bg-purple-100">
      <div className="w-full max-w-screen-sm bg-white shadow-md rounded-3xl p-4 flex flex-col gap-2 md:flex-row ring ring-transparent transition-shadow *:outline-none has-[:invalid]:ring-red-500">
        <input
          className="w-full rounded-full h-10 bg-gray-200 p-5 ring ring-transparent focus:ring-blue-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow invalid:focus:ring-red-500 peer"
          type="text"
          placeholder="Search here..."
          required
        />
        <span className="text-red-500 text-sm hidden peer-invalid:block">
          Search is required.
        </span>
        <button className="bg-blue-500 text-white p-2 rounded-full active:scale-95 transition-transform font-medium md:px-4 peer-invalid:bg-red-500">
          Search
        </button>
      </div>
    </main>
  );
}
