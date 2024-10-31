import Link from "next/link";
import ChatIcon from "../icon/chat-icon";
import FormInput from "../components/form-input";
import FormButton from "../components/form-button";

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
        <FormInput
          type="text"
          placeholder="Username"
          required={true}
          errors={[]}
        />
        <FormInput
          type="email"
          placeholder="Email"
          required={true}
          errors={[]}
        />
        <FormInput
          type="password"
          placeholder="Password"
          required={true}
          errors={[]}
        />
        <FormInput
          type="password"
          placeholder="Confirm Password"
          required={true}
          errors={[]}
        />
        <FormButton text="Create Account" loading={false} />
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
