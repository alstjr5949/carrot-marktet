import Link from "next/link";
import ChatIcon from "../icon/chat-icon";

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10 p-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">
          Fill in the form below to create your account.
        </h2>
      </div>
      <form className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <input
            className="w-full h-10 bg-transparent rounded-md p-2 focus:outline-none ring-1 focus:ring-2 ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400"
            type="text"
            placeholder="Username"
            required
          />
          <span className="text-red-500 font-medium">Input Error</span>
        </div>
        <button className="btn-primary py-2">Create Account</button>
      </form>
      <div className="w-full h-px bg-neutral-500" />
      <div>
        <Link
          className="btn-primary h-10 flex items-center justify-center gap-3"
          href="/sms"
        >
          <span>
            <ChatIcon />
          </span>
          <span>Sign up with SMS</span>
        </Link>
      </div>
    </div>
  );
}
