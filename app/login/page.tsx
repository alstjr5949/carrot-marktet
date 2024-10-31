import FormInput from "@/components/form-input";
import FormButton from "@/components/form-button";
import SocialLogin from "@/components/social-login";

export default function Login() {
  return (
    <div className="flex flex-col gap-10 p-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Login to your account.</h2>
      </div>
      <form className="flex flex-col gap-3">
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
        <FormButton text="Login" loading={false} />
      </form>
      <div className="w-full h-px bg-neutral-500" />
      <SocialLogin />
    </div>
  );
}
