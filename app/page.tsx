export default function Home() {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center dark:bg-gray-700">
      <div className="w-full max-w-screen-sm bg-white shadow-md rounded-3xl p-4 dark:bg-gray-600">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-sm text-gray-600 font-semibold -mb-1 dark:text-gray-300">
              In tansit
            </span>
            <span className="text-4xl font-bold dark:text-white">CoolBlue</span>
          </div>
          <div className="size-12 bg-orange-400 rounded-full" />
        </div>
        <div className="flex items-center my-2 gap-2">
          <span className="bg-green-400 text-sm text-white uppercase font-semibold px-2.5 py-1.5 rounded-full transition hover:bg-green-500 hover:scale-105 cursor-pointer">
            today
          </span>
          <span className="text-sm text-gray-600 font-semibold dark:text-gray-100">
            9:30-10:30
          </span>
        </div>
        <div className="relative">
          <div className="w-full h-2 bg-gray-200 rounded-full absolute" />
          <div className="w-2/3 h-2 bg-green-500 rounded-full absolute top-0 left-0" />
        </div>
        <div className="flex justify-between items-center mt-5 text-sm text-gray-600 dark:text-gray-300">
          <span>Expected</span>
          <span>Sorting center</span>
          <span>In transit</span>
          <span className="text-gray-400 dark:text-gray-500">Delivered</span>
        </div>
      </div>
    </main>
  );
}
