import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full bg-slate-400 py-20 px-20 grid gap-10 lg:grid-cols-2 xl:grid-cols-3 min-h-screen xl:place-content-center">
      <div className="bg-white flex flex-col justify-between sm:hover:bg-pink-800 sm:bg-red-400 md:bg-teal-400 lg:bg-indigo-400 xl:bg-yellow-400 2xl:bg-pink-500 p-6 rounded-3xl shadow-xl">
        <span className="font-semibold text-2xl">Select Item</span>
        <ul>
          <div className="flex justify-between my-2 ">
            <span className="text-gray-500">Grey Chair</span>
            <span className="font-semibold">$19</span>
          </div>
          <div className="text-black flex justify-between my-2 ">
            <span className="text-gray-500">Grey Chair</span>
            <span className="font-semibold">$19</span>
          </div>
        </ul>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <button
          className="mt-5 bg-blue-500 text-white p-3
          text-center rounded-xl w-3/4 block mx-auto 
          hover:bg-teal-500 hover:text-black
          active:bg-yellow-500 focus:bg-red-500
          "
        >
          Checkout
        </button>
      </div>
      <div className="bg-white overflow-hidden rounded-3xl shadow-xl group">
        <div className="portrait:bg-indigo-400 landscape:bg-blue-500 p-6 pb-14 xl:pb-52">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-xs text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-zinc-300 rounded-full group-hover:bg-red-300 transition-colors" />
            <div className="flex flex-col items-center">
              <span className="text-xs text-gray-500">Spent</span>
              <span className="font-medium">$340</span>
            </div>
          </div>
          <div className="relative  flex flex-col items-center -mt-14 -mb-5">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">미국</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-3xl shadow-xl lg:col-span-2 xl:col-span-1">
        <div className="flex mb-5 justify-between items-center">
          <span>⬅️</span>
          <div className="space-x-3">
            <span>⭐️ 4.9</span>
            <span className="shadow-xl p-2 rounded-md">💖</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition" />
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
            </div>
            <div className="flex items-center space-x-5">
              <button className=" rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className=" rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <button className="bg-blue-500 py-2 px-8 text-center text-xs text-white rounded-lg">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
    // <div className="flex flex-col items-center justify-between min-h-screen p-6">
    //   <div className="flex flex-col items-center gap-2 my-auto *:font-medium">
    //     <span className="text-9xl">🥕</span>
    //     <h1 className="text-4xl">당근</h1>
    //     <h2 className="text-2xl">당근 마켓에 어서오세요!</h2>
    //   </div>
    //   <div className="flex flex-col items-center w-full gap-3">
    //     <Link href="/create-account" className="btn-primary py-2.5 text-lg">
    //       시작하기
    //     </Link>
    //     <div className="flex items-center gap-2">
    //       <span>이미 회원이신가요?</span>
    //       <Link href="/login" className="hover:underline underline-offset-4">
    //         로그인
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
}
