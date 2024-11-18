"use client";

import FormInput from "@/components/form-input";
import FormButton from "@/components/form-button";
import SocialLogin from "@/components/social-login";
import { createAccount } from "./action";
import { useActionState } from "react";

export default function CreateAccount() {
  const [state, formAction] = useActionState(createAccount, null);
  return (
    <div className="flex flex-col gap-10 p-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">
          Fill in the form below to create your account.
        </h2>
      </div>
      <form action={formAction} className="flex flex-col gap-3">
        <FormInput
          type="text"
          placeholder="Username"
          required={true}
          name="username"
          errors={state?.errors?.username}
        />
        <FormInput
          type="email"
          placeholder="Email"
          required={true}
          name="email"
          errors={state?.errors?.email}
        />
        <FormInput
          type="password"
          placeholder="Password"
          required={true}
          name="password"
          errors={state?.errors?.password}
        />
        <FormInput
          type="password"
          placeholder="Confirm Password"
          required={true}
          name="confirmPassword"
          errors={state?.errors?.confirmPassword}
        />
        <FormButton text="Create Account" />
      </form>
      <div className="w-full h-px bg-neutral-500" />
      <SocialLogin />
    </div>
  );
}
