"use client";

import FormInput from "@/components/form-input";
import FormButton from "@/components/form-button";
import SocialLogin from "@/components/social-login";
import { handleFormSubmit } from "./actions";
import { useActionState } from "react";

export default function Login() {
  const [state, formAction] = useActionState(handleFormSubmit, null);

  return (
    <div className="flex flex-col gap-10 p-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Login to your account.</h2>
      </div>
      <form action={formAction} className="flex flex-col gap-3">
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
          errors={state?.errors ?? []}
          name="password"
        />
        <FormButton text="Login" />
      </form>
      <div className="w-full h-px bg-neutral-500" />
      <SocialLogin />
    </div>
  );
}
