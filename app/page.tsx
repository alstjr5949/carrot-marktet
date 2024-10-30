export default function Home() {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center sm:bg-red-100 md:bg-green-100 lg:bg-blue-100 xl:bg-yellow-100 2xl:bg-purple-100">
      <a href="https://www.google.com">Google</a>
      <div className="w-full max-w-screen-sm bg-white shadow-md rounded-3xl p-4 flex flex-col gap-3">
        <input type="text" className="input" />
        <button className="btn">Submit</button>
      </div>
    </main>
  );
}
