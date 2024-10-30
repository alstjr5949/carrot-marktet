export default function Home() {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center sm:bg-red-100 md:bg-green-100 lg:bg-blue-100 xl:bg-yellow-100 2xl:bg-purple-100">
      <div className="w-full max-w-screen-sm bg-white shadow-md rounded-3xl p-4 flex flex-col gap-3">
        {["Nico", "Me", "You", "Yourself", ""].map((person, index) => (
          <div key={index} className="flex items-center gap-4 p-2.5">
            <div className="size-10 rounded-full bg-gray-200" />
            <span className="text-lg font-medium empty:w-24 empty:h-5 empty:rounded-full empty:bg-gray-200 empty:animate-pulse">
              {person}
            </span>
            <div className="flex items-center justify-center size-6 rounded-full bg-yellow-400 relative">
              <span className="z-10">{index}</span>
              <div className="size-6 rounded-full bg-yellow-400 absolute animate-ping" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
