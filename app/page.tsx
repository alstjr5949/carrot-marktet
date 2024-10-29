export default function Home() {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center ">
      <div className="w-full max-w-screen-sm bg-white shadow-md rounded-3xl p-4 flex flex-col gap-2">
        <input
          className="w-full rounded-full h-10 bg-gray-200 p-5 outline-none ring ring-transparent focus:ring-blue-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow"
          type="text"
          placeholder="Search..."
        />
        <button className="bg-blue-500 bg-opacity-50 text-white p-2 rounded-full outline-none active:scale-95 transition-transform font-medium">
          Search
        </button>
      </div>
    </main>
  );
}
