import FormInput from "@/components/form-input";
import FormButton from "@/components/form-button";
import SocialLogin from "@/components/social-login";

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
          name="username"
        />
        <FormInput
          type="email"
          placeholder="Email"
          required={true}
          errors={[]}
          name="email"
        />
        <FormInput
          type="password"
          placeholder="Password"
          required={true}
          errors={[]}
          name="password"
        />
        <FormInput
          type="password"
          placeholder="Confirm Password"
          required={true}
          errors={[]}
          name="confirmPassword"
        />
        <FormButton text="Create Account" />
      </form>
      <div className="w-full h-px bg-neutral-500" />
      <SocialLogin />
    </div>
  );
}
